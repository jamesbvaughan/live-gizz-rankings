"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { forbidden, redirect, unauthorized } from "next/navigation";
import { zfd } from "zod-form-data";

import { isAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { songs } from "../drizzle/schema";
import { getSongPath } from "../utils";

const editSongSchema = zfd.formData({
  songId: zfd.text(),
  title: zfd.text(),
  slug: zfd.text(),
  albumId: zfd.text(),
  albumPosition: zfd.numeric(),
});

export async function editSong(
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

  const { songId, title, slug, albumId, albumPosition } =
    editSongSchema.parse(formData);

  const [updatedSong] = await db
    .update(songs)
    .set({
      title,
      slug,
      albumId,
      albumPosition,
    })
    .where(eq(songs.id, songId))
    .returning();

  console.log(`Song updated: ${title} by user ${userId}`);

  const songPath = getSongPath(updatedSong);

  revalidatePath("/songs");
  revalidatePath("/albums");
  revalidatePath(songPath);

  redirect(songPath);
}
