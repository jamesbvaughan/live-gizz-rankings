// =============================================================================
//
//                                ABOUT THIS FILE
//
//  This was originally just intended to be test data to use during development,
//  with the _actual_ data being managed in the site's UI and with a database as
//  the source of truth.
//
//  But after using this file for a while, I realized that the scale of the data
//  I'll be dealing with here isn't really _that_ big, and it could be easier to
//  just maintain this text file than to build a whole UI for
//  submitting and managing data in the database.
//
//
//                                HOW TO ADD DATA
//
//  You can add new entries to any of the data sets here. For each new item, you
//  will need to generate a random UUIDv4 via whatever method you like. (An easy
//  option is to go to https://duck.com/?q=uuid and copy the generated UUID from
//  there.)
//
//  I've taken the image URLs from Bandcamp album pages. For those shows that do
//  not have official albums on Bandcamp, I either cropped squares from the show
//  poster or leave the show with no image.
//
//  You can find the Spotify/Bandcamp/YouTube IDs by going to the relevant video
//  or song on that service, generating an iframe snippet, and finding the ID in
//  the generated HTML.
//
//  After making a change or addition, run `bun validate-seeds` to check for any
//  errors, like missing or duplicate IDs.
//
// =============================================================================

import { Album, Performance, Show, Song } from "./schema";

// =============================================================================
// ================================ ALBUMS =====================================
// =============================================================================

// Ordered by release date
export const seedAlbums = {
  tbb: {
    title: "12 Bar Bruise",
    slug: "12-bar-bruise",
    releaseDate: "2012-09-07",
    id: "5bc6a134-a0dc-4184-9b64-3f7bdd003a92",
    imageUrl: "https://f4.bcbits.com/img/a3529909906_16.jpg",
    bandcampAlbumId: "2765388374",
  },
  elts: {
    title: "Eyes Like the Sky",
    slug: "eyes-like-the-sky",
    releaseDate: "2013-02-22",
    id: "bee4a607-7f13-438a-af17-de6029e1ffbc",
    imageUrl: "https://f4.bcbits.com/img/a1198126189_16.jpg",
    bandcampAlbumId: "781831684",
  },
  fafyl: {
    title: "Float Along - Fill Your Lungs",
    slug: "float-along-fill-your-lungs",
    releaseDate: "2013-09-27",
    id: "55154b57-7925-408c-af21-c94fe06b3d62",
    imageUrl: "https://f4.bcbits.com/img/a3907213656_16.jpg",
    bandcampAlbumId: "1510489151",
  },
  oddments: {
    title: "Oddments",
    slug: "oddments",
    releaseDate: "2014-03-07",
    id: "7f1d12b4-d57a-42e8-9aae-57082cab5633",
    imageUrl: "https://f4.bcbits.com/img/a0348996479_16.jpg",
    bandcampAlbumId: "3657754108",
  },
  mindFuzz: {
    title: "I'm In Your Mind Fuzz",
    slug: "im-in-your-mind-fuzz",
    releaseDate: "2014-10-31",
    id: "29ae645d-1487-4963-9605-25a24904c205",
    imageUrl: "https://f4.bcbits.com/img/a3937834400_16.jpg",
    bandcampAlbumId: "3101239241",
  },
  quarters: {
    title: "Quarters",
    slug: "quarters",
    releaseDate: "2015-05-12",
    id: "5ba9fb14-390a-4f14-a141-21b6fb66adac",
    imageUrl: "https://f4.bcbits.com/img/a3796441552_16.jpg",
    bandcampAlbumId: "1306577560",
  },
  pmdb: {
    title: "Paper Mâché Dream Balloon",
    slug: "paper-mache-dream-balloon",
    releaseDate: "2015-11-13",
    id: "1d5545eb-e953-41a7-be6d-a3dbb9f5d8e7",
    imageUrl: "https://f4.bcbits.com/img/a2280704800_16.jpg",
    bandcampAlbumId: "1762740948",
  },
  nonagon: {
    title: "Nonagon Infinity",
    slug: "nonagon-infinity",
    releaseDate: "2016-04-29",
    id: "8a1332c8-c7d2-481c-9551-afa8bab79bd6",
    imageUrl: "https://f4.bcbits.com/img/a1566708845_16.jpg",
    bandcampAlbumId: "87057479",
  },
  fmb: {
    title: "Flying Microtonal Banana",
    slug: "flying-microtonal-banana",
    releaseDate: "2017-02-24",
    id: "003314d7-fe25-4742-8b47-cb52f7966bc2",
    imageUrl: "https://f4.bcbits.com/img/a2731568276_16.jpg",
    bandcampAlbumId: "114372498",
  },
  motu: {
    title: "Murder of the Universe",
    slug: "murder-of-the-universe",
    releaseDate: "2017-06-23",
    id: "45419e68-2701-4221-8c6d-ee29f66523de",
    imageUrl: "https://f4.bcbits.com/img/a3406870115_16.jpg",
    bandcampAlbumId: "1787442871",
  },
  sketches: {
    title: "Sketches of Brunswick East",
    slug: "sketches-of-brunswick-east",
    releaseDate: "2017-08-18",
    id: "a8fcce86-fab9-44d1-b3c2-1c6b1297ab2e",
    imageUrl: "https://f4.bcbits.com/img/a4206546710_16.jpg",
    bandcampAlbumId: "1255749163",
  },
  poly: {
    title: "Polygondwanaland",
    slug: "polygondwanaland",
    releaseDate: "2017-11-17",
    id: "03c0b2d8-626c-4c1c-b0f9-5c730477caab",
    imageUrl: "https://f4.bcbits.com/img/a1550557789_16.jpg",
    bandcampAlbumId: "1017207616",
  },
  gumbootSoup: {
    title: "Gumboot Soup",
    slug: "gumboot-soup",
    releaseDate: "2017-12-31",
    id: "08816b5c-5e1a-4aca-b07c-0a1b1008fabe",
    imageUrl: "https://f4.bcbits.com/img/a1481325267_16.jpg",
    bandcampAlbumId: "2728208210",
  },
  fff: {
    title: "Fishing For Fishies",
    slug: "fishing-for-fishies",
    releaseDate: "2019-04-26",
    id: "bc67b3f7-af1d-443f-9d28-1c99f6d4aa60",
    imageUrl: "https://f4.bcbits.com/img/a0470322543_16.jpg",
    bandcampAlbumId: "1507780262",
  },
  itrn: {
    title: "Infest the Rats' Nest",
    slug: "infest-the-rats-nest",
    releaseDate: "2019-08-16",
    id: "e889bd13-f73f-40fc-8ea9-17a6c3e9ad26",
    imageUrl: "https://f4.bcbits.com/img/a0402916090_16.jpg",
    bandcampAlbumId: "3925296262",
  },
  kg: {
    title: "K.G.",
    slug: "kg",
    releaseDate: "2020-11-20",
    id: "0c1f66d2-4ebc-499d-9bd7-c1ea34e4fbc0",
    imageUrl: "https://f4.bcbits.com/img/a3546319741_16.jpg",
    bandcampAlbumId: "927421026",
  },
  lw: {
    title: "L.W.",
    slug: "lw",
    releaseDate: "2021-02-26",
    id: "0b3e78ca-cfd3-4e74-8c47-5495271d0cc2",
    imageUrl: "https://f4.bcbits.com/img/a2018491224_16.jpg",
    bandcampAlbumId: "94095409",
  },
  bf3k: {
    title: "Butterfly 3000",
    slug: "butterfly-3000",
    releaseDate: "2021-06-11",
    id: "40fdce93-4438-4700-8721-9fade20341a0",
    imageUrl: "https://f4.bcbits.com/img/a3009849752_16.jpg",
    bandcampAlbumId: "3244133050",
  },
  og: {
    title: "Omnium Gatherum",
    slug: "omnium-gatherum",
    releaseDate: "2022-04-22",
    id: "560b0194-19ae-4bc9-aa24-0c2340596af7",
    imageUrl: "https://f4.bcbits.com/img/a2638998972_16.jpg",
    bandcampAlbumId: "129981996",
  },
  iceDeath: {
    title: "Ice, Death, Planets, Lungs, Mushrooms and Lava",
    slug: "ice-death-planets-lungs-mushrooms-and-lava",
    releaseDate: "2022-07-10",
    id: "46f925f1-dd7f-4966-8c02-3562e32f22b5",
    imageUrl: "https://f4.bcbits.com/img/a3317842641_16.jpg",
    bandcampAlbumId: "980855912",
  },
  laminatedDenim: {
    title: "Laminated Denim",
    slug: "laminate-denim",
    releaseDate: "2022-10-12",
    id: "7ceb3610-4aac-41cb-9a2f-4b6633dfad9b",
    imageUrl: "https://f4.bcbits.com/img/a3665205369_16.jpg",
    bandcampAlbumId: "177111450",
  },
  changes: {
    title: "Changes",
    slug: "changes",
    releaseDate: "2022-10-28",
    id: "957eae4b-eec8-45de-abcc-8902cda88fd3",
    imageUrl: "https://f4.bcbits.com/img/a1890146474_16.jpg",
    bandcampAlbumId: "2202545504",
  },
  petro: {
    title:
      "PetroDragonic Apocalypse; or, Dawn of Eternal Night: An Annihilation of Planet Earth and the Beginning of Merciless Damnation",
    slug: "petro",
    releaseDate: "2023-06-16",
    id: "f43bb6f3-6b08-4687-a39e-a4f379325f93",
    imageUrl: "https://f4.bcbits.com/img/a2805471381_16.jpg",
    bandcampAlbumId: "3699259806",
  },
  tsc: {
    title: "The Silver Cord",
    slug: "the-silver-cord",
    releaseDate: "2023-10-27",
    id: "e212c176-b78f-4b0b-93a0-651ca99591e2",
    imageUrl: "https://f4.bcbits.com/img/a0297097933_16.jpg",
    bandcampAlbumId: "2151949833",
  },
  b741: {
    title: "Flight b741",
    slug: "flight-b741",
    releaseDate: "2024-08-09",
    id: "3e106926-3ea8-4742-87b4-7ea809799370",
    imageUrl: "https://f4.bcbits.com/img/a3548545002_16.jpg",
    bandcampAlbumId: "104852051",
  },
} as const satisfies Record<string, Omit<Album, "createdAt">>;
export const allAlbums = Object.values(seedAlbums) as Album[];

// =============================================================================
// ================================= SONGS =====================================
// =============================================================================

