import { currentUser } from "@clerk/nextjs/server";
import { count, desc, eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import pluralize from "pluralize";
import { Suspense } from "react";

import { allPerformances } from "@/drizzle/data/performances";
import { db } from "@/drizzle/db";
import { performances, Song, votes } from "@/drizzle/schema";
import { songsNeverPlayedLive } from "@/songsNeverPlayedLive";
import {
  getPerformancePath,
  getShowById,
  getShowTitle,
  getSongPath,
} from "@/utils";

async function VoteCount({ song }: { song: Song }) {
  const user = await currentUser();
  const isAdmin = !!user?.publicMetadata.isAdmin;
  if (!isAdmin) {
    return null;
  }

  const [songVotes] = await db
    .select({ songId: performances.songId, voteCount: count(votes.id) })
    .from(votes)
    .leftJoin(performances, eq(votes.winnerId, performances.id))
    .having(({ songId }) => eq(songId, song.id))
    .groupBy(({ songId }) => songId);

  const voteCount = songVotes?.voteCount ?? 0;

  return <> - {voteCount} votes</>;
}

async function TopPerformance({ song }: { song: Song }) {
  const performance = await db.query.performances.findFirst({
    where: eq(performances.songId, song.id),
    orderBy: desc(performances.eloRating),
  });
  if (performance == null) {
    return null;
  }

  const show = getShowById(performance.showId)!;
  const showTitle = getShowTitle(show);
  const performancePath = getPerformancePath(performance);

  return (
    <Link
      href={performancePath}
      className="text-muted flex items-start space-x-2 text-right no-underline"
    >
      <div>Top: {showTitle}</div>

      {show.imageUrl ? (
        <Image
          className="shrink-0"
          src={show.imageUrl}
          alt={showTitle}
          width={24}
          height={24}
        />
      ) : null}
    </Link>
  );
}

export function SongRow({ song }: { song: Song }) {
  const songPerformances = allPerformances.filter(
    (performance) => performance.songId === song.id,
  );

  const songPath = getSongPath(song);

  return (
    <div className="flex items-baseline space-x-1">
      <div className="text-muted w-6 text-right">{song.albumPosition}.</div>

      <div className="grow">
        <Link href={songPath} className="text-lg no-underline">
          {song.title}
        </Link>

        <div className="text-muted flex justify-between space-x-2">
          {songPerformances.length === 0 ? (
            songsNeverPlayedLive.includes(song.title) ? (
              <span>They haven&apos;t played this live yet!</span>
            ) : (
              <span>
                No performances submitted yet -{" "}
                <Link href="/nominate">nominate one</Link>!
              </span>
            )
          ) : (
            <>
              <div className="shrink-0">
                {pluralize("performance", songPerformances.length, true)}

                <Suspense fallback={null}>
                  <VoteCount song={song} />
                </Suspense>
              </div>

              <Suspense
                fallback={
                  <span className="text-right">Loading top performance...</span>
                }
              >
                <TopPerformance song={song} />
              </Suspense>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
