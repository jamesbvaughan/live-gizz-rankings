import { seedAlbums, seedPerformances, seedShows, seedSongs } from "./seeds";

export function validateSeedData() {
  // Ensure that UUIDs are valid and unique
  const uuids = new Set<string>();
  [seedAlbums, seedSongs, seedShows].forEach((seed) => {
    for (const [_, { id }] of Object.entries(seed)) {
      if (id.length !== 36) {
        throw new Error("Invalid UUD");
      }

      if (uuids.has(id)) {
        throw new Error(`Duplicate UUID: ${id}`);
      }

      uuids.add(id);
    }
  });

  // Ensure that media IDs, image URLs, and show dates are unique
  const mediaIds = new Set<string>();
  for (const performance of seedPerformances) {
    if (performance.spotifyTrackId) {
      if (mediaIds.has(performance.spotifyTrackId)) {
        throw new Error(
          `Duplicate Spotify track ID: ${performance.spotifyTrackId}`,
        );
      }
      mediaIds.add(performance.spotifyTrackId);
    }
    if (performance.bandcampTrackId) {
      const show = Object.values(seedShows).find(
        (s) => s.id === performance.showId,
      )!;
      if (!show.bandcampAlbumId) {
        throw new Error(
          `Missing bandcamp album ID for ${show.location} ${show.date}`,
        );
      }
      const bandcampKey = performance.bandcampTrackId + show.bandcampAlbumId;
      if (mediaIds.has(bandcampKey)) {
        throw new Error(
          `Duplicate Bandcamp track and album ID: ${bandcampKey}`,
        );
      }
      mediaIds.add(bandcampKey);
    }
    if (performance.youtubeVideoId) {
      const youtubeKey =
        performance.youtubeVideoId + performance.youtubeVideoStartTime;
      if (mediaIds.has(youtubeKey)) {
        throw new Error(`Duplicate YouTube video ID: ${youtubeKey}`);
      }
      mediaIds.add(youtubeKey);
    }
  }
  for (const show of Object.values(seedShows)) {
    if (show.bandcampAlbumId) {
      if (mediaIds.has(show.bandcampAlbumId)) {
        throw new Error(`Duplicate Bandcamp album ID: ${show.bandcampAlbumId}`);
      }
      mediaIds.add(show.bandcampAlbumId);
    }
    if (show.imageUrl) {
      if (mediaIds.has(show.imageUrl)) {
        throw new Error(`Duplicate show image URL: ${show.imageUrl}`);
      }
      mediaIds.add(show.imageUrl);
    }
    if (mediaIds.has(show.date)) {
      throw new Error(`Duplicate show date: ${show.date}`);
    }
    mediaIds.add(show.date);
  }
  for (const album of Object.values(seedAlbums)) {
    if (album.bandcampAlbumId) {
      if (mediaIds.has(album.bandcampAlbumId)) {
        throw new Error(
          `Duplicate Bandcamp album ID: ${album.bandcampAlbumId}`,
        );
      }
      mediaIds.add(album.bandcampAlbumId);
    }
    if (mediaIds.has(album.imageUrl)) {
      throw new Error(`Duplicate album image URL: ${album.imageUrl}`);
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
      throw new Error(
        `Duplicate performance of song ${performance.songId} at show ${showId}`,
      );
    }
    songs.add(songId);
  }
}
