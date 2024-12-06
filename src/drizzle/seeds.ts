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
export const seedAlbums = {
  fafyl: {
    title: "Float Along - Fill Your Lungs",
    slug: "float-along-fill-your-lungs",
    id: "55154b57-7925-408c-af21-c94fe06b3d62",
    imageUrl: "https://f4.bcbits.com/img/a3907213656_16.jpg",
    bandcampAlbumId: "1510489151",
  },
  oddments: {
    title: "Oddments",
    slug: "oddments",
    id: "7f1d12b4-d57a-42e8-9aae-57082cab5633",
    imageUrl: "https://f4.bcbits.com/img/a0348996479_16.jpg",
    bandcampAlbumId: "3657754108",
  },
  mindFuzz: {
    title: "I'm In Your Mind Fuzz",
    slug: "im-in-your-mind-fuzz",
    id: "29ae645d-1487-4963-9605-25a24904c205",
    imageUrl: "https://f4.bcbits.com/img/a3937834400_16.jpg",
    bandcampAlbumId: "3101239241",
  },
  quarters: {
    title: "Quarters",
    slug: "quarters",
    id: "5ba9fb14-390a-4f14-a141-21b6fb66adac",
    imageUrl: "https://f4.bcbits.com/img/a3796441552_16.jpg",
    bandcampAlbumId: "1306577560",
  },
  pmdb: {
    title: "Paper Mâché Dream Balloon",
    slug: "paper-mache-dream-balloon",
    id: "1d5545eb-e953-41a7-be6d-a3dbb9f5d8e7",
    imageUrl: "https://f4.bcbits.com/img/a2280704800_16.jpg",
    bandcampAlbumId: "1762740948",
  },
  nonagon: {
    title: "Nonagon Infinity",
    slug: "nonagon-infinity",
    id: "8a1332c8-c7d2-481c-9551-afa8bab79bd6",
    imageUrl: "https://f4.bcbits.com/img/a1566708845_16.jpg",
    bandcampAlbumId: "87057479",
  },
  fmb: {
    title: "Flying Microtonal Banana",
    slug: "flying-microtonal-banana",
    id: "003314d7-fe25-4742-8b47-cb52f7966bc2",
    imageUrl: "https://f4.bcbits.com/img/a2731568276_16.jpg",
    bandcampAlbumId: "114372498",
  },
  sketches: {
    title: "Sketches of Brunswick East",
    slug: "sketches-of-brunswick-east",
    id: "a8fcce86-fab9-44d1-b3c2-1c6b1297ab2e",
    imageUrl: "https://f4.bcbits.com/img/a4206546710_16.jpg",
    bandcampAlbumId: "1255749163",
  },
  fff: {
    title: "Fishing For Fishies",
    slug: "fishing-for-fishies",
    id: "bc67b3f7-af1d-443f-9d28-1c99f6d4aa60",
    imageUrl: "https://f4.bcbits.com/img/a0470322543_16.jpg",
    bandcampAlbumId: "1507780262",
  },
  itrn: {
    title: "Infest the Rats' Nest",
    slug: "infest-the-rats-nest",
    id: "e889bd13-f73f-40fc-8ea9-17a6c3e9ad26",
    imageUrl: "https://f4.bcbits.com/img/a0402916090_16.jpg",
    bandcampAlbumId: "3925296262",
  },
  bf3k: {
    title: "Butterfly 3000",
    slug: "butterfly-3000",
    id: "40fdce93-4438-4700-8721-9fade20341a0",
    imageUrl: "https://f4.bcbits.com/img/a3009849752_16.jpg",
    bandcampAlbumId: "3244133050",
  },
  og: {
    title: "Omnium Gatherum",
    slug: "omnium-gatherum",
    id: "560b0194-19ae-4bc9-aa24-0c2340596af7",
    imageUrl: "https://f4.bcbits.com/img/a2638998972_16.jpg",
    bandcampAlbumId: "129981996",
  },
  iceDeath: {
    title: "Ice, Death, Planets, Lungs, Mushrooms and Lava",
    slug: "ice-death-planets-lungs-mushrooms-and-lava",
    id: "46f925f1-dd7f-4966-8c02-3562e32f22b5",
    imageUrl: "https://f4.bcbits.com/img/a3317842641_16.jpg",
    bandcampAlbumId: "980855912",
  },
  petro: {
    title:
      "PetroDragonic Apocalypse; or, Dawn of Eternal Night: An Annihilation of Planet Earth and the Beginning of Merciless Damnation",
    slug: "petro",
    id: "f43bb6f3-6b08-4687-a39e-a4f379325f93",
    imageUrl: "https://f4.bcbits.com/img/a2805471381_16.jpg",
    bandcampAlbumId: "3699259806",
  },
  tsc: {
    title: "The Silver Cord",
    slug: "the-silver-cord",
    id: "e212c176-b78f-4b0b-93a0-651ca99591e2",
    imageUrl: "https://f4.bcbits.com/img/a0297097933_16.jpg",
    bandcampAlbumId: "2151949833",
  },
  b741: {
    title: "Flight b741",
    slug: "flight-b741",
    id: "3e106926-3ea8-4742-87b4-7ea809799370",
    imageUrl: "https://f4.bcbits.com/img/a3548545002_16.jpg",
    bandcampAlbumId: "104852051",
  },
} as const satisfies Record<string, Omit<Album, "createdAt">>;
export const allAlbums = Object.values(seedAlbums) as Album[];

