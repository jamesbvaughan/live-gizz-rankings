import { allAlbums } from "@/drizzle/data/albums";
import { allPerformances } from "@/drizzle/data/performances";
import { allShows } from "@/drizzle/data/shows";
import { allSongs } from "@/drizzle/data/songs";

console.log(`Albums:       ${allAlbums.length}`);
console.log(`Songs:        ${allSongs.length}`);
console.log(`Shows:        ${allShows.length}`);
console.log(`Performances: ${allPerformances.length}`);
