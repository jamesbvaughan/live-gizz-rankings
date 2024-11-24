// =============================================================================
//
//                             ABOUT THIS FILE
//
//  This was originally just meant to be for some test data to use during
//  development, with the actual data being managed in the site's UI and with a
//  database as the source of truth.
//
//  But after using this file for a while, I realized that the scale of data
//  I'll be dealing with for this site isn't _that_ big, and that it could be
//  easier to just maintain this text file than to build a whole UI for
//  submitting and managing data in the database.
//
//
//                             HOW TO ADD DATA
//
//  You can add entries to any of the data sets here. For each new item,
//  generate a random UUIDv4 via whatever method you like. (An easy option is to
//  go to https://duck.com/?q=uuid and copy the generated UUID from there.)
//
//  I've taken the image URLs from Bandcamp. At some point, I should probably
//  start hosting those here so that Next.js can optimize their delivery.
//
//  You can find the Spotify/Bandcamp/Youtube IDs by going to the relevant
//  service, generating an embedd snippet for the song of interest, and finding
//  the IDs in the generated HTML.
//
//  After making a change or addition, run `yarn validate-seeds` to check for
//  any errors, like missing or duplicate IDs.
//
// =============================================================================

import { Album, Performance, Show, Song } from "./schema";

// Ordered by release date
export const seedAlbums: Record<string, Omit<Album, "createdAt">> = {
  fafyl: {
    title: "Float Along - Fill Your Lungs",
    id: "55154b57-7925-408c-af21-c94fe06b3d62",
    imageUrl: "https://f4.bcbits.com/img/a3907213656_16.jpg",
    bandcampAlbumId: "1510489151",
  },
  quarters: {
    title: "Quarters",
    id: "5ba9fb14-390a-4f14-a141-21b6fb66adac",
    imageUrl: "https://f4.bcbits.com/img/a3796441552_16.jpg",
    bandcampAlbumId: "1306577560",
  },
  pmdb: {
    title: "Paper Mâché Dream Balloon",
    id: "1d5545eb-e953-41a7-be6d-a3dbb9f5d8e7",
    imageUrl: "https://f4.bcbits.com/img/a2280704800_16.jpg",
    bandcampAlbumId: "1762740948",
  },
  oddments: {
    title: "Oddments",
    id: "7f1d12b4-d57a-42e8-9aae-57082cab5633",
    imageUrl: "https://f4.bcbits.com/img/a0348996479_16.jpg",
    bandcampAlbumId: "3657754108",
  },
  fff: {
    title: "Fishing For Fishies",
    id: "bc67b3f7-af1d-443f-9d28-1c99f6d4aa60",
    imageUrl: "https://f4.bcbits.com/img/a0470322543_16.jpg",
    bandcampAlbumId: "1507780262",
  },
  og: {
    title: "Omnium Gatherum",
    id: "560b0194-19ae-4bc9-aa24-0c2340596af7",
    imageUrl: "https://f4.bcbits.com/img/a2638998972_16.jpg",
    bandcampAlbumId: "129981996",
  },
  iceDeath: {
    title: "Ice, Death, Planets, Lungs, Mushrooms and Lava",
    id: "46f925f1-dd7f-4966-8c02-3562e32f22b5",
    imageUrl: "https://f4.bcbits.com/img/a3317842641_16.jpg",
    bandcampAlbumId: "980855912",
  },
  tsc: {
    title: "The Silver Cord",
    id: "e212c176-b78f-4b0b-93a0-651ca99591e2",
    imageUrl: "https://f4.bcbits.com/img/a0297097933_16.jpg",
    bandcampAlbumId: "2151949833",
  },
  b741: {
    title: "Flight b741",
    id: "3e106926-3ea8-4742-87b4-7ea809799370",
    imageUrl: "https://f4.bcbits.com/img/a3548545002_16.jpg",
    bandcampAlbumId: "104852051",
  },
};