// Ordered by album release date and position on album
export const seedSongs = {
  // ====================================================
  // Float Along - Fill Your Lungs
  headOn: {
    id: "556e6f5e-9099-4351-9c7e-0edb17e76b73",
    slug: "head-on-pill",
    title: "Head On/Pill",
    albumId: seedAlbums.fafyl.id,
  },
  letMeMendThePast: {
    id: "fa5d8f49-6cee-40f7-b4ea-e68de744035e",
    slug: "let-me-mend-the-past",
    title: "Let Me Mend the Past",
    albumId: seedAlbums.fafyl.id,
  },
  fafyl: {
    id: "4a0aac05-3060-4750-9eb0-fd6a058fbfc1",
    slug: "float-along-fill-your-lungs",
    title: "Float Along - Fill Your Lungs",
    albumId: seedAlbums.fafyl.id,
  },

  // ====================================================
  // Oddments
  hotWax: {
    id: "57430f87-f009-4094-8c66-e08b8041bbc3",
    slug: "hot-wax",
    title: "Hot Wax",
    albumId: seedAlbums.oddments.id,
  },
  workThisTime: {
    id: "460537ac-78a5-4358-80d4-e60a3aa78b93",
    slug: "work-this-time",
    title: "Work This Time",
    albumId: seedAlbums.oddments.id,
  },

  // ====================================================
  // I'm In Your Mind Fuzz
  slowJam1: {
    id: "d8206c9b-096f-4c9b-a477-ec36ed88de72",
    slug: "slow-jam-1",
    title: "Slow Jam 1",
    albumId: seedAlbums.mindFuzz.id,
  },
  herAndI: {
    id: "a0d4e6aa-e5d8-4402-82ef-27918958dafd",
    slug: "her-and-i-slow-jam-2",
    title: "Her and I (Slow Jam 2)",
    albumId: seedAlbums.mindFuzz.id,
  },

  // ====================================================
  // Quarters
  theRiver: {
    id: "5855d6aa-2dd1-4f82-a2d8-44b4e663eb87",
    slug: "the-river",
    title: "The River",
    albumId: seedAlbums.quarters.id,
  },

  // ====================================================
  // Paper Mâché Dream Balloon
  sense: {
    id: "d916bb15-6c5d-4d16-8224-4a4d30bd09b7",
    slug: "sense",
    title: "Sense",
    albumId: seedAlbums.pmdb.id,
  },
  trapdoor: {
    id: "7e5a8135-fab6-4dce-b54e-b784d94a7258",
    slug: "trapdoor",
    title: "Trapdoor",
    albumId: seedAlbums.pmdb.id,
  },

  // ====================================================
  // Flying Microtonal Banana
  openWater: {
    id: "b2906883-cc2a-4bd6-96c4-6c728b60dd54",
    slug: "open-water",
    title: "Open Water",
    albumId: seedAlbums.fmb.id,
  },
  billabongValley: {
    id: "26a34912-4213-4d6b-b9db-9c8098cc636b",
    slug: "billabong-valley",
    title: "Billabong Valley",
    albumId: seedAlbums.fmb.id,
  },

  // ====================================================
  // Nonagon Infinity
  robotStop: {
    id: "047f1192-9893-4776-882f-d76542a71943",
    slug: "robot-stop",
    title: "Robot Stop",
    albumId: seedAlbums.nonagon.id,
  },

  // ====================================================
  // Sketches of Brunswick East
  theBook: {
    id: "d7f653a1-f774-4462-8ad6-dde97a0bce4f",
    slug: "the-book",
    title: "The Book",
    albumId: seedAlbums.sketches.id,
  },

  // ====================================================
  // Fishing For Fishies
  plasticBoogie: {
    id: "f49713e5-5ddd-4142-b2ef-22dbf7dbb9d7",
    slug: "plastic-boogie",
    title: "Plastic Boogie",
    albumId: seedAlbums.fff.id,
  },
  thisThing: {
    id: "f4a714ed-0de5-43d3-a92c-14cf1c201c15",
    slug: "this-thing",
    title: "This Thing",
    albumId: seedAlbums.fff.id,
  },

  // ====================================================
  // Infest the Rats' Nest
  hell: {
    id: "babd0c51-56c4-4b07-91ce-c734e797e876",
    slug: "hell",
    title: "Hell",
    albumId: seedAlbums.itrn.id,
  },

  // ====================================================
  // Butterfly 3000
  shanghai: {
    id: "f927bc2e-d505-4cd6-8357-f3d73ded4403",
    slug: "shanghai",
    title: "Shanghai",
    albumId: seedAlbums.bf3k.id,
  },
  interiorPeople: {
    id: "96f2555a-796d-4dd1-8bfa-52c007a55190",
    slug: "interior-people",
    title: "Interior People",
    albumId: seedAlbums.bf3k.id,
  },

  // ====================================================
  // Omnium Gatherum
  theDrippingTap: {
    id: "ae4a1559-f995-4ba0-bb49-6c1e34e196b3",
    slug: "the-dripping-tap",
    title: "The Dripping Tap",
    albumId: seedAlbums.og.id,
  },
  magentaMountain: {
    id: "9100f1b2-0e74-40bb-a945-0f59b54fff6d",
    slug: "magenta-mountain",
    title: "Magenta Mountain",
    albumId: seedAlbums.og.id,
  },
  theGrimReaper: {
    id: "99018b73-3191-49d3-a792-de9ea16b4a0e",
    slug: "the-grim-reaper",
    title: "The Grim Reaper",
    albumId: seedAlbums.og.id,
  },

  // ====================================================
  // Ice, Death, Planets, Lungs, Mushrooms and Lava
  magma: {
    id: "717f22ee-9458-4bca-8dbf-e7940b1e4d96",
    slug: "magma",
    title: "Magma",
    albumId: seedAlbums.iceDeath.id,
  },

  // ====================================================
  // PetroDragonic Apocalypse; or, Dawn of Eternal Night:
  // An Annihilation of Planet Earth and the Beginning of Merciless Damnation
  motorSpirit: {
    id: "7a076db2-b2b7-4cea-a0cb-2abdaf36c7a1",
    slug: "motor-spirit",
    title: "Motor Spirit",
    albumId: seedAlbums.petro.id,
  },
  supercell: {
    id: "eb1c3c7a-c735-4013-8408-64be214d6a39",
    slug: "supercell",
    title: "Supercell",
    albumId: seedAlbums.petro.id,
  },
  converge: {
    id: "8879d2b7-57e3-4e38-bc0c-250f3b5fb288",
    slug: "converge",
    title: "Converge",
    albumId: seedAlbums.petro.id,
  },
  witchcraft: {
    id: "e5e33a88-2ae2-4c49-914b-837d01aa088c",
    slug: "witchcraft",
    title: "Witchcraft",
    albumId: seedAlbums.petro.id,
  },
  gilaMonster: {
    id: "259d79c1-2e33-478f-b670-4e64d416c6f2",
    slug: "gila-monster",
    title: "Gila Monster",
    albumId: seedAlbums.petro.id,
  },
  dragon: {
    id: "615908d3-72ae-4034-8d28-59cdf0341967",
    slug: "dragon",
    title: "Dragon",
    albumId: seedAlbums.petro.id,
  },
  flamethrower: {
    id: "20a76786-5937-4b04-bcaa-37916a9edced",
    slug: "flamethrower",
    title: "Flamethrower",
    albumId: seedAlbums.petro.id,
  },

  // ====================================================
  // The Silver Cord
  theSilverCord: {
    id: "c7633144-0d11-45a6-ac88-ee089b7e9605",
    slug: "the-silver-cord",
    title: "The Silver Cord",
    albumId: seedAlbums.tsc.id,
  },

  // ====================================================
  // Flight b741
  mirageCity: {
    id: "c842a0d7-2f49-4a2d-8f05-4f2f19aae3e9",
    slug: "mirage-city",
    title: "Mirage City",
    albumId: seedAlbums.b741.id,
  },
  fieldOfVision: {
    id: "89b0330f-92a1-4df9-b3a9-539fabb5ab8a",
    slug: "field-of-vision",
    title: "Field of Vision",
    albumId: seedAlbums.b741.id,
  },
  leRisque: {
    id: "98521dd4-8ca6-48e2-b7ed-05e3bc765711",
    slug: "le-risque",
    title: "Le Risque",
    albumId: seedAlbums.b741.id,
  },
} as const satisfies Record<string, Omit<Song, "createdAt">>;
export const allSongs = Object.values(seedSongs) as Song[];