// Ordered by album release date and position on album
export const seedSongs = {
  // ====================================================
  // 12 Bar Bruise
  elbow: {
    id: "da1448b1-fec3-448b-9b6c-ed19b8c37a48",
    albumPosition: 1,
    slug: "elbow",
    title: "Elbow",
    albumId: seedAlbums.tbb.id,
  },
  muckraker: {
    id: "d6095fe7-5f59-4b80-b885-af1e3b8e8984",
    albumPosition: 2,
    slug: "muckraker",
    title: "Muckraker",
    albumId: seedAlbums.tbb.id,
  },
  nein: {
    id: "3e102507-1f85-416a-9047-62fdded23bf2",
    albumPosition: 3,
    slug: "nein",
    title: "Nein",
    albumId: seedAlbums.tbb.id,
  },
  twelveBarBruise: {
    id: "b10f7d10-d460-45d8-a23d-380b071a63f1",
    albumPosition: 4,
    slug: "12-bar-bruise",
    title: "12 Bar Bruise",
    albumId: seedAlbums.tbb.id,
  },
  garageLiddiard: {
    id: "e5c76308-5318-4736-9ccb-29c81c20673d",
    albumPosition: 5,
    slug: "garage-liddiard",
    title: "Garage Liddiard",
    albumId: seedAlbums.tbb.id,
  },
  samCherry: {
    id: "d7630721-82d8-4acb-950a-e7b45d17a0c9",
    albumPosition: 6,
    slug: "sam-cherrys-last-shot",
    title: "Sam Cherry's Last Shot",
    albumId: seedAlbums.tbb.id,
  },
  highHopesLow: {
    id: "ab8345f7-b1a5-4a9f-bd23-3e44ffd159b4",
    albumPosition: 7,
    slug: "high-hopes-low",
    title: "High Hopes Low",
    albumId: seedAlbums.tbb.id,
  },
  cutThroatBoogie: {
    id: "b72be442-0339-42ea-be23-249c4207428e",
    albumPosition: 8,
    slug: "cut-throat-boogie",
    title: "Cut Throat Boogie",
    albumId: seedAlbums.tbb.id,
  },
  bloodyRipper: {
    id: "70067e17-6ad4-4057-aeb2-4ea7cb614104",
    albumPosition: 9,
    slug: "bloody-ripper",
    title: "Bloody Ripper",
    albumId: seedAlbums.tbb.id,
  },
  uhOhICalledMum: {
    id: "7e21c3f7-da5e-4890-846c-28765bf5d487",
    albumPosition: 10,
    slug: "uh-oh-i-called-mum",
    title: "Up Oh I Called Mum",
    albumId: seedAlbums.tbb.id,
  },
  seaOfTrees: {
    id: "43d67e96-d504-43a1-bcc3-7f25ac648e81",
    albumPosition: 11,
    slug: "sea-of-trees",
    title: "Sea of Trees",
    albumId: seedAlbums.tbb.id,
  },
  footyFooty: {
    id: "8dbb87e9-509b-41c2-ab97-4de6bec1551e",
    albumPosition: 12,
    slug: "footy-footy",
    title: "Footy Footy",
    albumId: seedAlbums.tbb.id,
  },

  // ====================================================
  // Float Along - Fill Your Lungs
  headOn: {
    id: "556e6f5e-9099-4351-9c7e-0edb17e76b73",
    albumPosition: 1,
    slug: "head-on-pill",
    title: "Head On/Pill",
    albumId: seedAlbums.fafyl.id,
  },
  iAmNotAMan: {
    id: "8e4ef0bb-acfe-4eb2-838b-1782271dea28",
    albumPosition: 2,
    slug: "i-am-not-a-man-unless-i-have-a-woman",
    title: "I Am Not A Man Unless I Have A Woman",
    albumId: seedAlbums.fafyl.id,
  },
  godIsCallingMeBackHome: {
    id: "195794b2-40d5-4101-9aa7-1cb1725168b6",
    albumPosition: 3,
    slug: "god-is-calling-me-back-home",
    title: "God Is Calling Me Back Home",
    albumId: seedAlbums.fafyl.id,
  },
  thirtyPastSeven: {
    id: "42455238-cdb5-4356-92db-688d2a4708f9",
    albumPosition: 4,
    slug: "30-past-7",
    title: "30 Past 7",
    albumId: seedAlbums.fafyl.id,
  },
  letMeMendThePast: {
    id: "fa5d8f49-6cee-40f7-b4ea-e68de744035e",
    albumPosition: 5,
    slug: "let-me-mend-the-past",
    title: "Let Me Mend the Past",
    albumId: seedAlbums.fafyl.id,
  },
  mysteryJack: {
    id: "87980647-e70a-456d-827a-210ca134ebce",
    albumPosition: 6,
    slug: "mystery-jack",
    title: "Mystery Jack",
    albumId: seedAlbums.fafyl.id,
  },
  popInMyStep: {
    id: "0230ae45-7e08-4ec6-b585-162a03a0c830",
    albumPosition: 7,
    slug: "pop-in-my-step",
    title: "Pop In My Step",
    albumId: seedAlbums.fafyl.id,
  },
  fafyl: {
    id: "4a0aac05-3060-4750-9eb0-fd6a058fbfc1",
    albumPosition: 8,
    slug: "float-along-fill-your-lungs",
    title: "Float Along - Fill Your Lungs",
    albumId: seedAlbums.fafyl.id,
  },

  // ====================================================
  // Oddments
  alludaMajaka: {
    id: "001b0a76-cf88-4d4f-9f82-0a1b4feca97d",
    albumPosition: 1,
    slug: "alluda-majaka",
    title: "Alluda Majaka",
    albumId: seedAlbums.oddments.id,
  },
  stressin: {
    id: "ec5f8e95-a9c8-4a79-b16f-5ac56be4c5ba",
    albumPosition: 2,
    slug: "stressin",
    title: "Stressin'",
    albumId: seedAlbums.oddments.id,
  },
  vegemite: {
    id: "917d455e-421c-4099-8765-9fa8876501b6",
    albumPosition: 3,
    slug: "vegemite",
    title: "Vegemite",
    albumId: seedAlbums.oddments.id,
  },
  workThisTime: {
    id: "460537ac-78a5-4358-80d4-e60a3aa78b93",
    albumPosition: 5,
    slug: "work-this-time",
    title: "Work This Time",
    albumId: seedAlbums.oddments.id,
  },
  ababcd: {
    id: "933fb599-0e0a-4d40-b34c-fb4fd11be788",
    albumPosition: 6,
    slug: "ababcd",
    title: "ABABCD",
    albumId: seedAlbums.oddments.id,
  },
  sleepwalker: {
    id: "bb4d4d97-9674-45b0-b5d6-95b22dbf934e",
    albumPosition: 7,
    slug: "sleepwalker",
    title: "Sleepwalker",
    albumId: seedAlbums.oddments.id,
  },
  hotWax: {
    id: "57430f87-f009-4094-8c66-e08b8041bbc3",
    albumPosition: 8,
    slug: "hot-wax",
    title: "Hot Wax",
    albumId: seedAlbums.oddments.id,
  },
  crying: {
    id: "cf529fbc-3639-44cf-b28c-a846c2195e33",
    albumPosition: 9,
    slug: "crying",
    title: "Crying",
    albumId: seedAlbums.oddments.id,
  },
  pipeDream: {
    id: "7b17ec59-af83-4196-9b98-21d1686c6b52",
    albumPosition: 10,
    slug: "pipe-dream",
    title: "Pipe-Dream",
    albumId: seedAlbums.oddments.id,
  },
  homelessManInAdidas: {
    id: "5d566e25-89e0-4133-bef0-825263c94d14",
    albumPosition: 11,
    slug: "homeless-man-in-adidas",
    title: "Homeless Man in Adidas",
    albumId: seedAlbums.oddments.id,
  },
  oddments: {
    id: "22102ac6-f795-4e33-848e-3689bb45e49c",
    albumPosition: 12,
    slug: "oddments",
    title: "Oddments",
    albumId: seedAlbums.oddments.id,
  },

  // ====================================================
  // I'm In Your Mind Fuzz
  imInYourMind: {
    id: "7b4d6326-bdb9-4753-9076-0630b5a95b32",
    albumPosition: 1,
    slug: "im-in-your-mind",
    title: "I'm In Your Mind",
    albumId: seedAlbums.mindFuzz.id,
  },
  imNotInYourMind: {
    id: "06eba6d7-d32f-40f1-85ca-32e79cdbb627",
    albumPosition: 2,
    slug: "im-not-in-your-mind",
    title: "I'm Not In Your Mind",
    albumId: seedAlbums.mindFuzz.id,
  },
  cellophane: {
    id: "5ada7965-bbef-44ac-8317-f00cf8fcc17d",
    albumPosition: 3,
    slug: "cellaphane",
    title: "Cellaphane",
    albumId: seedAlbums.mindFuzz.id,
  },
  imInYourMindFuzz: {
    id: "770a35de-91c6-456b-8e5e-06f71cb08b4c",
    albumPosition: 4,
    slug: "im-in-your-mind-fuzz",
    title: "I'm In Your Mind Fuzz",
    albumId: seedAlbums.mindFuzz.id,
  },
  empty: {
    id: "b1d72add-e97a-4c2a-922d-fb13d56df828",
    albumPosition: 5,
    slug: "empty",
    title: "Empty",
    albumId: seedAlbums.mindFuzz.id,
  },
  hotWater: {
    id: "7a0ac425-58be-4373-8f14-78905db4a081",
    albumPosition: 6,
    slug: "hot-water",
    title: "Hot Water",
    albumId: seedAlbums.mindFuzz.id,
  },
  amIInHeaven: {
    id: "14c20df5-ff64-40b7-b410-aa2aa8daab83",
    albumPosition: 7,
    slug: "am-i-in-heaven",
    title: "Am I in Heaven?",
    albumId: seedAlbums.mindFuzz.id,
  },
  slowJam1: {
    id: "d8206c9b-096f-4c9b-a477-ec36ed88de72",
    albumPosition: 8,
    slug: "slow-jam-1",
    title: "Slow Jam 1",
    albumId: seedAlbums.mindFuzz.id,
  },
  satanSpeedsUp: {
    id: "1b6fad18-50a7-4a52-93d2-d76d71d59142",
    albumPosition: 9,
    slug: "satan-speeds-up",
    title: "Satan Speeds Up",
    albumId: seedAlbums.mindFuzz.id,
  },
  herAndI: {
    id: "a0d4e6aa-e5d8-4402-82ef-27918958dafd",
    albumPosition: 10,
    slug: "her-and-i-slow-jam-2",
    title: "Her and I (Slow Jam 2)",
    albumId: seedAlbums.mindFuzz.id,
  },

  // ====================================================
  // Quarters
  theRiver: {
    id: "5855d6aa-2dd1-4f82-a2d8-44b4e663eb87",
    albumPosition: 1,
    slug: "the-river",
    title: "The River",
    albumId: seedAlbums.quarters.id,
  },
  infiniteRise: {
    id: "a0f65c26-32a9-4c54-a282-da281df11a9a",
    albumPosition: 2,
    slug: "infinte-rise",
    title: "Infinite Rise",
    albumId: seedAlbums.quarters.id,
  },
  godIsInTheRhythm: {
    id: "e7143dd3-f080-4e63-943a-1c51e0458e0c",
    albumPosition: 3,
    slug: "god-is-in-the-rhythm",
    title: "God Is In The Rhythm",
    albumId: seedAlbums.quarters.id,
  },
  lonelySteelSheetFlyer: {
    id: "d946c819-4bb8-4d3e-bc9a-07c6cd8ba410",
    albumPosition: 4,
    slug: "lonely-steel-sheet-flyer",
    title: "Lonely Steel Sheet Flyer",
    albumId: seedAlbums.quarters.id,
  },

  // ====================================================
  // Paper Mâché Dream Balloon
  sense: {
    id: "d916bb15-6c5d-4d16-8224-4a4d30bd09b7",
    albumPosition: 1,
    slug: "sense",
    title: "Sense",
    albumId: seedAlbums.pmdb.id,
  },
  bone: {
    id: "e07317d8-1778-40ab-b9f5-9fc554580041",
    albumPosition: 2,
    slug: "bone",
    title: "Bone",
    albumId: seedAlbums.pmdb.id,
  },
  dirt: {
    id: "b0550f16-5560-4184-8fa7-d5c0cf624522",
    albumPosition: 3,
    slug: "dirt",
    title: "Dirt",
    albumId: seedAlbums.pmdb.id,
  },
  paperMacheDreamBalloon: {
    id: "b3b3d82b-aa4c-4f57-b29b-883dd587d174",
    albumPosition: 4,
    slug: "paper-mache-dream-balloon",
    title: "Paper Mâché Dream Balloon",
    albumId: seedAlbums.pmdb.id,
  },
  trapdoor: {
    id: "7e5a8135-fab6-4dce-b54e-b784d94a7258",
    albumPosition: 5,
    slug: "trapdoor",
    title: "Trapdoor",
    albumId: seedAlbums.pmdb.id,
  },
  coldCadaver: {
    id: "1b7998e0-b979-4fd6-85ce-b5fada63e3df",
    albumPosition: 6,
    slug: "cold-cadaver",
    title: "Cold Cadaver",
    albumId: seedAlbums.pmdb.id,
  },
  theBitterBoogie: {
    id: "c613a961-1a79-491b-a567-995e018ba74d",
    albumPosition: 7,
    slug: "the-bitter-boogie",
    title: "The Bitter Boogie",
    albumId: seedAlbums.pmdb.id,
  },
  ngri: {
    id: "7f3df9c6-1263-440f-bfa4-0a59c40fdcc9",
    albumPosition: 8,
    slug: "ngri-bloodstain",
    title: "N.G.R.I. (Bloodstain)",
    albumId: seedAlbums.pmdb.id,
  },
  timeFate: {
    id: "e47a83d3-6f33-43c3-ac6b-afc91f22e666",
    albumPosition: 9,
    slug: "time-fate",
    title: "Time = Fate",
    albumId: seedAlbums.pmdb.id,
  },
  timeMoney: {
    id: "8538e9ce-a33b-4de9-85bf-97ae6f35b9df",
    albumPosition: 10,
    slug: "time-money",
    title: "Time = $$$",
    albumId: seedAlbums.pmdb.id,
  },
  mostOfWhatILike: {
    id: "e15852a6-5f13-410e-95af-f85f3d698350",
    albumPosition: 11,
    slug: "most-of-what-i-like",
    title: "Most Of What I Like",
    albumId: seedAlbums.pmdb.id,
  },
  paperMache: {
    id: "1d6351a3-0466-49cd-86fb-96d3db6d3e6c",
    albumPosition: 12,
    slug: "paper-mache",
    title: "Paper Mâché",
    albumId: seedAlbums.pmdb.id,
  },

  // ====================================================
  // Nonagon Infinity
  robotStop: {
    id: "047f1192-9893-4776-882f-d76542a71943",
    albumPosition: 1,
    slug: "robot-stop",
    title: "Robot Stop",
    albumId: seedAlbums.nonagon.id,
  },
  bigFigWasp: {
    id: "9c4c49aa-9a0b-40c1-9873-d30db334eb4a",
    albumPosition: 2,
    slug: "big-fig-wasp",
    title: "Big Fig Wasp",
    albumId: seedAlbums.nonagon.id,
  },
  gammaKnife: {
    id: "ae61473d-3e8d-4b83-b48e-2025c9c1b9a0",
    albumPosition: 3,
    slug: "gamma-knife",
    title: "Gamma Knife",
    albumId: seedAlbums.nonagon.id,
  },
  peopleVultures: {
    id: "8bce52d7-bb5e-43fa-8a20-e3660e206f7a",
    albumPosition: 4,
    slug: "people-vultures",
    title: "People Vultures",
    albumId: seedAlbums.nonagon.id,
  },
  mrBeat: {
    id: "8ec206bb-f1e7-45ed-90a7-c05233fb6de6",
    albumPosition: 5,
    slug: "mr-beat",
    title: "Mr. Beat",
    albumId: seedAlbums.nonagon.id,
  },
  evilDeathRoll: {
    id: "6eb610e1-1391-4ad3-ad61-5770fcfc02b8",
    albumPosition: 6,
    slug: "evil-death-roll",
    title: "Evil Death Roll",
    albumId: seedAlbums.nonagon.id,
  },
  invisibleFace: {
    id: "214d2f6a-86f7-4825-b0e1-f4b7b5b2d298",
    albumPosition: 7,
    slug: "invisible-face",
    title: "Invisible Face",
    albumId: seedAlbums.nonagon.id,
  },
  wahWah: {
    id: "f57a85a9-37bb-4a09-acbe-c9b595f03792",
    albumPosition: 8,
    slug: "wah-wah",
    title: "Wah Wah",
    albumId: seedAlbums.nonagon.id,
  },
  roadTrain: {
    id: "d659a3f1-f66e-4583-9d52-655ea5441cb7",
    albumPosition: 9,
    slug: "road-train",
    title: "Road Train",
    albumId: seedAlbums.nonagon.id,
  },

  // ====================================================
  // Flying Microtonal Banana
  rattlesnake: {
    id: "4dc62f80-ad92-4f8d-8e66-bbe29d3e41a1",
    albumPosition: 1,
    slug: "rattlesnake",
    title: "Rattlesnake",
    albumId: seedAlbums.fmb.id,
  },
  melting: {
    id: "ad82ad12-8d25-4738-b55a-2620d9cb0e7a",
    albumPosition: 2,
    slug: "melting",
    title: "Melting",
    albumId: seedAlbums.fmb.id,
  },
  openWater: {
    id: "b2906883-cc2a-4bd6-96c4-6c728b60dd54",
    albumPosition: 3,
    slug: "open-water",
    title: "Open Water",
    albumId: seedAlbums.fmb.id,
  },
  sleepDrifter: {
    id: "f65410dd-18bf-4bd0-8323-2f48ca376ae4",
    albumPosition: 4,
    slug: "sleep-drifter",
    title: "Sleep Drifter",
    albumId: seedAlbums.fmb.id,
  },
  billabongValley: {
    id: "26a34912-4213-4d6b-b9db-9c8098cc636b",
    albumPosition: 5,
    slug: "billabong-valley",
    title: "Billabong Valley",
    albumId: seedAlbums.fmb.id,
  },
  anoxia: {
    id: "fe1b296d-e29c-4876-b4c4-57c6b02c6510",
    albumPosition: 6,
    slug: "anoxia",
    title: "Anoxia",
    albumId: seedAlbums.fmb.id,
  },
  doomCity: {
    id: "e27000c7-6d64-4103-8174-e0abfab2f1e6",
    albumPosition: 7,
    slug: "doom-city",
    title: "Doom City",
    albumId: seedAlbums.fmb.id,
  },
  nuclearFusion: {
    id: "cbebf078-8eeb-40a7-b893-53b70877db0b",
    albumPosition: 8,
    slug: "nuclear-fusion",
    title: "Nuclear Fusion",
    albumId: seedAlbums.fmb.id,
  },
  flyingMicrotonalBanana: {
    id: "5a5887aa-fc91-4fbe-bd52-e3405accc12e",
    albumPosition: 9,
    slug: "flyin-microtonal-banana",
    title: "Flying Microtonal Banana",
    albumId: seedAlbums.fmb.id,
  },

  // ====================================================
  // Murder of the Universe
  aNewWorld: {
    id: "ec659f44-f428-4175-b190-40458c24fee7",
    albumPosition: 1,
    slug: "a-new-world",
    title: "A New World",
    albumId: seedAlbums.motu.id,
  },
  alteredBeastI: {
    id: "da09da99-231c-444e-ab5b-752656705d0f",
    albumPosition: 2,
    slug: "altered-beast-i",
    title: "Altered Beast I",
    albumId: seedAlbums.motu.id,
  },
  alterMeI: {
    id: "b876df42-8446-4a1c-9461-38f5d39b8829",
    albumPosition: 3,
    slug: "alter-me-i",
    title: "Alter Me I",
    albumId: seedAlbums.motu.id,
  },
  alteredBeastII: {
    id: "b38abf6c-e6c3-4fae-b861-ebf4e1900738",
    albumPosition: 4,
    slug: "altered-beast-ii",
    title: "Altered Beast II",
    albumId: seedAlbums.motu.id,
  },
  alterMeII: {
    id: "cc5c347e-1281-4fb3-9759-17a3b0c9cc0e",
    albumPosition: 5,
    slug: "alter-me-ii",
    title: "Alter Me II",
    albumId: seedAlbums.motu.id,
  },
  alteredBeastIII: {
    id: "05691ee6-b19d-4dad-a7b7-5fd8eda5e783",
    albumPosition: 6,
    slug: "altered-beast-iii",
    title: "Altered Beast III",
    albumId: seedAlbums.motu.id,
  },
  alteredMeIII: {
    id: "50a1717d-6262-4109-8e28-11635bf615a1",
    albumPosition: 7,
    slug: "altered-me-iii",
    title: "Altered Me III",
    albumId: seedAlbums.motu.id,
  },
  alteredBeastIV: {
    id: "25c5876c-5d49-41f0-b227-5336dd9383ad",
    albumPosition: 8,
    slug: "altered-beast-iv",
    title: "Altered Beast IV",
    albumId: seedAlbums.motu.id,
  },
  lifeDeath: {
    id: "a16e5705-3e25-435a-8027-075475427651",
    albumPosition: 9,
    slug: "life-death",
    title: "Life / Death",
    albumId: seedAlbums.motu.id,
  },
  someContext: {
    id: "3106f462-3e2c-4e85-a04b-f9287355eed1",
    albumPosition: 10,
    slug: "some-context",
    title: "Some Context",
    albumId: seedAlbums.motu.id,
  },
  theReticentRaconteur: {
    id: "262f0d2c-ac38-4094-97d4-f5832f448ca4",
    albumPosition: 11,
    slug: "the-reticent-raconteur",
    title: "The Reticent Raconteur",
    albumId: seedAlbums.motu.id,
  },
  lordOfLightning: {
    id: "3dea7dc9-0738-4803-80cc-3dadd872a867",
    albumPosition: 12,
    slug: "lord-of-lightning",
    title: "Lord of Lightning",
    albumId: seedAlbums.motu.id,
  },
  theBalrog: {
    id: "ff60523a-636a-412d-a27f-7a64c649bada",
    albumPosition: 13,
    slug: "the-balrog",
    title: "The Balrog",
    albumId: seedAlbums.motu.id,
  },
  theFloatingFire: {
    id: "4c066743-8c66-476b-a8df-088a694bb80a",
    albumPosition: 14,
    slug: "the-floating-fire",
    title: "The Floating Fire",
    albumId: seedAlbums.motu.id,
  },
  theAcridCorpse: {
    id: "6c3079b0-750e-496c-8aec-2c240997c5aa",
    albumPosition: 15,
    slug: "the-acrid-corpse",
    title: "The Acrid Corpse",
    albumId: seedAlbums.motu.id,
  },
  welcomeToAnAlteredFuture: {
    id: "2e9595e8-0c29-422b-bcde-4d141746bde7",
    albumPosition: 16,
    slug: "welcome-to-an-altered-future",
    title: "Welcome to an Altered Future",
    albumId: seedAlbums.motu.id,
  },
  digitalBlack: {
    id: "e03438c5-16d6-4855-8106-1eca75274c2b",
    albumPosition: 17,
    slug: "digital-black",
    title: "Digital Black",
    albumId: seedAlbums.motu.id,
  },
  hanTyumiTheConfusedCyborg: {
    id: "00aa6690-b64c-4511-a747-c864f047efdc",
    albumPosition: 18,
    slug: "han-tyumi-the-confused-cyborg",
    title: "Han-Tyumi, the Confused Cyborg",
    albumId: seedAlbums.motu.id,
  },
  soyProtienMuntMachine: {
    id: "65f73606-3059-4a38-8378-93c0b2a265ab",
    albumPosition: 19,
    slug: "soy-protein-munt-machine",
    title: "Soy Protein Munt Machine",
    albumId: seedAlbums.motu.id,
  },
  vomitCoffin: {
    id: "2453de9d-2431-4174-8561-94f5c2f08d21",
    albumPosition: 20,
    slug: "vomit-coffin",
    title: "Vomit Coffin",
    albumId: seedAlbums.motu.id,
  },
  motu: {
    id: "3bed1339-307c-48eb-b17e-ba582f0c00b6",
    albumPosition: 21,
    slug: "murder-of-the-universe",
    title: "Murder of the Universe",
    albumId: seedAlbums.motu.id,
  },

  // ====================================================
  // Sketches of Brunswick East
  theBook: {
    id: "d7f653a1-f774-4462-8ad6-dde97a0bce4f",
    albumPosition: 9,
    slug: "the-book",
    title: "The Book",
    albumId: seedAlbums.sketches.id,
  },
  silhouette: {
    id: "84be6b7d-8ef2-4a77-ad41-f6c8ab98e682",
    albumPosition: 12,
    slug: "you-can-be-your-silhouette",
    title: "You Can Be Your Silhouette",
    albumId: seedAlbums.sketches.id,
  },

  // ====================================================
  // Polygondwanaland
  crumblingCastle: {
    id: "46b73130-6997-466f-b570-4d4528913f9c",
    albumPosition: 1,
    slug: "crumbling-castle",
    title: "Crumbling Castle",
    albumId: seedAlbums.poly.id,
  },
  tetrachromacy: {
    id: "f6b0a28f-fa34-49c2-a597-e637ee13852e",
    albumPosition: 8,
    slug: "tetrachromacy",
    title: "Tetrachromacy",
    albumId: seedAlbums.poly.id,
  },
  fourthColor: {
    id: "cbf2a357-406a-46df-b6cb-639b06282cef",
    albumPosition: 10,
    slug: "the-fourth-color",
    title: "The Fourth Color",
    albumId: seedAlbums.poly.id,
  },

  // ====================================================
  // Gumboot Soup
  muddyWater: {
    id: "37476f9c-0e46-4ba6-9fb6-727cb904f567",
    albumPosition: 4,
    slug: "muddy-water",
    title: "Muddy Water",
    albumId: seedAlbums.gumbootSoup.id,
  },
  theWheel: {
    id: "20fc1b2b-6838-422a-bf6f-9edff1b74a2f",
    albumPosition: 11,
    slug: "the-wheel",
    title: "The Wheel",
    albumId: seedAlbums.gumbootSoup.id,
  },

  // ====================================================
  // Fishing For Fishies
  boogiemanSam: {
    id: "a9a6572e-e1a3-4557-ab1e-388fc4db3b49",
    albumPosition: 2,
    slug: "booogieman-sam",
    title: "Boogieman Sam",
    albumId: seedAlbums.fff.id,
  },
  plasticBoogie: {
    id: "f49713e5-5ddd-4142-b2ef-22dbf7dbb9d7",
    albumPosition: 4,
    slug: "plastic-boogie",
    title: "Plastic Boogie",
    albumId: seedAlbums.fff.id,
  },
  thisThing: {
    id: "f4a714ed-0de5-43d3-a92c-14cf1c201c15",
    albumPosition: 7,
    slug: "this-thing",
    title: "This Thing",
    albumId: seedAlbums.fff.id,
  },
  cyboogie: {
    id: "694877de-c6ea-4774-acad-d6cab1e1e23c",
    albumPosition: 9,
    slug: "cyboogie",
    title: "Cyboogie",
    albumId: seedAlbums.fff.id,
  },

  // ====================================================
  // Infest the Rats' Nest
  planetB: {
    id: "29fd0103-5c22-4210-9b19-4b59866ff3ae",
    albumPosition: 1,
    slug: "planet-b",
    title: "Planet B",
    albumId: seedAlbums.itrn.id,
  },
  marsForTheRich: {
    id: "ef3d92e2-207d-4456-aff0-5399294c474d",
    albumPosition: 2,
    slug: "mars-for-the-rich",
    title: "March for the Rich",
    albumId: seedAlbums.itrn.id,
  },
  organFarmer: {
    id: "c05da847-aee7-4354-815d-cbca6b8617b3",
    albumPosition: 3,
    slug: "organ-farmer",
    title: "Organ Farmer",
    albumId: seedAlbums.itrn.id,
  },
  superbug: {
    id: "a03b54e1-154c-498b-87c4-ac5513352ded",
    albumPosition: 4,
    slug: "superbug",
    title: "Superbug",
    albumId: seedAlbums.itrn.id,
  },
  venusian1: {
    id: "3fcc4acd-aab0-4bbe-81b2-59f4150b24da",
    albumPosition: 5,
    slug: "venusian-1",
    title: "Venusian 1",
    albumId: seedAlbums.itrn.id,
  },
  perihelion: {
    id: "620be584-d629-4a52-8c71-f2e612a6cd06",
    albumPosition: 6,
    slug: "perihelion",
    title: "Perihelion",
    albumId: seedAlbums.itrn.id,
  },
  venusian2: {
    id: "81617b99-9ff5-43d7-9730-e96cb34e97c3",
    albumPosition: 7,
    slug: "venusian-2",
    title: "Venusion 2",
    albumId: seedAlbums.itrn.id,
  },
  selfImmolate: {
    id: "c6ef1672-f434-4257-a329-08a67a37686f",
    albumPosition: 8,
    slug: "self-immolate",
    title: "Self-Immolate",
    albumId: seedAlbums.itrn.id,
  },
  hell: {
    id: "babd0c51-56c4-4b07-91ce-c734e797e876",
    albumPosition: 9,
    slug: "hell",
    title: "Hell",
    albumId: seedAlbums.itrn.id,
  },

  // ====================================================
  // K.G.
  strawsInTheWind: {
    id: "962270a4-42d6-4eab-bae9-c6b7ff3b2750",
    albumPosition: 4,
    slug: "straws-in-the-wind",
    title: "Straws In The Wind",
    albumId: seedAlbums.kg.id,
  },
  intrasport: {
    id: "027fbc3c-620c-41f0-b734-f3d00262b41a",
    albumPosition: 7,
    slug: "intrasport",
    title: "Intrasport",
    albumId: seedAlbums.kg.id,
  },

  // ====================================================
  // Butterfly 3000
  shanghai: {
    id: "f927bc2e-d505-4cd6-8357-f3d73ded4403",
    albumPosition: 2,
    slug: "shanghai",
    title: "Shanghai",
    albumId: seedAlbums.bf3k.id,
  },
  interiorPeople: {
    id: "96f2555a-796d-4dd1-8bfa-52c007a55190",
    albumPosition: 5,
    slug: "interior-people",
    title: "Interior People",
    albumId: seedAlbums.bf3k.id,
  },

  // ====================================================
  // Omnium Gatherum
  theDrippingTap: {
    id: "ae4a1559-f995-4ba0-bb49-6c1e34e196b3",
    albumPosition: 1,
    slug: "the-dripping-tap",
    title: "The Dripping Tap",
    albumId: seedAlbums.og.id,
  },
  magentaMountain: {
    id: "9100f1b2-0e74-40bb-a945-0f59b54fff6d",
    albumPosition: 2,
    slug: "magenta-mountain",
    title: "Magenta Mountain",
    albumId: seedAlbums.og.id,
  },
  gaia: {
    id: "96ec69a2-701b-4eb6-85f2-5631c24f81f8",
    albumPosition: 4,
    slug: "gaia",
    title: "Gaia",
    albumId: seedAlbums.og.id,
  },
  ambergris: {
    id: "1c34fd6f-6389-48ed-a482-a8f5ed51ec3d",
    albumPosition: 5,
    slug: "ambergris",
    title: "Ambergris",
    albumId: seedAlbums.og.id,
  },
  theGrimReaper: {
    id: "99018b73-3191-49d3-a792-de9ea16b4a0e",
    albumPosition: 11,
    slug: "the-grim-reaper",
    title: "The Grim Reaper",
    albumId: seedAlbums.og.id,
  },
  presumptuous: {
    id: "aff6b78b-28a5-4993-b538-ad203b5fba86",
    albumPosition: 12,
    slug: "presumptuous",
    title: "Presumptuous",
    albumId: seedAlbums.og.id,
  },

  // ====================================================
  // Ice, Death, Planets, Lungs, Mushrooms and Lava
  iceV: {
    id: "ae36e961-6db2-4c3b-8f8d-d08ecb671543",
    albumPosition: 2,
    slug: "ice-v",
    title: "Ice V",
    albumId: seedAlbums.iceDeath.id,
  },
  magma: {
    id: "717f22ee-9458-4bca-8dbf-e7940b1e4d96",
    albumPosition: 3,
    slug: "magma",
    title: "Magma",
    albumId: seedAlbums.iceDeath.id,
  },
  ironLung: {
    id: "15a32d56-c560-4017-9e49-e000b644a55b",
    albumPosition: 6,
    slug: "iron-lung",
    title: "Iron Lung",
    albumId: seedAlbums.iceDeath.id,
  },

  // ====================================================
  // Laminated Denim
  hypertension: {
    id: "5765ec19-0e59-479c-a62c-a019ac73ce28",
    albumPosition: 2,
    slug: "hypertension",
    title: "Hypertension",
    albumId: seedAlbums.laminatedDenim.id,
  },

  // ====================================================
  // Changes
  change: {
    id: "8e9e04f6-fc88-4846-a5df-977bba3f36c9",
    albumPosition: 1,
    slug: "change",
    title: "Change",
    albumId: seedAlbums.changes.id,
  },
  astroturf: {
    id: "b9cc7829-00b0-4421-a3fd-a3a004890ca2",
    albumPosition: 3,
    slug: "astroturf",
    title: "Astroturf",
    albumId: seedAlbums.changes.id,
  },
  gondii: {
    id: "a2737d99-cecd-49c5-bdce-163057a28263",
    albumPosition: 5,
    slug: "gondii",
    title: "Gondii",
    albumId: seedAlbums.changes.id,
  },

  // ====================================================
  // PetroDragonic Apocalypse; or, Dawn of Eternal Night:
  // An Annihilation of Planet Earth and the Beginning of Merciless Damnation
  motorSpirit: {
    id: "7a076db2-b2b7-4cea-a0cb-2abdaf36c7a1",
    albumPosition: 1,
    slug: "motor-spirit",
    title: "Motor Spirit",
    albumId: seedAlbums.petro.id,
  },
  supercell: {
    id: "eb1c3c7a-c735-4013-8408-64be214d6a39",
    albumPosition: 2,
    slug: "supercell",
    title: "Supercell",
    albumId: seedAlbums.petro.id,
  },
  converge: {
    id: "8879d2b7-57e3-4e38-bc0c-250f3b5fb288",
    albumPosition: 3,
    slug: "converge",
    title: "Converge",
    albumId: seedAlbums.petro.id,
  },
  witchcraft: {
    id: "e5e33a88-2ae2-4c49-914b-837d01aa088c",
    albumPosition: 4,
    slug: "witchcraft",
    title: "Witchcraft",
    albumId: seedAlbums.petro.id,
  },
  gilaMonster: {
    id: "259d79c1-2e33-478f-b670-4e64d416c6f2",
    albumPosition: 5,
    slug: "gila-monster",
    title: "Gila Monster",
    albumId: seedAlbums.petro.id,
  },
  dragon: {
    id: "615908d3-72ae-4034-8d28-59cdf0341967",
    albumPosition: 6,
    slug: "dragon",
    title: "Dragon",
    albumId: seedAlbums.petro.id,
  },
  flamethrower: {
    id: "20a76786-5937-4b04-bcaa-37916a9edced",
    albumPosition: 7,
    slug: "flamethrower",
    title: "Flamethrower",
    albumId: seedAlbums.petro.id,
  },

  // ====================================================
  // The Silver Cord
  theia: {
    id: "cadd1e1b-db88-439b-be3a-7dc402075636",
    albumPosition: 1,
    slug: "theia",
    title: "Theia",
    albumId: seedAlbums.tsc.id,
  },
  theSilverCord: {
    id: "c7633144-0d11-45a6-ac88-ee089b7e9605",
    albumPosition: 2,
    slug: "the-silver-cord",
    title: "The Silver Cord",
    albumId: seedAlbums.tsc.id,
  },
  set: {
    id: "d28b90db-4e89-48da-ace5-d311e82c550e",
    albumPosition: 3,
    slug: "set",
    title: "Set",
    albumId: seedAlbums.tsc.id,
  },
  "chang-e": {
    id: "92052f74-b55f-404f-be92-4f68440db27f",
    albumPosition: 4,
    slug: "chang-e",
    title: "Chang'e",
    albumId: seedAlbums.tsc.id,
  },
  gilgamesh: {
    id: "42ba1e70-c9cd-49b9-aa02-ab2e3e403e4c",
    albumPosition: 5,
    slug: "gilgamesh",
    title: "Gilgamesh",
    albumId: seedAlbums.tsc.id,
  },
  swanSong: {
    id: "159f483a-85d1-4480-a4c6-3526f579e34f",
    albumPosition: 6,
    slug: "swan-song",
    title: "Swan Song",
    albumId: seedAlbums.tsc.id,
  },
  extinction: {
    id: "5bd9512b-9dca-43c3-b6d1-2cda9221a7bb",
    albumPosition: 7,
    slug: "extinction",
    title: "Extinction",
    albumId: seedAlbums.tsc.id,
  },

  // ====================================================
  // Flight b741
  mirageCity: {
    id: "c842a0d7-2f49-4a2d-8f05-4f2f19aae3e9",
    albumPosition: 1,
    slug: "mirage-city",
    title: "Mirage City",
    albumId: seedAlbums.b741.id,
  },
  antarctica: {
    id: "9fef82b7-59e3-4471-8f17-5ab2cb5a3104",
    albumPosition: 2,
    slug: "antarctica",
    title: "Antarctica",
    albumId: seedAlbums.b741.id,
  },
  rawFeel: {
    id: "c9550f02-d46d-4ba7-a595-1bf1bcf00262",
    albumPosition: 3,
    slug: "raw-feel",
    title: "Raw Feel",
    albumId: seedAlbums.b741.id,
  },
  fieldOfVision: {
    id: "89b0330f-92a1-4df9-b3a9-539fabb5ab8a",
    albumPosition: 4,
    slug: "field-of-vision",
    title: "Field of Vision",
    albumId: seedAlbums.b741.id,
  },
  hogCallingContest: {
    id: "a07d9124-08c3-49d5-83e4-f2d1806bbb34",
    albumPosition: 5,
    slug: "hog-calling-contest",
    title: "Hog Calling Contest",
    albumId: seedAlbums.b741.id,
  },
  leRisque: {
    id: "98521dd4-8ca6-48e2-b7ed-05e3bc765711",
    albumPosition: 6,
    slug: "le-risque",
    title: "Le Risque",
    albumId: seedAlbums.b741.id,
  },
  flightb741: {
    id: "0a71eafa-69c2-444a-b35a-259149e85937",
    albumPosition: 7,
    slug: "flight-b741",
    title: "Flight b741",
    albumId: seedAlbums.b741.id,
  },
  sadPilot: {
    id: "dff597cf-44c3-4c0a-9219-ad7ff249cd26",
    albumPosition: 8,
    slug: "sad-pilot",
    title: "Sad Pilot",
    albumId: seedAlbums.b741.id,
  },
  ratsInTheSky: {
    id: "37922a94-85c4-4a13-8155-de1ee68872ac",
    albumPosition: 9,
    slug: "rats-in-the-sky",
    title: "Rats In The Sky",
    albumId: seedAlbums.b741.id,
  },
  dailyBlues: {
    id: "4da6d803-c03e-4d29-9f43-f9042b1cabcd",
    albumPosition: 10,
    slug: "daily-blues",
    title: "Daily Blues",
    albumId: seedAlbums.b741.id,
  },
} as const satisfies Record<string, Omit<Song, "createdAt">>;
export const allSongs = Object.values(seedSongs) as Song[];

