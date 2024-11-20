import { songs, Performance } from "@/songs";

function RankSongButton({ performance }: { performance: Performance }) {
  return (
    <button
      className="block aspect-square w-full border-2 border-black text-2xl hover:bg-gray-700"
      // onClick={() => {
      //   console.log("voted for", performance.location);
      // }}
    >
      {performance.location} {performance.year} is better
    </button>
  );
}

export default function Rank() {
  const song = songs[0];

  const performanceA = song.performances[0];
  const performanceB = song.performances[1];

  const performances = [performanceA, performanceB];

  return (
    <div className="space-y-10">
      <h2 className="text-center text-4xl">Which is better?</h2>

      <h3 className="text-center text-4xl">{song.name}</h3>

      <div className="grid grid-cols-2 gap-2">
        {performances.map((performance) => (
          <div key={performance.location} className="space-y-4">
            <h4 className="text-center text-2xl">
              {performance.location} {performance.year}
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

            {performance.bandcamp && (
              <iframe
                suppressHydrationWarning
                style={{ border: 0, width: "100%", height: 42 }}
                src={`https://bandcamp.com/EmbeddedPlayer/album=${performance.bandcamp.albumId}/size=small/bgcol=333333/linkcol=e32c14/track=${performance.bandcamp.trackId}/transparent=true/`}
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

            <RankSongButton performance={performance} />
          </div>
        ))}
      </div>
    </div>
  );
}
