import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { allAlbums, allSongs } from "@/drizzle/seeds";
import { getAlbumBySlug, getSongPath } from "@/utils";

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

export default async function Album({ params }: Props) {
  const { albumSlug } = await params;
  const album = getAlbumBySlug(albumSlug);
  if (!album) {
    notFound();
  }

  const songs = allSongs.filter((song) => song.albumId === album.id);

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl">{album.title}</h2>

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

      <Link href="/albums" className="no-underline">
        Back to albums
      </Link>
    </div>
  );
}
