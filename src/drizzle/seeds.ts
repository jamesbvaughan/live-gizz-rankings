import { Album, Performance, Show, Song } from "./schema";

const oddments = {
  title: "Oddments",
  id: "7f1d12b4-d57a-42e8-9aae-57082cab5633",
  imageUrl: "https://f4.bcbits.com/img/a0348996479_16.jpg",
  bandcampAlbumId: "3657754108",
};

export const seedAlbums: Omit<Album, "createdAt">[] = [oddments];

const workThisTime = {
  id: "460537ac-78a5-4358-80d4-e60a3aa78b93",
  title: "Work This Time",
  albumId: oddments.id,
};

export const seedSongs: Omit<Song, "createdAt">[] = [workThisTime];

const bonnaroo22 = {
  id: "1744f3c5-8da4-4e28-845d-0b2cf02db7a1",
  location: "Bonnaroo",
  date: "2022-06-17",
  imageUrl: "https://f4.bcbits.com/img/a3553224286_16.jpg",
  bandcampAlbumId: "1363173846",
};
const atlanta24 = {
  id: "8af52ec8-f9a6-43e3-ad24-a5ac42f3308d",
  location: "Atlanta",
  date: "2024-11-19",
  imageUrl: null,
  bandcampAlbumId: null,
};
const rr22 = {
  id: "ca4d9095-cb3a-46d9-8dd8-3fdc7b15a7b6",
  location: "Red Rocks",
  date: "2022-10-10",
  imageUrl: "https://f4.bcbits.com/img/a3180996672_16.jpg",
  bandcampAlbumId: "2418689883",
};
const nyc24 = {
  id: "4023c755-247d-4b29-86ec-7b1203e93bdf",
  location: "New York City",
  date: "2024-08-16",
  imageUrl: "https://f4.bcbits.com/img/a4160066698_16.jpg",
  bandcampAlbumId: "3530855413",
};
export const seedShows: Omit<Show, "createdAt">[] = [
  bonnaroo22,
  atlanta24,
  rr22,
  nyc24,
];

export const seedPerformances: Omit<
  Performance,
  "createdAt" | "ratingLastUpdatedAt" | "eloRating"
>[] = [
  {
    id: "fa02df1a-87c1-4c1e-9f75-50c1a3903e12",
    songId: workThisTime.id,
    showId: bonnaroo22.id,
    spotifyTrackId: "4b6tZw9nCvkQBlc6Nwi7M5?si=1e93797f9ec94a0a",
    bandcampTrackId: "2385094002",
    youtubeVideoId: "5GycxF0R0G8",
    youtubeVideoStartTime: null,
  },
  {
    id: "77012079-f7fb-4764-9a9a-eef74e7ef072",
    songId: workThisTime.id,
    showId: atlanta24.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "ijYmTy8YnOw",
    youtubeVideoStartTime: null,
  },
  {
    id: "4440adfc-6170-4f63-8e6b-819c1a4e535f",
    songId: workThisTime.id,
    showId: rr22.id,
    spotifyTrackId: "6YE7MsZ4y82v4qvntAeivs",
    bandcampTrackId: "1874767619",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "e899dff3-dabd-4cba-a453-4031f0719805",
    songId: workThisTime.id,
    showId: nyc24.id,
    spotifyTrackId: "31Phk1Hoda4CG1d0dXoOpl",
    bandcampTrackId: "2109737640",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 3294,
  },
];
