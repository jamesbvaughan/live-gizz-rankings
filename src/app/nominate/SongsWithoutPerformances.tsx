import Image from "next/image";

import { Album } from "@/drizzle/schema";
import { allAlbums, allPerformances, allSongs } from "@/drizzle/seeds";
import { songsNeverPlayedLive } from "@/songsNeverPlayedLive";

function AlbumWithMissingPerformances({
  album,
  performanceCount,
}: {
  album: Album;
  performanceCount: number;
}) {
  const songs = allSongs.filter((song) => song.albumId === album.id);
  const songsWithoutPerformances = songs.filter((song) => {
    // Don't include songs that the band has never played live
    if (songsNeverPlayedLive.includes(song.title)) {
      return false;
    }

    const performances = allPerformances.filter(
      (performance) => performance.songId === song.id,
    );
    return performances.length === performanceCount;
  });

  if (songsWithoutPerformances.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <Image
          className="shrink-0"
          src={album.imageUrl}
          alt={album.title}
          width={50}
          height={50}
        />

        <h3 className="text-xl">{album.title}</h3>
      </div>

      <ul className="ml-4 list-disc">
        {songsWithoutPerformances.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}
export function SongsWithoutPerformances({
  performanceCount,
}: {
  performanceCount: number;
}) {
  const albums = [...allAlbums].sort(
    (a, b) =>
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {albums.map((album) => (
        <AlbumWithMissingPerformances
          key={album.id}
          album={album}
          performanceCount={performanceCount}
        />
      ))}
    </div>
  );
}
