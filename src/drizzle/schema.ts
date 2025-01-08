import { relations } from "drizzle-orm";
import {
  boolean,
  date,
  integer,
  pgTable,
  real,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";

export const shows = pgTable("shows", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  location: text("location").notNull(),
  date: date("date").notNull().unique(),
  bandcampAlbumId: text("bandcamp_album_id").unique(),
  youtubeVideoId: text("youtube_video_id"),
  imageUrl: text("image_url").unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Show = typeof shows.$inferSelect;

export const showsRelations = relations(shows, ({ many }) => ({
  performances: many(performances),
}));

export const albums = pgTable("albums", {
  id: uuid("id").primaryKey().defaultRandom(),
  releaseDate: date("release_date").notNull(),
  slug: text("slug").unique().notNull(),
  title: text("title").notNull().unique(),
  imageUrl: text("image_url").notNull(),
  bandcampAlbumId: text("bandcamp_album_id").unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Album = typeof albums.$inferSelect;

export const albumsRelations = relations(albums, ({ many }) => ({
  songs: many(songs),
}));

export const songs = pgTable("songs", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  title: text("title").notNull(),
  albumId: uuid("album_id")
    .references(() => albums.id)
    .notNull(),
  albumPosition: integer("album_position").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Song = typeof songs.$inferSelect;

export const songsRelations = relations(songs, ({ one, many }) => ({
  album: one(albums, {
    fields: [songs.albumId],
    references: [albums.id],
  }),
  performances: many(performances),
}));

const DEFAULT_ELO_RATING = 1500;

export const performances = pgTable(
  "performances",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    songId: uuid("song_id")
      .notNull()
      .references(() => songs.id),
    showId: uuid("show_id")
      .notNull()
      .references(() => shows.id),
    spotifyTrackId: text("spotify_track_id").unique(),
    bandcampTrackId: text("bandcamp_track_id").unique(),
    showPosition: integer("show_position").notNull(),
    youtubeVideoId: text("youtube_video_id"),
    youtubeVideoStartTime: integer("youtube_video_start_time"),
    eloRating: real("elo_rating").notNull().default(DEFAULT_ELO_RATING),
    ratingLastUpdatedAt: timestamp("rating_last_updated_at").defaultNow(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (t) => ({
    // For some reason, this statement always shows a diff with db:push
    // showSong: unique().on(t.showId, t.songId),
    youtube: unique().on(t.youtubeVideoId, t.youtubeVideoStartTime),
  }),
);

export type Performance = typeof performances.$inferSelect;

export const performancesRelations = relations(performances, ({ one }) => ({
  song: one(songs, {
    fields: [performances.songId],
    references: [songs.id],
  }),
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
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const votesRelations = relations(votes, ({ one }) => ({
  performance1: one(performances, {
    fields: [votes.performance1Id],
    references: [performances.id],
  }),
  performance2: one(performances, {
    fields: [votes.performance2Id],
    references: [performances.id],
  }),
  winner: one(performances, {
    fields: [votes.winnerId],
    references: [performances.id],
  }),
}));

export type Vote = typeof votes.$inferSelect;

export const nominations = pgTable("nominations", {
  id: uuid("id").primaryKey().defaultRandom(),
  /**
   * References the Clerk user ID or null if there was no logged in user.
   */
  userId: text("user_id"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  willNotAdd: boolean("will_not_add"),
  performanceId: uuid("performance_id").references(() => performances.id),
});

export type Nomination = typeof nominations.$inferSelect;
