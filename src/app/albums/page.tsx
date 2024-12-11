import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { allAlbums } from "@/drizzle/seeds";
import { getAlbumPath } from "@/utils";

export const metadata: Metadata = {
  title: "Albums",
  description: `Browse all of King Gizzard & The Lizard Wizard's albums on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
};

export default async function Albums() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl">Albums with ranked performances</h2>

      <div className="grid grid-cols-2 gap-4">
        {allAlbums.map((album, index) => {
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
      </div>
    </div>
  );
}
