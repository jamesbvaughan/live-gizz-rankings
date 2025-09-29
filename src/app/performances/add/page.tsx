import type { Metadata } from "next";

import { addPerformance } from "@/actions/addPerformance";
import { ensureSignedIn } from "@/auth/utils";
import PerformanceForm from "@/components/PerformanceForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { parseNomination } from "@/lib/nominationParser";

export const metadata: Metadata = {
  title: "Add Performance",
  description:
    "Add a new live performance of a King Gizzard & The Lizard Wizard song to Live Gizz Rankings.",
};

interface AddPerformancePageProps {
  searchParams: Promise<{ song?: string; show?: string; nomination?: string }>;
}

export default async function AddPerformancePage({
  searchParams,
}: AddPerformancePageProps) {
  await ensureSignedIn();

  const { song: songId, show: showId, nomination } = await searchParams;
  const [songs, shows] = await Promise.all([
    db.query.songs.findMany({
      with: {
        album: true,
      },
    }),
    db.query.shows.findMany(),
  ]);

  // Parse nomination to extract song and show if provided
  let parsedSongId = songId;
  let parsedShowId = showId;
  let parseConfidence = 0;
  let defaultYoutubeVideoId = "";

  if (nomination && !songId && !showId) {
    const decodedNomination = decodeURIComponent(nomination);
    const parsed = parseNomination(decodedNomination, { songs, shows });
    parsedSongId = parsed.songId;
    parsedShowId = parsed.showId;
    parseConfidence = parsed.confidence;
  }

  // If we have a show (either from parsing or URL parameters), get its YouTube video ID
  const selectedShowId = parsedShowId || showId;
  if (selectedShowId) {
    const selectedShow = shows.find((show) => show.id === selectedShowId);
    if (selectedShow?.youtubeVideoId) {
      defaultYoutubeVideoId = selectedShow.youtubeVideoId;
    }
  }

  return (
    <>
      <PageTitle>Add New Performance</PageTitle>

      <PageContent>
        {nomination && (
          <div className="border-red mb-6 border p-4">
            <h3 className="text-foreground mb-2 font-semibold">
              From nomination: &ldquo;{decodeURIComponent(nomination)}&rdquo;
            </h3>
            {parseConfidence > 0 && (
              <div className="text-muted mt-2 text-sm">
                <span className="font-medium">Auto-detected:</span>
                {parsedSongId && (
                  <span className="ml-1">
                    Song: {songs.find((s) => s.id === parsedSongId)?.title}
                  </span>
                )}
                {parsedSongId && parsedShowId && (
                  <span className="mx-1">•</span>
                )}
                {parsedShowId && (
                  <span>
                    Show: {shows.find((s) => s.id === parsedShowId)?.location}
                  </span>
                )}
                <span className="text-muted ml-1">
                  (confidence: {Math.round(parseConfidence * 100)}%)
                </span>
              </div>
            )}
            {defaultYoutubeVideoId && (
              <div className="mt-3">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href={`https://www.youtube.com/watch?v=${defaultYoutubeVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch YouTube Video
                </a>
              </div>
            )}
          </div>
        )}
        <PerformanceForm
          action={addPerformance}
          songs={songs}
          shows={shows}
          submitLabel="Add Performance"
          defaultSongId={parsedSongId}
          defaultShowId={parsedShowId}
          defaultYoutubeVideoId={defaultYoutubeVideoId}
        />
      </PageContent>
    </>
  );
}
