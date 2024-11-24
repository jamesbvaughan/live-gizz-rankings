import { Performance, Show } from "@/drizzle/schema";

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
    </div>
  );
}
