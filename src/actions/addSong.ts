"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
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
  const userId = await ensureAdmin();

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
