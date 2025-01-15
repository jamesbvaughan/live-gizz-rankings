// Print out duplicate votes from users
//
// I wrote this to help debug what I believed to be a bug that was allowing
// users to vote more than once for a given pair of performances.
//
// It turned out that it was actually a bug in the way that I was counting the
// total number of pairs of performances available to vote on
//
// I'm keeping this script around for my future reference.

import { db } from "@/drizzle/db";

console.log("Fetching votes...");

const allVotes = await db.query.votes.findMany();

console.log(`Found ${allVotes.length} votes`);

console.log("Counting duplicates for each user...");

const counts: Record<string, number> = {};
for (const vote of allVotes) {
  const firstPerformanceId =
    vote.performance1Id > vote.performance2Id
      ? vote.performance1Id
      : vote.performance2Id;
  const secondPerformanceId =
    vote.performance1Id > vote.performance2Id
      ? vote.performance2Id
      : vote.performance1Id;
  const key = `${vote.voterId}-${firstPerformanceId}-${secondPerformanceId}`;
  counts[key] = (counts[key] ?? 0) + 1;
}

console.log(Object.entries(counts)[0]);
for (const [key, count] of Object.entries(counts)) {
  if (count > 1) {
    console.log(key, count);
  }
}
