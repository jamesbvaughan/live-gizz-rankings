import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SongRow } from "@/components/SongRow";
import { PageContent, PageTitle, PageType } from "@/components/ui";
import { allAlbums, allSongs } from "@/drizzle/seeds";
import { getAlbumBySlug } from "@/utils";

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
    description: `Find the top-ranked performances of songs from King Gizzard & The Lizard Wizard's album ${album.title} on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
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

  const songs = allSongs
    .filter((song) => song.albumId === album.id)
    .sort((a, b) => a.albumPosition - b.albumPosition);

  return (
    <>
      <PageType>Album</PageType>

      <PageTitle>{album.title}</PageTitle>

      <PageContent className="space-y-8">
        <Image
          src={album.imageUrl}
          alt={`Album cover for ${album.title}`}
          className="aspect-square w-full"
          width={500}
          height={500}
        />

        <div className="space-y-2">
          {songs.map((song) => {
            return <SongRow key={song.id} song={song} />;
          })}
        </div>

        <Link href="/albums" className="inline-block no-underline">
          Back to albums
        </Link>
      </PageContent>
    </>
  );
}
