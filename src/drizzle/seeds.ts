import { Album, Performance, Show, Song } from "./schema";

export const seedAlbums: Record<string, Omit<Album, "createdAt">> = {
  oddments: {
    title: "Oddments",
    id: "7f1d12b4-d57a-42e8-9aae-57082cab5633",
    imageUrl: "https://f4.bcbits.com/img/a0348996479_16.jpg",
    bandcampAlbumId: "3657754108",
  },
  iceDeath: {
    title: "Ice, Death, Planets, Lungs, Mushrooms and Lava",
    id: "46f925f1-dd7f-4966-8c02-3562e32f22b5",
    imageUrl: "https://f4.bcbits.com/img/a3317842641_16.jpg",
    bandcampAlbumId: "980855912",
  },
};

export const seedSongs: Record<string, Omit<Song, "createdAt">> = {
  workThisTime: {
    id: "460537ac-78a5-4358-80d4-e60a3aa78b93",
    title: "Work This Time",
    albumId: seedAlbums.oddments.id,
  },
  magma: {
    id: "717f22ee-9458-4bca-8dbf-e7940b1e4d96",
    title: "Magma",
    albumId: seedAlbums.iceDeath.id,
  },
};

export const seedShows: Record<string, Omit<Show, "createdAt">> = {
  // ====================================================
  // U.S. Tour 2022
  bonnaroo22: {
    id: "1744f3c5-8da4-4e28-845d-0b2cf02db7a1",
    location: "Bonnaroo",
    date: "2022-06-17",
    imageUrl: "https://f4.bcbits.com/img/a3553224286_16.jpg",
    bandcampAlbumId: "1363173846",
  },
  rr22: {
    id: "ca4d9095-cb3a-46d9-8dd8-3fdc7b15a7b6",
    location: "Red Rocks",
    date: "2022-10-10",
    imageUrl: "https://f4.bcbits.com/img/a3180996672_16.jpg",
    bandcampAlbumId: "2418689883",
  },

  // ====================================================
  // U.S. Tour 2024
  nyc24: {
    id: "4023c755-247d-4b29-86ec-7b1203e93bdf",
    location: "New York City",
    date: "2024-08-16",
    imageUrl: "https://f4.bcbits.com/img/a4160066698_16.jpg",
    bandcampAlbumId: "3530855413",
  },
  stanford24: {
    id: "935dd6ed-2153-4e4b-8bea-1d75825b8fe4",
    location: "Stanford",
    date: "2024-11-04",
    imageUrl: "https://f4.bcbits.com/img/a2511383545_16.jpg",
    bandcampAlbumId: "2620217443",
  },
  abq24: {
    id: "f0139f08-7075-4757-b811-9c458d04593c",
    location: "Albuquerque",
    date: "2024-11-10",
    imageUrl: "https://f4.bcbits.com/img/a0496185183_16.jpg",
    bandcampAlbumId: "660285328",
  },
  houston24: {
    id: "8b1615e0-a6dc-42f6-b61c-465971545450",
    location: "Houston",
    date: "2024-11-16",
    imageUrl: "https://f4.bcbits.com/img/a3220456230_16.jpg",
    bandcampAlbumId: "3854890243",
  },
  atlanta24: {
    id: "8af52ec8-f9a6-43e3-ad24-a5ac42f3308d",
    location: "Atlanta",
    date: "2024-11-19",
    imageUrl: null,
    bandcampAlbumId: null,
  },
};

export const seedPerformances: Omit<
  Performance,
  "createdAt" | "ratingLastUpdatedAt" | "eloRating"
>[] = [
  // ====================================================
  // Work This Time
  {
    id: "fa02df1a-87c1-4c1e-9f75-50c1a3903e12",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.bonnaroo22.id,
    spotifyTrackId: "4b6tZw9nCvkQBlc6Nwi7M5?si=1e93797f9ec94a0a",
    bandcampTrackId: "2385094002",
    youtubeVideoId: "5GycxF0R0G8",
    youtubeVideoStartTime: null,
  },
  {
    id: "77012079-f7fb-4764-9a9a-eef74e7ef072",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.atlanta24.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "ijYmTy8YnOw",
    youtubeVideoStartTime: null,
  },
  {
    id: "4440adfc-6170-4f63-8e6b-819c1a4e535f",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.rr22.id,
    spotifyTrackId: "6YE7MsZ4y82v4qvntAeivs",
    bandcampTrackId: "1874767619",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "e899dff3-dabd-4cba-a453-4031f0719805",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.nyc24.id,
    spotifyTrackId: "31Phk1Hoda4CG1d0dXoOpl",
    bandcampTrackId: "2109737640",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 3294,
  },

  // ====================================================
  // Magma
  {
    id: "01303513-e76e-453c-97fc-8c560e72127d",
    songId: seedSongs.magma.id,
    showId: seedShows.houston24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3380072931",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "49ed74ad-8967-4382-8e78-4b2dc9994120",
    songId: seedSongs.magma.id,
    showId: seedShows.abq24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3544009407",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "238ec52c-dfa5-419e-ab33-8f6f7ff1dd3e",
    songId: seedSongs.magma.id,
    showId: seedShows.stanford24.id,
    spotifyTrackId: null,
    bandcampTrackId: "1338908065",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
];

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
