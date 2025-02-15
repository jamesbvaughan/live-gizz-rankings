import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import Link from "next/link";
import { unauthorized } from "next/navigation";

import { MediaPlayers } from "@/components/MediaPlayers";
import {
  getPerformanceById,
  getShowById,
  getShowTitle,
  getSongById,
} from "@/utils";

import { getRandomPairForCurrentUser } from "./getRandomPair";
import { PerformanceFormButtons } from "./PerformanceVoteFormButton";

export const metadata: Metadata = {
  title: "Rank Songs",
};

export default async function Rank() {
  const { userId } = await auth();
  if (!userId) {
    unauthorized();
  }

  const pair = await getRandomPairForCurrentUser();
  if (!pair) {
    return (
      <div className="space-y-4">
        <p>
          You&apos;ve voted on every pair of performances that&apos;s been added
          to the site. Thank you! I add performances periodically as people
          nominate their favorites, so check back later to see if you&apos;ve
          got new ones to vote on.
        </p>
        <p>
          You can{" "}
          <Link href="/albums">browse all the rankings by album here</Link> or{" "}
          <a href="mailto:james@jamesbvaughan.com">email me</a> if there are
          more songs or performances that you&apos;d like to see added here.
        </p>
      </div>
    );
  }

  const performanceA = getPerformanceById(pair[0])!;
  const performanceB = getPerformanceById(pair[1])!;
  const song = getSongById(performanceA.songId)!;

  const performances = [performanceA, performanceB];

  return (
    <div className="space-y-10">
      <h2 className="text-center text-2xl sm:text-4xl">
        Which <span className="font-bold">{song.title}</span> is better?
      </h2>

      <PerformanceFormButtons
        key={performanceA.id + performanceB.id}
        performanceA={performanceA}
        performanceB={performanceB}
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
        {performances.map((performance) => {
          const show = getShowById(performance.showId)!;
          const showTitle = getShowTitle(show);

          return (
            <div key={performance.id} className="space-y-4">
              <h3 className="min-h-14 text-xl">
                Listen to {song.title} at {showTitle}
              </h3>

              <MediaPlayers performance={performance} show={show} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
