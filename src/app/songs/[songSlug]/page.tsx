import { db } from "@/drizzle/db";
import Image from "next/image";
import { performances } from "@/drizzle/schema";
import {
  getAlbumPath,
  getPerformancePath,
  getShowTitle,
  getSongById,
  getSongBySlug,
} from "@/utils";
import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

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

async function RankedPerformances({ songId }: { songId: string }) {
  const song = getSongById(songId);
  if (!song) {
    notFound();
  }

  const songPerformances = await db.query.performances.findMany({
    where: eq(performances.songId, songId),
    with: { show: true },
    orderBy: desc(performances.eloRating),
  });

  return (
    <ol className="space-y-4">
      {songPerformances.map((performance, index) => {
        const showTitle = getShowTitle(performance.show);
        const performancePath = getPerformancePath(performance);

        return (
          <li key={performance.id} className="flex">
            <div className="w-10 shrink-0 text-4xl">{index + 1}.</div>

            <Link href={performancePath} className="flex shrink-0 space-x-4">
              <div className="aspect-square w-24 bg-background">
                {performance.show.imageUrl ? (
                  <Image
                    src={performance.show.imageUrl}
                    alt={showTitle}
                    width={500}
                    height={500}
                  />
                ) : null}
              </div>

              <div>
                <div className="text-2xl sm:text-4xl">{showTitle}</div>

                <div className="text-muted">
                  ({Math.round(performance.eloRating)})
                </div>
              </div>
            </Link>
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

  const albumPath = getAlbumPath(song.albumId);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl sm:text-6xl">{song.title}</h2>

      <Suspense fallback="Loading performances...">
        <RankedPerformances songId={song.id} />
      </Suspense>

      <div>
        <Link href={albumPath} className="hover:text-red">
          Back to album
        </Link>
      </div>
    </div>
  );
}
