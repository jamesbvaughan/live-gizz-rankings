"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { forbidden, redirect, unauthorized } from "next/navigation";
import { zfd } from "zod-form-data";

import { isAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { songs } from "../drizzle/schema";
import { getSongPath } from "../utils";

const addSongSchema = zfd.formData({
  title: zfd.text(),
  slug: zfd.text(),
  albumId: zfd.text(),
  albumPosition: zfd.numeric(),
});

export async function addSong(
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

  const { title, slug, albumId, albumPosition } = addSongSchema.parse(formData);

  const [newSong] = await db
    .insert(songs)
    .values({
      title,
      slug,
      albumId,
      albumPosition,
    })
    .returning();

  console.log(`New song added: ${title} by user ${userId}`);

  revalidatePath("/songs");
  revalidatePath("/albums");

  const songPath = getSongPath(newSong);
  redirect(songPath);
}
