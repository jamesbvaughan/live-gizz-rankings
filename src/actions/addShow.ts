"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { forbidden, redirect, unauthorized } from "next/navigation";
import { zfd } from "zod-form-data";

import { isAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { shows } from "../drizzle/schema";
import { getShowPath } from "../utils";

const addShowSchema = zfd.formData({
  slug: zfd.text(),
  location: zfd.text(),
  date: zfd.text(),
  bandcampAlbumId: zfd.text().optional(),
  youtubeVideoId: zfd.text().optional(),
  imageUrl: zfd.text(),
});

export async function addShow(
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

  const { slug, location, date, bandcampAlbumId, youtubeVideoId, imageUrl } =
    addShowSchema.parse(formData);

  const [newShow] = await db
    .insert(shows)
    .values({
      slug,
      location,
      date,
      bandcampAlbumId: bandcampAlbumId || null,
      youtubeVideoId: youtubeVideoId || null,
      imageUrl,
    })
    .returning();

  console.log(`New show added: ${location} ${date} by user ${userId}`);

  revalidatePath("/shows");

  const showPath = getShowPath(newShow);
  redirect(showPath);
}
