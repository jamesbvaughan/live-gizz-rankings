import { seedAlbums } from "@/drizzle/data/albums";
import { seedPerformances } from "@/drizzle/data/performances";
import { seedShows } from "@/drizzle/data/shows";
import { seedSongs } from "@/drizzle/data/songs";

console.log(`Albums:       ${seedAlbums.length}`);
console.log(`Songs:        ${Object.values(seedSongs).length}`);
console.log(`Shows:        ${seedShows.length}`);
console.log(`Performances: ${seedPerformances.length}`);
