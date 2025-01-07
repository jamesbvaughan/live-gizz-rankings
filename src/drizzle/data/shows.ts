import { Show } from "../schema";

// Ordered by show date
export const seedShows = {
  // ====================================================
  // 2013 Tour
  northcote13: {
    id: "86907172-176f-4930-8017-20e1b044d142",
    slug: "northcote-2013",
    location: "Melbourne",
    date: "2013-08-29",
    imageUrl: "/showCovers/northcote13.webp",
    youtubeVideoId: null,
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
    youtubeVideoId: "n98Je4AJbu8",
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
    youtubeVideoId: "wxwu7FYFSek",
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
    youtubeVideoId: null,
    bandcampAlbumId: "1286108847",
  },
  milwaukee19: {
    id: "ccb86577-5c06-4180-8ff1-781c7c41e8d0",
    slug: "milwaukee-2019",
    location: "Milwaukee",
    date: "2019-08-23",
    imageUrl: "https://f4.bcbits.com/img/a2134759453_16.jpg",
    youtubeVideoId: null,
    bandcampAlbumId: "2354695487",
  },
  manchester19: {
    id: "01575133-ff92-4668-99d4-b1b62a9f29eb",
    slug: "manchester-2019",
    location: "Manchester",
    date: "2019-10-03",
    imageUrl: null,
    youtubeVideoId: null,
    bandcampAlbumId: null,
  },
  brussels19: {
    id: "493db3ef-ee80-4e12-acc2-6fb046b79408",
    slug: "brussels-2019",
    location: "Brussels",
    date: "2019-10-08",
    imageUrl: "https://f4.bcbits.com/img/a2684291974_16.jpg",
    youtubeVideoId: "ZvOoM79OwpA",
    bandcampAlbumId: "1602825616",
  },
  madrid19: {
    id: "11597d9b-21e7-43b7-b681-cd22a31c5a90",
    slug: "madrid-2019",
    location: "Madrid",
    date: "2019-10-18",
    imageUrl: "https://f4.bcbits.com/img/a3650674791_16.jpg",
    youtubeVideoId: null,
    bandcampAlbumId: "6509641",
  },

  // ====================================================
  // Micro Tour 2021
  melbourne21: {
    id: "b1a86196-e89b-4f41-9159-3899ac1db891",
    slug: "melbourne-2021",
    location: "Melbourne",
    date: "2021-02-26",
    imageUrl: "https://f4.bcbits.com/img/a3456768963_16.jpg",
    youtubeVideoId: "8X_LVeLFrA8",
    bandcampAlbumId: "2002650750",
  },
  sydney21: {
    id: "95a0d2a2-4147-44b5-9f4c-ef871a13bf62",
    slug: "sydney-2021",
    location: "Sydney",
    date: "2021-04-22",
    imageUrl: "https://f4.bcbits.com/img/a0572452225_16.jpg",
    youtubeVideoId: "JbjZ-jZnoss",
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
    youtubeVideoId: "vfWdWU5J2zc",
    bandcampAlbumId: "1173053054",
  },

  // ====================================================
  // World Tour 2022
  melbourne22: {
    id: "4fc59426-d7bf-4726-9270-d76630b7569f",
    slug: "melbourne-2022",
    location: "Melbourne", // Timeland
    date: "2022-04-05",
    imageUrl: null,
    youtubeVideoId: null,
    bandcampAlbumId: null,
  },
  pomona22: {
    id: "24f4df1a-7921-4ab0-a618-0479d4a8b2d7",
    slug: "pomona-2022",
    location: "Pomona",
    date: "2022-04-12",
    imageUrl: null,
    youtubeVideoId: "ALuRuq3Kw8k",
    bandcampAlbumId: null,
  },
  slo22: {
    id: "cfbee1cf-66d6-4cf7-b539-ab1a56d4656f",
    slug: "slo-2022",
    location: "San Luis Obispo",
    date: "2022-04-24",
    imageUrl: "/showCovers/slo22.webp",
    youtubeVideoId: "-3RcmhL80Rw",
    bandcampAlbumId: null,
  },
  mexicoCity22: {
    id: "8c4b2700-ed44-4a14-8d08-93f6c7a0b5a3",
    slug: "mexico-city-2022",
    location: "Mexico City",
    date: "2022-05-06",
    imageUrl: "/showCovers/mexicoCity22.webp",
    // TODO: Decide how to deal with "residency" shows, where there are multiple
    // dates and multiple YouTube videos.
    youtubeVideoId: null,
    bandcampAlbumId: null,
  },
  bonnaroo22: {
    id: "1744f3c5-8da4-4e28-845d-0b2cf02db7a1",
    slug: "bonnaroo-2022",
    location: "Bonnaroo",
    date: "2022-06-17",
    imageUrl: "https://f4.bcbits.com/img/a3553224286_16.jpg",
    youtubeVideoId: "TbTBVZuTq4k",
    bandcampAlbumId: "1363173846",
  },
  croatia22: {
    id: "c0c2fe6d-92b8-4152-923c-e22fa18570e2",
    slug: "croatia-2022",
    location: "Croatia",
    date: "2022-08-02",
    imageUrl: null,
    youtubeVideoId: "mlSoTaLw_t8",
    bandcampAlbumId: null,
  },
  berkeley22: {
    id: "cb025e04-05bb-4569-8797-9d58d35e21ee",
    slug: "berkeley-2022",
    location: "Berkeley",
    date: "2022-10-02",
    imageUrl: "/showCovers/berkeley22.webp",
    youtubeVideoId: null,
    bandcampAlbumId: null,
  },
  rr22: {
    id: "ca4d9095-cb3a-46d9-8dd8-3fdc7b15a7b6",
    slug: "red-rocks-2022",
    location: "Red Rocks",
    date: "2022-10-10",
    imageUrl: "https://f4.bcbits.com/img/a3180996672_16.jpg",
    youtubeVideoId: null,
    bandcampAlbumId: "2418689883",
  },
  philadelphia22: {
    id: "f5ab804d-be48-4de5-b096-ceb33f1551fd",
    slug: "philadelphia-2022",
    location: "Philadelphia",
    date: "2022-10-22",
    imageUrl: "/showCovers/philadelphia22.webp",
    youtubeVideoId: "zPJQJY6vY8E",
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
    youtubeVideoId: null,
    bandcampAlbumId: null,
  },
  rr23: {
    id: "af055b78-9c40-4f15-a676-ed05f3485019",
    slug: "red-rocks-2023",
    location: "Red Rocks",
    date: "2023-06-07",
    imageUrl: "/showCovers/rr23.webp",
    youtubeVideoId: null,
    bandcampAlbumId: null,
  },
  chicago23: {
    id: "1f8192d8-4650-4837-b119-b82507afe23c",
    slug: "chicago-2023",
    location: "Chicago",
    date: "2023-06-11",
    imageUrl: "https://f4.bcbits.com/img/a1324413369_16.jpg",
    youtubeVideoId: null,
    bandcampAlbumId: "3977429038",
  },
  remlinger23: {
    id: "ae71a1cd-0823-4feb-85f8-065529415dff",
    slug: "remlinger-farms-2023",
    location: "Remlinger Farms",
    date: "2023-06-17",
    imageUrl: "/showCovers/remlinger23.webp",
    youtubeVideoId: null,
    bandcampAlbumId: null,
  },
  hollywoodBowl23: {
    id: "cb9a091f-d5e3-42b1-84ce-d9a5e72a7ff6",
    slug: "hollywood-bowl-2023",
    location: "Hollywood Bowl",
    date: "2023-06-21",
    imageUrl: "/showCovers/hollywoodBowl23.webp",
    youtubeVideoId: null,
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
    youtubeVideoId: "LpzCgLjOmHg",
    bandcampAlbumId: null,
  },
  palp23: {
    id: "12a96ecf-2077-4264-8278-e76865b7507e",
    slug: "palp-2023",
    location: "Palp",
    date: "2023-08-14",
    imageUrl: null,
    youtubeVideoId: "myIjlvrfdfY",
    bandcampAlbumId: null,
  },
  lowlands23: {
    id: "58a8f68b-0f95-4a3a-963b-9740a68b8729",
    slug: "lowlands-2023",
    location: "Lowlands",
    date: "2023-08-19",
    imageUrl: null,
    youtubeVideoId: "y8Wawh9X7GM",
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
    // TODO: Replace with the official video when it's released
    youtubeVideoId: "8nvhFvcPBhk",
    bandcampAlbumId: "2799349219",
  },
  nyc24: {
    id: "4023c755-247d-4b29-86ec-7b1203e93bdf",
    slug: "nyc-2024",
    location: "New York City",
    date: "2024-08-16",
    imageUrl: "https://f4.bcbits.com/img/a4160066698_16.jpg",
    youtubeVideoId: null,
    bandcampAlbumId: "3530855413",
  },
  boston24: {
    id: "dd72f78a-23c4-46fc-a82a-6befe9eac3e7",
    slug: "boston-2024",
    location: "Boston",
    date: "2024-08-19",
    imageUrl: "https://f4.bcbits.com/img/a4053913678_16.jpg",
    youtubeVideoId: "wbtTEgC6quI",
    bandcampAlbumId: "2151609245",
  },
  maine24: {
    id: "212bb7b3-2ed9-4270-bf35-7026716a36b6",
    slug: "maine-2024",
    location: "Maine",
    date: "2024-08-20",
    imageUrl: "https://f4.bcbits.com/img/a1001399634_16.jpg",
    youtubeVideoId: "6JS4Uq8X6X8",
    bandcampAlbumId: "2637870866",
  },
  toronto24: {
    id: "4b31bce2-5b79-4ea6-91ea-97b7d0a47aae",
    slug: "toronto-2024",
    location: "Toronto",
    date: "2024-08-21",
    imageUrl: "https://f4.bcbits.com/img/a1394424151_16.jpg",
    youtubeVideoId: "8sXbseUS6rM",
    bandcampAlbumId: "3363110237",
  },
  detroit24: {
    id: "3bccdb81-d010-47e8-a9f8-4eb87f3f4066",
    slug: "detroit-2024",
    location: "Detroit",
    date: "2024-08-23",
    imageUrl: "https://f4.bcbits.com/img/a0824108206_16.jpg",
    youtubeVideoId: "TbVDmWNbYFs",
    bandcampAlbumId: "1675633392",
  },
  cleveland24: {
    id: "491b11cb-b085-4081-a6d0-a9070532b82d",
    slug: "cleveland-2024",
    location: "Cleveland",
    date: "2024-08-24",
    imageUrl: "https://f4.bcbits.com/img/a4062916790_16.jpg",
    youtubeVideoId: "1_vJkwyLjds",
    bandcampAlbumId: "4147847254",
  },
  kentucky24: {
    id: "fdc39520-041b-4faf-bde8-8288dbbf4f55",
    slug: "kentucky-2024",
    location: "Kentucky",
    date: "2024-08-25",
    imageUrl: "https://f4.bcbits.com/img/a0274986703_16.jpg",
    youtubeVideoId: "VtezqMDh4Sc",
    bandcampAlbumId: "1304619880",
  },
  philadelphia24: {
    id: "3924bba7-a859-4ce0-808c-2eacdf93b4bf",
    slug: "philadelphia-2024",
    location: "Philadelphia",
    date: "2024-08-27",
    imageUrl: "https://f4.bcbits.com/img/a2253820167_16.jpg",
    youtubeVideoId: "aghi7OxEMzg",
    bandcampAlbumId: "1839675933",
  },
  richmond24: {
    id: "b9acb3f0-a406-44be-8fb5-26aedf47ee61",
    slug: "richmond-2024",
    location: "Richmond",
    date: "2024-08-28",
    imageUrl: "https://f4.bcbits.com/img/a4074051612_16.jpg",
    youtubeVideoId: "5JEkTEktukg",
    bandcampAlbumId: "1275144158",
  },
  asheville24: {
    id: "704abe4c-3cb2-4391-9a81-a5dcb1fd3a44",
    slug: "asheville-2024",
    location: "Asheville",
    date: "2024-08-30",
    imageUrl: "https://f4.bcbits.com/img/a2066920903_16.jpg",
    youtubeVideoId: "cEvtbHcCyic",
    bandcampAlbumId: "817110471",
  },
  nashville24: {
    id: "f4b93c00-1998-4c3d-b625-f55d2e6b426c",
    slug: "nashville-2024",
    location: "Nashville",
    date: "2024-08-31",
    imageUrl: "https://f4.bcbits.com/img/a0545000465_16.jpg",
    youtubeVideoId: "8RbhqJHZPtM",
    bandcampAlbumId: "3239781259",
  },
  chicago24: {
    id: "6556aa55-88d3-43f8-bfdd-f348352ae1d0",
    slug: "chicago-2024",
    location: "Chicago",
    date: "2024-09-01",
    imageUrl: "https://f4.bcbits.com/img/a1788111107_16.jpg",
    youtubeVideoId: "koQvZI4ewGg",
    bandcampAlbumId: "4294151713",
  },
  minneapolis24: {
    id: "04489d98-d04c-4980-bd62-b9f04807eb9f",
    slug: "minneapolis-2024",
    location: "Minneapolis",
    date: "2024-09-03",
    imageUrl: "https://f4.bcbits.com/img/a2807501952_16.jpg",
    youtubeVideoId: "qY7iyjHdBUM",
    bandcampAlbumId: "1631866248",
  },
  milwaukee24: {
    id: "6aadd547-499e-4b52-9b29-76682af9614e",
    slug: "milwaukee-2024",
    location: "Milwaukee",
    date: "2024-09-04",
    imageUrl: "https://f4.bcbits.com/img/a0203986788_16.jpg",
    youtubeVideoId: "cTO9U8nG280",
    bandcampAlbumId: "1407410068",
  },
  stl24: {
    id: "29361dc0-6671-4297-8157-5eb03bdbf7b2",
    slug: "st-louis-2024",
    location: "St. Louis",
    date: "2024-09-05",
    imageUrl: "https://f4.bcbits.com/img/a1541766080_16.jpg",
    youtubeVideoId: "FGOsQiPCpEA",
    bandcampAlbumId: "2447524963",
  },
  rr24: {
    id: "8fc370f6-46e7-488f-8e69-e4e3f3d10d28",
    slug: "red-rocks-2024",
    location: "Red Rocks",
    date: "2024-09-08",
    imageUrl: "https://f4.bcbits.com/img/a3263389792_16.jpg",
    youtubeVideoId: null,
    bandcampAlbumId: "79615285",
  },
  oregon24: {
    id: "1e8be424-f5cf-4d4a-b6c2-b124fdeb405f",
    slug: "oregon-2024",
    location: "Oregon",
    date: "2024-09-11",
    imageUrl: "https://f4.bcbits.com/img/a1151612533_10.jpg",
    youtubeVideoId: "k69DG8aZ6mw",
    bandcampAlbumId: "2716193401",
  },
  vancouver24: {
    id: "d5147b82-c83b-448c-9d7f-9b2113da8cf7",
    slug: "vancouver-2024",
    location: "Vancouver",
    date: "2024-09-12",
    imageUrl: "https://f4.bcbits.com/img/a2167864021_16.jpg",
    youtubeVideoId: "5Y4bYCp4KAo",
    bandcampAlbumId: "4272985994",
  },
  gorge24: {
    id: "69af662b-164e-499e-a459-e9cb903aae97",
    slug: "the-gorge-2024",
    location: "The Gorge",
    date: "2024-09-14",
    imageUrl: "https://f4.bcbits.com/img/a2893046862_16.jpg",
    youtubeVideoId: "Tfm4okv47M4",
    bandcampAlbumId: "3746606297",
  },

  // ====================================================
  // U.S. Tour 2024 pt. 2
  // TODO: Replace all these YouTube IDs with the official videos when they're
  // released.
  la24: {
    id: "a81ef768-32b5-4fbd-8d9e-fefd3cf44411",
    slug: "los-angeles-2024",
    location: "Los Angeles",
    date: "2024-11-01",
    imageUrl: "https://f4.bcbits.com/img/a3083529929_16.jpg",
    youtubeVideoId: "iO94a7oTK5k",
    bandcampAlbumId: "2053666447",
  },
  sd24: {
    // Acoustic!
    id: "481aec4e-39bb-48d9-8082-4469c74e00da",
    slug: "san-diego-2024",
    location: "San Diego",
    date: "2024-11-02",
    imageUrl: "https://f4.bcbits.com/img/a3464482652_16.jpg",
    youtubeVideoId: "GR1A0l4c_5g",
    bandcampAlbumId: "3483464958",
  },
  pasoRobles24: {
    id: "372c1f0a-f676-46a3-9f21-34fdf02c30c5",
    slug: "paso-robles-2024",
    location: "Paso Robles",
    date: "2024-11-03",
    imageUrl: "https://f4.bcbits.com/img/a3550028268_16.jpg",
    youtubeVideoId: "qvBMzzDtgHE",
    bandcampAlbumId: "3875461640",
  },
  stanford24: {
    id: "935dd6ed-2153-4e4b-8bea-1d75825b8fe4",
    slug: "stanford-2024",
    location: "Stanford",
    date: "2024-11-04",
    imageUrl: "https://f4.bcbits.com/img/a2511383545_16.jpg",
    youtubeVideoId: "ijBUyqm-nLI",
    bandcampAlbumId: "2620217443",
  },
  sf24: {
    id: "0755f77f-3f36-498e-99b0-5f71228076a8",
    slug: "san-francisco-2024",
    location: "San Francisco",
    date: "2024-11-06",
    imageUrl: "https://f4.bcbits.com/img/a2123423689_16.jpg",
    youtubeVideoId: "zV8pTD4dfAY",
    bandcampAlbumId: "783019413",
  },
  vegas24: {
    id: "06c550a5-028e-438c-b8a7-6ede67b3737f",
    slug: "las-vegas-2024",
    location: "Las Vegas",
    date: "2024-11-08",
    imageUrl: "https://f4.bcbits.com/img/a3468174213_16.jpg",
    youtubeVideoId: "hxebzoQTkvA",
    bandcampAlbumId: "1104627077",
  },
  phoenix24: {
    id: "8bd9f809-7ab8-4046-9347-e349eb663b86",
    slug: "phoenix-2024",
    location: "Phoenix",
    date: "2024-11-09",
    imageUrl: "https://f4.bcbits.com/img/a3527600251_16.jpg",
    youtubeVideoId: "MVzLz_q8xAg",
    bandcampAlbumId: "4200479984",
  },
  abq24: {
    id: "f0139f08-7075-4757-b811-9c458d04593c",
    slug: "albuquerque-2024",
    location: "Albuquerque",
    date: "2024-11-10",
    imageUrl: "https://f4.bcbits.com/img/a0496185183_16.jpg",
    youtubeVideoId: "oYfmVYBymCM",
    bandcampAlbumId: "660285328",
  },
  okc24: {
    id: "6070a189-e1a7-42ce-8d19-f5e43921967d",
    slug: "oklahoma-city-2024",
    location: "Oklahoma City",
    date: "2024-11-12",
    imageUrl: "https://f4.bcbits.com/img/a1910276487_16.jpg",
    youtubeVideoId: "TsK-U1PhmSc",
    bandcampAlbumId: "2847156728",
  },
  arkansas24: {
    id: "a647481f-4159-4351-9d9d-53630646a3dc",
    slug: "arkansas-2024",
    location: "Arkansas",
    date: "2024-11-13",
    imageUrl: "https://f4.bcbits.com/img/a3844836167_16.jpg",
    youtubeVideoId: "5K02tvEbEp4",
    bandcampAlbumId: "2294934601",
  },
  austin24: {
    id: "2b1b2dec-7264-4891-ba73-f7116e0818ff",
    slug: "austin-2024",
    location: "Austin",
    date: "2024-11-15",
    imageUrl: "https://f4.bcbits.com/img/a2463924603_16.jpg",
    youtubeVideoId: "hD6SW7Nmj-U",
    bandcampAlbumId: "719227306",
  },
  houston24: {
    id: "8b1615e0-a6dc-42f6-b61c-465971545450",
    slug: "houston-2024",
    location: "Houston",
    date: "2024-11-16",
    imageUrl: "https://f4.bcbits.com/img/a3220456230_16.jpg",
    youtubeVideoId: "GRxg_EYCsDI",
    bandcampAlbumId: "3854890243",
  },
  nola24: {
    id: "48d267dc-90a2-401d-aec5-b127a7abe06d",
    slug: "new-orleans-2024",
    location: "New Orleans",
    date: "2024-11-17",
    imageUrl: "https://f4.bcbits.com/img/a2503962224_16.jpg",
    youtubeVideoId: "FET0riVKZa0",
    bandcampAlbumId: "3455343812",
  },
  atlanta24: {
    id: "8af52ec8-f9a6-43e3-ad24-a5ac42f3308d",
    slug: "atlanta-2024",
    location: "Atlanta",
    date: "2024-11-19",
    imageUrl: "https://f4.bcbits.com/img/a2812384254_16.jpg",
    youtubeVideoId: "I5S-AMdP4bs",
    bandcampAlbumId: "3316613276",
  },
  stAugustine24: {
    id: "2abeb068-9075-483d-8dc3-66a24a5e528c",
    slug: "st-augustine-2024",
    location: "St. Augustine",
    date: "2024-11-20",
    imageUrl: "https://f4.bcbits.com/img/a1954948404_16.jpg",
    youtubeVideoId: "GOypQkCShfw",
    bandcampAlbumId: "1834138981",
  },
  miami24: {
    id: "2c2ae0d1-f46a-409e-9fa4-1c046bdacd9d",
    slug: "miami-2024",
    location: "Miami",
    date: "2024-11-21",
    youtubeVideoId: "_OgT1yyq0DM",
    imageUrl: "https://f4.bcbits.com/img/a1675499924_16.jpg",
    bandcampAlbumId: "4243074642",
  },
} as const satisfies Record<string, Omit<Show, "createdAt">>;

export const allShows = Object.values(seedShows) as Show[];