// =============================================================================
// ================================= SHOWS =====================================
// =============================================================================

// Ordered by show date
export const seedShows = {
  // ====================================================
  // 2013 Tour
  northcote13: {
    id: "86907172-176f-4930-8017-20e1b044d142",
    slug: "northcote-2013",
    location: "Melbourne",
    date: "2013-08-29",
    imageUrl: null,
    bandcampAlbumId: null,
  },

  // ====================================================
  // 2016 Tour
  sf16: {
    id: "959fc957-a47f-4618-a0ea-91a57e17c55e",
    slug: "san-francisco-2016",
    location: "San Francisco",
    date: "2016-05-25",
    imageUrl: "https://f4.bcbits.com/img/a3583868136_16.jpg",
    bandcampAlbumId: "1532371660",
  },

  // ====================================================
  // 2018 Tour
  kexp18: {
    id: "fd001d84-9b97-4525-ac2b-6f9cfece6136",
    slug: "kexp-2018",
    location: "KEXP",
    date: "2018-06-06",
    imageUrl: null,
    bandcampAlbumId: null,
  },

  // ====================================================
  // World Tour 2019
  adelaide19: {
    id: "3c665da1-5458-4b1e-bcae-ab063e72385f",
    slug: "adelaide-2019",
    location: "Adelaide",
    date: "2019-07-12",
    imageUrl: "https://f4.bcbits.com/img/a0297850511_16.jpg",
    bandcampAlbumId: "1286108847",
  },
  milwaukee19: {
    id: "ccb86577-5c06-4180-8ff1-781c7c41e8d0",
    slug: "milwaukee-2019",
    location: "Milwaukee",
    date: "2019-08-23",
    imageUrl: "https://f4.bcbits.com/img/a2134759453_16.jpg",
    bandcampAlbumId: "2354695487",
  },
  manchester19: {
    id: "01575133-ff92-4668-99d4-b1b62a9f29eb",
    slug: "manchester-2019",
    location: "Manchester",
    date: "2019-10-03",
    imageUrl: null,
    bandcampAlbumId: null,
  },
  brussels19: {
    id: "493db3ef-ee80-4e12-acc2-6fb046b79408",
    slug: "brussels-2019",
    location: "Brussels",
    date: "2019-10-08",
    imageUrl: "https://f4.bcbits.com/img/a2684291974_16.jpg",
    bandcampAlbumId: "1602825616",
  },
  madrid19: {
    id: "11597d9b-21e7-43b7-b681-cd22a31c5a90",
    slug: "madrid-2019",
    location: "Madrid",
    date: "2019-10-18",
    imageUrl: "https://f4.bcbits.com/img/a3650674791_16.jpg",
    bandcampAlbumId: "6509641",
  },

  // ====================================================
  // Micro Tour 2021
  sydney21: {
    id: "95a0d2a2-4147-44b5-9f4c-ef871a13bf62",
    slug: "sydney-2021",
    location: "Sydney",
    date: "2021-04-22",
    imageUrl: "https://f4.bcbits.com/img/a0572452225_16.jpg",
    bandcampAlbumId: "2609270300",
  },

  // ====================================================
  // 2021 Princess Theatre Residency
  brisbaneAcoustic21: {
    id: "81c86246-d8e8-4023-9be9-c72042ffdefe",
    slug: "brisbane-acoustic-2021",
    location: "Brisbane",
    date: "2021-12-19",
    imageUrl: "https://f4.bcbits.com/img/a2213415853_16.jpg",
    bandcampAlbumId: "1173053054",
  },

  // ====================================================
  // World Tour 2022
  pomona22: {
    id: "24f4df1a-7921-4ab0-a618-0479d4a8b2d7",
    slug: "pomona-2022",
    location: "Pomona",
    date: "2022-04-12",
    imageUrl: null,
    bandcampAlbumId: null,
  },
  slo22: {
    id: "cfbee1cf-66d6-4cf7-b539-ab1a56d4656f",
    slug: "slo-2022",
    location: "San Luis Obispo",
    date: "2022-04-24",
    imageUrl: "/showCovers/slo22.webp",
    bandcampAlbumId: null,
  },
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
  berkeley22: {
    id: "cb025e04-05bb-4569-8797-9d58d35e21ee",
    slug: "berkeley-2022",
    location: "Berkeley",
    date: "2022-10-02",
    imageUrl: "/showCovers/berkeley22.webp",
    bandcampAlbumId: null,
  },
  rr22: {
    id: "ca4d9095-cb3a-46d9-8dd8-3fdc7b15a7b6",
    slug: "red-rocks-2022",
    location: "Red Rocks",
    date: "2022-10-10",
    imageUrl: "https://f4.bcbits.com/img/a3180996672_16.jpg",
    bandcampAlbumId: "2418689883",
  },
  philadelphia22: {
    id: "f5ab804d-be48-4de5-b096-ceb33f1551fd",
    slug: "philadelphia-2022",
    location: "Philadelphia",
    date: "2022-10-22",
    imageUrl: "/showCovers/philadelphia22.webp",
    bandcampAlbumId: null,
  },

  // ====================================================
  // U.S. Residency Tour 2023
  caverns23: {
    id: "edb045a8-3998-42bd-8a8a-540b8124e3e3",
    slug: "the-caverns-2023",
    location: "The Caverns",
    date: "2023-06-01",
    imageUrl: "/showCovers/caverns23.webp",
    bandcampAlbumId: null,
  },
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
  hollywoodBowl23: {
    id: "cb9a091f-d5e3-42b1-84ce-d9a5e72a7ff6",
    slug: "hollywood-bowl-2023",
    location: "Hollywood Bowl",
    date: "2023-06-21",
    imageUrl: "/showCovers/hollywoodBowl23.webp",
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
  lowlands23: {
    id: "58a8f68b-0f95-4a3a-963b-9740a68b8729",
    slug: "lowlands-2023",
    location: "Lowlands",
    date: "2023-08-19",
    imageUrl: null,
    bandcampAlbumId: null,
  },

  // ====================================================
  // U.S. Tour 2024 pt. 1
  dc24: {
    id: "1aba10fe-3d4e-49c4-ae47-f30a2b7e0e1b",
    slug: "dc-2024",
    location: "D.C.",
    date: "2024-08-15",
    imageUrl: "https://f4.bcbits.com/img/a1586375238_16.jpg",
    bandcampAlbumId: "2799349219",
  },
  nyc24: {
    id: "4023c755-247d-4b29-86ec-7b1203e93bdf",
    slug: "nyc-2024",
    location: "New York City",
    date: "2024-08-16",
    imageUrl: "https://f4.bcbits.com/img/a4160066698_16.jpg",
    bandcampAlbumId: "3530855413",
  },
  boston24: {
    id: "dd72f78a-23c4-46fc-a82a-6befe9eac3e7",
    slug: "boston-2024",
    location: "Boston",
    date: "2024-08-19",
    imageUrl: "https://f4.bcbits.com/img/a4053913678_16.jpg",
    bandcampAlbumId: "2151609245",
  },
  maine24: {
    id: "212bb7b3-2ed9-4270-bf35-7026716a36b6",
    slug: "maine-2024",
    location: "Maine",
    date: "2024-08-20",
    imageUrl: "https://f4.bcbits.com/img/a1001399634_16.jpg",
    bandcampAlbumId: "2637870866",
  },
  toronto24: {
    id: "4b31bce2-5b79-4ea6-91ea-97b7d0a47aae",
    slug: "toronto-2024",
    location: "Toronto",
    date: "2024-08-21",
    imageUrl: "https://f4.bcbits.com/img/a1394424151_16.jpg",
    bandcampAlbumId: "3363110237",
  },
  detroit24: {
    id: "3bccdb81-d010-47e8-a9f8-4eb87f3f4066",
    slug: "detroit-2024",
    location: "Detroit",
    date: "2024-08-23",
    imageUrl: "https://f4.bcbits.com/img/a0824108206_16.jpg",
    bandcampAlbumId: "1675633392",
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
  philadelphia24: {
    id: "3924bba7-a859-4ce0-808c-2eacdf93b4bf",
    slug: "philadelphia-2024",
    location: "Philadelphia",
    date: "2024-08-27",
    imageUrl: "https://f4.bcbits.com/img/a2253820167_16.jpg",
    bandcampAlbumId: "1839675933",
  },
  richmond24: {
    id: "b9acb3f0-a406-44be-8fb5-26aedf47ee61",
    slug: "richmond-2024",
    location: "Richmond",
    date: "2024-08-28",
    imageUrl: "https://f4.bcbits.com/img/a4074051612_16.jpg",
    bandcampAlbumId: "1275144158",
  },
  asheville24: {
    id: "704abe4c-3cb2-4391-9a81-a5dcb1fd3a44",
    slug: "asheville-2024",
    location: "Asheville",
    date: "2024-08-30",
    imageUrl: "https://f4.bcbits.com/img/a2066920903_16.jpg",
    bandcampAlbumId: "817110471",
  },
  nashville24: {
    id: "f4b93c00-1998-4c3d-b625-f55d2e6b426c",
    slug: "nashville-2024",
    location: "Nashville",
    date: "2024-08-31",
    imageUrl: "https://f4.bcbits.com/img/a0545000465_16.jpg",
    bandcampAlbumId: "3239781259",
  },
  chicago24: {
    id: "6556aa55-88d3-43f8-bfdd-f348352ae1d0",
    slug: "chicago-2024",
    location: "Chicago",
    date: "2024-09-01",
    imageUrl: "https://f4.bcbits.com/img/a1788111107_16.jpg",
    bandcampAlbumId: "4294151713",
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
  vancouver24: {
    id: "d5147b82-c83b-448c-9d7f-9b2113da8cf7",
    slug: "vancouver-2024",
    location: "Vancouver",
    date: "2024-09-12",
    imageUrl: "https://f4.bcbits.com/img/a2167864021_16.jpg",
    bandcampAlbumId: "4272985994",
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
  pasoRobles24: {
    id: "372c1f0a-f676-46a3-9f21-34fdf02c30c5",
    slug: "paso-robles-2024",
    location: "Paso Robles",
    date: "2024-11-03",
    imageUrl: "https://f4.bcbits.com/img/a3550028268_16.jpg",
    bandcampAlbumId: "3875461640",
  },
  stanford24: {
    id: "935dd6ed-2153-4e4b-8bea-1d75825b8fe4",
    slug: "stanford-2024",
    location: "Stanford",
    date: "2024-11-04",
    imageUrl: "https://f4.bcbits.com/img/a2511383545_16.jpg",
    bandcampAlbumId: "2620217443",
  },
  sf24: {
    id: "0755f77f-3f36-498e-99b0-5f71228076a8",
    slug: "san-francisco-2024",
    location: "San Francisco",
    date: "2024-11-06",
    imageUrl: "https://f4.bcbits.com/img/a2123423689_16.jpg",
    bandcampAlbumId: "783019413",
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
  arkansas24: {
    id: "a647481f-4159-4351-9d9d-53630646a3dc",
    slug: "arkansas-2024",
    location: "Arkansas",
    date: "2024-11-13",
    imageUrl: "https://f4.bcbits.com/img/a3844836167_16.jpg",
    bandcampAlbumId: "2294934601",
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

// =============================================================================
// ============================= PERFROMANCES ==================================
// =============================================================================

// Ordered alphabetically by song title, not ordered with songs
export const seedPerformances = [
  // ===========================================================================
  // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

  // ====================================================
  // A New World
  {
    id: "a51e3a2c-b7ac-405f-b529-75c0b66dd3b5",
    songId: seedSongs.aNewWorld.id,
    showId: seedShows.rr22.id,
    showPosition: 46,
    spotifyTrackId: "15TIaZdiqaXI26z6Zy3pQq",
    bandcampTrackId: "2626401851",
    youtubeVideoId: "MKHP7DgwmI8",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Alter Me I
  {
    id: "c7437a1d-74fb-4136-a037-1ad382db36e0",
    songId: seedSongs.alterMeI.id,
    showId: seedShows.rr22.id,
    showPosition: 48,
    spotifyTrackId: "4c955Fv2ad2ar4Dv1yhOz4",
    bandcampTrackId: "779484551",
    youtubeVideoId: "MKHP7DgwmI8",
    youtubeVideoStartTime: 211,
  },

  // ====================================================
  // Alter Me II
  {
    id: "095a01ac-da7a-43fe-99d6-223fd26d5269",
    songId: seedSongs.alterMeII.id,
    showId: seedShows.rr22.id,
    showPosition: 50,
    spotifyTrackId: "5N9S69TuzO5o9lGnnTZN8Y",
    bandcampTrackId: "3702813776",
    youtubeVideoId: "MKHP7DgwmI8",
    youtubeVideoStartTime: 539,
  },

  // ====================================================
  // Altered Beast I
  {
    id: "205fc1ed-476b-4e6e-b3ec-e266261a4813",
    songId: seedSongs.alteredBeastI.id,
    showId: seedShows.rr22.id,
    showPosition: 47,
    spotifyTrackId: "1umAO0aamdVSo1BaVEvwCD",
    bandcampTrackId: "2383808222",
    youtubeVideoId: "MKHP7DgwmI8",
    youtubeVideoStartTime: 70,
  },

  // ====================================================
  // Altered Beast II
  {
    id: "707ecd97-afe5-48ca-a3f4-ae0dd273b1fb",
    songId: seedSongs.alteredBeastII.id,
    showId: seedShows.rr22.id,
    showPosition: 49,
    spotifyTrackId: "55u4BEVcvhuPfbHZz0kQB2",
    bandcampTrackId: "2314142736",
    youtubeVideoId: "MKHP7DgwmI8",
    youtubeVideoStartTime: 265,
  },

  // ====================================================
  // Altered Beast III
  {
    id: "ea2449b7-f2bf-4c35-a800-18de06af22d5",
    songId: seedSongs.alteredBeastIII.id,
    showId: seedShows.rr22.id,
    showPosition: 51,
    spotifyTrackId: "3Ez0Px0CYOEv2FFnmokwDm",
    bandcampTrackId: "3828515964",
    youtubeVideoId: "MKHP7DgwmI8",
    youtubeVideoStartTime: 592,
  },

  // ====================================================
  // Am I in Heaven?
  {
    id: "5d570fbd-057b-43f4-a2ac-6de6721f7c43",
    songId: seedSongs.amIInHeaven.id,
    showId: seedShows.nyc24.id,
    showPosition: 49,
    spotifyTrackId: "4apHMkcnHlTDUe2w1wMOEd",
    bandcampTrackId: "2965584288",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 10331,
  },
  {
    id: "a6c2ec9c-2b8c-4370-b793-26b279cafeca",
    songId: seedSongs.amIInHeaven.id,
    showId: seedShows.minneapolis24.id,
    showPosition: 19,
    spotifyTrackId: "3CDfMtMJUaPswlRu7Xl5LA",
    bandcampTrackId: "3232854137",
    youtubeVideoId: "qY7iyjHdBUM",
    youtubeVideoStartTime: 7877,
  },
  {
    id: "e6ad9fe9-41e3-4fee-a64c-4fbecdce7bc0",
    songId: seedSongs.amIInHeaven.id,
    showId: seedShows.rr24.id,
    showPosition: 16,
    spotifyTrackId: "1LktfcaDPEcwW4U9PwiMFf",
    bandcampTrackId: "1999983751",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 7480,
  },
  {
    id: "79763acc-ec84-4030-87ba-764c543b112f",
    songId: seedSongs.amIInHeaven.id,
    showId: seedShows.la24.id,
    showPosition: 6,
    spotifyTrackId: "3tcsCvX0Br5MqJPSLd3fvb",
    bandcampTrackId: "1508924947",
    // TODO: Replace with the official video when it's released
    youtubeVideoId: "iO94a7oTK5k",
    youtubeVideoStartTime: 2311,
  },
  {
    id: "b5f73c66-68af-47b4-8abf-397e9c34a37e",
    songId: seedSongs.amIInHeaven.id,
    showId: seedShows.berkeley22.id,
    showPosition: 26,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Ambergris
  {
    id: "10c868e6-9ecb-4432-b581-6aaa7d5be028",
    songId: seedSongs.ambergris.id,
    showId: seedShows.minneapolis24.id,
    showPosition: 9,
    spotifyTrackId: "7AHs3sdl65nBpPuluawqej",
    bandcampTrackId: "4220132234",
    youtubeVideoId: "qY7iyjHdBUM",
    youtubeVideoStartTime: 2758,
  },
  {
    id: "e36e5956-e314-4df7-ada0-a7c4dcf15e26",
    songId: seedSongs.ambergris.id,
    showId: seedShows.detroit24.id,
    showPosition: 2,
    spotifyTrackId: "1FEFtaZkVji9ayAB3AWDVc",
    bandcampTrackId: "3779485085",
    youtubeVideoId: "TbVDmWNbYFs",
    youtubeVideoStartTime: 1380,
  },

  // ====================================================
  // Anoxia
  {
    id: "97583472-9258-4082-91c8-514f9f4618d3",
    songId: seedSongs.anoxia.id,
    showId: seedShows.remlinger23.id,
    showPosition: 34,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "Rs_lVg2yIKI",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Antarctica
  {
    id: "bfdb61d6-1be5-496b-9568-1f969b915f0b",
    songId: seedSongs.antarctica.id,
    showId: seedShows.rr24.id,
    showPosition: 43,
    spotifyTrackId: "5Bhaklk3JSLAiCtXk1D3Il",
    bandcampTrackId: "3656170022",
    youtubeVideoId: "KpTyphhCmEA",
    youtubeVideoStartTime: 2394,
  },
  {
    id: "c2357783-0bb6-4b59-b07d-ed8a0a3e32f8",
    songId: seedSongs.antarctica.id,
    showId: seedShows.phoenix24.id,
    showPosition: 13,
    spotifyTrackId: "45CE2zozlHwUIDwUjLNvP6",
    bandcampTrackId: "618218303",
    youtubeVideoId: "MVzLz_q8xAg",
    youtubeVideoStartTime: 7004,
  },
  {
    id: "ff648bfd-f043-4e2c-ae2b-024207f63950",
    songId: seedSongs.antarctica.id,
    showId: seedShows.austin24.id,
    showPosition: 3,
    spotifyTrackId: "7w9O1cX4xOirFbm5mfKnlr",
    bandcampTrackId: "2931317360",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "hD6SW7Nmj-U",
    youtubeVideoStartTime: 3066,
  },
  {
    id: "c5c585bc-112a-44e0-bb5b-76f7f9e70a2d",
    songId: seedSongs.antarctica.id,
    showId: seedShows.pasoRobles24.id,
    showPosition: 6,
    spotifyTrackId: "",
    bandcampTrackId: "3096333718",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "qvBMzzDtgHE",
    youtubeVideoStartTime: 3237,
  },

  // ====================================================
  // Astroturf
  {
    id: "f462f5fb-49ca-492a-be86-d61bb2593948",
    songId: seedSongs.astroturf.id,
    showId: seedShows.stl24.id,
    showPosition: 10,
    spotifyTrackId: "2pYNSFxr72brFrLbh3EDxB",
    bandcampTrackId: "3408292117",
    youtubeVideoId: "FGOsQiPCpEA",
    youtubeVideoStartTime: 3815,
  },
  {
    id: "4097e6e0-b7f4-46f0-a191-e955c74813b0",
    songId: seedSongs.astroturf.id,
    showId: seedShows.hollywoodBowl23.id,
    showPosition: 17,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "8f5HBVJEMwM",
    youtubeVideoStartTime: null,
  },

  // ===========================================================================
  // BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

  // ====================================================
  // Big Fig Wasp
  {
    id: "a982b6aa-590b-4efa-9f2a-5ebd37b6ea7d",
    songId: seedSongs.bigFigWasp.id,
    showId: seedShows.chicago24.id,
    showPosition: 2,
    spotifyTrackId: "33mREAnThJjq2irj1KNLFn",
    bandcampTrackId: "2902387279",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 912,
  },

  // ====================================================
  // Billabong Valley
  {
    id: "1ef77fac-6429-4b08-b567-7bfec3cd35c0",
    songId: seedSongs.billabongValley.id,
    showId: seedShows.milwaukee24.id,
    showPosition: 16,
    spotifyTrackId: "1W2oJM2m0r0dAmkN8vyRtZ",
    bandcampTrackId: "565249783",
    youtubeVideoId: "cTO9U8nG280",
    youtubeVideoStartTime: 7426,
  },
  {
    id: "fd088ca6-789c-4f10-a5b8-5dd7b5022c0a",
    songId: seedSongs.billabongValley.id,
    showId: seedShows.rr22.id,
    showPosition: 80,
    spotifyTrackId: "1jTNAjve26gQT0wABxGpsQ",
    bandcampTrackId: "3750259867",
    youtubeVideoId: "EIKGNBeKKok",
    youtubeVideoStartTime: null,
  },
  {
    id: "de547ac7-d849-4e31-9e33-f7487510bcfb",
    songId: seedSongs.billabongValley.id,
    showId: seedShows.philadelphia22.id,
    showPosition: 2,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "zPJQJY6vY8E",
    youtubeVideoStartTime: 366,
  },
  {
    id: "6c438e86-997c-4b38-8b04-e9cf070af844",
    songId: seedSongs.billabongValley.id,
    showId: seedShows.detroit24.id,
    showPosition: 15,
    spotifyTrackId: "4FD4yOZmJG8EkCwQTlYcjm",
    bandcampTrackId: "1978119430",
    youtubeVideoId: "TbVDmWNbYFs",
    youtubeVideoStartTime: 7142,
  },

  // ====================================================
  // The Bitter Boogie
  {
    id: "acd6e4f5-63f9-486d-be1f-0a97dba3df50",
    songId: seedSongs.theBitterBoogie.id,
    showId: seedShows.richmond24.id,
    showPosition: 6,
    spotifyTrackId: "4ZLS0ofTuqUNoG24wxE3Pe",
    bandcampTrackId: "1671375291",
    youtubeVideoId: "5JEkTEktukg",
    youtubeVideoStartTime: 3809,
  },

  // ====================================================
  // Boogieman Sam
  {
    id: "89132b5b-586b-43f6-acb4-bf34dfdd76a2",
    songId: seedSongs.boogiemanSam.id,
    showId: seedShows.phoenix24.id,
    showPosition: 17,
    spotifyTrackId: "7mtHKdO2k3VNLzIPI3owpW",
    bandcampTrackId: "3582186128",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "MVzLz_q8xAg",
    youtubeVideoStartTime: 8834,
  },
  {
    id: "210d39f6-e43b-4792-84ac-4ac5c85ee8b5",
    songId: seedSongs.boogiemanSam.id,
    showId: seedShows.rr22.id,
    showPosition: 36,
    spotifyTrackId: "5dXrhzKkFeSVmv7Xcg7WOK",
    bandcampTrackId: "1399854240",
    youtubeVideoId: "_adQLXQDRgo",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // The Book
  {
    id: "e411b59b-0814-4c12-a020-bb7a17c6de80",
    songId: seedSongs.theBook.id,
    showId: seedShows.stl24.id,
    showPosition: 6,
    spotifyTrackId: "43Gg2ItnDmSQMa4dSH42oC",
    bandcampTrackId: "3317707139",
    youtubeVideoId: "FGOsQiPCpEA",
    youtubeVideoStartTime: 2168,
  },
  {
    id: "e47fffc2-ef46-4f44-afec-54470d28b51e",
    songId: seedSongs.theBook.id,
    showId: seedShows.kentucky24.id,
    showPosition: 3,
    spotifyTrackId: "02JxfUFbl46f6WGe1LO4HZ",
    bandcampTrackId: "1519673542",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 1289,
  },
  {
    id: "bb6f3f64-741d-4707-b7f9-4f09ba1e47f0",
    songId: seedSongs.theBook.id,
    showId: seedShows.sydney21.id,
    showPosition: 9,
    spotifyTrackId: "0sMcDlt7ugGffvHBAY5ztI",
    bandcampTrackId: "1963628346",
    youtubeVideoId: "3BQyGlBv44I",
    youtubeVideoStartTime: null,
  },

  // ===========================================================================
  // CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

  // ====================================================
  // Chang'e
  {
    id: "05eb878b-c3c6-4893-bfd9-a9df069b2bf8",
    songId: seedSongs["chang-e"].id,
    showId: seedShows.sf24.id,
    showPosition: 4,
    spotifyTrackId: "7EFTd29CbsVH3muUEsdfQ0",
    bandcampTrackId: "278065324",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 4389,
  },
  {
    id: "74b00cda-535e-42f6-95d5-fefbfe960550",
    songId: seedSongs["chang-e"].id,
    showId: seedShows.sd24.id,
    showPosition: 2,
    spotifyTrackId: "6BHy9HIvCWqkol1FBJf5RV",
    bandcampTrackId: "2549790930",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GR1A0l4c_5g",
    youtubeVideoStartTime: 1544,
  },

  // ====================================================
  // Change
  {
    id: "60e70506-625c-47d6-913e-3713583e6454",
    songId: seedSongs.change.id,
    showId: seedShows.chicago23.id,
    showPosition: 40,
    spotifyTrackId: "64uM2csvOSHhUcydJ9TSO8",
    bandcampTrackId: "497106560",
    youtubeVideoId: "Y76FyO15gAU",
    youtubeVideoStartTime: null,
  },
  {
    id: "b1d53112-e714-4358-ae8d-0e38fb156ad9",
    songId: seedSongs.change.id,
    showId: seedShows.boston24.id,
    showPosition: 2,
    spotifyTrackId: "0Jxt0CZ73HrFLg1qYPi5kf",
    bandcampTrackId: "1400988868",
    youtubeVideoId: "wbtTEgC6quI",
    youtubeVideoStartTime: 1007,
  },

  // ====================================================
  // Converge
  {
    id: "3d1cb14d-3f71-4250-8d89-087824b5cbca",
    songId: seedSongs.converge.id,
    showId: seedShows.nyc24.id,
    showPosition: 36,
    spotifyTrackId: "5pjMPlXJedFoUauZCgNRKi",
    bandcampTrackId: "1080660396",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 5257,
  },
  {
    id: "a53404e6-cd75-4aee-b28b-a61a7053c01c",
    songId: seedSongs.converge.id,
    showId: seedShows.kentucky24.id,
    showPosition: 6,
    spotifyTrackId: "6BXiniViNwI2URSWZ5VNMk",
    bandcampTrackId: "3111015917",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 2983,
  },

  // ====================================================
  // Crumbling Castle
  {
    id: "bd2569a5-b70d-43ae-aa28-34db3421f144",
    songId: seedSongs.crumblingCastle.id,
    showId: seedShows.phoenix24.id,
    showPosition: 7,
    spotifyTrackId: "4VZFO7VSTMZf6iRihhAYcz",
    bandcampTrackId: "2573628437",
    youtubeVideoId: "MVzLz_q8xAg",
    youtubeVideoStartTime: 3478,
  },
  {
    id: "1963354d-9206-4977-bb41-86a7598c862b",
    songId: seedSongs.crumblingCastle.id,
    showId: seedShows.chicago24.id,
    showPosition: 12,
    spotifyTrackId: "4bt50bapKr2izkPkz4FhQN",
    bandcampTrackId: "86304134",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 4708,
  },
  {
    id: "dd8effae-2e1b-45f0-8349-9aa24cb07141",
    songId: seedSongs.crumblingCastle.id,
    showId: seedShows.dc24.id,
    showPosition: 9,
    spotifyTrackId: "5BBpOYNquWXiVLnWz8x4ik",
    bandcampTrackId: "2063357108",
    youtubeVideoId: "8nvhFvcPBhk",
    youtubeVideoStartTime: 5384,
  },
  {
    id: "73c0b13a-687a-47b6-851e-dff648c43797",
    songId: seedSongs.crumblingCastle.id,
    showId: seedShows.rr22.id,
    showPosition: 74,
    spotifyTrackId: "3w96naqe1SBI88qnFVRplL",
    bandcampTrackId: "3182199629",
    youtubeVideoId: "rpgDJWGLk4E",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Cut Throat Boogie
  {
    id: "a43decb1-7771-4b5f-8d05-8440be41b555",
    songId: seedSongs.cutThroatBoogie.id,
    showId: seedShows.stanford24.id,
    showPosition: 9,
    spotifyTrackId: "20PcKcHkgivTptgNvmnheh",
    bandcampTrackId: "3435777254",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 3584,
  },
  {
    id: "424261b5-7c5b-40cf-a494-2128e74f84ff",
    songId: seedSongs.cutThroatBoogie.id,
    showId: seedShows.slo22.id,
    showPosition: 6,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "_SXpEZS3vlU",
    youtubeVideoStartTime: 1540,
  },

  // ====================================================
  // Cyboogie
  {
    id: "4aae7eb2-7542-4b19-bacf-5bc6bbf6f351",
    songId: seedSongs.cyboogie.id,
    showId: seedShows.adelaide19.id,
    showPosition: 5,
    spotifyTrackId: "7ivakMZFEf1Xbk8UvOV0YG",
    bandcampTrackId: "3417561903",
    youtubeVideoId: "-En85Oa4QN8",
    youtubeVideoStartTime: null,
  },
  {
    id: "58850a9b-688b-4e41-af8d-c165f1cfbaa6",
    songId: seedSongs.cyboogie.id,
    showId: seedShows.milwaukee19.id,
    showPosition: 15,
    spotifyTrackId: "4nuiXSTCZFBUr0mYFIdMOK",
    bandcampTrackId: "2477109882",
    youtubeVideoId: "75L_KJ7jsfk",
    youtubeVideoStartTime: null,
  },

  // ===========================================================================
  // DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

  // ====================================================
  // Daily Blues
  {
    id: "73a0f8b6-5dd9-4c92-802c-afc27cc50e69",
    songId: seedSongs.dailyBlues.id,
    showId: seedShows.stanford24.id,
    showPosition: 8,
    spotifyTrackId: "2EGCyXQNKqlLwZ2Llz5uVu",
    bandcampTrackId: "1985523665",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 3093,
  },
  {
    id: "85c66ac7-4fcc-4612-a4b7-8d8d229812aa",
    songId: seedSongs.dailyBlues.id,
    showId: seedShows.nyc24.id,
    showPosition: 2,
    spotifyTrackId: "0eLeLG3qMQ8WdDuBsVXzmt",
    bandcampTrackId: "3250859522",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 777,
  },
  {
    id: "807512be-12c9-4234-8ff2-a81cb26a1df4",
    songId: seedSongs.dailyBlues.id,
    showId: seedShows.chicago24.id,
    showPosition: 8,
    spotifyTrackId: "5INgbL6EZBttbA8unnd8Sa",
    bandcampTrackId: "4101439728",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 2813,
  },
  {
    id: "c9fe2ba0-c7db-4875-a34e-eaa1ba051665",
    songId: seedSongs.dailyBlues.id,
    showId: seedShows.stl24.id,
    showPosition: 16,
    spotifyTrackId: "2vEUvXAEoFZiUAJzKU54m2",
    bandcampTrackId: "2997856281",
    youtubeVideoId: "FGOsQiPCpEA",
    youtubeVideoStartTime: 6900,
  },

  // ====================================================
  // Dragon
  {
    id: "21fed194-6093-4628-bffd-cde4644e9ff2",
    songId: seedSongs.dragon.id,
    showId: seedShows.cleveland24.id,
    showPosition: 17,
    spotifyTrackId: "1o67U4f00s9QcsLAYpthl2",
    bandcampTrackId: "358317737",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 6877,
  },
  {
    id: "5da1257c-dff0-4cbd-838a-b1f2722b9d58",
    songId: seedSongs.dragon.id,
    showId: seedShows.rr24.id,
    showPosition: 10,
    spotifyTrackId: "4Y3ulPERqtPvUvjXgoAk0b",
    bandcampTrackId: "4104860493",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 4404,
  },
  {
    id: "4bc619e6-6f02-4a63-8cab-da949354db45",
    songId: seedSongs.dragon.id,
    showId: seedShows.chicago24.id,
    showPosition: 16,
    spotifyTrackId: "4JKfUSXrNNe4iyayWFUbKl",
    bandcampTrackId: "1637432913",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 6238,
  },
  {
    id: "26cbcfdf-7881-4b1d-b20f-b9d724a00909",
    songId: seedSongs.dragon.id,
    showId: seedShows.austin24.id,
    showPosition: 21,
    spotifyTrackId: "0W3QY8HnIMoJh3ULsDkvk7",
    bandcampTrackId: "534530359",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "hD6SW7Nmj-U",
    youtubeVideoStartTime: 10685,
  },
  {
    id: "b325b8c5-2a83-41a8-ae26-1783f82ef313",
    songId: seedSongs.dragon.id,
    showId: seedShows.miami24.id,
    showPosition: 15,
    spotifyTrackId: "6tLFZDOPU1dO9kgA0Ej110",
    bandcampTrackId: "78239097",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "_OgT1yyq0DM",
    youtubeVideoStartTime: 7224,
  },

  // ====================================================
  // The Dripping Tap
  {
    id: "5022ab78-932a-4259-aee3-5258c0da2b6d",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.oregon24.id,
    showPosition: 1,
    spotifyTrackId: "2CTTyK9PKu3l4NqRzcPz3I",
    bandcampTrackId: "3160394251",
    youtubeVideoId: "k69DG8aZ6mw",
    youtubeVideoStartTime: 430,
  },
  {
    id: "3660d32e-f36d-4a25-a9ef-1bd76a3b7a1b",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.maine24.id,
    showPosition: 16,
    spotifyTrackId: "3zHBOqkLTsy98klQ5yKgds",
    bandcampTrackId: "1178632036",
    youtubeVideoId: "6JS4Uq8X6X8",
    youtubeVideoStartTime: 6350,
  },
  {
    id: "dbb62683-8778-40e7-b2a9-4559c121e9da",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.remlinger23.id,
    showPosition: 31,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "jB7yQpU3fCw",
    youtubeVideoStartTime: null,
  },
  {
    id: "579cb937-6c67-447f-9d7c-9a25634d07d1",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.rr22.id,
    showPosition: 28,
    spotifyTrackId: "4uRjHD6rFsGuo7mbaDF7aO",
    bandcampTrackId: "2831038979",
    youtubeVideoId: "YG4Aosi0GYs",
    youtubeVideoStartTime: null,
  },
  {
    id: "2e346c92-df89-42de-85e0-98a79681e991",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.bonnaroo22.id,
    showPosition: 11,
    spotifyTrackId: "155jyYkFKTI9FsC5K2q0Ly",
    bandcampTrackId: "693325385",
    youtubeVideoId: "TbTBVZuTq4k",
    youtubeVideoStartTime: 3755,
  },
  {
    id: "91f67fea-667a-4206-aba4-5595c87545c9",
    songId: seedSongs.theDrippingTap.id,
    showId: seedShows.houston24.id,
    showPosition: 9,
    spotifyTrackId: "01cW4evwwnsKfxuSUJSxaX",
    bandcampTrackId: "3325456291",
    youtubeVideoId: "GRxg_EYCsDI",
    youtubeVideoStartTime: 4955,
  },

  // ===========================================================================
  // EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

  // ====================================================
  // Elbow
  {
    id: "d2805553-6990-4c49-bbe0-22d4acb48eb1",
    songId: seedSongs.elbow.id,
    showId: seedShows.rr24.id,
    showPosition: 6,
    spotifyTrackId: "78D9DJ5GtanDV4bnb5Be3K",
    bandcampTrackId: "3754985166",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 2471,
  },

  // ====================================================
  // Evil Death Roll
  {
    id: "da45bb97-4cba-4707-aa52-75e9753bc8df",
    songId: seedSongs.evilDeathRoll.id,
    showId: seedShows.richmond24.id,
    showPosition: 4,
    spotifyTrackId: "3GCRWbq1SHMiG1R5nP4qlG",
    bandcampTrackId: "3990766241",
    youtubeVideoId: "5JEkTEktukg",
    youtubeVideoStartTime: 2649,
  },
  {
    id: "acf09987-c3b1-4fee-bb11-b28e6c0dee3d",
    songId: seedSongs.evilDeathRoll.id,
    showId: seedShows.nashville24.id,
    showPosition: 1,
    spotifyTrackId: "2UfPjIs1iwQD9xUxUUXiWH",
    bandcampTrackId: "699192381",
    youtubeVideoId: "8RbhqJHZPtM",
    youtubeVideoStartTime: 448,
  },

  // ====================================================
  // Extinction
  {
    id: "b1ebd650-a2b1-4f35-bdf6-0cdb4342e45c",
    songId: seedSongs.extinction.id,
    showId: seedShows.sf24.id,
    showPosition: 7,
    spotifyTrackId: "2xsPkYYoYAcxw25vfMcVSb",
    bandcampTrackId: "4289851773",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 6453,
  },
  {
    id: "939ea57c-a335-4a66-a561-202340897c8a",
    songId: seedSongs.extinction.id,
    showId: seedShows.toronto24.id,
    showPosition: 15,
    spotifyTrackId: "1AgAYagzMpKvyYCSl9E2mo",
    bandcampTrackId: "3336316183",
    youtubeVideoId: "8sXbseUS6rM",
    youtubeVideoStartTime: 6543,
  },
  {
    id: "fba4e174-80ce-43d4-9fd6-32c992571f43",
    songId: seedSongs.extinction.id,
    showId: seedShows.gorge24.id,
    showPosition: 21,
    spotifyTrackId: "4TlOTOFxUkKpLxne83liTL",
    bandcampTrackId: "3494603253",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 8589,
  },
  {
    id: "802bbf75-38f1-4dab-897f-6e459950594a",
    songId: seedSongs.extinction.id,
    showId: seedShows.rr24.id,
    showPosition: 15,
    spotifyTrackId: "2Jh5dtL4kFfmtwJtZhc9yN",
    bandcampTrackId: "1187161556",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 6694,
  },
  {
    id: "908ff69a-ebbd-4155-a558-650d2c89ac74",
    songId: seedSongs.extinction.id,
    showId: seedShows.nashville24.id,
    showPosition: 18,
    spotifyTrackId: "25jcf5glrrK7HUdM2EixcC",
    bandcampTrackId: "3210531728",
    youtubeVideoId: "8RbhqJHZPtM",
    youtubeVideoStartTime: 6822,
  },

  // ===========================================================================
  // FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF

  // ====================================================
  // Field of Vision
  {
    id: "17232093-089f-4133-9b92-41d7306e258b",
    songId: seedSongs.fieldOfVision.id,
    showId: seedShows.stanford24.id,
    showPosition: 15,
    spotifyTrackId: "1IPraftC6qLYwG2ilCuFkw",
    bandcampTrackId: "2767430040",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 6180,
  },
  {
    id: "3cc50612-b3bf-4d7d-a04e-02c1647e2f3e",
    songId: seedSongs.fieldOfVision.id,
    showId: seedShows.abq24.id,
    showPosition: 11,
    spotifyTrackId: "5Gl0mcrGuFZyA2l9sK7dB1",
    bandcampTrackId: "3432281975",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "oYfmVYBymCM",
    youtubeVideoStartTime: 5016,
  },
  {
    id: "ed052b8a-9a68-46e1-b933-a56ad509bf06",
    songId: seedSongs.fieldOfVision.id,
    showId: seedShows.richmond24.id,
    showPosition: 9,
    spotifyTrackId: "0lZT7RjH98AbDygUIYSJNG",
    bandcampTrackId: "2759237781",
    youtubeVideoId: "5JEkTEktukg",
    youtubeVideoStartTime: 5234,
  },

  // ====================================================
  // Flamethrower
  {
    id: "26a94f68-1544-4654-9c95-d46736cfa115",
    songId: seedSongs.flamethrower.id,
    showId: seedShows.cleveland24.id,
    showPosition: 16,
    spotifyTrackId: "1TrcOMQEKAf3S028tgJ5BP",
    bandcampTrackId: "2113186532",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 6501,
  },
  {
    id: "2c31152a-fa9f-4066-9404-746fd5302278",
    songId: seedSongs.flamethrower.id,
    showId: seedShows.nyc24.id,
    showPosition: 18,
    spotifyTrackId: "3M9KMHUTs4KK8iAR8W22Q5",
    bandcampTrackId: "3074457233",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 6824,
  },
  {
    id: "bde784d7-5d75-42cb-9faf-892604c95314",
    songId: seedSongs.flamethrower.id,
    showId: seedShows.stAugustine24.id,
    showPosition: 10,
    spotifyTrackId: "1l6SVXpBH2reua0b9BbMBB",
    bandcampTrackId: "307643811",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GOypQkCShfw",
    youtubeVideoStartTime: 5366,
  },

  // ====================================================
  // Flight b741
  {
    id: "ab4239be-7de4-431d-a8e0-2a19ac24344f",
    songId: seedSongs.flightb741.id,
    showId: seedShows.atlanta24.id,
    showPosition: 9,
    spotifyTrackId: "1xpLoY0Gy3eDigtQkuqCa9",
    bandcampTrackId: "1266570339",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "I5S-AMdP4bs",
    youtubeVideoStartTime: 4986,
  },
  {
    id: "4394c96f-7297-4a9c-86af-b55ef13aa9f1",
    songId: seedSongs.flightb741.id,
    showId: seedShows.sd24.id,
    showPosition: 9,
    spotifyTrackId: "2QRLRAp1uNybtdlLL5J4Hg",
    bandcampTrackId: "1107634605",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GR1A0l4c_5g",
    youtubeVideoStartTime: 3941,
  },
  {
    id: "861aa66b-315d-4f0d-97b0-83bcaeda7618",
    songId: seedSongs.flightb741.id,
    showId: seedShows.gorge24.id,
    showPosition: 11,
    spotifyTrackId: "6QRMF59X7eGbFHWQPKnlGw",
    bandcampTrackId: "100095822",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 4462,
  },

  // ====================================================
  // Float Along - Fill Your Lungs
  {
    id: "a12280bf-6c20-4768-9d42-d98c4d5e799d",
    songId: seedSongs.fafyl.id,
    showId: seedShows.miami24.id,
    showPosition: 6,
    spotifyTrackId: "14hBBm6DOg7jIxPhdabaZH",
    bandcampTrackId: "1130482149",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "_OgT1yyq0DM",
    youtubeVideoStartTime: 3297,
  },
  {
    id: "64aa4180-f27f-4838-84a9-2b3ca353468b",
    songId: seedSongs.fafyl.id,
    showId: seedShows.asheville24.id,
    showPosition: 16,
    spotifyTrackId: "7ylIt7l96UDf51ABjmsekx",
    bandcampTrackId: "3415507546",
    youtubeVideoId: "cEvtbHcCyic",
    youtubeVideoStartTime: 7669,
  },
  {
    id: "ca71e8c6-a329-40bd-badd-d931e999eeb1",
    songId: seedSongs.fafyl.id,
    showId: seedShows.boston24.id,
    showPosition: 17,
    spotifyTrackId: "1azeSSMuRm3OodDGX9McPm",
    bandcampTrackId: "1849464637",
    youtubeVideoId: "wbtTEgC6quI",
    youtubeVideoStartTime: 8023,
  },
  {
    id: "8cb5d599-2127-4257-981b-7be3ab9b1915",
    songId: seedSongs.fafyl.id,
    showId: seedShows.brussels19.id,
    showPosition: 17,
    spotifyTrackId: "6wpGb8aeEwBmG7M4nj7bur",
    bandcampTrackId: "958531554",
    youtubeVideoId: "yxbaVl6K15A",
    youtubeVideoStartTime: null,
  },
  {
    id: "d201d63f-67a3-433e-ba44-0afdc0436399",
    songId: seedSongs.fafyl.id,
    showId: seedShows.northcote13.id,
    showPosition: 8,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "I8LbMgQVJLs",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // The Fourth Color
  {
    id: "60e973d9-4bad-46d9-80dd-06b3deac66bb",
    songId: seedSongs.fourthColor.id,
    showId: seedShows.phoenix24.id,
    showPosition: 8,
    spotifyTrackId: "2xuyYm9t1h6Cw3YilBwWtB",
    bandcampTrackId: "3751367707",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "MVzLz_q8xAg",
    youtubeVideoStartTime: 4229,
  },
  {
    id: "465d7226-1b75-4c74-94d8-f93e5c934c2a",
    songId: seedSongs.fourthColor.id,
    showId: seedShows.chicago24.id,
    showPosition: 13,
    spotifyTrackId: "0XzG3ySqoJ12YnglafEE4F",
    bandcampTrackId: "1013679244",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 5235,
  },
  {
    id: "2f0bbd46-5dcb-4a35-b37c-8178f0bcb495",
    songId: seedSongs.fourthColor.id,
    showId: seedShows.dc24.id,
    showPosition: 10,
    spotifyTrackId: "3bVycqgrruM1iIzjbdoK2c",
    bandcampTrackId: "3168659177",
    youtubeVideoId: "8nvhFvcPBhk",
    youtubeVideoStartTime: 6062,
  },
  {
    id: "98348b28-27c9-4248-bc99-86f626bf7753",
    songId: seedSongs.fourthColor.id,
    showId: seedShows.oregon24.id,
    showPosition: 6,
    spotifyTrackId: "4Ug6sDkv1I6qgHC7TK1sqB",
    bandcampTrackId: "2171285118",
    youtubeVideoId: "k69DG8aZ6mw",
    youtubeVideoStartTime: 3353,
  },

  // ===========================================================================
  // GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG

  // ====================================================
  // Gaia
  {
    id: "1ab6bd24-53f8-41d0-a80d-48361edbfd2e",
    songId: seedSongs.gaia.id,
    showId: seedShows.berkeley22.id,
    showPosition: 16,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "2NAHIqGKMOk",
    youtubeVideoStartTime: 344,
  },
  {
    id: "f41d05a9-9e34-45b6-8875-cb5808917a91",
    songId: seedSongs.gaia.id,
    showId: seedShows.kentucky24.id,
    showPosition: 5,
    spotifyTrackId: "6bhkxytomw9kgJaHOtdo01",
    bandcampTrackId: "3348781135",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 2284,
  },
  {
    id: "28ed7798-5e93-4dff-b5d5-1695702c95ce",
    songId: seedSongs.gaia.id,
    showId: seedShows.gorge24.id,
    showPosition: 27,
    spotifyTrackId: "1Qm8e6RjAHlSPaMgy40sht",
    bandcampTrackId: "1692217050",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 10553,
  },

  // ====================================================
  // Gamma Knife
  {
    id: "80817c8d-5b34-4bc8-828c-b3ba3bc26ddb",
    songId: seedSongs.gammaKnife.id,
    showId: seedShows.chicago24.id,
    showPosition: 3,
    spotifyTrackId: "1TF0vRogzNHgXIG0yfXzqv",
    bandcampTrackId: "1349833954",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 1186,
  },
  {
    id: "e31723ef-f1bb-4612-b56d-8a394330faac",
    songId: seedSongs.gammaKnife.id,
    showId: seedShows.rr22.id,
    showPosition: 56,
    spotifyTrackId: "12g33R5FFm8FT0qogTcfCb",
    bandcampTrackId: "3686848957",
    youtubeVideoId: "lb7vWhUHEFg",
    youtubeVideoStartTime: 441,
  },

  // ====================================================
  // Gila Monster
  {
    id: "acc7c935-9a69-4a72-9d72-8bf1030e97bf",
    songId: seedSongs.gilaMonster.id,
    showId: seedShows.cleveland24.id,
    showPosition: 18,
    spotifyTrackId: "0iENbL7mwaoYJEOph99UQb",
    bandcampTrackId: "396623506",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 7470,
  },
  {
    id: "ce6b7332-bfb3-4da1-a22c-0af4e956f178",
    songId: seedSongs.gilaMonster.id,
    showId: seedShows.austin24.id,
    showPosition: 20,
    spotifyTrackId: "0PKBGtRft47XwsgvwW3g3V",
    bandcampTrackId: "3138958661",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "hD6SW7Nmj-U",
    youtubeVideoStartTime: 10373,
  },

  // ====================================================
  // Gilgamesh
  {
    id: "f54af3ef-e912-4587-957a-5b41301be2b4",
    songId: seedSongs.gilgamesh.id,
    showId: seedShows.sf24.id,
    showPosition: 5,
    spotifyTrackId: "4qRRij4NzySaXClGUsqGKn",
    bandcampTrackId: "1783165953",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 5013,
  },
  {
    id: "6ec36f6f-c3fc-42f4-9a8a-35ccf094fcc3",
    songId: seedSongs.gilgamesh.id,
    showId: seedShows.philadelphia24.id,
    showPosition: 18,
    spotifyTrackId: "62xMl2wTG7LApBDUSmY8bT",
    bandcampTrackId: "997148133",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "aafc4d23-7009-4b34-aa3c-500a7ef5363e",
    songId: seedSongs.gilgamesh.id,
    showId: seedShows.atlanta24.id,
    showPosition: 16,
    spotifyTrackId: "4VjZ5TXs6Vs4utgnUZ41wx",
    bandcampTrackId: "857629155",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "I5S-AMdP4bs",
    youtubeVideoStartTime: 7814,
  },

  // ====================================================
  // Gondii
  {
    id: "7c7d108c-da40-45b4-85ff-0b92870d6538",
    songId: seedSongs.gondii.id,
    showId: seedShows.stanford24.id,
    showPosition: 12,
    spotifyTrackId: "6VTIxaMspdTcDZqAT7awTn",
    bandcampTrackId: "3830352276",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 4543,
  },
  {
    id: "b2f54c9e-11f8-4c2f-bde1-74a93118c0c5",
    songId: seedSongs.gondii.id,
    showId: seedShows.boston24.id,
    showPosition: 1,
    spotifyTrackId: "6v7me3Xyzdjk4FDOfR0Wo6",
    bandcampTrackId: "3927576718",
    youtubeVideoId: "wbtTEgC6quI",
    youtubeVideoStartTime: 334,
  },

  // ====================================================
  // The Grim Reaper
  {
    id: "0243fc07-1469-4376-9dc8-cd7314d3dc71",
    songId: seedSongs.theGrimReaper.id,
    showId: seedShows.nola24.id,
    showPosition: 8,
    spotifyTrackId: "53p19h1evWNDuQ9i5Cv1Wo",
    bandcampTrackId: "2579325509",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "FET0riVKZa0",
    youtubeVideoStartTime: 4687,
  },
  {
    id: "2304ff6d-2f92-43b1-b447-568dc96f4fdd",
    songId: seedSongs.theGrimReaper.id,
    showId: seedShows.vegas24.id,
    showPosition: 14,
    spotifyTrackId: "44jthIOKU84DHt3qisk7A7",
    bandcampTrackId: "4158827757",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "hxebzoQTkvA",
    youtubeVideoStartTime: 6306,
  },
  {
    id: "6c4d9fa0-1350-4634-be96-8872a508fc2c",
    songId: seedSongs.theGrimReaper.id,
    showId: seedShows.remlinger23.id,
    showPosition: 9,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "IausBvkbLAI",
    youtubeVideoStartTime: null,
  },
  {
    id: "8ae535ad-7954-4e1d-aeb8-21af22223642",
    songId: seedSongs.theGrimReaper.id,
    showId: seedShows.arkansas24.id,
    showPosition: 12,
    spotifyTrackId: "177IogsNo6sffdA6a4yX8v",
    bandcampTrackId: "844662673",
    youtubeVideoId: "5K02tvEbEp4",
    youtubeVideoStartTime: 5848,
  },
  {
    id: "c05c4a70-444f-4045-ae20-7fa79769b66c",
    songId: seedSongs.theGrimReaper.id,
    showId: seedShows.boston24.id,
    showPosition: 4,
    spotifyTrackId: "3PUtPXOu8n0Hm8DYwM2EVC",
    bandcampTrackId: "4183087458",
    youtubeVideoId: "wbtTEgC6quI",
    youtubeVideoStartTime: 2190,
  },

  // ===========================================================================
  // HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

  // ====================================================
  // Head On/Pill
  {
    id: "ddad346f-80c8-4b2d-ac0a-e884d6e8abf6",
    songId: seedSongs.headOn.id,
    showId: seedShows.austin24.id,
    showPosition: 1,
    spotifyTrackId: "4QPvCYWCUIzFfNukrXjrRg",
    bandcampTrackId: "3941477526",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "hD6SW7Nmj-U",
    youtubeVideoStartTime: 1191,
  },
  {
    id: "875fec17-93b4-46d3-9987-c6bd38bf014f",
    songId: seedSongs.headOn.id,
    showId: seedShows.chicago24.id,
    showPosition: 28,
    spotifyTrackId: "7DAteH8MxYwmkjF3mKUP0m",
    bandcampTrackId: "107876226",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 11046,
  },
  {
    id: "e699c3bf-8b77-40ea-a6fc-3497d834179b",
    songId: seedSongs.headOn.id,
    showId: seedShows.milwaukee19.id,
    showPosition: 19,
    spotifyTrackId: "0r8msV2yUtP4ra3BxGzzL6",
    bandcampTrackId: "3332150060",
    youtubeVideoId: "KN5n7ErGusg",
    youtubeVideoStartTime: null,
  },
  {
    id: "f251206a-c861-4a2c-a258-e1236c832cb7",
    songId: seedSongs.headOn.id,
    showId: seedShows.adelaide19.id,
    showPosition: 18,
    spotifyTrackId: "3R59fMPxzEr4w2LHHKfPua",
    bandcampTrackId: "1126397180",
    youtubeVideoId: "4pItq9cRDzo",
    youtubeVideoStartTime: null,
  },
  {
    id: "6e06eaf3-e3a2-4dc5-b885-ef364c9c8f42",
    songId: seedSongs.headOn.id,
    showId: seedShows.sf16.id,
    showPosition: 13,
    spotifyTrackId: "5i7A2n0XdJBd08yZ0zhtuQ",
    bandcampTrackId: "2280943585",
    youtubeVideoId: "n98Je4AJbu8",
    youtubeVideoStartTime: 3512,
  },
  {
    id: "e053bbdb-6a91-45fe-89f8-67f551067880",
    songId: seedSongs.headOn.id,
    showId: seedShows.caverns23.id,
    showPosition: 13,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "yD4Uf-lPhek",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Hell
  {
    id: "cddf4cb0-e21c-4073-8fd4-50df154d3c62",
    songId: seedSongs.hell.id,
    showId: seedShows.la24.id,
    showPosition: 3,
    spotifyTrackId: "525n2ecTIxzF6DrjD0zFVn",
    bandcampTrackId: "3251862866",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "iO94a7oTK5k",
    youtubeVideoStartTime: 994,
  },
  {
    id: "27a65a61-ec48-43e6-bd07-af580eb0e27a",
    songId: seedSongs.hell.id,
    showId: seedShows.miami24.id,
    showPosition: 14,
    spotifyTrackId: "7bg6mrAocsIrYGGyHgTjzd",
    bandcampTrackId: "1413798820",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "_OgT1yyq0DM",
    youtubeVideoStartTime: 6942,
  },

  // ====================================================
  // Her and I (Slow Jam 2)
  {
    id: "3322528a-0349-4d79-8449-42434abff995",
    songId: seedSongs.herAndI.id,
    showId: seedShows.atlanta24.id,
    showPosition: 6,
    spotifyTrackId: "58HefZKmyPIb3S9VwZ06Us",
    bandcampTrackId: "3562250543",
    youtubeVideoId: "I5S-AMdP4bs",
    youtubeVideoStartTime: 2730,
  },
  {
    id: "3a16195d-92bc-4116-9623-488e2e4d0c3f",
    songId: seedSongs.herAndI.id,
    showId: seedShows.brisbaneAcoustic21.id,
    showPosition: 11,
    spotifyTrackId: "6SMEHR4OoddHYdq6hNk0La",
    bandcampTrackId: "2448379173",
    youtubeVideoId: "vfWdWU5J2zc",
    youtubeVideoStartTime: 4215,
  },
  {
    id: "df220ae8-f713-4250-93ca-29e901303f2a",
    songId: seedSongs.herAndI.id,
    showId: seedShows.rr22.id,
    showPosition: 72,
    spotifyTrackId: "66OrXAnD4i9Cpv6rV1rTyp",
    bandcampTrackId: "1735422173",
    youtubeVideoId: "_xtmhWlvI2Q",
    youtubeVideoStartTime: null,
  },
  {
    id: "6f207c8e-6188-4914-a83e-1e018382117c",
    songId: seedSongs.herAndI.id,
    showId: seedShows.remlinger23.id,
    showPosition: 39,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "qi64uChq2us",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Hog Calling Contest
  {
    id: "9313d6ca-96d3-4fcd-988b-67958e922802",
    songId: seedSongs.hogCallingContest.id,
    showId: seedShows.gorge24.id,
    showPosition: 9,
    spotifyTrackId: "1rRCR349K2PTa7huIHkwys",
    bandcampTrackId: "3686475146",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 4020,
  },
  {
    id: "0f3275cb-37a3-4d25-b2c9-3b62b6e9c301",
    songId: seedSongs.hogCallingContest.id,
    showId: seedShows.stAugustine24.id,
    showPosition: 8,
    spotifyTrackId: "5ecLMjKSjbWg7KTHIAiEWV",
    bandcampTrackId: "1609009299",
    youtubeVideoId: "GOypQkCShfw",
    youtubeVideoStartTime: 4717,
  },

  // ====================================================
  // Hot Water
  {
    id: "81387e59-8ce6-4dd8-97b1-7367db88884c",
    songId: seedSongs.hotWater.id,
    showId: seedShows.vegas24.id,
    showPosition: 11,
    spotifyTrackId: "6l8I3oDV1rJ2q6zVZa0Jzw",
    bandcampTrackId: "665703727",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "hxebzoQTkvA",
    youtubeVideoStartTime: 4474,
  },
  {
    id: "7c182bf8-ed56-497f-95a4-200d021b974e",
    songId: seedSongs.hotWater.id,
    showId: seedShows.remlinger23.id,
    showPosition: 13,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "V_aZri_exK0",
    youtubeVideoStartTime: null,
  },
  {
    id: "113e94b1-fa5d-4331-8009-769405c2a97f",
    songId: seedSongs.hotWater.id,
    showId: seedShows.rr24.id,
    showPosition: 36,
    spotifyTrackId: "135tSNwdwC2l3OQFyNrFzC",
    bandcampTrackId: "2417251743",
    youtubeVideoId: "8M8T3mFdPNQ",
    youtubeVideoStartTime: 5935,
  },
  {
    id: "e79d8ec7-b9dc-4ee7-ae60-fc4a3ca25fb9",
    songId: seedSongs.hotWater.id,
    showId: seedShows.nyc24.id,
    showPosition: 26,
    spotifyTrackId: "3bkxHdeIBwEaOT1WySlqqs",
    bandcampTrackId: "1347540828",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 441,
  },

  // ====================================================
  // Hot Wax
  {
    id: "a3820b34-318b-4ec5-8c16-97e78d696e9e",
    songId: seedSongs.hotWax.id,
    showId: seedShows.nyc24.id,
    showPosition: 34,
    spotifyTrackId: "4CjkjneR7VtlpNXljmm0kE",
    bandcampTrackId: "1857901996",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 4534,
  },
  {
    id: "7226d110-9b69-440a-af40-673ab468e0a2",
    songId: seedSongs.hotWax.id,
    showId: seedShows.atlanta24.id,
    showPosition: 5,
    spotifyTrackId: "5rriRYxvDbKjmMM98ZkS03",
    bandcampTrackId: "1768274572",
    youtubeVideoId: "I5S-AMdP4bs",
    youtubeVideoStartTime: 2523,
  },

  // ====================================================
  // Hypertension
  {
    id: "1047527d-2065-47b3-8ba6-cd4ad11ba441",
    songId: seedSongs.hypertension.id,
    showId: seedShows.rr23.id,
    showPosition: 6,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "Q1W5YLf4WQM",
    youtubeVideoStartTime: 2750,
  },
  {
    id: "05a9bf44-f826-4075-aee8-80d2e8da8ce3",
    songId: seedSongs.hypertension.id,
    showId: seedShows.pasoRobles24.id,
    showPosition: 5,
    spotifyTrackId: null,
    bandcampTrackId: "239389408",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "qvBMzzDtgHE",
    youtubeVideoStartTime: 2083,
  },
  {
    id: "d561320a-eb4e-46ba-9638-1f7d09f0f7fc",
    songId: seedSongs.hypertension.id,
    showId: seedShows.minneapolis24.id,
    showPosition: 10,
    spotifyTrackId: "75SSmjzxmVqmHpxs7VFE0t",
    bandcampTrackId: "4271826293",
    youtubeVideoId: "qY7iyjHdBUM",
    youtubeVideoStartTime: 3219,
  },

  // ===========================================================================
  // IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

  // ====================================================
  // Ice V
  {
    id: "cb486f33-24dc-4309-b90c-722bf13ad8c4",
    songId: seedSongs.iceV.id,
    showId: seedShows.rr23.id,
    showPosition: 7,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "Q1W5YLf4WQM",
    youtubeVideoStartTime: 3510,
  },
  {
    id: "0338d9d5-414e-4ccb-b26e-ee3d5940d9dd",
    songId: seedSongs.iceV.id,
    showId: seedShows.cleveland24.id,
    showPosition: 7,
    spotifyTrackId: "4MdeA12hIVuMi8rlpwISrc",
    bandcampTrackId: "2435021333",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 3312,
  },
  {
    id: "9b3fc2a7-e1a9-4758-90c7-f6159977bbe8",
    songId: seedSongs.iceV.id,
    showId: seedShows.houston24.id,
    showPosition: 5,
    spotifyTrackId: "1ng7rYR7dGq5ONDqdVmlkY",
    bandcampTrackId: "759959676",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GRxg_EYCsDI",
    youtubeVideoStartTime: 2659,
  },

  // ====================================================
  // Intrasport
  {
    id: "33fce7c9-7b67-4f7a-97db-9297087ef168",
    songId: seedSongs.intrasport.id,
    showId: seedShows.sf24.id,
    showPosition: 8,
    spotifyTrackId: "4gmaWdNa8NU9jDffYF7vc3",
    bandcampTrackId: "1638313612",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 7420,
  },

  // ====================================================
  // Interior People
  {
    id: "eb5d8e1a-2637-476d-9fd7-8909caf62fff",
    songId: seedSongs.interiorPeople.id,
    showId: seedShows.vegas24.id,
    showPosition: 12,
    spotifyTrackId: "4N4vvY3cxUVf4ao4qRHDBN",
    bandcampTrackId: "1493100647",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "hxebzoQTkvA",
    youtubeVideoStartTime: 4944,
  },
  {
    id: "9d4b2f82-0232-4840-b790-f8c2a1dc7bcd",
    songId: seedSongs.interiorPeople.id,
    showId: seedShows.stanford24.id,
    showPosition: 13,
    spotifyTrackId: "4C99lo25pP55YQdyD4ty3g",
    bandcampTrackId: "1693349993",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 5245,
  },

  // ====================================================
  // Iron Lung
  {
    id: "7e37c8c6-b012-4e44-9c34-b818196ca969",
    songId: seedSongs.ironLung.id,
    showId: seedShows.phoenix24.id,
    showPosition: 15,
    spotifyTrackId: "1Ew7GQLKq35mXLhTuLJCPt",
    bandcampTrackId: "3549935599",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "MVzLz_q8xAg",
    youtubeVideoStartTime: 7739,
  },
  {
    id: "588c3fb5-1785-4d51-9d94-a6d6eac869c5",
    songId: seedSongs.ironLung.id,
    showId: seedShows.kentucky24.id,
    showPosition: 20,
    spotifyTrackId: "0wakm6DGHPsexgbI8CU3N5",
    bandcampTrackId: "283654820",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 8104,
  },
  {
    id: "e1ae9545-f094-460b-8a2e-03a6c04eddac",
    songId: seedSongs.ironLung.id,
    showId: seedShows.richmond24.id,
    showPosition: 10,
    spotifyTrackId: "0UBSgrFjhIu4GZY1he9Noi",
    bandcampTrackId: "2228034745",
    youtubeVideoId: "5JEkTEktukg",
    youtubeVideoStartTime: 5498,
  },

  // ===========================================================================
  // LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

  // ====================================================
  // Le Risque
  {
    id: "14d48726-2264-49e0-be00-baedc0d2c8bd",
    songId: seedSongs.leRisque.id,
    showId: seedShows.minneapolis24.id,
    showPosition: 12,
    spotifyTrackId: "776JDTXwr7BvdDtKGDKXKQ",
    bandcampTrackId: "1366238147",
    youtubeVideoId: "qY7iyjHdBUM",
    youtubeVideoStartTime: 4719,
  },
  {
    id: "43834f0c-0c58-4876-8a4e-d18174054064",
    songId: seedSongs.leRisque.id,
    showId: seedShows.rr24.id,
    showPosition: 8,
    spotifyTrackId: "2IKnCNrVaDRR3eFcx4puBO",
    bandcampTrackId: "772454983",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 3745,
  },
  {
    id: "55bb995e-a9b9-4187-a9d4-050c953574de",
    songId: seedSongs.leRisque.id,
    showId: seedShows.nola24.id,
    showPosition: 18,
    spotifyTrackId: "5PPS1zHkxfT2h0IVFNm9NK",
    bandcampTrackId: "2720617361",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "KbgIW1SNq64",
    youtubeVideoStartTime: null,
  },
  {
    id: "a23e763c-99a0-492f-ad2b-d09748789ab5",
    songId: seedSongs.leRisque.id,
    showId: seedShows.miami24.id,
    showPosition: 3,
    spotifyTrackId: "0USMDXklC7FEMdSPetkcIX",
    bandcampTrackId: "624402033",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "_OgT1yyq0DM",
    youtubeVideoStartTime: 1843,
  },
  {
    id: "2ac146da-04aa-4123-8745-6980101d984e",
    songId: seedSongs.leRisque.id,
    showId: seedShows.nashville24.id,
    showPosition: 7,
    spotifyTrackId: "6wzScD4E9qSzP4OZYU140q",
    bandcampTrackId: "272915997",
    youtubeVideoId: "8RbhqJHZPtM",
    youtubeVideoStartTime: 2848,
  },

  // ====================================================
  // Let Me Mend the Past
  {
    id: "eba540a0-63b1-442d-af61-4306476921fd",
    songId: seedSongs.letMeMendThePast.id,
    showId: seedShows.madrid19.id,
    showPosition: 9,
    spotifyTrackId: "5yDNY3VRjynyeuKxuhv04J",
    bandcampTrackId: "3594277571",
    youtubeVideoId: "_faNeGc3p3Y",
    youtubeVideoStartTime: null,
  },
  {
    id: "cac1519d-5f78-400f-992c-c683948cf478",
    songId: seedSongs.letMeMendThePast.id,
    showId: seedShows.gorge24.id,
    showPosition: 15,
    spotifyTrackId: "7Fhe1wCQjnFM0cjD9GQFKo",
    bandcampTrackId: "860012551",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 5754,
  },

  // ====================================================
  // Lord of Lightning
  {
    id: "18b36ef7-d14d-4e96-b57f-5edce155f495",
    songId: seedSongs.lordOfLightning.id,
    showId: seedShows.la24.id,
    showPosition: 23,
    spotifyTrackId: "2QjX4soIrUSMcWsUgGg93x",
    bandcampTrackId: "2935316849",
    youtubeVideoId: "iO94a7oTK5k",
    youtubeVideoStartTime: 9899,
  },

  // ===========================================================================
  // MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

  // ====================================================
  // Magenta Mountain
  {
    id: "1447a081-953c-4d30-bd14-e43056d3847e",
    songId: seedSongs.magentaMountain.id,
    showId: seedShows.gorge24.id,
    showPosition: 18,
    spotifyTrackId: "6qOqkCHPRH831SCRDTqBKv",
    bandcampTrackId: "1569212600",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 6745,
  },
  {
    id: "5507e518-77de-41f7-8ed7-81830b63e78b",
    songId: seedSongs.magentaMountain.id,
    showId: seedShows.mexicoCity22.id,
    showPosition: 21,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "EaU-3FY1JXM",
    youtubeVideoStartTime: 1137,
  },
  {
    id: "3dec08fa-382d-4c90-bfb5-e7a1089c6dd5",
    songId: seedSongs.magentaMountain.id,
    showId: seedShows.stAugustine24.id,
    showPosition: 15,
    spotifyTrackId: "0vV2hSlqzfUZcbsqlhwn5E",
    bandcampTrackId: "1263693826",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GOypQkCShfw",
    youtubeVideoStartTime: 7714,
  },
  {
    id: "1120ce66-5c3a-4b82-a854-1d274bf98ddd",
    songId: seedSongs.magentaMountain.id,
    showId: seedShows.arkansas24.id,
    showPosition: 13,
    spotifyTrackId: "2B60KuXP7pK5NNKVY2oBmN",
    bandcampTrackId: "4000060699",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "5K02tvEbEp4",
    youtubeVideoStartTime: 6596,
  },
  {
    id: "20885d24-8659-4665-8ed7-0899cd8c7af9",
    songId: seedSongs.magentaMountain.id,
    showId: seedShows.caverns23.id,
    // Position 9 for that night, but if we add more caverns shows, this should
    // be the position among all caverns songs.
    showPosition: 9,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "-wGbG2vR8wc",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Magma
  {
    id: "83354da3-ccf3-4589-875e-0ad48483f47e",
    songId: seedSongs.magma.id,
    showId: seedShows.rr23.id,
    showPosition: 25,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "CkCQskIxtj8",
    youtubeVideoStartTime: null,
  },
  {
    id: "01303513-e76e-453c-97fc-8c560e72127d",
    songId: seedSongs.magma.id,
    showId: seedShows.houston24.id,
    showPosition: 8,
    spotifyTrackId: "0QP7AUg7WXgw01AbBc68eZ",
    bandcampTrackId: "3380072931",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GRxg_EYCsDI",
    youtubeVideoStartTime: 4260,
  },
  {
    id: "49ed74ad-8967-4382-8e78-4b2dc9994120",
    songId: seedSongs.magma.id,
    showId: seedShows.abq24.id,
    showPosition: 12,
    spotifyTrackId: "3gdSrCBt5LXg9iaEf4TVAq",
    bandcampTrackId: "3544009407",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "oYfmVYBymCM",
    youtubeVideoStartTime: 5230,
  },
  {
    id: "238ec52c-dfa5-419e-ab33-8f6f7ff1dd3e",
    songId: seedSongs.magma.id,
    showId: seedShows.stanford24.id,
    showPosition: 17,
    spotifyTrackId: "7sKqVhK6CmTgZJnsUvHPwC",
    bandcampTrackId: "1338908065",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 7070,
  },
  {
    id: "fd3fb71e-f290-4ddf-b7c1-0a9d38a3932c",
    songId: seedSongs.magma.id,
    showId: seedShows.gorge24.id,
    showPosition: 5,
    spotifyTrackId: "5ZFZKRAaxCbdjD9xi9YMUx",
    bandcampTrackId: "3206819149",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 2561,
  },
  {
    id: "1b8cbc10-945a-41b6-8beb-a65318d52751",
    songId: seedSongs.magma.id,
    showId: seedShows.lowlands23.id,
    showPosition: 8,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "y8Wawh9X7GM",
    youtubeVideoStartTime: 2902,
  },
  {
    id: "82dfe820-5cb6-420b-9ce8-85cc04bfa963",
    songId: seedSongs.magma.id,
    showId: seedShows.sd24.id,
    showPosition: 14,
    spotifyTrackId: "7MgSUNITPjPLztiCJQaTx2",
    bandcampTrackId: "2810991010",
    // TODO: replace this with the official video once it's up
    youtubeVideoId: "GR1A0l4c_5g",
    youtubeVideoStartTime: 6172,
  },
  {
    id: "27dcc50d-ab61-423b-acc5-3297aafd0d18",
    songId: seedSongs.magma.id,
    showId: seedShows.stl24.id,
    showPosition: 14,
    spotifyTrackId: "0Td1svdpSx1X0zhQGzU6NP",
    bandcampTrackId: "989783890",
    youtubeVideoId: "FGOsQiPCpEA",
    youtubeVideoStartTime: 5940,
  },

  // ====================================================
  // Mars for the Rich
  {
    id: "02318b94-f3ff-4359-8c2c-2fbd58d0c6cf",
    songId: seedSongs.marsForTheRich.id,
    showId: seedShows.austin24.id,
    showPosition: 17,
    spotifyTrackId: "0AswhHGgSjBwL23A9h96I0",
    bandcampTrackId: "1731941150",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "hD6SW7Nmj-U",
    youtubeVideoStartTime: 9365,
  },

  // ====================================================
  // Mirage City
  {
    id: "ab36e296-a0a9-4553-9c7e-8efec595c58b",
    songId: seedSongs.mirageCity.id,
    showId: seedShows.abq24.id,
    showPosition: 8,
    spotifyTrackId: "2e2iiT2QWNtGVATUx5DlJR",
    bandcampTrackId: "804204545",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "oYfmVYBymCM",
    youtubeVideoStartTime: 3174,
  },
  {
    id: "096a152f-c570-478a-aa80-71b6d702ddef",
    songId: seedSongs.mirageCity.id,
    showId: seedShows.richmond24.id,
    showPosition: 8,
    spotifyTrackId: "2VQ9wsoZjCxWdAQ3d2rIgQ",
    bandcampTrackId: "1305004156",
    youtubeVideoId: "5JEkTEktukg",
    youtubeVideoStartTime: 4912,
  },

  // ====================================================
  // Most Of What I Like
  {
    id: "2cab4d81-d00a-48a3-980c-450e9a11cd5c",
    songId: seedSongs.mostOfWhatILike.id,
    showId: seedShows.caverns23.id,
    showPosition: 14,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "4LeGZbTr12A",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Motor Spirit
  {
    id: "bed7020d-dd44-4399-a0fb-ebe07b9bbda4",
    songId: seedSongs.motorSpirit.id,
    showId: seedShows.nyc24.id,
    showPosition: 40,
    spotifyTrackId: "4IUcqbuMq35rfybFc25PmS",
    bandcampTrackId: "2302924408",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 7128,
  },
  {
    id: "7a2c68cc-caf5-4aa4-a84f-9fe787999367",
    songId: seedSongs.motorSpirit.id,
    showId: seedShows.kentucky24.id,
    showPosition: 4,
    spotifyTrackId: "1ZKS4yZgNzgbL1AsWHI73R",
    bandcampTrackId: "45887920",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 1629,
  },

  // ====================================================
  // Mr. Beat
  {
    id: "476e52a8-71c6-4a26-8bf5-77f64dcd325f",
    songId: seedSongs.mrBeat.id,
    showId: seedShows.chicago24.id,
    showPosition: 5,
    spotifyTrackId: "2s1WrQcyiW8O3qgJCL0Bh0",
    bandcampTrackId: "266717703",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 1883,
  },
  {
    id: "3beb72ce-091e-43c6-97ee-af364a6ece35",
    songId: seedSongs.mrBeat.id,
    showId: seedShows.rr22.id,
    showPosition: 58,
    spotifyTrackId: "63wXCcSzMOh6i0z4N6Ih2p",
    bandcampTrackId: "4007654120",
    youtubeVideoId: "lb7vWhUHEFg",
    youtubeVideoStartTime: 1089,
  },

  // ====================================================
  // Muddy Water
  {
    id: "f58deed0-7745-4463-a4fd-743a9a29f929",
    songId: seedSongs.muddyWater.id,
    showId: seedShows.richmond24.id,
    showPosition: 5,
    spotifyTrackId: "2QEFBLopxIhXuvQTuAYuBA",
    bandcampTrackId: "2596273990",
    youtubeVideoId: "5JEkTEktukg",
    youtubeVideoStartTime: 3515,
  },

  // ====================================================
  // Murder of the Universe
  {
    id: "a76c363e-2199-40d7-be98-44d86e718bad",
    songId: seedSongs.motu.id,
    showId: seedShows.vegas24.id,
    showPosition: 6,
    spotifyTrackId: "7DGJRQEpT7n1cahNKPk0d3",
    bandcampTrackId: "2471235386",
    // TODO: Replace with the official video once it's up
    youtubeVideoId: "hxebzoQTkvA",
    youtubeVideoStartTime: 2602,
  },
  {
    id: "c1d6f740-1ddd-4d14-bf86-51b43893cb95",
    songId: seedSongs.motu.id,
    showId: seedShows.milwaukee19.id,
    showPosition: 14,
    spotifyTrackId: "5kKVdDixphTPwGMcrdHndu",
    bandcampTrackId: "3606943763",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "f3c3288f-c2c4-4817-b47b-1d3800fc8ae4",
    songId: seedSongs.motu.id,
    showId: seedShows.nyc24.id,
    showPosition: 48,
    spotifyTrackId: "3mP5Fl9n1zieVeMpLtmyRd",
    bandcampTrackId: "1413295876",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 9908,
  },

  // ===========================================================================
  // NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN

  // ====================================================
  // Nuclear Fusion
  {
    id: "9b9b5b82-8cc6-4e08-a8ed-bec026befd63",
    songId: seedSongs.nuclearFusion.id,
    showId: seedShows.vancouver24.id,
    showPosition: 3,
    spotifyTrackId: "6InMu3HVEQWLdxC0dEycAk",
    bandcampTrackId: "1553354825",
    youtubeVideoId: "5Y4bYCp4KAo",
    youtubeVideoStartTime: 1127,
  },

  // ===========================================================================
  // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

  // ====================================================
  // Open Water
  {
    id: "eca3f420-ca48-4e40-bcd5-c7d9f2274d66",
    songId: seedSongs.openWater.id,
    showId: seedShows.gorge24.id,
    showPosition: 4,
    spotifyTrackId: "5PZtsofG0HiTJgQtfHOuVV",
    bandcampTrackId: "1325552537",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 2139,
  },
  {
    id: "45a91a9e-73a2-44eb-848c-31800c7e21c6",
    songId: seedSongs.openWater.id,
    showId: seedShows.okc24.id,
    showPosition: 6,
    spotifyTrackId: null,
    bandcampTrackId: "594955589",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "TsK-U1PhmSc",
    youtubeVideoStartTime: 3252,
  },

  // ====================================================
  // Organ Farmer
  {
    id: "0c90dda1-0981-4b5e-b6ed-bede12129023",
    songId: seedSongs.organFarmer.id,
    showId: seedShows.oregon24.id,
    showPosition: 9,
    spotifyTrackId: "5ErxNrd2UbNsDJnRGmbkkv",
    bandcampTrackId: "745732241",
    youtubeVideoId: "k69DG8aZ6mw",
    youtubeVideoStartTime: 4413,
  },

  // ===========================================================================
  // PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP

  // ====================================================
  // People-Vultures
  {
    id: "bf25ea97-d04a-4ecb-bfb3-33b1f303bd1a",
    songId: seedSongs.peopleVultures.id,
    showId: seedShows.chicago24.id,
    showPosition: 4,
    spotifyTrackId: "3JM0qy4i62mYEODCY5hchU",
    bandcampTrackId: "2505063591",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 1472,
  },
  {
    id: "aeb32b74-e21b-441c-8079-5057d27a3452",
    songId: seedSongs.peopleVultures.id,
    showId: seedShows.rr22.id,
    showPosition: 57,
    spotifyTrackId: "1011Xkn7sEsRerVaJy2jaT",
    bandcampTrackId: "649182598",
    youtubeVideoId: "lb7vWhUHEFg",
    youtubeVideoStartTime: 738,
  },

  // ====================================================
  // Perihelion
  {
    id: "d3ae2d6f-c52a-444a-b223-05319147bc71",
    songId: seedSongs.perihelion.id,
    showId: seedShows.boston24.id,
    showPosition: 6,
    spotifyTrackId: "1TfgUdCviYz5QBDseXT9mo",
    bandcampTrackId: "2284809554",
    youtubeVideoId: "wbtTEgC6quI",
    youtubeVideoStartTime: 3233,
  },
  {
    id: "0c40beb2-5aa5-41c3-a8c8-0a83499346af",
    songId: seedSongs.perihelion.id,
    showId: seedShows.nashville24.id,
    showPosition: 16,
    spotifyTrackId: "79MrOFgbzba4fgo6r65DkD",
    bandcampTrackId: "1537742992",
    youtubeVideoId: "8RbhqJHZPtM",
    youtubeVideoStartTime: 5901,
  },

  // ====================================================
  // Planet B
  {
    id: "457f6dc2-aca4-48b2-8a5b-bff275572893",
    songId: seedSongs.planetB.id,
    showId: seedShows.rr24.id,
    showPosition: 11,
    spotifyTrackId: "5tdmcl6cSOiYFol0TF1kZ4",
    bandcampTrackId: "2913682568",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 5102,
  },
  {
    id: "4f326369-7322-497e-b69e-70cd642cd3c7",
    songId: seedSongs.planetB.id,
    showId: seedShows.atlanta24.id,
    showPosition: 4,
    spotifyTrackId: "1Y9fpjKct6i57PWOSTnYPM",
    bandcampTrackId: "3717346947",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "I5S-AMdP4bs",
    youtubeVideoStartTime: 2205,
  },
  {
    id: "dfd7a177-f295-4501-b114-5fde626c08da",
    songId: seedSongs.planetB.id,
    showId: seedShows.la24.id,
    showPosition: 2,
    spotifyTrackId: "0R6JLDzOcJjgGuSBpBQCgi",
    bandcampTrackId: "2638712147",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "iO94a7oTK5k",
    youtubeVideoStartTime: 660,
  },

  // ====================================================
  // Plastic Boogie
  {
    id: "7465275c-8bba-47af-b84a-3ee345744de4",
    songId: seedSongs.plasticBoogie.id,
    showId: seedShows.okc24.id,
    showPosition: 5,
    spotifyTrackId: null,
    bandcampTrackId: "3208205626",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "0da5df10-79cf-441e-9360-f27fbbf91c6a",
    songId: seedSongs.plasticBoogie.id,
    showId: seedShows.kentucky24.id,
    showPosition: 9,
    spotifyTrackId: "7wGoZzMySSBKdzW3yPUH7M",
    bandcampTrackId: "889442387",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 4001,
  },
  {
    id: "d866b25e-3b09-4d79-9eb7-1eca1e31200f",
    songId: seedSongs.plasticBoogie.id,
    showId: seedShows.minneapolis24.id,
    showPosition: 17,
    spotifyTrackId: "2Jy8P6a1PWg6hkSzt0h9TG",
    bandcampTrackId: "2141508110",
    youtubeVideoId: "qY7iyjHdBUM",
    youtubeVideoStartTime: 7343,
  },

  // ====================================================
  // Presumptuous
  {
    id: "45583f38-cf12-44a8-b481-ef8b68501e40",
    songId: seedSongs.presumptuous.id,
    showId: seedShows.rr23.id,
    showPosition: 30,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "Q1W5YLf4WQM",
    youtubeVideoStartTime: 2453,
  },

  // ===========================================================================
  // RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

  // ====================================================
  // Rats In The Sky
  {
    id: "4524634f-c30a-4efb-ada3-4dce8f8173fc",
    songId: seedSongs.ratsInTheSky.id,
    showId: seedShows.stl24.id,
    showPosition: 15,
    spotifyTrackId: "42u8HD9ABEPLsSQWNS5ksz",
    bandcampTrackId: "3019599984",
    youtubeVideoId: "FGOsQiPCpEA",
    youtubeVideoStartTime: 6661,
  },

  // ====================================================
  // Rattlesnake
  {
    id: "98128358-ec88-4032-8023-e4b4e6ec3c8c",
    songId: seedSongs.rattlesnake.id,
    showId: seedShows.rr22.id,
    showPosition: 14,
    spotifyTrackId: "3DFiNEyPyEUUWaP1Brcziw",
    bandcampTrackId: "1649372383",
    youtubeVideoId: "6rElf-KwwZA",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Raw Feel
  {
    id: "2c729067-310a-4493-be50-0fddaa756f28",
    songId: seedSongs.rawFeel.id,
    showId: seedShows.stanford24.id,
    showPosition: 16,
    spotifyTrackId: "3vMxMFoSOGK05MejIKlseD",
    bandcampTrackId: "982906612",
    // TODO: replace this with the official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 6401,
  },
  {
    id: "abe83deb-e0f4-491e-8f05-ad935c2f9cae",
    songId: seedSongs.rawFeel.id,
    showId: seedShows.cleveland24.id,
    showPosition: 4,
    spotifyTrackId: "1T1z3WsWpGTKeX8AG3hkGd",
    bandcampTrackId: "2118356148",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 2103,
  },

  // ====================================================
  // The River
  {
    id: "6805ba25-34c0-4cbf-a6f9-76bb927f4b99",
    songId: seedSongs.theRiver.id,
    showId: seedShows.rr22.id,
    showPosition: 12,
    spotifyTrackId: "1xvoxeB8W7AWLYg3w4WFKh",
    bandcampTrackId: "3613221164",
    youtubeVideoId: "wP3stlzXxDg",
    youtubeVideoStartTime: null,
  },
  {
    id: "900b4f8d-03a7-4302-be8a-06abe289d197",
    songId: seedSongs.theRiver.id,
    showId: seedShows.chicago23.id,
    showPosition: 11,
    spotifyTrackId: "3VpnMEZ1t2toMTaE6R0B1z",
    bandcampTrackId: "3791682806",
    youtubeVideoId: "FoKm9lrkPcc",
    youtubeVideoStartTime: null,
  },
  {
    id: "8c1e4ec8-7b9a-42c5-80ae-19d3d91cd61a",
    songId: seedSongs.theRiver.id,
    showId: seedShows.palp23.id,
    showPosition: 3,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "myIjlvrfdfY",
    youtubeVideoStartTime: 1545,
  },
  {
    id: "57a076c6-56af-475b-990d-bc1ce7486c22",
    songId: seedSongs.theRiver.id,
    showId: seedShows.philadelphia24.id,
    showPosition: 10,
    spotifyTrackId: "6uiZ1reb9WmZatrpvwd8I3",
    bandcampTrackId: "3315017465",
    youtubeVideoId: null,
    youtubeVideoStartTime: 1545,
  },
  {
    id: "57a119e1-f10b-4fb1-96ee-a3ab0f40eef9",
    songId: seedSongs.theRiver.id,
    showId: seedShows.sf16.id,
    showPosition: 11,
    spotifyTrackId: "7nRVkOfpUF4rduH5Tg4uxj",
    bandcampTrackId: "3325139739",
    youtubeVideoId: "n98Je4AJbu8",
    youtubeVideoStartTime: 2363,
  },
  {
    id: "2a7fde15-f39a-4272-a4ae-3bf8e8ff7838",
    songId: seedSongs.theRiver.id,
    showId: seedShows.slo22.id,
    showPosition: 7,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "-3RcmhL80Rw",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Road Train
  {
    id: "63be647c-3eec-47ed-81c5-993ca1fee602",
    songId: seedSongs.roadTrain.id,
    showId: seedShows.gorge24.id,
    showPosition: 10,
    spotifyTrackId: "0UHwGaAdWAvB5oKQ52jK65",
    bandcampTrackId: "1699786441",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 4214,
  },
  {
    id: "b2acbacd-4fc4-459c-9342-55f835cde028",
    songId: seedSongs.roadTrain.id,
    showId: seedShows.manchester19.id,
    showPosition: 18,
    spotifyTrackId: "5viIdctHHmTSHA6tUpbKMR",
    bandcampTrackId: "601949921",
    youtubeVideoId: "0zgCs2r6Y30",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Robot Stop
  {
    id: "f8c20b2c-c004-47ab-8604-7c9dcfd9d0c7",
    songId: seedSongs.robotStop.id,
    showId: seedShows.bonnaroo22.id,
    showPosition: 1,
    spotifyTrackId: "0fyuQlbg24Y5MkvpDS0LDi",
    bandcampTrackId: "3563988407",
    youtubeVideoId: "TbTBVZuTq4k",
    youtubeVideoStartTime: 65,
  },
  {
    id: "23ca74ee-1da7-4c03-90b4-06f6d914c7da",
    songId: seedSongs.robotStop.id,
    showId: seedShows.rr22.id,
    showPosition: 55,
    spotifyTrackId: "1Wf2oyRQxqFiojyQlSO1ch",
    bandcampTrackId: "241588137",
    youtubeVideoId: "lb7vWhUHEFg",
    youtubeVideoStartTime: null,
  },
  {
    id: "b2c20632-5248-4888-a56a-2a8966ce49b7",
    songId: seedSongs.robotStop.id,
    showId: seedShows.chicago24.id,
    showPosition: 1,
    spotifyTrackId: "1vMpMkaUMoSaTKmuBwcVwh",
    bandcampTrackId: "1015337476",
    youtubeVideoId: "koQvZI4ewGg",
    youtubeVideoStartTime: 365,
  },
  {
    id: "a21742d2-4731-4c89-b3e8-0ccee247704c",
    songId: seedSongs.robotStop.id,
    showId: seedShows.la24.id,
    showPosition: 18,
    spotifyTrackId: "1sTea6LOPl4AixkYVSnBbb",
    bandcampTrackId: "3490112201",
    youtubeVideoId: "iO94a7oTK5k",
    youtubeVideoStartTime: 8415,
  },
  {
    id: "577a3034-5a2f-46f8-8b9b-1348bfda6165",
    songId: seedSongs.robotStop.id,
    showId: seedShows.nyc24.id,
    showPosition: 27,
    spotifyTrackId: "3rGT7eZun2LUnjTsBOjtXe",
    bandcampTrackId: "242184053",
    youtubeVideoId: "B7kGqj915YY",
    youtubeVideoStartTime: 1169,
  },
  {
    id: "c1e5c06f-44f5-425e-b29b-1d810fdef142",
    songId: seedSongs.robotStop.id,
    showId: seedShows.toronto24.id,
    showPosition: 12,
    spotifyTrackId: "5BwWOTMOrdXEYamcGjQ6p3",
    bandcampTrackId: "2824437744",
    youtubeVideoId: "8sXbseUS6rM",
    youtubeVideoStartTime: 5541,
  },
  {
    id: "3d34ee16-0b8c-41c7-af39-395c645bc7d9",
    songId: seedSongs.robotStop.id,
    showId: seedShows.sf16.id,
    showPosition: 1,
    spotifyTrackId: "2MXFqlNn9I3cQKUAc5zlJg",
    bandcampTrackId: "2929535638",
    youtubeVideoId: "n98Je4AJbu8",
    youtubeVideoStartTime: 73,
  },

  // ===========================================================================
  // SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

  // ====================================================
  // Sad Pilot
  {
    id: "22c8dd40-234b-4a99-a1a8-3b7fcd0b6c3c",
    songId: seedSongs.sadPilot.id,
    showId: seedShows.houston24.id,
    showPosition: 3,
    spotifyTrackId: "7Myi0zAtTWaZX3qxtqMbpt",
    bandcampTrackId: "2645502996",
    // TODO: replace this with the official video once it's up
    youtubeVideoId: "GRxg_EYCsDI",
    youtubeVideoStartTime: 2061,
  },

  // ====================================================
  // Sea of Trees
  {
    id: "5cbf8ea4-401c-4beb-b6f0-d52d0b03ca88",
    songId: seedSongs.seaOfTrees.id,
    showId: seedShows.pomona22.id,
    showPosition: 10,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "jMSvOtHaiw0",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Self-Immolate
  {
    id: "9d2f54d5-30af-4427-8eb8-d3cb4ecb90b0",
    songId: seedSongs.selfImmolate.id,
    showId: seedShows.nola24.id,
    showPosition: 5,
    spotifyTrackId: "7r3Uq6JsJgVpzGGQ3SoEKC",
    bandcampTrackId: "655411777",
    // TODO: replace this with the official video once it's up
    youtubeVideoId: "FET0riVKZa0",
    youtubeVideoStartTime: 3056,
  },
  {
    id: "054a770e-8720-4a33-9ef6-0064b2d438d2",
    songId: seedSongs.selfImmolate.id,
    showId: seedShows.abq24.id,
    showPosition: 1,
    spotifyTrackId: "5wnkXg1y3TYirPnVCtx4F2",
    bandcampTrackId: "340712780",
    // TODO: replace this with the official video once it's up
    youtubeVideoId: "oYfmVYBymCM",
    youtubeVideoStartTime: 1111,
  },

  // ====================================================
  // Sense
  {
    id: "122b97c0-3417-454c-b679-ee07fb8ee86a",
    songId: seedSongs.sense.id,
    showId: seedShows.rr23.id,
    showPosition: 4,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "bsMwq3004x8",
    youtubeVideoStartTime: 1164,
  },
  {
    id: "112e43a6-230b-4ef5-9329-2d09a74fda23",
    songId: seedSongs.sense.id,
    showId: seedShows.kentucky24.id,
    showPosition: 12,
    spotifyTrackId: "76OfPpLfZQ0y6Mfn1VnxzC",
    bandcampTrackId: "3200447140",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 5236,
  },
  {
    id: "1c7d7c58-d3a7-4936-b65a-baf48d89c5e0",
    songId: seedSongs.sense.id,
    showId: seedShows.sd24.id,
    showPosition: 6,
    spotifyTrackId: "1h7phi5cC4rev9hi6RQhVA",
    bandcampTrackId: "548760256",
    // TODO: replace this with the official video once it's up
    youtubeVideoId: "GR1A0l4c_5g",
    youtubeVideoStartTime: 2541,
  },
  {
    id: "e9277f79-25a6-4dc6-94e7-5766619ac36e",
    songId: seedSongs.sense.id,
    showId: seedShows.brisbaneAcoustic21.id,
    showPosition: 14,
    spotifyTrackId: "0g73eR5bm6Zhch31kK4cbD",
    bandcampTrackId: "167476441",
    youtubeVideoId: "vfWdWU5J2zc",
    youtubeVideoStartTime: 5484,
  },
  {
    id: "7b95d378-4335-45cb-8b25-906b46e2655f",
    songId: seedSongs.sense.id,
    showId: seedShows.remlinger23.id,
    showPosition: 8,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "CLxJ6ltVjHU",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Set
  {
    id: "e92049af-3014-4edd-a73f-c1a667aa2d7d",
    songId: seedSongs.set.id,
    showId: seedShows.sf24.id,
    showPosition: 3,
    spotifyTrackId: "76mod5pxrtc26R1JQZC4Og",
    bandcampTrackId: "271536485",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 3365,
  },
  {
    id: "a726ddb2-bf4c-46cf-9ae6-50231c7721be",
    songId: seedSongs.set.id,
    showId: seedShows.philadelphia24.id,
    showPosition: 19,
    spotifyTrackId: "2fIuul4dCUCsdcEloTjddi",
    bandcampTrackId: "4253009852",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "a69fbe98-ad7c-42a3-8dd8-6aef970fee29",
    songId: seedSongs.set.id,
    showId: seedShows.vancouver24.id,
    showPosition: 12,
    spotifyTrackId: "6ffySoNOrDmlmkz5XqnLxh",
    bandcampTrackId: "1598222411",
    youtubeVideoId: "5Y4bYCp4KAo",
    youtubeVideoStartTime: 5007,
  },
  {
    id: "220dcb95-112c-4e1d-b589-80c05b28d7b2",
    songId: seedSongs.set.id,
    showId: seedShows.phoenix24.id,
    showPosition: 11,
    spotifyTrackId: "5mIo2nlud7zau8ZL6rrJvT",
    bandcampTrackId: "642096012",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "MVzLz_q8xAg",
    youtubeVideoStartTime: 5497,
  },
  {
    id: "c4a02493-c81f-4a5d-b0d8-ed99e6122711",
    songId: seedSongs.set.id,
    showId: seedShows.stAugustine24.id,
    showPosition: 14,
    spotifyTrackId: "6crXOj29bpsm7BLPTRAtyJ",
    bandcampTrackId: "42188022",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GOypQkCShfw",
    youtubeVideoStartTime: 6985,
  },
  {
    id: "2b6a067f-66e1-4ff8-a116-de3504cb2458",
    songId: seedSongs.set.id,
    showId: seedShows.pasoRobles24.id,
    showPosition: 11,
    spotifyTrackId: null,
    bandcampTrackId: "3087280228",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "qvBMzzDtgHE",
    youtubeVideoStartTime: 5318,
  },

  // ====================================================
  // Shanghai
  {
    id: "fd1c988c-fe8b-4374-b6a1-8c609c2e7b05",
    songId: seedSongs.shanghai.id,
    showId: seedShows.warsaw23.id,
    showPosition: 9,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "LpzCgLjOmHg",
    youtubeVideoStartTime: 3130,
  },
  {
    id: "6a920bec-910e-4db3-94ec-e647b647697a",
    songId: seedSongs.shanghai.id,
    showId: seedShows.vegas24.id,
    showPosition: 13,
    spotifyTrackId: "1McX9JzsmBMe54hIW2hWBy",
    bandcampTrackId: "1382317975",
    // TODO: Replace with the official video once it's up
    youtubeVideoId: "hxebzoQTkvA",
    youtubeVideoStartTime: 5319,
  },
  {
    id: "f9b66434-1cf6-4fcc-9549-852e3ee53b10",
    songId: seedSongs.shanghai.id,
    showId: seedShows.nola24.id,
    showPosition: 10,
    spotifyTrackId: "0GjamSaGdCIFxpspXpgjtn",
    bandcampTrackId: "1794158865",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "FET0riVKZa0",
    youtubeVideoStartTime: 6047,
  },
  {
    id: "6641fef2-d923-4cac-93ba-abe2a92b337f",
    songId: seedSongs.shanghai.id,
    showId: seedShows.austin24.id,
    showPosition: 14,
    spotifyTrackId: "0m6IxvnWiGeO4Q7Xrib1Bh",
    bandcampTrackId: "3741290720",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "hD6SW7Nmj-U",
    youtubeVideoStartTime: 8187,
  },
  {
    id: "b1098215-2682-45cb-aa76-67d1fab394bd",
    songId: seedSongs.shanghai.id,
    showId: seedShows.hollywoodBowl23.id,
    showPosition: 19,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "XMAkcpI8fyQ",
    youtubeVideoStartTime: 6210,
  },

  // ====================================================
  // The Silver Cord
  {
    id: "945f799d-a651-4496-a6aa-f362cddea7d3",
    songId: seedSongs.theSilverCord.id,
    showId: seedShows.gorge24.id,
    showPosition: 20,
    spotifyTrackId: "5vpQbAqcghAnzw5CFC4nvM",
    bandcampTrackId: "2584842885",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 7711,
  },
  {
    id: "a61e5308-5764-4b18-a143-ac6fe682c16a",
    songId: seedSongs.theSilverCord.id,
    showId: seedShows.sf24.id,
    showPosition: 2,
    spotifyTrackId: "00LJOsl7TsLUgvhpSsXuWC",
    bandcampTrackId: "1372070779",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 2355,
  },
  {
    id: "c0960274-b51f-4fb6-adfd-0c4c8550b6cd",
    songId: seedSongs.theSilverCord.id,
    showId: seedShows.sd24.id,
    showPosition: 15,
    spotifyTrackId: "4MUNICD3fHiWRyLU3i5mDO",
    bandcampTrackId: "2555832372",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GR1A0l4c_5g",
    youtubeVideoStartTime: 6877,
  },

  // ====================================================
  // Slow Jam 1
  {
    id: "c5d9c89b-f30c-43b9-b089-2e215377d4da",
    songId: seedSongs.slowJam1.id,
    showId: seedShows.la24.id,
    showPosition: 4,
    spotifyTrackId: "1QWdKSbFKmY8CLM7QYP3xZ",
    bandcampTrackId: "797472773",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "iO94a7oTK5k",
    youtubeVideoStartTime: 1250,
  },
  {
    id: "91aa7c66-cf3b-47ab-8e56-0f3acc4138ef",
    songId: seedSongs.slowJam1.id,
    showId: seedShows.kentucky24.id,
    showPosition: 11,
    spotifyTrackId: "527IuelBinknzZJ8H1Wazv",
    bandcampTrackId: "2779145289",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 4736,
  },
  {
    id: "ddd7b7df-f204-46a9-b64d-71d9a2e16edd",
    songId: seedSongs.slowJam1.id,
    showId: seedShows.brisbaneAcoustic21.id,
    showPosition: 12,
    spotifyTrackId: "30ATzhYMbrytqs5ASCuT0e",
    bandcampTrackId: "4291219970",
    youtubeVideoId: "vfWdWU5J2zc",
    youtubeVideoStartTime: 4838,
  },

  // ====================================================
  // Straws In The Wind
  {
    id: "991e759e-6b13-44fa-8e9f-b2dffa3ec017",
    songId: seedSongs.strawsInTheWind.id,
    showId: seedShows.nyc24.id,
    showPosition: 19,
    spotifyTrackId: "1HKkgQZmUkYhQMYsJm9sh8",
    bandcampTrackId: "2661898645",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 7244,
  },
  {
    id: "11f7ad5a-ca3c-49a7-bdfc-d5f467ab29aa",
    songId: seedSongs.strawsInTheWind.id,
    showId: seedShows.stAugustine24.id,
    showPosition: 3,
    spotifyTrackId: "6p7ra7BV35Ma8c0PQ5T1Cy",
    bandcampTrackId: "3426092291",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "GOypQkCShfw",
    youtubeVideoStartTime: 1957,
  },

  // ====================================================
  // Stressin'
  {
    id: "05a57b06-978a-46c0-933a-2720998459b7",
    songId: seedSongs.stressin.id,
    showId: seedShows.rr24.id,
    showPosition: 12,
    spotifyTrackId: "3erbXMNp59K0oInn4iOtbc",
    bandcampTrackId: "3695294320",
    youtubeVideoId: "_AZ9z62b8dU",
    youtubeVideoStartTime: 5442,
  },
  {
    id: "f6bf4190-6380-469c-b9a5-701081ee0487",
    songId: seedSongs.stressin.id,
    showId: seedShows.brisbaneAcoustic21.id,
    showPosition: 13,
    spotifyTrackId: "2HH8lJrkVfACOc9KfmoLdm",
    bandcampTrackId: "1595669529",
    youtubeVideoId: "vfWdWU5J2zc",
    youtubeVideoStartTime: 5261,
  },

  // ====================================================
  // Superbug
  {
    id: "f365c8f3-5d50-44f5-8d01-5b40f7e79ebd",
    songId: seedSongs.superbug.id,
    showId: seedShows.stanford24.id,
    showPosition: 1,
    spotifyTrackId: "2QRA7WNZHSAcmkARtnIBaz",
    bandcampTrackId: "3813036084",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 997,
  },

  // ====================================================
  // Supercell
  {
    id: "fd75230f-fa9d-4226-ac9d-9ba6d6256e61",
    songId: seedSongs.supercell.id,
    showId: seedShows.abq24.id,
    showPosition: 2,
    spotifyTrackId: "4b8P4JGcJc0exfPQhaVsY4",
    bandcampTrackId: "3435936842",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "oYfmVYBymCM",
    youtubeVideoStartTime: 1553,
  },
  {
    id: "4e33fb7a-3409-41dd-9830-63cc4847e13a",
    songId: seedSongs.supercell.id,
    showId: seedShows.cleveland24.id,
    showPosition: 13,
    spotifyTrackId: "2dxt2xtxg4L2x4JrfrMKgG",
    bandcampTrackId: "3167137517",
    youtubeVideoId: "1_vJkwyLjds",
    youtubeVideoStartTime: 5408,
  },

  // ====================================================
  // Swan Song
  {
    id: "29019546-f6a8-4566-b06b-00674aa54bb5",
    songId: seedSongs.swanSong.id,
    showId: seedShows.sf24.id,
    showPosition: 6,
    spotifyTrackId: "4g00jaXMeFbINsVl3hcQzd",
    bandcampTrackId: "2835416438",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 5573,
  },
  {
    id: "b357dcc4-67c5-407b-8187-eb76f18809ba",
    songId: seedSongs.swanSong.id,
    showId: seedShows.vancouver24.id,
    showPosition: 11,
    spotifyTrackId: "2eUlisJM1PBXcH3DsjzH7f",
    bandcampTrackId: "135516790",
    youtubeVideoId: "5Y4bYCp4KAo",
    youtubeVideoStartTime: 4354,
  },
  {
    id: "e4e8118f-3d54-4840-a218-59377273e044",
    songId: seedSongs.swanSong.id,
    showId: seedShows.asheville24.id,
    showPosition: 14,
    spotifyTrackId: "5wBh2zMJ7bNESZDzRU2tRu",
    bandcampTrackId: "2938430263",
    youtubeVideoId: "cEvtbHcCyic",
    youtubeVideoStartTime: 6466,
  },

  // ===========================================================================
  // TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

  // ====================================================
  // Tetrachromacy
  {
    id: "efc30cee-0b7c-457c-90ac-fadd1a9a0ebe",
    songId: seedSongs.tetrachromacy.id,
    showId: seedShows.rr24.id,
    showPosition: 23,
    spotifyTrackId: "159OyzDH7VPMqbHANtaDqB",
    bandcampTrackId: "451540334",
    youtubeVideoId: "8M8T3mFdPNQ",
    youtubeVideoStartTime: 2166,
  },

  // ====================================================
  // Theia
  {
    id: "6aa65ebb-7fd9-49f2-a86c-0c6ba5474daa",
    songId: seedSongs.theia.id,
    showId: seedShows.sf24.id,
    showPosition: 1,
    spotifyTrackId: "1b1a259Ga3GBQRs2gg9gdY",
    bandcampTrackId: "1241463968",
    // TODO: Replace with official video once it's up
    youtubeVideoId: "zV8pTD4dfAY",
    youtubeVideoStartTime: 1335,
  },
  {
    id: "2bfac39c-5bf9-4927-b07e-01f734fe647a",
    songId: seedSongs.theia.id,
    showId: seedShows.richmond24.id,
    showPosition: 2,
    spotifyTrackId: "3p5xWza33QxYVxksxRvWia",
    bandcampTrackId: "3519548606",
    youtubeVideoId: "5JEkTEktukg",
    youtubeVideoStartTime: 1534,
  },
  {
    id: "e443dfd8-1998-45b8-b52d-b7fb7ea8792b",
    songId: seedSongs.theia.id,
    showId: seedShows.detroit24.id,
    showPosition: 1,
    spotifyTrackId: "1t8GDKmeKFMHnWsFERJqZx",
    bandcampTrackId: "3352149423",
    youtubeVideoId: "TbVDmWNbYFs",
    youtubeVideoStartTime: 471,
  },

  // ====================================================
  // This Thing
  {
    id: "099acbaf-af1a-4fe4-9c6e-7898d4cfdd00",
    songId: seedSongs.thisThing.id,
    showId: seedShows.phoenix24.id,
    showPosition: 6,
    spotifyTrackId: "3flmztXhdxCfRmqx3mIK4B",
    bandcampTrackId: "1260515879",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "MVzLz_q8xAg",
    youtubeVideoStartTime: 3068,
  },
  {
    id: "78c726c4-0ad5-403d-8643-2f8c52c36761",
    songId: seedSongs.thisThing.id,
    showId: seedShows.kentucky24.id,
    showPosition: 10,
    spotifyTrackId: "2kF04KqHmzniiUYjPHqYxF",
    bandcampTrackId: "223327753",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 4258,
  },
  {
    id: "7bb0b440-b757-42f3-8f9b-b6de095da69b",
    songId: seedSongs.thisThing.id,
    showId: seedShows.la24.id,
    showPosition: 5,
    spotifyTrackId: "3Lf8zYkxKmaKBplBotohVX",
    bandcampTrackId: "1504612395",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "iO94a7oTK5k",
    youtubeVideoStartTime: 1875,
  },

  // ====================================================
  // Trapdoor
  {
    id: "8f921cb1-2296-4181-83db-9366a633c44c",
    songId: seedSongs.trapdoor.id,
    showId: seedShows.nola24.id,
    showPosition: 14,
    spotifyTrackId: "06MiAVR2uZ0W1gzrnIPjp1",
    bandcampTrackId: "2759753713",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "FET0riVKZa0",
    youtubeVideoStartTime: 7481,
  },
  {
    id: "a7506a8d-137c-4fb4-a09f-2ac187aef32a",
    songId: seedSongs.trapdoor.id,
    showId: seedShows.stanford24.id,
    showPosition: 10,
    spotifyTrackId: "4IaGYcDQvQtQajFzqmTskO",
    bandcampTrackId: "3741246414",
    // TODO: Replace this with the official video once it's up
    youtubeVideoId: "ijBUyqm-nLI",
    youtubeVideoStartTime: 4013,
  },

  // ===========================================================================
  // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

  // ====================================================
  // Vegemite
  {
    id: "3888ef48-c128-4686-b17f-b335e6b57e63",
    songId: seedSongs.vegemite.id,
    showId: seedShows.gorge24.id,
    showPosition: 26,
    spotifyTrackId: "5KzRXSnrrDtPNnp3MSMkzC",
    bandcampTrackId: "1673322511",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 10367,
  },

  // ====================================================
  // Venusian 1
  {
    id: "6e5a83d0-5f3d-4c81-a591-ce8cc32b06cf",
    songId: seedSongs.venusian1.id,
    showId: seedShows.gorge24.id,
    showPosition: 25,
    spotifyTrackId: "29GIKV8rXaZBmYjcSxw7Mf",
    bandcampTrackId: "1745381553",
    youtubeVideoId: "Tfm4okv47M4",
    youtubeVideoStartTime: 9908,
  },

  // ====================================================
  // Venusian 2
  {
    id: "6fcc8998-7a73-4517-8d1e-8ae111283db1",
    songId: seedSongs.venusian2.id,
    showId: seedShows.nyc24.id,
    showPosition: 16,
    spotifyTrackId: "52j0VfpluOyDnj7kpZvH75",
    bandcampTrackId: "3434463931",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 6161,
  },
  {
    id: "755536d4-3dcf-452d-b544-c56b691e2479",
    songId: seedSongs.venusian2.id,
    showId: seedShows.rr22.id,
    showPosition: 79,
    spotifyTrackId: "4R9MbQ4clGbFbqxhxkZONm",
    bandcampTrackId: "1571152522",
    youtubeVideoId: "usVDLzYnke8",
    youtubeVideoStartTime: 194,
  },

  // ===========================================================================
  // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

  // ====================================================
  // The Wheel
  {
    id: "60315c89-e69d-4fa9-8648-ffd6f0a981a3",
    songId: seedSongs.theWheel.id,
    showId: seedShows.brisbaneAcoustic21.id,
    showPosition: 4,
    spotifyTrackId: "1v2DuIzD2PUddyvtM4dO5t",
    bandcampTrackId: "2923773487",
    youtubeVideoId: "vfWdWU5J2zc",
    youtubeVideoStartTime: 1454,
  },
  {
    id: "1120a71f-d78e-4802-9ca6-6edc692d5568",
    songId: seedSongs.theWheel.id,
    showId: seedShows.kexp18.id,
    showPosition: 6,
    spotifyTrackId: null,
    bandcampTrackId: null,
    youtubeVideoId: "DzLAZ9by5qY",
    youtubeVideoStartTime: null,
  },

  // ====================================================
  // Witchcraft
  {
    id: "51482dd3-f28e-470d-89ab-7f7f902137ef",
    songId: seedSongs.witchcraft.id,
    showId: seedShows.sd24.id,
    showPosition: 1,
    spotifyTrackId: "5KpligWqrUyuk3prKY42zk",
    bandcampTrackId: "2575113191",
    // TODO: replace this with the official video once it's up
    youtubeVideoId: "GR1A0l4c_5g",
    youtubeVideoStartTime: 1220,
  },
  {
    id: "a2894ae5-3616-442f-ab87-2481ecb4ce5d",
    songId: seedSongs.witchcraft.id,
    showId: seedShows.oregon24.id,
    showPosition: 11,
    spotifyTrackId: "4Pjh8T0eOv75ClSpGKaQKv",
    bandcampTrackId: "1450224668",
    youtubeVideoId: "k69DG8aZ6mw",
    youtubeVideoStartTime: 5000,
  },
  {
    id: "2f543bcd-95a0-49f2-96d4-247f3e4d2920",
    songId: seedSongs.witchcraft.id,
    showId: seedShows.asheville24.id,
    showPosition: 9,
    spotifyTrackId: "0znFFeq0W5odmQra0V3jJI",
    bandcampTrackId: "1089444983",
    youtubeVideoId: "cEvtbHcCyic",
    youtubeVideoStartTime: 4986,
  },

  // ====================================================
  // Work This Time
  {
    id: "fa02df1a-87c1-4c1e-9f75-50c1a3903e12",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.bonnaroo22.id,
    showPosition: 10,
    spotifyTrackId: "4b6tZw9nCvkQBlc6Nwi7M5",
    bandcampTrackId: "2385094002",
    youtubeVideoId: "5GycxF0R0G8",
    youtubeVideoStartTime: null,
  },
  {
    id: "77012079-f7fb-4764-9a9a-eef74e7ef072",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.atlanta24.id,
    showPosition: 13,
    spotifyTrackId: "5zvtttpUGbvteaWaDO89Um",
    bandcampTrackId: "3726265588",
    youtubeVideoId: "ijYmTy8YnOw",
    youtubeVideoStartTime: null,
  },
  {
    id: "4440adfc-6170-4f63-8e6b-819c1a4e535f",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.rr22.id,
    showPosition: 65,
    spotifyTrackId: "6YE7MsZ4y82v4qvntAeivs",
    bandcampTrackId: "1874767619",
    youtubeVideoId: null,
    youtubeVideoStartTime: null,
  },
  {
    id: "e899dff3-dabd-4cba-a453-4031f0719805",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.nyc24.id,
    showPosition: 8,
    spotifyTrackId: "31Phk1Hoda4CG1d0dXoOpl",
    bandcampTrackId: "2109737640",
    youtubeVideoId: "KTTNMU5juFo",
    youtubeVideoStartTime: 3294,
  },
  {
    id: "3ac4f35c-bd53-4c3c-9841-73025f8b10c4",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.arkansas24.id,
    showPosition: 10,
    spotifyTrackId: "4EjemUAGMZtLKX2kwNg8Wd",
    bandcampTrackId: "2467438",
    youtubeVideoId: "5K02tvEbEp4",
    youtubeVideoStartTime: 4840,
  },
  {
    id: "c0968683-41d1-4027-b7f8-c7058287705a",
    songId: seedSongs.workThisTime.id,
    showId: seedShows.kentucky24.id,
    showPosition: 19,
    spotifyTrackId: "39dhdAzGwbqEmrAGrpVxVm",
    bandcampTrackId: "2642857633",
    youtubeVideoId: "VtezqMDh4Sc",
    youtubeVideoStartTime: 7593,
  },

  // ===========================================================================
  // YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

  // ====================================================
  // You Can Be Your Silhouette
  {
    id: "7d323db7-2c52-4e54-acd6-8478a145b1b2",
    songId: seedSongs.silhouette.id,
    showId: seedShows.rr24.id,
    showPosition: 27,
    spotifyTrackId: "6YGP20J0hkPqMrUvjZblSP",
    bandcampTrackId: "379756500",
    youtubeVideoId: "8M8T3mFdPNQ",
    youtubeVideoStartTime: 3105,
  },
  {
    id: "dfed6e52-5eae-4565-8f89-5d4c386ab531",
    songId: seedSongs.silhouette.id,
    showId: seedShows.detroit24.id,
    showPosition: 7,
    spotifyTrackId: "3hM6LUI9nEaGj1quKNbnVF",
    bandcampTrackId: "3733101087",
    youtubeVideoId: "TbVDmWNbYFs",
    youtubeVideoStartTime: 3165,
  },
] as const satisfies Omit<
  Performance,
  "createdAt" | "ratingLastUpdatedAt" | "eloRating"
>[];
export const allPerformances = seedPerformances as unknown as Performance[];
