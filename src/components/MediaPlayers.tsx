import { YouTubeEmbed } from "@next/third-parties/google";

import { Performance, Show } from "@/drizzle/schema";

function SpotifyPlayer({ spotifyTrackId }: { spotifyTrackId: string }) {
  return (
    <iframe
      className="rounded-xl"
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

export function YouTubePlayer({
  videoId,
  startTime,
}: {
  videoId: string;
  startTime: number | null;
}) {
  return (
    <YouTubeEmbed
      videoid={videoId}
      params={startTime == null ? undefined : `start=${startTime}`}
    />
  );
}

export function MediaPlayers({
  performance,
  show,
}: {
  performance: Performance;
  show: Show;
}) {
  return (
    <div className="space-y-4">
      {performance.youtubeVideoId && (
        <YouTubePlayer
          videoId={performance.youtubeVideoId}
          startTime={performance.youtubeVideoStartTime}
        />
      )}

      {performance.bandcampTrackId && show.bandcampAlbumId && (
        <BandcampPlayer
          bandcampTrackId={performance.bandcampTrackId}
          bandcampAlbumId={show.bandcampAlbumId}
        />
      )}

      {performance.spotifyTrackId && (
        <SpotifyPlayer spotifyTrackId={performance.spotifyTrackId} />
      )}

      <a
        className="inline-block"
        href={`https://tapes.kglw.net/${show.date}/`}
        target="_blank"
        rel="noopener"
      >
        Listen on Gizz Tapes
      </a>
    </div>
  );
}
