"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { getPerformancePath } from "../dbUtils";
import { db } from "../drizzle/db";
import { performances } from "../drizzle/schema";

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

  const [updatedPerformance] = await db
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

  console.log(`Performance updated by user ${userId}`);

  const performancePath = await getPerformancePath(updatedPerformance);

  revalidatePath("/performances");
  revalidatePath("/songs");
  revalidatePath("/shows");
  revalidatePath(performancePath);

  redirect(performancePath);
}
