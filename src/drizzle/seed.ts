/* eslint-disable @typescript-eslint/no-unused-vars */

import { dbHTTP as db } from "./db";
import { albums, performances, shows, songs } from "./schema";
import { seedAlbums, seedPerformances, seedShows, seedSongs } from "./seeds";

async function seed() {
  console.log("Seeding database...");

  await Promise.all(
    seedAlbums.map((album) => {
      const { id: _, ...albumWithoutId } = album;
      return db
        .insert(albums)
        .values(album)
        .onConflictDoUpdate({ target: albums.id, set: albumWithoutId });
    }),
  );

  await Promise.all(
    seedSongs.map((song) => {
      const { id: _, ...songWithoutId } = song;
      return db
        .insert(songs)
        .values(song)
        .onConflictDoUpdate({ target: songs.id, set: songWithoutId });
    }),
  );

  await Promise.all(
    seedShows.map((show) => {
      const { id: _, ...showWithoutId } = show;
      return db
        .insert(shows)
        .values(show)
        .onConflictDoUpdate({ target: shows.id, set: showWithoutId });
    }),
  );

  await Promise.all(
    seedPerformances.map((performance) => {
      const { id: _id, ...performanceWithoutId } = performance;
      return db.insert(performances).values(performance).onConflictDoUpdate({
        target: performances.id,
        set: performanceWithoutId,
      });
    }),
  );

  console.log("Seeded database.");
}

seed();
