import { asc, eq } from "drizzle-orm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { isAdmin } from "@/auth/utils";
import { BoxedButtonLink } from "@/components/BoxedButtonLink";
import { SongRow } from "@/components/SongRow";
import {
  PageContent,
  PageSubtitle,
  PageTitle,
  PageType,
} from "@/components/ui";
import { getAlbumBySlug } from "@/dbUtils";
import { db } from "@/drizzle/db";
import { songs } from "@/drizzle/schema";

type Params = { albumSlug: string };
type Props = { params: Promise<Params> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { albumSlug } = await params;
  const album = await getAlbumBySlug(albumSlug);

  return {
    title: album.title,
    description: `Find the top-ranked performances of songs from King Gizzard & The Lizard Wizard's album ${album.title} on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
  };
}

export default async function Album({ params }: Props) {
  const { albumSlug } = await params;
  const [album, adminStatus] = await Promise.all([
    getAlbumBySlug(albumSlug),
    isAdmin(),
  ]);

  const albumSongs = await db.query.songs.findMany({
    where: eq(songs.albumId, album.id),
    orderBy: asc(songs.albumPosition),
  });

  const releaseDate = new Date(album.releaseDate);
  const formattedReleaseDate = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(releaseDate);

  return (
    <>
      <PageType>Album</PageType>

      <div className="flex items-center justify-between">
        <PageTitle>{album.title}</PageTitle>
        {adminStatus && (
          <BoxedButtonLink href={`/albums/${album.slug}/edit` as any}>
            Edit Album
          </BoxedButtonLink>
        )}
      </div>

      <PageSubtitle>
        Released on <time>{formattedReleaseDate}</time>
      </PageSubtitle>

      <PageContent className="space-y-8">
        <Image
          src={album.imageUrl}
          alt={`Album cover for ${album.title}`}
          className="aspect-square w-full"
          width={500}
          height={500}
        />

        <div className="space-y-2">
          {albumSongs.map((song) => {
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
