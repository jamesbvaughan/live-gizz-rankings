"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
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
  const userId = await ensureAdmin();

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
