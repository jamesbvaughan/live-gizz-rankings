import { db } from "@/drizzle/db";
import { votes } from "@/drizzle/schema";
import { seedPerformances, seedSongs } from "@/drizzle/seeds";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

function generateAllPotentialPairs() {
  const pairs: Record<string, [string, string][]> = {};

  for (const song of Object.values(seedSongs)) {
    pairs[song.id] = [];
    const performances = Object.values(seedPerformances).filter(
      (performance) => performance.songId === song.id,
    );
    for (let i = 0; i < performances.length; i++) {
      for (let j = i + 1; j < performances.length; j++) {
        pairs[song.id].push([performances[i].id, performances[j].id]);
      }
    }
  }

  return pairs;
}

async function getUserPairs() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not found");
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

export async function getRandomPairForCurrentUser() {
  const allPairs = generateAllPotentialPairs();
  const userPairs = await getUserPairs();

  const unvotedPairs: [string, string][] = [];

  for (const songId of Object.keys(allPairs)) {
    for (const pair of allPairs[songId]) {
      const userHasVoted = userPairs.some(
        (userPair) =>
          (userPair.performance1Id === pair[0] &&
            userPair.performance2Id === pair[1]) ||
          (userPair.performance1Id === pair[1] &&
            userPair.performance2Id === pair[0]),
      );
      if (!userHasVoted) {
        unvotedPairs.push(pair);
      }
    }
  }

  if (unvotedPairs.length === 0) {
    return null;
  }

  const pairIndex = Math.floor(Math.random() * unvotedPairs.length);
  return unvotedPairs[pairIndex]!;
}
