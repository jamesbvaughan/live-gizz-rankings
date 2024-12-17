import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageContent, PageTitle } from "@/components/ui";
import { allAlbums } from "@/drizzle/seeds";
import { getAlbumPath } from "@/utils";

export const metadata: Metadata = {
  title: "Albums",
  description: `Browse all of King Gizzard & The Lizard Wizard's albums on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
};

export default async function Albums() {
  const sortedAlbums = [...allAlbums].sort(
    (a, b) =>
      new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime(),
  );

  return (
    <>
      <PageTitle>Albums with ranked performances</PageTitle>

      <PageContent className="grid grid-cols-2 gap-4">
        {sortedAlbums.map((album, index) => {
          const albumPath = getAlbumPath(album);

          return (
            <Link key={album.id} href={albumPath} className="no-underline">
              <Image
                priority={index < 4}
                src={album.imageUrl}
                alt={`Album cover for ${album.title}`}
                className="aspect-square w-full"
                width={500}
                height={500}
              />
              <div className="text-lg">{album.title}</div>
            </Link>
          );
        })}
      </PageContent>
    </>
  );
}
