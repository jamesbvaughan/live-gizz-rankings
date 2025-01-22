import { allAlbums } from "./data/albums";
import { allPerformances } from "./data/performances";
import { allShows } from "./data/shows";
import { allSongs } from "./data/songs";

function fail(message: string): never {
  console.log(message);
  process.exit(1);
}

console.log("Checking seed data validity...");

// Ensure that UUIDs and slugs are valid and unique
const uuids = new Set<string>();
[allAlbums, allSongs, allShows, allPerformances].forEach((seed) => {
  const slugs = new Set<string>();
  for (const item of seed) {
    if (item.id.length !== 36) {
      fail("Invalid UUID");
    }

    if (uuids.has(item.id)) {
      fail(`Duplicate UUID: ${item.id}`);
    }
    uuids.add(item.id);

    if ("slug" in item) {
      if (item.slug.length === 0) {
        fail("Empty slug");
      }
      if (item.slug.toLowerCase() !== item.slug) {
        fail(`Invalid slug: ${item.slug}`);
      }
      if (slugs.has(item.slug)) {
        fail(`Duplicate slug: ${item.slug}`);
      }
      slugs.add(item.slug);
    }
  }
});

// Ensure that release dates are unique
const releaseDates = new Set<string>();
for (const album of allAlbums) {
  if (releaseDates.has(album.releaseDate)) {
    fail(`Duplicate release date: ${album.releaseDate}`);
  }
  releaseDates.add(album.releaseDate);
}

// Ensure that song album positions are unique
const albumPositions = new Set<string>();
for (const song of allSongs) {
  const key = song.albumId + song.albumPosition;
  if (albumPositions.has(key)) {
    fail(`Duplicate album position: ${key}`);
  }
  albumPositions.add(key);
}

// Ensure that performance show positions are unique
const showPositions = new Set<string>();
for (const performance of allPerformances) {
  const key = `show:${performance.showId} position:${performance.showPosition}`;
  if (showPositions.has(key)) {
    fail(`Duplicate show position: ${key}`);
  }
  showPositions.add(key);
}

// Ensure that media IDs, image URLs, and show dates are unique
const mediaIds = new Set<string>();
for (const performance of allPerformances) {
  if (performance.spotifyTrackId) {
    if (mediaIds.has(performance.spotifyTrackId)) {
      fail(`Duplicate Spotify track ID: ${performance.spotifyTrackId}`);
    }
    mediaIds.add(performance.spotifyTrackId);
  }
  if (performance.bandcampTrackId) {
    const show = allShows.find((s) => s.id === performance.showId)!;
    if (mediaIds.has(performance.bandcampTrackId)) {
      fail(`Duplicate Bandcamp track ID: ${performance.bandcampTrackId}`);
    }
    mediaIds.add(performance.bandcampTrackId);

    const bandcampKey = performance.bandcampTrackId + show.bandcampAlbumId;
    if (mediaIds.has(bandcampKey)) {
      fail(`Duplicate Bandcamp track and album ID: ${bandcampKey}`);
    }
    mediaIds.add(bandcampKey);
  }
  if (performance.youtubeVideoId) {
    const youtubeKey =
      performance.youtubeVideoId + performance.youtubeVideoStartTime;
    if (mediaIds.has(youtubeKey)) {
      fail(`Duplicate YouTube video ID: ${youtubeKey}`);
    }
    mediaIds.add(youtubeKey);
  }
}
for (const show of allShows) {
  if (show.bandcampAlbumId) {
    if (mediaIds.has(show.bandcampAlbumId)) {
      fail(`Duplicate Bandcamp album ID: ${show.bandcampAlbumId}`);
    }
    mediaIds.add(show.bandcampAlbumId);
  }
  if (show.imageUrl) {
    if (mediaIds.has(show.imageUrl)) {
      fail(`Duplicate show image URL: ${show.imageUrl}`);
    }
    mediaIds.add(show.imageUrl);
  }
  if (mediaIds.has(show.date)) {
    fail(`Duplicate show date: ${show.date}`);
  }
  mediaIds.add(show.date);
}
for (const album of allAlbums) {
  if (album.bandcampAlbumId) {
    if (mediaIds.has(album.bandcampAlbumId)) {
      fail(`Duplicate Bandcamp album ID: ${album.bandcampAlbumId}`);
    }
    mediaIds.add(album.bandcampAlbumId);
  }
  if (mediaIds.has(album.imageUrl)) {
    fail(`Duplicate album image URL: ${album.imageUrl}`);
  }
  mediaIds.add(album.imageUrl);
}

// Ensure that there aren't multiple performances of the same song at a show
const songsByShow = new Map<string, Set<string>>();
for (const performance of allPerformances) {
  const showId = performance.showId;
  const songId = performance.songId;
  if (!songsByShow.has(showId)) {
    songsByShow.set(showId, new Set());
  }
  const songs = songsByShow.get(showId)!;
  if (songs.has(songId)) {
    fail(
      `Duplicate performance of song ${performance.songId} at show ${showId}`,
    );
  }
  songs.add(songId);
}

console.log("Seed data is valid.");
