import { pgTable, real, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const shows = pgTable("shows", {
  id: uuid("id").primaryKey().defaultRandom(),
  location: text("location").notNull(),
  date: timestamp("date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const albums = pgTable("albums", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const songs = pgTable("songs", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  album: uuid("album_id").references(() => albums.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const performances = pgTable("performances", {
  id: uuid("id").primaryKey().defaultRandom(),
  songId: uuid("song_id")
    .notNull()
    .references(() => songs.id),
  showId: uuid("show_id")
    .notNull()
    .references(() => shows.id),
  spotifyTrackId: text("spotify_track_id"),
  bandcampTrackId: text("bandcamp_track_id"),
  youtubeUrl: text("youtube_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const votes = pgTable("votes", {
  id: uuid("id").primaryKey().defaultRandom(),
  performance1Id: uuid("performance_1_id")
    .notNull()
    .references(() => performances.id),
  performance2Id: uuid("performance_2_id")
    .notNull()
    .references(() => performances.id),
  winnerId: uuid("winner_id")
    .notNull()
    .references(() => performances.id),
  voterId: text("voter_id").notNull(), // References the Clerk user ID
  createdAt: timestamp("created_at").defaultNow(),
});

const DEFAULT_ELO_RATING = 1500;

export const eloRatings = pgTable("elo_ratings", {
  performanceId: uuid("performance_id")
    .primaryKey()
    .references(() => performances.id),
  eloRating: real("elo_rating").notNull().default(DEFAULT_ELO_RATING),
  lastUpdated: timestamp("last_updated").defaultNow(),
});
