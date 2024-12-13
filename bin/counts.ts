import {
  allAlbums,
  allPerformances,
  allShows,
  allSongs,
} from "../src/drizzle/seeds";

console.log(`Albums:       ${allAlbums.length}`);
console.log(`Songs:        ${allSongs.length}`);
console.log(`Shows:        ${allShows.length}`);
console.log(`Performances: ${allPerformances.length}`);
