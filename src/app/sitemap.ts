import type { MetadataRoute } from "next";

import {
  allAlbums,
  allPerformances,
  allShows,
  allSongs,
} from "@/drizzle/seeds";
import {
  getAlbumPath,
  getPerformancePath,
  getShowPath,
  getSongPath,
} from "@/utils";

const baseUrl = "https://livegizzrankings.com";

function getSitemapEntryForPath(path: string) {
  return { url: `${baseUrl}${path}` };
}

function makeSitemapEntriesForPaths(paths: string[]) {
  return paths.map(getSitemapEntryForPath);
}

export default function sitemap(): MetadataRoute.Sitemap {
  return makeSitemapEntriesForPaths([
    "/",
    "/albums",
    "/songs",
    "/shows",

    // TODO: Maybe add this page in the future
    // "/performances",

    ...allAlbums.map((album) => getAlbumPath(album)),
    ...allSongs.map((song) => getSongPath(song)),
    ...allShows.map((show) => getShowPath(show)),
    ...allPerformances.map((performance) => getPerformancePath(performance)),
  ]);
}
