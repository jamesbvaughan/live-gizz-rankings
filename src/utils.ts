import { Show, Song } from "./drizzle/schema";

export function getShowTitle(show: Show) {
  const date = new Date(show.date);
  const year = date.getFullYear() % 100;
  return `${show.location} '${year.toString()}`;
}

export function getPerformanceTitle(song: Song, show: Show) {
  const showTitle = getShowTitle(show);
  return `${song.title} ${showTitle}`;
}
