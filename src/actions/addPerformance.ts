"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { getPerformancePath } from "../dbUtils";
import { db } from "../drizzle/db";
import { performances } from "../drizzle/schema";

const addPerformanceSchema = zfd.formData({
  songId: zfd.text(),
  showId: zfd.text(),
  showPosition: zfd.numeric(),
  bandcampTrackId: zfd.text().optional(),
  youtubeVideoId: zfd.text().optional(),
  youtubeVideoStartTime: zfd.numeric().optional(),
});

export async function addPerformance(
  _initialState: unknown,
  formData: FormData,
): Promise<void> {
  const userId = await ensureAdmin();

  const {
    songId,
    showId,
    showPosition,
    bandcampTrackId,
    youtubeVideoId,
    youtubeVideoStartTime,
  } = addPerformanceSchema.parse(formData);

  const [newPerformance] = await db
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

  console.log(`New performance added by user ${userId}`);

  revalidatePath("/performances");
  revalidatePath(`/songs/${songId}`);
  revalidatePath(`/shows/${showId}`);

  const performancePath = await getPerformancePath(newPerformance);
  redirect(performancePath);
}
