"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { getPerformancePath } from "../dbUtils";
import { db } from "../drizzle/db";
import { performances } from "../drizzle/schema";
import { logUpdate } from "../lib/activityLogger";

const editPerformanceSchema = zfd.formData({
  performanceId: zfd.text(),
  songId: zfd.text(),
  showId: zfd.text(),
  showPosition: zfd.numeric(),
  bandcampTrackId: zfd.text().optional(),
  youtubeVideoId: zfd.text().optional(),
  youtubeVideoStartTime: zfd.numeric().optional(),
});

export async function editPerformance(
  _initialState: unknown,
  formData: FormData,
): Promise<void> {
  const userId = await ensureAdmin();

  const {
    performanceId,
    songId,
    showId,
    showPosition,
    bandcampTrackId,
    youtubeVideoId,
    youtubeVideoStartTime,
  } = editPerformanceSchema.parse(formData);

  const existingPerformance = await db.query.performances.findFirst({
    where: eq(performances.id, performanceId),
  });
  if (!existingPerformance) {
    throw new Error("Performance not found");
  }

  const updatedPerformance = await db.transaction(async (tx) => {
    const [performance] = await tx
      .update(performances)
      .set({
        songId,
        showId,
        showPosition,
        bandcampTrackId: bandcampTrackId || null,
        youtubeVideoId: youtubeVideoId || null,
        youtubeVideoStartTime: youtubeVideoStartTime || null,
      })
      .where(eq(performances.id, performanceId))
      .returning();

    await logUpdate(
      "performance",
      performanceId,
      existingPerformance,
      performance,
      userId,
      tx,
    );

    return performance;
  });

  console.log(`Performance updated by user ${userId}`);

  const performancePath = await getPerformancePath(updatedPerformance);

  revalidatePath("/performances");
  revalidatePath(`/songs/${songId}`);
  revalidatePath(`/shows/${showId}`);
  revalidatePath(performancePath);

  redirect(performancePath);
}
