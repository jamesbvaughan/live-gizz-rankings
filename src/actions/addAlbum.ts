"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { forbidden, redirect, unauthorized } from "next/navigation";
import { zfd } from "zod-form-data";

import { isAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { albums } from "../drizzle/schema";
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
  const { userId } = await auth();
  if (!userId) {
    unauthorized();
  }

  const adminStatus = await isAdmin();
  if (!adminStatus) {
    forbidden();
  }

  const { title, slug, releaseDate, imageUrl, bandcampAlbumId } =
    addAlbumSchema.parse(formData);

  const [newAlbum] = await db
    .insert(albums)
    .values({
      title,
      slug,
      releaseDate,
      imageUrl,
      bandcampAlbumId,
    })
    .returning();

  console.log(`New album added: ${title} by user ${userId}`);

  revalidatePath("/albums");

  const albumPath = getAlbumPath(newAlbum);
  redirect(albumPath);
}
