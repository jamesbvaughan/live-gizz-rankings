"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { shows } from "../drizzle/schema";
import { logCreate } from "../lib/activityLogger";
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

  const newShow = await db.transaction(async (tx) => {
    const [show] = await tx
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

    await logCreate("show", show.id, show, userId, tx);

    return show;
  });

  console.log(`New show added: ${location} ${date} by user ${userId}`);

  revalidatePath("/shows");

  const showPath = getShowPath(newShow);
  redirect(showPath);
}
