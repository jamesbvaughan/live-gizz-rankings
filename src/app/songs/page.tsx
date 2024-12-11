import { Metadata } from "next";
import Link from "next/link";
import pluralize from "pluralize";

import { allAlbums, allPerformances, allSongs } from "@/drizzle/seeds";
import { getAlbumPath, getSongPath } from "@/utils";

export const metadata: Metadata = {
  title: "Songs",
};

export default async function Songs() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl">All songs with ranked performances</h2>

      {allAlbums.map((album) => {
        const albumSongs = allSongs.filter((song) => song.albumId === album.id);
        const albumPath = getAlbumPath(album);

        return (
          <div key={album.id} className="space-y-2">
            <Link href={albumPath} className="text-2xl no-underline">
              {album.title}
            </Link>

            <div className="space-y-1">
              {albumSongs.map((song) => {
                const songPerformances = allPerformances.filter(
                  (performance) => performance.songId === song.id,
                );

                const songPath = getSongPath(song);

                return (
                  <div key={song.id} className="flex items-end space-x-2">
                    <Link href={songPath} className="text-lg no-underline">
                      {song.title}
                    </Link>

                    <div className="text-muted">
                      {pluralize("performance", songPerformances.length, true)}{" "}
                      ranked
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
