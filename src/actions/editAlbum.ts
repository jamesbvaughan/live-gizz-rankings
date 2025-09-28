"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { albums } from "../drizzle/schema";
import { logUpdate } from "../lib/activityLogger";
import { getAlbumPath } from "../utils";

const editAlbumSchema = zfd.formData({
  albumId: zfd.text(),
  title: zfd.text(),
  slug: zfd.text(),
  releaseDate: zfd.text(),
  imageUrl: zfd.text(),
  bandcampAlbumId: zfd.text(),
});

export async function editAlbum(
  _initialState: unknown,
  formData: FormData,
): Promise<void> {
  const userId = await ensureAdmin();

  const { albumId, title, slug, releaseDate, imageUrl, bandcampAlbumId } =
    editAlbumSchema.parse(formData);

  const existingAlbum = await db.query.albums.findFirst({
    where: eq(albums.id, albumId),
  });
  if (!existingAlbum) {
    throw new Error("Album not found");
  }

  const updatedAlbum = await db.transaction(async (tx) => {
    const [album] = await tx
      .update(albums)
      .set({
        title,
        slug,
        releaseDate,
        imageUrl,
        bandcampAlbumId,
      })
      .where(eq(albums.id, albumId))
      .returning();

    await logUpdate("album", albumId, existingAlbum, album, userId, tx);

    return album;
  });

  console.log(`Album updated: ${title} by user ${userId}`);

  const albumPath = getAlbumPath(updatedAlbum);

  revalidatePath("/albums");
  revalidatePath(albumPath);

  redirect(albumPath);
}
