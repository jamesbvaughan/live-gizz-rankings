"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { isAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { albums } from "../drizzle/schema";
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
  const { userId } = await auth();
  if (!userId) throw new Error("User not found");

  const adminStatus = await isAdmin();
  if (!adminStatus) {
    throw new Error("Unauthorized: Admin access required");
  }

  const { albumId, title, slug, releaseDate, imageUrl, bandcampAlbumId } =
    editAlbumSchema.parse(formData);

  const [updatedAlbum] = await db
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

  console.log(`Album updated: ${title} by user ${userId}`);

  const albumPath = getAlbumPath(updatedAlbum);

  revalidatePath("/albums");
  revalidatePath(albumPath);

  redirect(albumPath);
}
