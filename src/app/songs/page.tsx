import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SongRow } from "@/components/SongRow";
import { PageContent, PageTitle } from "@/components/ui";
import { allAlbums, allPerformances, allSongs } from "@/drizzle/seeds";
import { getAlbumPath } from "@/utils";

export const metadata: Metadata = {
  title: "Songs",
};

export default function Songs() {
  return (
    <>
      <PageTitle>All songs</PageTitle>

      <PageContent>
        <p>
          All the songs that have ranked performances, along with their top
          ranked performances
        </p>

        <div className="mt-6 space-y-8">
          {allAlbums.map((album) => {
            const albumSongs = allSongs.filter(
              (song) => song.albumId === album.id,
            );
            const albumPath = getAlbumPath(album);

            return (
              <div key={album.id} className="space-y-4">
                <Link
                  href={albumPath}
                  className="flex items-start space-x-2 text-2xl no-underline"
                >
                  <Image
                    className="shrink-0"
                    src={album.imageUrl}
                    alt={album.title}
                    width={50}
                    height={50}
                  />

                  <div>{album.title}</div>
                </Link>

                <div className="space-y-2">
                  {albumSongs.map((song) => {
                    const performances = allPerformances.filter(
                      (performance) => performance.songId === song.id,
                    );
                    if (performances.length === 0) {
                      return null;
                    }

                    return <SongRow key={song.id} song={song} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </PageContent>
    </>
  );
}
