import { Album, Performance, Show, Song } from "./schema";

export const seedAlbums: Record<string, Omit<Album, "createdAt">> = {
  oddments: {
    title: "Oddments",
    id: "7f1d12b4-d57a-42e8-9aae-57082cab5633",
    imageUrl: "https://f4.bcbits.com/img/a0348996479_16.jpg",
    bandcampAlbumId: "3657754108",
  },
};

export const seedSongs: Record<string, Omit<Song, "createdAt">> = {
  workThisTime: {
    id: "460537ac-78a5-4358-80d4-e60a3aa78b93",
    title: "Work This Time",
    albumId: seedAlbums.oddments.id,
  },
};

export const seedShows: Record<string, Omit<Show, "createdAt">> = {
  bonnaroo22: {
    id: "1744f3c5-8da4-4e28-845d-0b2cf02db7a1",
    location: "Bonnaroo",
    date: "2022-06-17",
    imageUrl: "https://f4.bcbits.com/img/a3553224286_16.jpg",
    bandcampAlbumId: "1363173846",
  },
  atlanta24: {
    id: "8af52ec8-f9a6-43e3-ad24-a5ac42f3308d",
    location: "Atlanta",
    date: "2024-11-19",
    imageUrl: null,
    bandcampAlbumId: null,
  },
  rr22: {
    id: "ca4d9095-cb3a-46d9-8dd8-3fdc7b15a7b6",
    location: "Red Rocks",
    date: "2022-10-10",
    imageUrl: "https://f4.bcbits.com/img/a3180996672_16.jpg",
    bandcampAlbumId: "2418689883",
  },
  nyc24: {
    id: "4023c755-247d-4b29-86ec-7b1203e93bdf",
    location: "New York City",
    date: "2024-08-16",
    imageUrl: "https://f4.bcbits.com/img/a4160066698_16.jpg",
    bandcampAlbumId: "3530855413",
  },
};

export const seedPerformances: Omit<
  Performance,
  "createdAt" | "ratingLastUpdatedAt" | "eloRating"
>[] = [
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
];
