import { db } from "@/drizzle/db";
import { Performance, performances, Show } from "@/drizzle/schema";
import { getShowTitle } from "@/utils";
import { eq } from "drizzle-orm";
import { PerformanceFormButtons } from "./PerformanceVoteFormButton";
import { Metadata } from "next";
import { getRandomPairForCurrentUser } from "./getRandomPair";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rank Songs",
};

async function getPerformanceById(performanceId: string) {
  const performance = await db.query.performances.findFirst({
    where: eq(performances.id, performanceId),
    with: { show: true, song: true },
  });
  if (!performance) {
    throw new Error("Performance not found");
  }
  return performance;
}

async function getSongById(songId: string) {
  const song = await db.query.songs.findFirst({
    where: eq(performances.id, songId),
  });
  if (!song) {
    throw new Error("Song not found");
  }
  return song;
}

function SpotifyPlayer({ spotifyTrackId }: { spotifyTrackId: string }) {
  return (
    <iframe
      width="100%"
      height="80"
      src={`https://open.spotify.com/embed/track/${spotifyTrackId}`}
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
      width="100%"
      height="120"
      src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcampAlbumId}/size=large/bgcol=${bgColor}/linkcol=${linkColor}/tracklist=false/artwork=none/track=${bandcampTrackId}/transparent=true/`}
      loading="lazy"
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
      loading="lazy"
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
      {performance.youtubeVideoId && (
        <YouTubePlayer
          videoId={performance.youtubeVideoId}
          startTime={performance.youtubeVideoStartTime}
        />
      )}

      {performance.bandcampTrackId && performance.show.bandcampAlbumId && (
        <BandcampPlayer
          bandcampTrackId={performance.bandcampTrackId}
          bandcampAlbumId={performance.show.bandcampAlbumId}
        />
      )}

      {performance.spotifyTrackId && (
        <SpotifyPlayer spotifyTrackId={performance.spotifyTrackId} />
      )}
    </div>
  );
}

export default async function Rank() {
  const pair = await getRandomPairForCurrentUser();
  if (!pair) {
    return (
      <div className="space-y-4">
        <p>
          You&apos;ve voted on every pair of performances that&apos;s been added
          to the site. Thank you!
        </p>
        <p>
          You can{" "}
          <Link href="/albums" className="underline">
            browse all the rankings by album here
          </Link>{" "}
          or{" "}
          <a href="mailto:james@jamesbvaughan.com" className="underline">
            email me
          </a>{" "}
          if there are more songs or performances that you&apos;d like to see
          added here.
        </p>
      </div>
    );
  }

  const performanceA = await getPerformanceById(pair[0]);
  const performanceB = await getPerformanceById(pair[1]);
  const song = await getSongById(performanceA.songId);

  const performances = [performanceA, performanceB];

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
        {performances.map((performance) => {
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
