import { vote } from "@/actions";
import { db } from "@/drizzle/db";
import { performances, Song } from "@/drizzle/schema";
import { eq, sql } from "drizzle-orm";

async function getRandomSong() {
  const randomSong = await db.query.songs.findFirst({
    orderBy: sql`RANDOM()`,
  });
  if (!randomSong) {
    throw new Error("No songs found");
  }

  return randomSong;
}

async function getRandomPerformances(song: Song) {
  const randomPerformances = await db.query.performances.findMany({
    limit: 2,
    where: eq(performances.songId, song.id),
    orderBy: sql`RANDOM()`,
    with: {
      show: true,
    },
  });

  if (randomPerformances.length !== 2) {
    throw new Error("Not enough performances found");
  }

  return randomPerformances;
}

export default async function Rank() {
  const song = await getRandomSong();

  const randomPerformances = await getRandomPerformances(song);

  return (
    <div className="space-y-10">
      <h2 className="text-center text-4xl">Which is better?</h2>

      <h3 className="text-center text-4xl">{song.title}</h3>

      <div className="grid grid-cols-2 gap-2">
        {randomPerformances.map((performance) => (
          <div key={performance.show.location} className="space-y-4">
            <h4 className="text-center text-2xl">
              {performance.show.location} {performance.show.date}
            </h4>

            {performance.spotifyTrackId && (
              <iframe
                style={{ borderRadius: 12 }}
                src={`https://open.spotify.com/embed/track/${performance.spotifyTrackId}?theme=0`}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            )}

            {performance.bandcampTrackId &&
              performance.show.bandcampAlbumId && (
                <iframe
                  suppressHydrationWarning
                  style={{ border: 0, width: "100%", height: 42 }}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${performance.show.bandcampAlbumId}/size=small/bgcol=333333/linkcol=e32c14/track=${performance.bandcampTrackId}/transparent=true/`}
                  seamless
                >
                  <a
                    suppressHydrationWarning
                    href="https://kinggizzard.bandcamp.com/album/live-at-bonnaroo-22"
                  >
                    Live At Bonnaroo &#39;22 by King Gizzard &amp; The Lizard
                    Wizard
                  </a>
                </iframe>
              )}

            <form action={vote}>
              <input
                type="hidden"
                name="performanceId"
                value={performance.id}
              />
              <input
                type="hidden"
                name="location"
                value={performance.show.location}
              />
              <button
                type="submit"
                className="block aspect-square w-full border-2 border-black text-2xl hover:bg-gray-700"
              >
                {performance.show.location} {performance.show.date} is better
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
