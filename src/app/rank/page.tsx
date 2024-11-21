import { db } from "@/drizzle/db";
import { Performance, performances, Show, Song } from "@/drizzle/schema";
import { getShowTitle } from "@/utils";
import { eq, sql } from "drizzle-orm";
import { PerformanceFormButtons } from "./PerformanceVoteFormButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rank Songs",
};

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
      song: true,
    },
  });

  if (randomPerformances.length !== 2) {
    throw new Error("Not enough performances found");
  }

  return randomPerformances;
}

function SpotifyPlayer({ spotifyTrackId }: { spotifyTrackId: string }) {
  return (
    <iframe
      style={{ borderRadius: 0 }}
      src={`https://open.spotify.com/embed/track/${spotifyTrackId}`}
      width="100%"
      height="80"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

function BandcampPlayer({
  bandcampTrackId,
  bandcampAlbumId,
}: {
  bandcampTrackId: string;
  bandcampAlbumId: string;
}) {
  const bgColor = "000000";
  const linkColor = "ff0000";
  return (
    <iframe
      style={{ border: 0, width: "100%", height: 120 }}
      src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcampAlbumId}/size=large/bgcol=${bgColor}/linkcol=${linkColor}/tracklist=false/artwork=none/track=${bandcampTrackId}/transparent=true/`}
      seamless
    ></iframe>
  );
}

function YouTubePlayer({
  videoId,
  startTime,
}: {
  videoId: string;
  startTime: number | null;
}) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={`https://www.youtube.com/embed/${videoId}${startTime != null ? `?start=${startTime}` : ""}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

function MediaPlayers({
  performance,
}: {
  performance: Performance & { show: Show };
}) {
  return (
    <div className="space-y-4">
      {performance.spotifyTrackId && (
        <SpotifyPlayer spotifyTrackId={performance.spotifyTrackId} />
      )}

      {performance.bandcampTrackId && performance.show.bandcampAlbumId && (
        <BandcampPlayer
          bandcampTrackId={performance.bandcampTrackId}
          bandcampAlbumId={performance.show.bandcampAlbumId}
        />
      )}

      {performance.youtubeVideoId && (
        <YouTubePlayer
          videoId={performance.youtubeVideoId}
          startTime={performance.youtubeVideoStartTime}
        />
      )}
    </div>
  );
}

export default async function Rank() {
  const song = await getRandomSong();

  const randomPerformances = await getRandomPerformances(song);
  const [performanceA, performanceB] = randomPerformances;

  return (
    <div className="space-y-10">
      <h2 className="text-center text-2xl sm:text-4xl">
        Which <span className="font-bold">{song.title}</span> is better?
      </h2>

      <PerformanceFormButtons
        performanceA={performanceA}
        performanceB={performanceB}
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
        {randomPerformances.map((performance) => {
          const showTitle = getShowTitle(performance.show);

          return (
            <div key={performance.id} className="space-y-4">
              <h3 className="text-xl">
                Listen to {song.title} at {showTitle}
              </h3>

              <MediaPlayers performance={performance} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
