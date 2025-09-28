"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { forbidden, redirect, unauthorized } from "next/navigation";
import { zfd } from "zod-form-data";

import { isAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { shows } from "../drizzle/schema";
import { getShowPath } from "../utils";

const editShowSchema = zfd.formData({
  showId: zfd.text(),
  slug: zfd.text(),
  location: zfd.text(),
  date: zfd.text(),
  bandcampAlbumId: zfd.text().optional(),
  youtubeVideoId: zfd.text().optional(),
  imageUrl: zfd.text(),
});

export async function editShow(
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
    showId,
    slug,
    location,
    date,
    bandcampAlbumId,
    youtubeVideoId,
    imageUrl,
  } = editShowSchema.parse(formData);

  const [updatedShow] = await db
    .update(shows)
    .set({
      slug,
      location,
      date,
      bandcampAlbumId: bandcampAlbumId || null,
      youtubeVideoId: youtubeVideoId || null,
      imageUrl,
    })
    .where(eq(shows.id, showId))
    .returning();

  console.log(`Show updated: ${location} ${date} by user ${userId}`);

  const showPath = getShowPath(updatedShow);

  revalidatePath("/shows");
  revalidatePath(showPath);

  redirect(showPath);
}