// Ordered by album release date and position on album
export const seedSongs: Record<string, Omit<Song, "createdAt">> = {
  // ====================================================
  // Float Along - Fill Your Lungs
  letMeMendThePast: {
    id: "fa5d8f49-6cee-40f7-b4ea-e68de744035e",
    title: "Let Me Mend the Past",
    albumId: seedAlbums.fafyl.id,
  },

  // ====================================================
  // Quarters
  theRiver: {
    id: "5855d6aa-2dd1-4f82-a2d8-44b4e663eb87",
    title: "The River",
    albumId: seedAlbums.quarters.id,
  },

  // ====================================================
  // Paper Mâché Dream Balloon
  sense: {
    id: "d916bb15-6c5d-4d16-8224-4a4d30bd09b7",
    title: "Sense",
    albumId: seedAlbums.pmdb.id,
  },
  trapdoor: {
    id: "7e5a8135-fab6-4dce-b54e-b784d94a7258",
    title: "Trapdoor",
    albumId: seedAlbums.pmdb.id,
  },

  // ====================================================
  // Oddments
  hotWax: {
    id: "57430f87-f009-4094-8c66-e08b8041bbc3",
    title: "Hot Wax",
    albumId: seedAlbums.oddments.id,
  },
  workThisTime: {
    id: "460537ac-78a5-4358-80d4-e60a3aa78b93",
    title: "Work This Time",
    albumId: seedAlbums.oddments.id,
  },

  // ====================================================
  // Fishing For Fishies
  plasticBoogie: {
    id: "f49713e5-5ddd-4142-b2ef-22dbf7dbb9d7",
    title: "Plastic Boogie",
    albumId: seedAlbums.fff.id,
  },
  thisThing: {
    id: "f4a714ed-0de5-43d3-a92c-14cf1c201c15",
    title: "This Thing",
    albumId: seedAlbums.fff.id,
  },

  // ====================================================
  // Omnium Gatherum
  theDrippingTap: {
    id: "ae4a1559-f995-4ba0-bb49-6c1e34e196b3",
    title: "The Dripping Tap",
    albumId: seedAlbums.og.id,
  },
  magentaMountain: {
    id: "9100f1b2-0e74-40bb-a945-0f59b54fff6d",
    title: "Magenta Mountain",
    albumId: seedAlbums.og.id,
  },
  theGrimReaper: {
    id: "99018b73-3191-49d3-a792-de9ea16b4a0e",
    title: "The Grim Reaper",
    albumId: seedAlbums.og.id,
  },

  // ====================================================
  // Ice, Death, Planets, Lungs, Mushrooms and Lava
  magma: {
    id: "717f22ee-9458-4bca-8dbf-e7940b1e4d96",
    title: "Magma",
    albumId: seedAlbums.iceDeath.id,
  },

  // ====================================================
  // The Silver Cord
  theSilverCord: {
    id: "c7633144-0d11-45a6-ac88-ee089b7e9605",
    title: "The Silver Cord",
    albumId: seedAlbums.tsc.id,
  },

  // ====================================================
  // Flight b741
  leRisque: {
    id: "98521dd4-8ca6-48e2-b7ed-05e3bc765711",
    title: "Le Risque",
    albumId: seedAlbums.b741.id,
  },
};

