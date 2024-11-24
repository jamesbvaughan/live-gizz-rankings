import { notFound } from "next/navigation";
import { Album, Performance, Show, Song } from "./drizzle/schema";
import {
  seedAlbums,
  seedPerformances,
  seedShows,
  seedSongs,
} from "./drizzle/seeds";

export function getShowTitle(show: Show) {
  const date = new Date(show.date);
  const year = date.getFullYear() % 100;
  return `${show.location} '${year.toString()}`;
}

export function getPerformanceTitle(song: Song, show: Show) {
  const showTitle = getShowTitle(show);
  return `${song.title} ${showTitle}`;
}

export function getPerformanceById(performanceId: string) {
  const performance = Object.values(seedPerformances).find(
    (performance) => performance.id === performanceId,
  );
  if (!performance) {
    notFound();
  }
  return performance as Performance;
}

export function getSongById(songId: string) {
  const song = Object.values(seedSongs).find((song) => song.id === songId);
  if (!song) {
    notFound();
  }

  return song as Song;
}

export function getAlbumById(albumId: string) {
  const album = Object.values(seedAlbums).find((album) => album.id === albumId);
  if (!album) {
    notFound();
  }
  return album as Album;
}

export function getShowById(showId: string) {
  const show = Object.values(seedShows).find((show) => show.id === showId);
  if (!show) {
    notFound();
  }
  return show as Show;
}
