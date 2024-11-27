import { seedAlbums, seedPerformances, seedShows, seedSongs } from "./seeds";

function fail(message: string): never {
  console.log(message);
  process.exit(1);
}

console.log("Checking seed data validity...");

// Ensure that UUIDs and slugs are valid and unique
const uuids = new Set<string>();
[seedAlbums, seedSongs, seedShows].forEach((seed) => {
  const slugs = new Set<string>();
  for (const [_, { id, slug }] of Object.entries(seed)) {
    if (id.length !== 36) {
      fail("Invalid UUID");
    }
    if (slug.length === 0) {
      fail("Empty slug");
    }
    if (slug.toLowerCase() !== slug) {
      fail("Invalid slug");
    }

    if (uuids.has(id)) {
      fail(`Duplicate UUID: ${id}`);
    }
    uuids.add(id);

    if (slugs.has(slug)) {
      fail(`Duplicate slug: ${slug}`);
    }
    slugs.add(slug);
  }
});

// Ensure that media IDs, image URLs, and show dates are unique
const mediaIds = new Set<string>();
for (const performance of seedPerformances) {
  if (performance.spotifyTrackId) {
    if (mediaIds.has(performance.spotifyTrackId)) {
      fail(`Duplicate Spotify track ID: ${performance.spotifyTrackId}`);
    }
    mediaIds.add(performance.spotifyTrackId);
  }
  if (performance.bandcampTrackId) {
    const show = Object.values(seedShows).find(
      (s) => s.id === performance.showId,
    )!;
    if (!show.bandcampAlbumId) {
      fail(`Missing bandcamp album ID for ${show.location} ${show.date}`);
    }
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
for (const show of Object.values(seedShows)) {
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
for (const album of Object.values(seedAlbums)) {
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
for (const performance of seedPerformances) {
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
