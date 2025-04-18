import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SongRow } from "@/components/SongRow";
import { PageContent, PageTitle } from "@/components/ui";
import { allAlbums } from "@/drizzle/data/albums";
import { allPerformances } from "@/drizzle/data/performances";
import { allSongs } from "@/drizzle/data/songs";
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
            const albumSongs = allSongs
              .filter((song) => song.albumId === album.id)
              .sort((a, b) => a.albumPosition - b.albumPosition);

            const albumPerformances = allPerformances.filter((performance) =>
              albumSongs.some((song) => song.id === performance.songId),
            );
            if (albumPerformances.length === 0) {
              return null;
            }

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
