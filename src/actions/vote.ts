"use server";

import { auth } from "@clerk/nextjs/server";
import { and, eq, or } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { zfd } from "zod-form-data";

import { db } from "../drizzle/db";
import { performances, votes } from "../drizzle/schema";
import {
  getAlbumPath,
  getPerformanceTitle,
  getShowById,
  getShowPath,
  getSongById,
  getSongPath,
} from "../utils";

const voteSchema = zfd.formData({
  performanceIdA: zfd.text(),
  performanceIdB: zfd.text(),
  winnerId: zfd.text(),
});

async function getPerformance(performanceId: string) {
  const performance = await db.query.performances.findFirst({
    where: eq(performances.id, performanceId),
    with: { song: true },
  });
  if (!performance) {
    throw new Error("Performance not found");
  }

  return performance;
}

export async function vote(
  _initialState: unknown,
  formData: FormData,
): Promise<void> {
  const { userId } = await auth();
  if (!userId) throw new Error("User not found");

  revalidatePath("/rank");

  const { performanceIdA, performanceIdB, winnerId } =
    voteSchema.parse(formData);

  const existingVote = await db.query.votes.findFirst({
    where: and(
      eq(votes.voterId, userId),
      or(
        and(
          eq(votes.performance1Id, performanceIdA),
          eq(votes.performance2Id, performanceIdB),
        ),
        and(
          eq(votes.performance1Id, performanceIdB),
          eq(votes.performance2Id, performanceIdA),
        ),
      ),
    ),
  });
  if (existingVote) {
    console.log(
      `Skipping vote from user ${userId} because they've already voted on these performances`,
    );
    return;
  }

  const performanceA = await getPerformance(performanceIdA);
  const performanceB = await getPerformance(performanceIdB);
  const winner = await getPerformance(winnerId);

  if (performanceA.songId !== performanceB.songId) {
    throw new Error("Performances must be for the same song");
  }

  const scoreA = performanceA.id === winner.id ? 1 : 0;
  const scoreB = performanceB.id === winner.id ? 1 : 0;

  const kFactor = 32;

  const expectedA =
    1 /
    (1 + Math.pow(10, (performanceB.eloRating - performanceA.eloRating) / 400));
  const expectedB =
    1 /
    (1 + Math.pow(10, (performanceA.eloRating - performanceB.eloRating) / 400));

  const newRatingA = performanceA.eloRating + kFactor * (scoreA - expectedA);
  const newRatingB = performanceB.eloRating + kFactor * (scoreB - expectedB);

  await db.transaction(async (tx) => {
    await tx
      .update(performances)
      .set({
        eloRating: newRatingA,
      })
      .where(eq(performances.id, performanceA.id));
    await tx
      .update(performances)
      .set({
        eloRating: newRatingB,
      })
      .where(eq(performances.id, performanceB.id));
    await tx.insert(votes).values({
      performance1Id: performanceA.id,
      performance2Id: performanceB.id,
      winnerId: winner.id,
      voterId: userId,
    });
  });

  const song = getSongById(performanceA.songId)!;
  const songPath = getSongPath(performanceA.songId);
  revalidatePath(songPath);

  const showAPath = getShowPath(performanceA.showId);
  revalidatePath(showAPath);

  const showBPath = getShowPath(performanceB.showId);
  revalidatePath(showBPath);

  const albumPath = getAlbumPath(song.albumId);
  revalidatePath(albumPath);

  revalidatePath(`/songs`);
  revalidatePath(`/votes`);

  const show = getShowById(winner.showId)!;
  const performanceTitle = getPerformanceTitle(song, show);

  console.log(`New vote: User ${userId} voted for ${performanceTitle}!`);
}