// Ordered by show date
export const seedShows: Record<string, Omit<Show, "createdAt">> = {
  // ====================================================
  // Europe Tour 2019
  madrid19: {
    id: "11597d9b-21e7-43b7-b681-cd22a31c5a90",
    location: "Madrid",
    date: "2019-10-18",
    imageUrl: "https://f4.bcbits.com/img/a3650674791_16.jpg",
    bandcampAlbumId: "6509641",
  },

  // ====================================================
  // World Tour 2022
  mexicoCity22: {
    id: "8c4b2700-ed44-4a14-8d08-93f6c7a0b5a3",
    location: "Mexico City",
    date: "2022-05-06",
    imageUrl: null,
    bandcampAlbumId: null,
  },
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
  // U.S. Residency Tour 2023
  rr23: {
    id: "af055b78-9c40-4f15-a676-ed05f3485019",
    location: "Red Rocks",
    date: "2023-06-07",
    imageUrl: null,
    bandcampAlbumId: null,
  },
  chicago23: {
    id: "1f8192d8-4650-4837-b119-b82507afe23c",
    location: "Chicago",
    date: "2023-06-11",
    imageUrl: "https://f4.bcbits.com/img/a1324413369_16.jpg",
    bandcampAlbumId: "3977429038",
  },
  remlinger23: {
    id: "ae71a1cd-0823-4feb-85f8-065529415dff",
    location: "Remlinger Farms",
    date: "2023-06-17",
    imageUrl: null,
    bandcampAlbumId: null,
  },

  // ====================================================
  // Europe Tour 2023
  palp23: {
    id: "12a96ecf-2077-4264-8278-e76865b7507e",
    location: "Palp",
    date: "2023-08-14",
    imageUrl: null,
    bandcampAlbumId: null,
  },

  // ====================================================
  // U.S. Tour 2024 pt. 1
  nyc24: {
    id: "4023c755-247d-4b29-86ec-7b1203e93bdf",
    location: "New York City",
    date: "2024-08-16",
    imageUrl: "https://f4.bcbits.com/img/a4160066698_16.jpg",
    bandcampAlbumId: "3530855413",
  },
  kentucky24: {
    id: "fdc39520-041b-4faf-bde8-8288dbbf4f55",
    location: "Kentucky",
    date: "2024-08-25",
    imageUrl: "https://f4.bcbits.com/img/a0274986703_16.jpg",
    bandcampAlbumId: "1304619880",
  },
  minneapolis24: {
    id: "04489d98-d04c-4980-bd62-b9f04807eb9f",
    location: "Minneapolis",
    date: "2024-09-03",
    imageUrl: "https://f4.bcbits.com/img/a2807501952_16.jpg",
    bandcampAlbumId: "1631866248",
  },
  rr24: {
    id: "8fc370f6-46e7-488f-8e69-e4e3f3d10d28",
    location: "Red Rocks",
    date: "2024-09-08",
    imageUrl: "https://f4.bcbits.com/img/a3263389792_16.jpg",
    bandcampAlbumId: "79615285",
  },
  oregon24: {
    id: "1e8be424-f5cf-4d4a-b6c2-b124fdeb405f",
    location: "Oregon",
    date: "2024-09-11",
    imageUrl: "https://f4.bcbits.com/img/a1151612533_10.jpg",
    bandcampAlbumId: "2716193401",
  },
  gorge24: {
    id: "69af662b-164e-499e-a459-e9cb903aae97",
    location: "The Gorge",
    date: "2024-09-14",
    imageUrl: "https://f4.bcbits.com/img/a2893046862_16.jpg",
    bandcampAlbumId: "3746606297",
  },

  // ====================================================
  // U.S. Tour 2024 pt. 2
  stanford24: {
    id: "935dd6ed-2153-4e4b-8bea-1d75825b8fe4",
    location: "Stanford",
    date: "2024-11-04",
    imageUrl: "https://f4.bcbits.com/img/a2511383545_16.jpg",
    bandcampAlbumId: "2620217443",
  },
  phoenix24: {
    id: "8bd9f809-7ab8-4046-9347-e349eb663b86",
    location: "Phoenix",
    date: "2024-11-09",
    imageUrl: "https://f4.bcbits.com/img/a3527600251_16.jpg",
    bandcampAlbumId: "4200479984",
  },
  abq24: {
    id: "f0139f08-7075-4757-b811-9c458d04593c",
    location: "Albuquerque",
    date: "2024-11-10",
    imageUrl: "https://f4.bcbits.com/img/a0496185183_16.jpg",
    bandcampAlbumId: "660285328",
  },
  okc24: {
    id: "6070a189-e1a7-42ce-8d19-f5e43921967d",
    location: "Oklahoma City",
    date: "2024-11-12",
    imageUrl: "https://f4.bcbits.com/img/a1910276487_16.jpg",
    bandcampAlbumId: "2847156728",
  },
  nola24: {
    id: "48d267dc-90a2-401d-aec5-b127a7abe06d",
    location: "New Orleans",
    date: "2024-11-17",
    imageUrl: "https://f4.bcbits.com/img/a2503962224_16.jpg",
    bandcampAlbumId: "3455343812",
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

// Ordered alphabetically by song title, not ordered with songs
export const seedPerformances: Omit<
  Performance,
  "createdAt" | "ratingLastUpdatedAt" | "eloRating"
>[] = [
  // ====================================================
  // The Grim Reaper
  {
    id: "0243fc07-1469-4376-9dc8-cd7314d3dc71",
    songId: seedSongs.theGrimReaper.id,
    showId: seedShows.nola24.id,
    spotifyTrackId: null,
    bandcampTrackId: "2579325509",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Hot Wax
  {
    id: "a3820b34-318b-4ec5-8c16-97e78d696e9e",
    songId: seedSongs.hotWax.id,
    showId: seedShows.nyc24.id,
    spotifyTrackId: "4CjkjneR7VtlpNXljmm0kE",
    bandcampTrackId: "1857901996",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 4534,
  },
  {
    id: "7226d110-9b69-440a-af40-673ab468e0a2",
    songId: seedSongs.hotWax.id,
    showId: seedShows.atlanta24.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "I5S-AMdP4bs",
    youtubeVideoStartTime: 2523,
  },

  // ====================================================
  // Le Risque
  {
    id: "14d48726-2264-49e0-be00-baedc0d2c8bd",
    songId: seedSongs.leRisque.id,
    showId: seedShows.minneapolis24.id,
    spotifyTrackId: "776JDTXwr7BvdDtKGDKXKQ",
    bandcampTrackId: "1366238147",
    youtubeVideoId: "qY7iyjHdBUM",
    youtubeVideoStartTime: 4719,
  },
  {
    id: "43834f0c-0c58-4876-8a4e-d18174054064",
    songId: seedSongs.leRisque.id,
    showId: seedShows.rr24.id,
    spotifyTrackId: "2IKnCNrVaDRR3eFcx4puBO",
    bandcampTrackId: "772454983",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 3745,
  },

  // ====================================================
  // Let Me Mend the Past
  {
    id: "eba540a0-63b1-442d-af61-4306476921fd",
    songId: seedSongs.letMeMendThePast.id,
    showId: seedShows.madrid19.id,
    spotifyTrackId: "5yDNY3VRjynyeuKxuhv04J",
    bandcampTrackId: "3594277571",
    youtubeVideoId: "_faNeGc3p3Y",
    youtubeVideoStartTime: null,
  },
  {
    id: "cac1519d-5f78-400f-992c-c683948cf478",
    songId: seedSongs.letMeMendThePast.id,
    showId: seedShows.gorge24.id,
    spotifyTrackId: "7Fhe1wCQjnFM0cjD9GQFKo",
    bandcampTrackId: "860012551",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 5754,
  },

  // ====================================================
  // Magenta Mountain
  {
    id: "1447a081-953c-4d30-bd14-e43056d3847e",
    songId: seedSongs.magentaMountain.id,
    showId: seedShows.gorge24.id,
    spotifyTrackId: "6qOqkCHPRH831SCRDTqBKv",
    bandcampTrackId: "1569212600",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 6745,
  },
  {
    id: "5507e518-77de-41f7-8ed7-81830b63e78b",
    songId: seedSongs.magentaMountain.id,
    showId: seedShows.mexicoCity22.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "EaU-3FY1JXM",
    youtubeVideoStartTime: 1137,
  },

  // ====================================================
  // Magma
  {
    id: "83354da3-ccf3-4589-875e-0ad48483f47e",
    songId: seedSongs.magma.id,
    showId: seedShows.rr23.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "CkCQskIxtj8",
    youtubeVideoStartTime: null,
  },
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
  {
    id: "fd3fb71e-f290-4ddf-b7c1-0a9d38a3932c",
    songId: seedSongs.magma.id,
    showId: seedShows.gorge24.id,
    spotifyTrackId: "5ZFZKRAaxCbdjD9xi9YMUx",
    bandcampTrackId: "3206819149",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 2561,
  },

  // ====================================================
  // Plastic Boogie
  {
    id: "7465275c-8bba-47af-b84a-3ee345744de4",
    songId: seedSongs.plasticBoogie.id,
    showId: seedShows.okc24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3208205626",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // The River
  {
    id: "6805ba25-34c0-4cbf-a6f9-76bb927f4b99",
    songId: seedSongs.theRiver.id,
    showId: seedShows.rr22.id,
    spotifyTrackId: "1xvoxeB8W7AWLYg3w4WFKh",
    bandcampTrackId: "3613221164",
    youtubeVideoId: "wP3stlzXxDg",
    youtubeVideoStartTime: null,
  },
  {
    id: "900b4f8d-03a7-4302-be8a-06abe289d197",
    songId: seedSongs.theRiver.id,
    showId: seedShows.chicago23.id,
    spotifyTrackId: "3VpnMEZ1t2toMTaE6R0B1z",
    bandcampTrackId: "3791682806",
    youtubeVideoId: "FoKm9lrkPcc",
    youtubeVideoStartTime: null,
  },
  {
    id: "8c1e4ec8-7b9a-42c5-80ae-19d3d91cd61a",
    songId: seedSongs.theRiver.id,
    showId: seedShows.palp23.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "myIjlvrfdfY",
    youtubeVideoStartTime: 1545,
  },

  // ====================================================
  // Sense
  {
    id: "122b97c0-3417-454c-b679-ee07fb8ee86a",
    songId: seedSongs.sense.id,
    showId: seedShows.rr23.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "bsMwq3004x8",
    youtubeVideoStartTime: 1164,
  },
  {
    id: "112e43a6-230b-4ef5-9329-2d09a74fda23",
    songId: seedSongs.sense.id,
    showId: seedShows.kentucky24.id,
    spotifyTrackId: "76OfPpLfZQ0y6Mfn1VnxzC",
    bandcampTrackId: "3200447140",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 5236,
  },

  // ====================================================
  // The Silver Cord
  {
    id: "945f799d-a651-4496-a6aa-f362cddea7d3",
    songId: seedSongs.theSilverCord.id,
    showId: seedShows.gorge24.id,
    spotifyTrackId: "5vpQbAqcghAnzw5CFC4nvM",
    bandcampTrackId: "2584842885",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 7711,
  },

  // ====================================================
  // This Thing
  {
    id: "099acbaf-af1a-4fe4-9c6e-7898d4cfdd00",
    songId: seedSongs.thisThing.id,
    showId: seedShows.phoenix24.id,
    spotifyTrackId: null,
    bandcampTrackId: "1260515879",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Trapdoor
  {
    id: "8f921cb1-2296-4181-83db-9366a633c44c",
    songId: seedSongs.trapdoor.id,
    showId: seedShows.nola24.id,
    spotifyTrackId: null,
    bandcampTrackId: "2759753713",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Work This Time
  {
    id: "fa02df1a-87c1-4c1e-9f75-50c1a3903e12",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.bonnaroo22.id,
    spotifyTrackId: "4b6tZw9nCvkQBlc6Nwi7M5",
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
  {
    id: "3a0e7305-20f2-43c6-aac0-082e5e12c87d",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.remlinger23.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "ZvMPzVVWQIA",
    youtubeVideoStartTime: null,
  },
];
