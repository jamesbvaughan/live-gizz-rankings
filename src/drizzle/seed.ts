import { allAlbums } from "./data/albums";
import { allPerformances } from "./data/performances";
import { allShows } from "./data/shows";
import { allSongs } from "./data/songs";
import { dbHTTP as db } from "./db";
import { albums, performances, shows, songs } from "./schema";

async function seed() {
  console.log("Seeding database...");

  await Promise.all(
    allAlbums.map((album) => {
      const { id: _, ...albumWithoutId } = album;
      return db
        .insert(albums)
        .values(album)
        .onConflictDoUpdate({ target: albums.id, set: albumWithoutId });
    }),
  );

  await Promise.all(
    allSongs.map((song) => {
      const { id: _, ...songWithoutId } = song;
      return db
        .insert(songs)
        .values(song)
        .onConflictDoUpdate({ target: songs.id, set: songWithoutId });
    }),
  );

  await Promise.all(
    allShows.map((show) => {
      const { id: _, ...showWithoutId } = show;
      return db
        .insert(shows)
        .values(show)
        .onConflictDoUpdate({ target: shows.id, set: showWithoutId });
    }),
  );

  await Promise.all(
    allPerformances.map((performance) => {
      const { id: _id, ...performanceWithoutId } = performance;
      return db.insert(performances).values(performance).onConflictDoUpdate({
        target: performances.id,
        set: performanceWithoutId,
      });
    }),
  );

  console.log("Seeded database.");
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
});
