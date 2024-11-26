import { seedAlbums, seedPerformances, seedSongs } from "@/drizzle/seeds";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Songs",
};

export default async function Songs() {
  const albums = Object.values(seedAlbums);
  const songs = Object.values(seedSongs);

  return (
    <div className="space-y-6">
      {albums.map((album) => {
        const albumSongs = songs.filter((song) => song.albumId === album.id);

        return (
          <div key={album.id} className="space-y-2">
            <Link
              href={`/albums/${album.id}`}
              className="text-2xl no-underline"
            >
              {album.title}
            </Link>

            <div className="space-y-1">
              {albumSongs.map((song) => {
                const songPerformances = Object.values(seedPerformances).filter(
                  (performance) => performance.songId === song.id,
                );

                return (
                  <div key={song.id} className="flex items-end space-x-2">
                    <Link
                      href={`/albums/${album.id}/song/${song.id}`}
                      className="text-lg hover:text-red"
                    >
                      {song.title}
                    </Link>

                    <div className="text-muted">
                      {songPerformances.length} performances ranked
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
