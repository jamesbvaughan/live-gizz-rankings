export interface Performance {
  location: string;
  year: number;
  bandcamp?: {
    albumId: string;
    trackId: string;
  };
  spotifyTrackId?: string;
  youtubeId?: string;
}

export interface Song {
  name: string;
  performances: Performance[];
}

export const songs: Song[] = [
  {
    name: "Work This Time",
    performances: [
      {
        location: "Bonnaroo",
        year: 2022,
        spotifyTrackId: "4b6tZw9nCvkQBlc6Nwi7M5?si=1e93797f9ec94a0a",
        bandcamp: {
          albumId: "1363173846",
          trackId: "2385094002",
        },
      },
      { location: "Red Rocks", year: 2023 },
      { location: "Atlanta", year: 2024 },
    ],
  },
];
