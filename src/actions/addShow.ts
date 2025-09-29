"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureSignedIn } from "../auth/utils";
import { db } from "../drizzle/db";
import { shows } from "../drizzle/schema";
import { logCreate } from "../lib/activityLogger";
import { sendEditNotification } from "../lib/emailNotification";
import { getShowPath } from "../utils";
import { eq } from "drizzle-orm";
import type { ActionState } from "@/lib/actionState";

const addShowSchema = zfd.formData({
  slug: zfd.text(),
  location: zfd.text(),
  date: zfd.text(),
  bandcampAlbumId: zfd.text().optional(),
  youtubeVideoId: zfd.text().optional(),
  imageUrl: zfd.text(),
});

export async function addShow(
  _initialState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const userId = await ensureSignedIn();

  const { slug, location, date, bandcampAlbumId, youtubeVideoId, imageUrl } =
    addShowSchema.parse(formData);

  const existingShowWithSlug = await db.query.shows.findFirst({
    where: eq(shows.slug, slug),
  });
  if (existingShowWithSlug) {
    return {
      errorMessage: `A show with the slug "${slug}" already exists.`,
      formData,
    };
  }

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

  await sendEditNotification({
    entityType: "show",
    action: "create",
    entityId: newShow.id,
    details: `${location} - ${date}`,
  });

  revalidatePath("/shows");

  const showPath = getShowPath(newShow);
  redirect(showPath);
}