// Ordered by show date
export const seedShows = {
  // ====================================================
  // Europe Tour 2019
  madrid19: {
    id: "11597d9b-21e7-43b7-b681-cd22a31c5a90",
    slug: "madrid-2019",
    location: "Madrid",
    date: "2019-10-18",
    imageUrl: "https://f4.bcbits.com/img/a3650674791_16.jpg",
    bandcampAlbumId: "6509641",
  },

  // ====================================================
  // World Tour 2022
  mexicoCity22: {
    id: "8c4b2700-ed44-4a14-8d08-93f6c7a0b5a3",
    slug: "mexico-city-2022",
    location: "Mexico City",
    date: "2022-05-06",
    imageUrl: "/showCovers/mexicoCity22.webp",
    bandcampAlbumId: null,
  },
  bonnaroo22: {
    id: "1744f3c5-8da4-4e28-845d-0b2cf02db7a1",
    slug: "bonnaroo-2022",
    location: "Bonnaroo",
    date: "2022-06-17",
    imageUrl: "https://f4.bcbits.com/img/a3553224286_16.jpg",
    bandcampAlbumId: "1363173846",
  },
  rr22: {
    id: "ca4d9095-cb3a-46d9-8dd8-3fdc7b15a7b6",
    slug: "red-rocks-2022",
    location: "Red Rocks",
    date: "2022-10-10",
    imageUrl: "https://f4.bcbits.com/img/a3180996672_16.jpg",
    bandcampAlbumId: "2418689883",
  },

  // ====================================================
  // U.S. Residency Tour 2023
  rr23: {
    id: "af055b78-9c40-4f15-a676-ed05f3485019",
    slug: "red-rocks-2023",
    location: "Red Rocks",
    date: "2023-06-07",
    imageUrl: "/showCovers/rr23.webp",
    bandcampAlbumId: null,
  },
  chicago23: {
    id: "1f8192d8-4650-4837-b119-b82507afe23c",
    slug: "chicago-2023",
    location: "Chicago",
    date: "2023-06-11",
    imageUrl: "https://f4.bcbits.com/img/a1324413369_16.jpg",
    bandcampAlbumId: "3977429038",
  },
  remlinger23: {
    id: "ae71a1cd-0823-4feb-85f8-065529415dff",
    slug: "remlinger-farms-2023",
    location: "Remlinger Farms",
    date: "2023-06-17",
    imageUrl: "/showCovers/remlinger23.webp",
    bandcampAlbumId: null,
  },

  // ====================================================
  // Europe & UK Tour 2023
  warsaw23: {
    id: "4c9a09b8-d363-4220-976e-1071ab0b302c",
    slug: "warsaw-2023",
    location: "Warsaw",
    date: "2023-03-11",
    imageUrl: "/showCovers/warsaw23.webp",
    bandcampAlbumId: null,
  },
  palp23: {
    id: "12a96ecf-2077-4264-8278-e76865b7507e",
    slug: "palp-2023",
    location: "Palp",
    date: "2023-08-14",
    imageUrl: null,
    bandcampAlbumId: null,
  },

  // ====================================================
  // U.S. Tour 2024 pt. 1
  nyc24: {
    id: "4023c755-247d-4b29-86ec-7b1203e93bdf",
    slug: "nyc-2024",
    location: "New York City",
    date: "2024-08-16",
    imageUrl: "https://f4.bcbits.com/img/a4160066698_16.jpg",
    bandcampAlbumId: "3530855413",
  },
  maine24: {
    id: "212bb7b3-2ed9-4270-bf35-7026716a36b6",
    slug: "maine-2024",
    location: "Maine",
    date: "2024-08-20",
    imageUrl: "https://f4.bcbits.com/img/a1001399634_16.jpg",
    bandcampAlbumId: "2637870866",
  },
  cleveland24: {
    id: "491b11cb-b085-4081-a6d0-a9070532b82d",
    slug: "cleveland-2024",
    location: "Cleveland",
    date: "2024-08-24",
    imageUrl: "https://f4.bcbits.com/img/a4062916790_16.jpg",
    bandcampAlbumId: "4147847254",
  },
  kentucky24: {
    id: "fdc39520-041b-4faf-bde8-8288dbbf4f55",
    slug: "kentucky-2024",
    location: "Kentucky",
    date: "2024-08-25",
    imageUrl: "https://f4.bcbits.com/img/a0274986703_16.jpg",
    bandcampAlbumId: "1304619880",
  },
  minneapolis24: {
    id: "04489d98-d04c-4980-bd62-b9f04807eb9f",
    slug: "minneapolis-2024",
    location: "Minneapolis",
    date: "2024-09-03",
    imageUrl: "https://f4.bcbits.com/img/a2807501952_16.jpg",
    bandcampAlbumId: "1631866248",
  },
  milwaukee24: {
    id: "6aadd547-499e-4b52-9b29-76682af9614e",
    slug: "milwaukee-2024",
    location: "Milwaukee",
    date: "2024-09-04",
    imageUrl: "https://f4.bcbits.com/img/a0203986788_16.jpg",
    bandcampAlbumId: "1407410068",
  },
  stl24: {
    id: "29361dc0-6671-4297-8157-5eb03bdbf7b2",
    slug: "st-louis-2024",
    location: "St. Louis",
    date: "2024-09-05",
    imageUrl: "https://f4.bcbits.com/img/a1541766080_16.jpg",
    bandcampAlbumId: "2447524963",
  },
  rr24: {
    id: "8fc370f6-46e7-488f-8e69-e4e3f3d10d28",
    slug: "red-rocks-2024",
    location: "Red Rocks",
    date: "2024-09-08",
    imageUrl: "https://f4.bcbits.com/img/a3263389792_16.jpg",
    bandcampAlbumId: "79615285",
  },
  oregon24: {
    id: "1e8be424-f5cf-4d4a-b6c2-b124fdeb405f",
    slug: "oregon-2024",
    location: "Oregon",
    date: "2024-09-11",
    imageUrl: "https://f4.bcbits.com/img/a1151612533_10.jpg",
    bandcampAlbumId: "2716193401",
  },
  gorge24: {
    id: "69af662b-164e-499e-a459-e9cb903aae97",
    slug: "the-gorge-2024",
    location: "The Gorge",
    date: "2024-09-14",
    imageUrl: "https://f4.bcbits.com/img/a2893046862_16.jpg",
    bandcampAlbumId: "3746606297",
  },

  // ====================================================
  // U.S. Tour 2024 pt. 2
  la24: {
    id: "a81ef768-32b5-4fbd-8d9e-fefd3cf44411",
    slug: "los-angeles-2024",
    location: "Los Angeles",
    date: "2024-11-01",
    imageUrl: "https://f4.bcbits.com/img/a3083529929_16.jpg",
    bandcampAlbumId: "2053666447",
  },
  sd24: {
    // Acoustic!
    id: "481aec4e-39bb-48d9-8082-4469c74e00da",
    slug: "san-diego-2024",
    location: "San Diego",
    date: "2024-11-02",
    imageUrl: "https://f4.bcbits.com/img/a3464482652_16.jpg",
    bandcampAlbumId: "3483464958",
  },
  stanford24: {
    id: "935dd6ed-2153-4e4b-8bea-1d75825b8fe4",
    slug: "stanford-2024",
    location: "Stanford",
    date: "2024-11-04",
    imageUrl: "https://f4.bcbits.com/img/a2511383545_16.jpg",
    bandcampAlbumId: "2620217443",
  },
  vegas24: {
    id: "06c550a5-028e-438c-b8a7-6ede67b3737f",
    slug: "las-vegas-2024",
    location: "Las Vegas",
    date: "2024-11-08",
    imageUrl: "https://f4.bcbits.com/img/a3468174213_16.jpg",
    bandcampAlbumId: "1104627077",
  },
  phoenix24: {
    id: "8bd9f809-7ab8-4046-9347-e349eb663b86",
    slug: "phoenix-2024",
    location: "Phoenix",
    date: "2024-11-09",
    imageUrl: "https://f4.bcbits.com/img/a3527600251_16.jpg",
    bandcampAlbumId: "4200479984",
  },
  abq24: {
    id: "f0139f08-7075-4757-b811-9c458d04593c",
    slug: "albuquerque-2024",
    location: "Albuquerque",
    date: "2024-11-10",
    imageUrl: "https://f4.bcbits.com/img/a0496185183_16.jpg",
    bandcampAlbumId: "660285328",
  },
  okc24: {
    id: "6070a189-e1a7-42ce-8d19-f5e43921967d",
    slug: "oklahoma-city-2024",
    location: "Oklahoma City",
    date: "2024-11-12",
    imageUrl: "https://f4.bcbits.com/img/a1910276487_16.jpg",
    bandcampAlbumId: "2847156728",
  },
  austin24: {
    id: "2b1b2dec-7264-4891-ba73-f7116e0818ff",
    slug: "austin-2024",
    location: "Austin",
    date: "2024-11-15",
    imageUrl: "https://f4.bcbits.com/img/a2463924603_16.jpg",
    bandcampAlbumId: "719227306",
  },
  houston24: {
    id: "8b1615e0-a6dc-42f6-b61c-465971545450",
    slug: "houston-2024",
    location: "Houston",
    date: "2024-11-16",
    imageUrl: "https://f4.bcbits.com/img/a3220456230_16.jpg",
    bandcampAlbumId: "3854890243",
  },
  nola24: {
    id: "48d267dc-90a2-401d-aec5-b127a7abe06d",
    slug: "new-orleans-2024",
    location: "New Orleans",
    date: "2024-11-17",
    imageUrl: "https://f4.bcbits.com/img/a2503962224_16.jpg",
    bandcampAlbumId: "3455343812",
  },
  atlanta24: {
    id: "8af52ec8-f9a6-43e3-ad24-a5ac42f3308d",
    slug: "atlanta-2024",
    location: "Atlanta",
    date: "2024-11-19",
    imageUrl: "https://f4.bcbits.com/img/a2812384254_16.jpg",
    bandcampAlbumId: "3316613276",
  },
  stAugustine24: {
    id: "2abeb068-9075-483d-8dc3-66a24a5e528c",
    slug: "st-augustine-2024",
    location: "St. Augustine",
    date: "2024-11-20",
    imageUrl: "https://f4.bcbits.com/img/a1954948404_16.jpg",
    bandcampAlbumId: "1834138981",
  },
  miami24: {
    id: "2c2ae0d1-f46a-409e-9fa4-1c046bdacd9d",
    slug: "miami-2024",
    location: "Miami",
    date: "2024-11-21",
    imageUrl: "https://f4.bcbits.com/img/a1675499924_16.jpg",
    bandcampAlbumId: "4243074642",
  },
} as const satisfies Record<string, Omit<Show, "createdAt">>;
export const allShows = Object.values(seedShows) as Show[];

