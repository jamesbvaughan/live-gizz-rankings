import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { unauthorized } from "next/navigation";

import { db } from "@/drizzle/db";
import { votes } from "@/drizzle/schema";

async function generateAllPotentialPairs() {
  const pairs: Record<string, [string, string][]> = {};
  const allSongs = await db.query.songs.findMany();
  const allPerformances = await db.query.performances.findMany();

  for (const song of allSongs) {
    pairs[song.id] = [];
    const performances = allPerformances.filter(
      (performance) => performance.songId === song.id,
    );
    for (let i = 0; i < performances.length; i++) {
      for (let j = i + 1; j < performances.length; j++) {
        const flip = Math.random() < 0.5;
        const firstIndex = flip ? i : j;
        const secondIndex = flip ? j : i;
        pairs[song.id].push([
          performances[firstIndex].id,
          performances[secondIndex].id,
        ]);
      }
    }
  }

  return pairs;
}

async function getUserPairs() {
  const { userId } = await auth();
  if (!userId) {
    unauthorized();
  }

  const userPairs = await db.query.votes.findMany({
    where: eq(votes.voterId, userId),
    columns: {
      performance1Id: true,
      performance2Id: true,
    },
  });

  return userPairs;
}

/**
 * Whether or not to filter to pairs that the user has not already voted on.
 *
 * This is a debug flag that's useful in development if your dev user has voted
 * on all the pairs already.
 */
const SHOW_ALL_PAIRS = false;

/**
 * Every potential pair of performances.
 */
export const allPairs = await generateAllPotentialPairs();

export async function getRandomPairForCurrentUser() {
  // Get all of the pairs of performances that the current user has already
  // voted on.
  const userPairs = await getUserPairs();

  // Build up a record of every pair of performances that the current user has
  // not already voted on.
  const unvotedPairs: Record<string, [string, string][]> = {};
  for (const songId of Object.keys(allPairs)) {
    for (const pair of allPairs[songId]) {
      const userHasVoted = userPairs.some(
        (userPair) =>
          (userPair.performance1Id === pair[0] &&
            userPair.performance2Id === pair[1]) ||
          (userPair.performance1Id === pair[1] &&
            userPair.performance2Id === pair[0]),
      );
      if (!userHasVoted || SHOW_ALL_PAIRS) {
        unvotedPairs[songId] ??= [];
        unvotedPairs[songId].push(pair);
      }
    }
  }

  const songIds = Object.keys(unvotedPairs);

  if (songIds.length === 0) {
    return null;
  }

  // Choose a random song for the user to vote on.
  const songId = songIds[Math.floor(Math.random() * songIds.length)];
  const unvotedPairsForSong = unvotedPairs[songId];

  // Choose a random pair of performances of that song for the user to vote on.
  const pairIndex = Math.floor(Math.random() * unvotedPairsForSong.length);
  return unvotedPairsForSong[pairIndex];
}
