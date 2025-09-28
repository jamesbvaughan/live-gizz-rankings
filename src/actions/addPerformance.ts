"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { forbidden, redirect, unauthorized } from "next/navigation";
import { zfd } from "zod-form-data";

import { isAdmin } from "../auth/utils";
import { getPerformancePath } from "../dbUtils";
import { db } from "../drizzle/db";
import { performances } from "../drizzle/schema";

const addPerformanceSchema = zfd.formData({
  songId: zfd.text(),
  showId: zfd.text(),
  showPosition: zfd.numeric(),
  spotifyTrackId: zfd.text().optional(),
  bandcampTrackId: zfd.text().optional(),
  youtubeVideoId: zfd.text().optional(),
  youtubeVideoStartTime: zfd.numeric().optional(),
});

export async function addPerformance(
  _initialState: unknown,
  formData: FormData,
): Promise<void> {
  const { userId } = await auth();
  if (!userId) {
    unauthorized();
  }

  const adminStatus = await isAdmin();
  if (!adminStatus) {
    forbidden();
  }

  const {
    songId,
    showId,
    showPosition,
    spotifyTrackId,
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
      spotifyTrackId: spotifyTrackId || null,
      bandcampTrackId: bandcampTrackId || null,
      youtubeVideoId: youtubeVideoId || null,
      youtubeVideoStartTime: youtubeVideoStartTime || null,
    })
    .returning();

  console.log(`New performance added by user ${userId}`);

  revalidatePath("/performances");
  revalidatePath("/songs");
  revalidatePath("/shows");

  const performancePath = await getPerformancePath(newPerformance);
  redirect(performancePath);
}
