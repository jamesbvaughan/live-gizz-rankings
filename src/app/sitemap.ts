import type { MetadataRoute } from "next";

import { db } from "@/drizzle/db";
import {
  getAlbumPath,
  getPerformancePathBySongAndShow,
  getShowPath,
  getSongPath,
} from "@/utils";

import { getBlogPosts } from "./blog/utils";

const baseUrl = "https://livegizzrankings.com";

function makeSitemapEntriesForPaths(paths: string[]) {
  return paths.map((path) => ({ url: `${baseUrl}${path}` }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = getBlogPosts();

  const allAlbums = await db.query.albums.findMany();
  const allSongs = await db.query.songs.findMany();
  const allShows = await db.query.shows.findMany();
  const allPerformances = await db.query.performances.findMany({
    with: { song: true, show: true },
  });

  return makeSitemapEntriesForPaths([
    "/",
    "/albums",
    "/songs",
    "/shows",
    "/blog",

    // Don't generate sitemaps for performances since there are so many.
    // "/performances",

    ...allAlbums.map((album) => getAlbumPath(album)),
    ...allSongs.map((song) => getSongPath(song)),
    ...allShows.map((show) => getShowPath(show)),
    ...allPerformances.map((performance) =>
      getPerformancePathBySongAndShow(performance.song, performance.show),
    ),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ]);
}
