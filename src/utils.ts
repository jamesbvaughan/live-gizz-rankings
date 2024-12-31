import { Album, Performance, Show, Song } from "./drizzle/schema";
import {
  allAlbums,
  allPerformances,
  allShows,
  allSongs,
} from "./drizzle/seeds";

// =============================================================================
// SHOWS

export function getShowTitle(show: Show) {
  const date = new Date(show.date);
  const year = date.getFullYear() % 100;
  return `${show.location} '${year.toString()}`;
}

export function getShowById(showId: string) {
  return allShows.find((show) => show.id === showId);
}

export function getShowBySlug(showSlug: string) {
  return allShows.find((show) => show.slug === showSlug);
}

export function getShowPath(show: Show): string;
export function getShowPath(showId: string): string;
export function getShowPath(showOrShowId: Show | string): string {
  const show =
    typeof showOrShowId === "string"
      ? getShowById(showOrShowId)!
      : showOrShowId;
  return `/shows/${show.slug}`;
}

// =============================================================================
// PERFORMANCES

export function getPerformanceTitle(song: Song, show: Show) {
  const showTitle = getShowTitle(show);
  return `${song.title} ${showTitle}`;
}

export function getPerformanceSlug(performance: Performance): string {
  const song = getSongById(performance.songId)!;
  const show = getShowById(performance.showId)!;
  return `${song.slug}-${show.slug}`;
}

export function getPerformanceById(performanceId: string) {
  return allPerformances.find(
    (performance) => performance.id === performanceId,
  );
}

export function getPerformanceBySlug(performanceSlug: string) {
  const performance = allPerformances.find(
    (performance) => getPerformanceSlug(performance) === performanceSlug,
  );
  return performance;
}

export function getPerformancePath(performance: Performance): string;
export function getPerformancePath(performanceId: string): string;
export function getPerformancePath(
  performanceOrPerformanceId: Performance | string,
): string {
  const performance =
    typeof performanceOrPerformanceId === "string"
      ? getPerformanceById(performanceOrPerformanceId)
      : performanceOrPerformanceId;
  if (!performance) {
    throw new Error(
      `Unable to find performance with ID ${performanceOrPerformanceId}`,
    );
  }

  const slug = getPerformanceSlug(performance);
  return `/performances/${slug}`;
}

// =============================================================================
// SONGS

export function getSongById(songId: string) {
  return allSongs.find((song) => song.id === songId);
}

export function getSongBySlug(songSlug: string) {
  return allSongs.find((song) => song.slug === songSlug);
}

export function getSongPath(songId: string): string;
export function getSongPath(song: Song): string;
export function getSongPath(songOrSongId: string | Song) {
  const song =
    typeof songOrSongId === "string"
      ? getSongById(songOrSongId)!
      : songOrSongId;
  return `/songs/${song.slug}`;
}

// =============================================================================
// ALBUMS

export function getAlbumById(albumId: string) {
  return allAlbums.find((album) => album.id === albumId);
}

export function getAlbumBySlug(albumSlug: string) {
  return allAlbums.find((album) => album.slug === albumSlug);
}

export function getAlbumPath(albumId: string): string;
export function getAlbumPath(album: Album): string;
export function getAlbumPath(albumOrAlbumId: Album | string): string {
  const album =
    typeof albumOrAlbumId === "string"
      ? getAlbumById(albumOrAlbumId)!
      : albumOrAlbumId;
  return `/albums/${album.slug}`;
}
