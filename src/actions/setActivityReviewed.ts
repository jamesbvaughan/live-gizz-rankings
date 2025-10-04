"use server";

import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { ensureAdmin } from "@/auth/utils";
import { db } from "@/drizzle/db";
import { activityLogReviews } from "@/drizzle/schema";

export async function setActivityReviewed({
  activityLogId,
  isReviewed,
}: {
  activityLogId: string;
  isReviewed: boolean;
}): Promise<void> {
  const userId = await ensureAdmin();

  // Check if review already exists
  const existingReview = await db.query.activityLogReviews.findFirst({
    where: and(
      eq(activityLogReviews.activityLogId, activityLogId),
      eq(activityLogReviews.userId, userId),
    ),
  });

  if (isReviewed && !existingReview) {
    // Create the review (mark as reviewed)
    await db.insert(activityLogReviews).values({
      activityLogId,
      userId,
    });
    console.log(`User ${userId} marked activity ${activityLogId} as reviewed`);
  } else if (!isReviewed && existingReview) {
    // Delete the review (unmark as reviewed)
    await db
      .delete(activityLogReviews)
      .where(eq(activityLogReviews.id, existingReview.id));
    console.log(
      `User ${userId} unmarked activity ${activityLogId} as reviewed`,
    );
  }

  revalidatePath("/activity");
}
