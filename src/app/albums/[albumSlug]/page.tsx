import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { db } from "@/drizzle/db";
import { performances, Song } from "@/drizzle/schema";
import { allAlbums, allSongs } from "@/drizzle/seeds";
import {
  getAlbumBySlug,
  getPerformancePath,
  getShowById,
  getShowTitle,
  getSongPath,
} from "@/utils";

type Params = { albumSlug: string };
type Props = { params: Promise<Params> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { albumSlug } = await params;
  const album = getAlbumBySlug(albumSlug);
  if (!album) {
    notFound();
  }

  return {
    title: album.title,
  };
}

export function generateStaticParams(): Params[] {
  return allAlbums.map((album) => ({
    albumSlug: album.slug,
  }));
}

export const dynamicParams = false;

async function BestPerformanceForSong({ song }: { song: Song }) {
  const performance = await db.query.performances.findFirst({
    where: eq(performances.songId, song.id),
    orderBy: desc(performances.eloRating),
  });

  if (!performance) {
    return null;
  }

  const show = getShowById(performance.showId)!;
  const showTitle = getShowTitle(show);
  const performancePath = getPerformancePath(performance);

  return (
    <li>
      <Link href={performancePath} className="no-underline">
        {song.title} - {showTitle}
      </Link>
    </li>
  );
}

export default async function Album({ params }: Props) {
  const { albumSlug } = await params;
  const album = getAlbumBySlug(albumSlug);
  if (!album) {
    notFound();
  }

  const songs = allSongs.filter((song) => song.albumId === album.id);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-4xl">{album.title}</h2>

          <ul>
            {songs.map((song) => {
              const songPath = getSongPath(song);
              return (
                <li key={song.id}>
                  <Link href={songPath} className="no-underline">
                    {song.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Image
          src={album.imageUrl}
          alt={`Album cover for ${album.title}`}
          className="aspect-square w-full"
          width={500}
          height={500}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl">Best performances</h3>

        <p>These are the top-rated performances of the songs on this album.</p>

        <Suspense fallback={<p>Loading best performances...</p>}>
          <ul>
            {songs.map((song) => {
              return <BestPerformanceForSong song={song} key={song.id} />;
            })}
          </ul>
        </Suspense>
      </div>

      <Link href="/albums" className="inline-block no-underline">
        Back to albums
      </Link>
    </div>
  );
}
