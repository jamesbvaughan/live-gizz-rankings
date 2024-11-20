import { relations } from "drizzle-orm";
import {
  date,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const shows = pgTable("shows", {
  id: uuid("id").primaryKey().defaultRandom(),
  location: text("location").notNull(),
  date: date("date").notNull(),
  bandcampAlbumId: text("bandcamp_album_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Show = typeof shows.$inferSelect;

export const showsRelations = relations(shows, ({ many }) => ({
  performances: many(performances),
}));

export const albums = pgTable("albums", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  bandcampAlbumId: text("bandcamp_album_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Album = typeof albums.$inferSelect;

export const songs = pgTable("songs", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  albumId: uuid("album_id").references(() => albums.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Song = typeof songs.$inferSelect;

const DEFAULT_ELO_RATING = 1500;

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
  eloRating: real("elo_rating").notNull().default(DEFAULT_ELO_RATING),
  ratingLastUpdatedAt: timestamp("rating_last_updated_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Performance = typeof performances.$inferSelect;

export const performancesRelations = relations(performances, ({ one }) => ({
  show: one(shows, {
    fields: [performances.showId],
    references: [shows.id],
  }),
}));

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

export type Vote = typeof votes.$inferSelect;