// Ordered alphabetically by song title, not ordered with songs
export const seedPerformances = [
  // ====================================================
  // Billabong Valley
  {
    id: "1ef77fac-6429-4b08-b567-7bfec3cd35c0",
    songId: seedSongs.billabongValley.id,
    showId: seedShows.milwaukee24.id,
    spotifyTrackId: "1W2oJM2m0r0dAmkN8vyRtZ",
    bandcampTrackId: "565249783",
    youtubeVideoId: "cTO9U8nG280",
    youtubeVideoStartTime: 7426,
  },

  // ====================================================
  // The Book
  {
    id: "e411b59b-0814-4c12-a020-bb7a17c6de80",
    songId: seedSongs.theBook.id,
    showId: seedShows.stl24.id,
    spotifyTrackId: "43Gg2ItnDmSQMa4dSH42oC",
    bandcampTrackId: "3317707139",
    youtubeVideoId: "FGOsQiPCpEA",
    youtubeVideoStartTime: 2168,
  },

  // ====================================================
  // Converge
  {
    id: "3d1cb14d-3f71-4250-8d89-087824b5cbca",
    songId: seedSongs.converge.id,
    showId: seedShows.nyc24.id,
    spotifyTrackId: "5pjMPlXJedFoUauZCgNRKi",
    bandcampTrackId: "1080660396",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 5257,
  },
  {
    id: "a53404e6-cd75-4aee-b28b-a61a7053c01c",
    songId: seedSongs.converge.id,
    showId: seedShows.kentucky24.id,
    spotifyTrackId: "6BXiniViNwI2URSWZ5VNMk",
    bandcampTrackId: "3111015917",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 2983,
  },

  // ====================================================
  // Dragon
  {
    id: "21fed194-6093-4628-bffd-cde4644e9ff2",
    songId: seedSongs.dragon.id,
    showId: seedShows.cleveland24.id,
    spotifyTrackId: "1o67U4f00s9QcsLAYpthl2",
    bandcampTrackId: "358317737",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 6877,
  },
  {
    id: "5da1257c-dff0-4cbd-838a-b1f2722b9d58",
    songId: seedSongs.dragon.id,
    showId: seedShows.rr24.id,
    spotifyTrackId: "4Y3ulPERqtPvUvjXgoAk0b",
    bandcampTrackId: "4104860493",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 4404,
  },

  // ====================================================
  // The Dripping Tap
  {
    id: "5022ab78-932a-4259-aee3-5258c0da2b6d",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.oregon24.id,
    spotifyTrackId: "2CTTyK9PKu3l4NqRzcPz3I",
    bandcampTrackId: "3160394251",
    youtubeVideoId: "k69DG8aZ6mw",
    youtubeVideoStartTime: 430,
  },
  {
    id: "3660d32e-f36d-4a25-a9ef-1bd76a3b7a1b",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.maine24.id,
    spotifyTrackId: "3zHBOqkLTsy98klQ5yKgds",
    bandcampTrackId: "1178632036",
    youtubeVideoId: "6JS4Uq8X6X8",
    youtubeVideoStartTime: 6350,
  },

  // ====================================================
  // Field of Vision
  {
    id: "17232093-089f-4133-9b92-41d7306e258b",
    songId: seedSongs.fieldOfVision.id,
    showId: seedShows.stanford24.id,
    spotifyTrackId: null,
    bandcampTrackId: "2767430040",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "3cc50612-b3bf-4d7d-a04e-02c1647e2f3e",
    songId: seedSongs.fieldOfVision.id,
    showId: seedShows.abq24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3432281975",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Flamethrower
  {
    id: "26a94f68-1544-4654-9c95-d46736cfa115",
    songId: seedSongs.flamethrower.id,
    showId: seedShows.cleveland24.id,
    spotifyTrackId: "1TrcOMQEKAf3S028tgJ5BP",
    bandcampTrackId: "2113186532",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 6501,
  },
  {
    id: "2c31152a-fa9f-4066-9404-746fd5302278",
    songId: seedSongs.flamethrower.id,
    showId: seedShows.nyc24.id,
    spotifyTrackId: "3M9KMHUTs4KK8iAR8W22Q5",
    bandcampTrackId: "3074457233",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 6824,
  },
  {
    id: "bde784d7-5d75-42cb-9faf-892604c95314",
    songId: seedSongs.flamethrower.id,
    showId: seedShows.stAugustine24.id,
    spotifyTrackId: null,
    bandcampTrackId: "307643811",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Float Along - Fill Your Lungs
  {
    id: "a12280bf-6c20-4768-9d42-d98c4d5e799d",
    songId: seedSongs.fafyl.id,
    showId: seedShows.miami24.id,
    spotifyTrackId: null,
    bandcampTrackId: "1130482149",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Gila Monster
  {
    id: "acc7c935-9a69-4a72-9d72-8bf1030e97bf",
    songId: seedSongs.gilaMonster.id,
    showId: seedShows.cleveland24.id,
    spotifyTrackId: "0iENbL7mwaoYJEOph99UQb",
    bandcampTrackId: "396623506",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 7470,
  },
  {
    id: "ce6b7332-bfb3-4da1-a22c-0af4e956f178",
    songId: seedSongs.gilaMonster.id,
    showId: seedShows.austin24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3138958661",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

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
  {
    id: "2304ff6d-2f92-43b1-b447-568dc96f4fdd",
    songId: seedSongs.theGrimReaper.id,
    showId: seedShows.vegas24.id,
    spotifyTrackId: null,
    bandcampTrackId: "4158827757",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Head On/Pill
  {
    id: "ddad346f-80c8-4b2d-ac0a-e884d6e8abf6",
    songId: seedSongs.headOn.id,
    showId: seedShows.austin24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3941477526",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Hell
  {
    id: "cddf4cb0-e21c-4073-8fd4-50df154d3c62",
    songId: seedSongs.hell.id,
    showId: seedShows.la24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3251862866",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Her and I (Slow Jam 2)
  {
    id: "3322528a-0349-4d79-8449-42434abff995",
    songId: seedSongs.herAndI.id,
    showId: seedShows.atlanta24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3562250543",
    youtubeVideoId: null,
    youtubeVideoStartTime: 4534,
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
    bandcampTrackId: "1768274572",
    youtubeVideoId: "I5S-AMdP4bs",
    youtubeVideoStartTime: 2523,
  },

  // ====================================================
  // Interior People
  {
    id: "eb5d8e1a-2637-476d-9fd7-8909caf62fff",
    songId: seedSongs.interiorPeople.id,
    showId: seedShows.vegas24.id,
    spotifyTrackId: null,
    bandcampTrackId: "1493100647",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
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
  // Mirage City
  {
    id: "ab36e296-a0a9-4553-9c7e-8efec595c58b",
    songId: seedSongs.mirageCity.id,
    showId: seedShows.abq24.id,
    spotifyTrackId: null,
    bandcampTrackId: "804204545",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Motor Spirit
  {
    id: "bed7020d-dd44-4399-a0fb-ebe07b9bbda4",
    songId: seedSongs.motorSpirit.id,
    showId: seedShows.nyc24.id,
    spotifyTrackId: "4IUcqbuMq35rfybFc25PmS",
    bandcampTrackId: "2302924408",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 7128,
  },
  {
    id: "7a2c68cc-caf5-4aa4-a84f-9fe787999367",
    songId: seedSongs.motorSpirit.id,
    showId: seedShows.kentucky24.id,
    spotifyTrackId: "1ZKS4yZgNzgbL1AsWHI73R",
    bandcampTrackId: "45887920",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 1629,
  },

  // ====================================================
  // Open Water
  {
    id: "eca3f420-ca48-4e40-bcd5-c7d9f2274d66",
    songId: seedSongs.openWater.id,
    showId: seedShows.gorge24.id,
    spotifyTrackId: "5PZtsofG0HiTJgQtfHOuVV",
    bandcampTrackId: "1325552537",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 2139,
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
  // Robot Stop
  {
    id: "f8c20b2c-c004-47ab-8604-7c9dcfd9d0c7",
    songId: seedSongs.robotStop.id,
    showId: seedShows.bonnaroo22.id,
    spotifyTrackId: "0fyuQlbg24Y5MkvpDS0LDi",
    bandcampTrackId: "3563988407",
    youtubeVideoId: "TbTBVZuTq4k",
    youtubeVideoStartTime: 65,
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
  {
    id: "1c7d7c58-d3a7-4936-b65a-baf48d89c5e0",
    songId: seedSongs.sense.id,
    showId: seedShows.sd24.id,
    spotifyTrackId: "1h7phi5cC4rev9hi6RQhVA",
    bandcampTrackId: "548760256",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Shanghai
  {
    id: "fd1c988c-fe8b-4374-b6a1-8c609c2e7b05",
    songId: seedSongs.shanghai.id,
    showId: seedShows.warsaw23.id,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "LpzCgLjOmHg",
    youtubeVideoStartTime: 3130,
  },
  {
    id: "6a920bec-910e-4db3-94ec-e647b647697a",
    songId: seedSongs.shanghai.id,
    showId: seedShows.vegas24.id,
    spotifyTrackId: null,
    bandcampTrackId: "1382317975",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "f9b66434-1cf6-4fcc-9549-852e3ee53b10",
    songId: seedSongs.shanghai.id,
    showId: seedShows.nola24.id,
    spotifyTrackId: null,
    bandcampTrackId: "1794158865",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
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
  // Slow Jam 1
  {
    id: "c5d9c89b-f30c-43b9-b089-2e215377d4da",
    songId: seedSongs.slowJam1.id,
    showId: seedShows.la24.id,
    spotifyTrackId: null,
    bandcampTrackId: "797472773",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Supercell
  {
    id: "fd75230f-fa9d-4226-ac9d-9ba6d6256e61",
    songId: seedSongs.supercell.id,
    showId: seedShows.abq24.id,
    spotifyTrackId: null,
    bandcampTrackId: "3435936842",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
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
  // Witchcraft
  {
    id: "51482dd3-f28e-470d-89ab-7f7f902137ef",
    songId: seedSongs.witchcraft.id,
    showId: seedShows.sd24.id,
    spotifyTrackId: null,
    bandcampTrackId: "2575113191",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "a2894ae5-3616-442f-ab87-2481ecb4ce5d",
    songId: seedSongs.witchcraft.id,
    showId: seedShows.oregon24.id,
    spotifyTrackId: "4Pjh8T0eOv75ClSpGKaQKv",
    bandcampTrackId: "1450224668",
    youtubeVideoId: "k69DG8aZ6mw",
    youtubeVideoStartTime: 5000,
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
    bandcampTrackId: "3726265588",
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
] as const satisfies Omit<
  Performance,
  "createdAt" | "ratingLastUpdatedAt" | "eloRating"
>[];
export const allPerformances = seedPerformances as unknown as Performance[];
