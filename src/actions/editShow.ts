"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { shows } from "../drizzle/schema";
import { logUpdate } from "../lib/activityLogger";
import { getShowPath } from "../utils";
import type { ActionState } from "@/lib/actionState";

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
  _initialState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const userId = await ensureAdmin();

  const {
    showId,
    slug,
    location,
    date,
    bandcampAlbumId,
    youtubeVideoId,
    imageUrl,
  } = editShowSchema.parse(formData);

  const existingShow = await db.query.shows.findFirst({
    where: eq(shows.id, showId),
  });
  if (!existingShow) {
    return {
      errorMessage: "Show not found",
      formData,
    };
  }

  // Check if slug is already used by a different show
  const existingShowWithSlug = await db.query.shows.findFirst({
    where: eq(shows.slug, slug),
  });
  if (existingShowWithSlug && existingShowWithSlug.id !== showId) {
    return {
      errorMessage: `A show with the slug "${slug}" already exists.`,
      formData,
    };
  }

  const updatedShow = await db.transaction(async (tx) => {
    const [show] = await tx
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

    await logUpdate("show", showId, existingShow, show, userId, tx);

    return show;
  });

  console.log(`Show updated: ${location} ${date} by user ${userId}`);

  const showPath = getShowPath(updatedShow);

  revalidatePath("/shows");
  revalidatePath(showPath);

  redirect(showPath);
}
