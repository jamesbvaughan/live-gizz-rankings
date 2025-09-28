import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { isAdmin } from "@/auth/utils";
import { BoxedButtonLink } from "@/components/BoxedButtonLink";
import { EloScore } from "@/components/EloScore";
import {
  PageContent,
  PageSubtitle,
  PageTitle,
  PageType,
} from "@/components/ui";
import { getPerformancePath, getShowById, getSongBySlug } from "@/dbUtils";
import { db } from "@/drizzle/db";
import { Performance, performances } from "@/drizzle/schema";
import { songsNeverPlayedLive } from "@/songsNeverPlayedLive";
import { getAlbumPath, getShowTitle } from "@/utils";

type Params = { songSlug: string };
type Props = { params: Promise<Params> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { songSlug } = await params;
  const song = await getSongBySlug(songSlug);

  return {
    title: song.title,
  };
}

async function PerformanceRow({
  performance,
  index,
}: {
  performance: Performance;
  index: number;
}) {
  const show = await getShowById(performance.showId)!;
  const showTitle = getShowTitle(show);
  const performancePath = await getPerformancePath(performance);

  return (
    <li key={performance.id} className="flex">
      <div className="w-10 shrink-0 text-4xl">{index + 1}.</div>

      <div className="flex shrink-0 space-x-4">
        <div className="bg-background aspect-square w-24">
          {show.imageUrl ? (
            <Image
              src={show.imageUrl}
              alt={showTitle}
              width={500}
              height={500}
            />
          ) : null}
        </div>

        <div>
          <Link
            href={performancePath}
            className="text-2xl no-underline sm:text-4xl"
          >
            {showTitle}
          </Link>

          <EloScore score={performance.eloRating} />
        </div>
      </div>
    </li>
  );
}

async function RankedPerformances({ songId }: { songId: string }) {
  const songPerformances = await db.query.performances.findMany({
    where: eq(performances.songId, songId),
    orderBy: desc(performances.eloRating),
  });

  return (
    <ol className="space-y-4">
      {songPerformances.map((performance, index) => {
        return (
          <PerformanceRow
            performance={performance}
            index={index}
            key={performance.id}
          />
        );
      })}
    </ol>
  );
}

export default async function Song({ params }: Props) {
  const { songSlug } = await params;
  const [song, adminStatus] = await Promise.all([
    getSongBySlug(songSlug),
    isAdmin(),
  ]);

  const songPerformances = await db.query.performances.findMany({
    where: eq(performances.songId, song.id),
  });

  const albumPath = getAlbumPath(song.album);

  const neverBeenPlayedLive = songsNeverPlayedLive.includes(song.title);

  return (
    <>
      <PageType>Song</PageType>

      <div className="flex items-center justify-between">
        <PageTitle>{song.title}</PageTitle>
        {adminStatus && (
          <BoxedButtonLink href={`/songs/${song.slug}/edit` as any}>
            Edit Song
          </BoxedButtonLink>
        )}
      </div>

      <PageSubtitle>
        Track {song.albumPosition} on{" "}
        <Link href={albumPath} className="no-underline">
          {song.album.title}
        </Link>
      </PageSubtitle>

      <PageContent className="space-y-8">
        {songPerformances.length === 0 ? (
          neverBeenPlayedLive ? (
            <p>They haven&apos;t played this live yet!</p>
          ) : (
            <p>
              No performances of {song.title} have been nominated yet.
              {/* TODO: Add a link to the nomination page once it exists */}
            </p>
          )
        ) : (
          <Suspense fallback="Loading performances...">
            <RankedPerformances songId={song.id} />
          </Suspense>
        )}

        {!neverBeenPlayedLive && (
          <p className="text-muted">
            Is your favorite performance missing?{" "}
            <Link href="/nominate">Nominate it here</Link>.
          </p>
        )}

        <div>
          <Link href={albumPath} className="no-underline">
            Back to album
          </Link>
        </div>
      </PageContent>
    </>
  );
}
