"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { getPerformancePath } from "../dbUtils";
import { db } from "../drizzle/db";
import { performances } from "../drizzle/schema";
import { logCreate } from "../lib/activityLogger";
import { eq, and } from "drizzle-orm";
import type { ActionState } from "@/lib/actionState";

const addPerformanceSchema = zfd.formData({
  songId: zfd.text(),
  showId: zfd.text(),
  showPosition: zfd.numeric(),
  bandcampTrackId: zfd.text().optional(),
  youtubeVideoId: zfd.text().optional(),
  youtubeVideoStartTime: zfd.numeric().optional(),
});

export async function addPerformance(
  _initialState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const userId = await ensureAdmin();

  const {
    songId,
    showId,
    showPosition,
    bandcampTrackId,
    youtubeVideoId,
    youtubeVideoStartTime,
  } = addPerformanceSchema.parse(formData);

  // Check if performance already exists for this song and show
  const existingPerformance = await db.query.performances.findFirst({
    where: and(
      eq(performances.songId, songId),
      eq(performances.showId, showId),
    ),
  });
  if (existingPerformance) {
    return {
      errorMessage: "A performance for this song and show already exists.",
      formData,
    };
  }

  const newPerformance = await db.transaction(async (tx) => {
    const [performance] = await tx
      .insert(performances)
      .values({
        songId,
        showId,
        showPosition,
        bandcampTrackId: bandcampTrackId || null,
        youtubeVideoId: youtubeVideoId || null,
        youtubeVideoStartTime: youtubeVideoStartTime || null,
      })
      .returning();

    await logCreate("performance", performance.id, performance, userId, tx);

    return performance;
  });

  console.log(`New performance added by user ${userId}`);

  revalidatePath("/performances");
  revalidatePath(`/songs/${songId}`);
  revalidatePath(`/shows/${showId}`);

  const performancePath = await getPerformancePath(newPerformance);
  redirect(performancePath);
}
