import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { EloScore } from "@/components/EloScore";
import {
  PageContent,
  PageSubtitle,
  PageTitle,
  PageType,
} from "@/components/ui";
import { allPerformances } from "@/drizzle/data/performances";
import { allSongs } from "@/drizzle/data/songs";
import { db } from "@/drizzle/db";
import { performances } from "@/drizzle/schema";
import { songsNeverPlayedLive } from "@/songsNeverPlayedLive";
import {
  getAlbumById,
  getAlbumPath,
  getPerformancePath,
  getShowById,
  getShowTitle,
  getSongById,
  getSongBySlug,
} from "@/utils";

type Params = { songSlug: string };
type Props = { params: Promise<Params> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { songSlug } = await params;
  const song = getSongBySlug(songSlug);
  if (!song) {
    notFound();
  }

  return {
    title: song.title,
  };
}

export const experimental_ppr = true;

export function generateStaticParams(): Params[] {
  return allSongs.map((song) => ({
    songSlug: song.slug,
  }));
}

export const dynamicParams = false;

async function RankedPerformances({ songId }: { songId: string }) {
  const song = getSongById(songId);
  if (!song) {
    notFound();
  }

  const songPerformances = await db.query.performances.findMany({
    where: eq(performances.songId, songId),
    orderBy: desc(performances.eloRating),
  });

  return (
    <ol className="space-y-4">
      {songPerformances.map((performance, index) => {
        const show = getShowById(performance.showId)!;
        const showTitle = getShowTitle(show);
        const performancePath = getPerformancePath(performance);

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
      })}
    </ol>
  );
}

export default async function Song({ params }: Props) {
  const { songSlug } = await params;
  const song = getSongBySlug(songSlug);
  if (!song) {
    notFound();
  }

  const performances = allPerformances.filter(
    (performance) => performance.songId === song.id,
  );

  const album = getAlbumById(song.albumId)!;
  const albumPath = getAlbumPath(song.albumId);

  const neverBeenPlayedLive = songsNeverPlayedLive.includes(song.title);

  return (
    <>
      <PageType>Song</PageType>

      <PageTitle>{song.title}</PageTitle>

      <PageSubtitle>
        Track {song.albumPosition} on{" "}
        <Link href={albumPath} className="no-underline">
          {album.title}
        </Link>
      </PageSubtitle>

      <PageContent className="space-y-8">
        {performances.length === 0 ? (
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
