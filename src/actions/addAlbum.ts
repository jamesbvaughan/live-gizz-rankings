"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { albums } from "../drizzle/schema";
import { logCreate } from "../lib/activityLogger";
import { getAlbumPath } from "../utils";

const addAlbumSchema = zfd.formData({
  title: zfd.text(),
  slug: zfd.text(),
  releaseDate: zfd.text(),
  imageUrl: zfd.text(),
  bandcampAlbumId: zfd.text(),
});

export async function addAlbum(
  _initialState: unknown,
  formData: FormData,
): Promise<void> {
  const userId = await ensureAdmin();

  const { title, slug, releaseDate, imageUrl, bandcampAlbumId } =
    addAlbumSchema.parse(formData);

  const newAlbum = await db.transaction(async (tx) => {
    const [album] = await tx
      .insert(albums)
      .values({
        title,
        slug,
        releaseDate,
        imageUrl,
        bandcampAlbumId,
      })
      .returning();

    await logCreate("album", album.id, album, userId, tx);

    return album;
  });

  console.log(`New album added: ${title} by user ${userId}`);

  revalidatePath("/albums");

  const albumPath = getAlbumPath(newAlbum);
  redirect(albumPath);
}
