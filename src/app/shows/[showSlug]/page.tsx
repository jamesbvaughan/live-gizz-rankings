import { eq } from "drizzle-orm";
import DOMPurify from "isomorphic-dompurify";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  PageContent,
  PageSubtitle,
  PageTitle,
  PageType,
} from "@/components/ui";
import { db } from "@/drizzle/db";
import { performances, Show } from "@/drizzle/schema";
import { allPerformances, allShows, allSongs } from "@/drizzle/seeds";
import {
  getAlbumById,
  getPerformancePath,
  getShowBySlug,
  getShowTitle,
} from "@/utils";

type Params = { showSlug: string };
type Props = { params: Promise<Params> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { showSlug } = await params;
  const show = getShowBySlug(showSlug);
  if (!show) {
    notFound();
  }

  const showTitle = getShowTitle(show);

  return {
    title: showTitle,
    description: `Find the top-ranked song performances from King Gizzard & The Lizard Wizard's ${showTitle} show on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
  };
}

export const experimental_ppr = true;

export function generateStaticParams(): Params[] {
  return allShows.map((show) => ({
    showSlug: show.slug,
  }));
}

export const dynamicParams = false;

async function GizzTapesNote({ show }: { show: Show }) {
  const gizzTapesShowId = show.date;

  let note;
  try {
    const response = await fetch(
      `https://tapes.kglw.net/api/v1/shows/${gizzTapesShowId}.json`,
    );
    const data = await response.json();
    note = data.notes;
  } catch (error) {
    const showTitle = getShowTitle(show);
    console.error(
      `No Gizz Tapes notes found for ${showTitle}:`,
      (error as Error).message,
    );
    return <div>No Gizz Tapes notes for this show.</div>;
  }

  const htmlWithLineBreaks = note.replace(/\n/g, "<br>");

  // Sanitize the modified HTML string
  const sanitizedHtml = DOMPurify.sanitize(htmlWithLineBreaks);

  return (
    <div className="space-y-2">
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

      <a
        href={`https://tapes.kglw.net/${gizzTapesShowId}/`}
        className="inline-block text-muted"
        target="_blank"
        rel="noopener"
      >
        Read more on Gizz Tapes
      </a>
    </div>
  );
}

async function PerformanceElo({ performanceId }: { performanceId: string }) {
  const performance = await db.query.performances.findFirst({
    where: eq(performances.id, performanceId),
  });

  return <span>({Math.round(performance!.eloRating)})</span>;
}

export default async function ShowPage({ params }: Props) {
  const { showSlug } = await params;
  const show = getShowBySlug(showSlug);
  if (!show) {
    notFound();
  }

  const showPerformances = allPerformances
    .filter((performance) => performance.showId === show.id)
    .sort(
      (performanceA, performanceB) =>
        performanceA.showPosition - performanceB.showPosition,
    );

  const showTitle = getShowTitle(show);

  const formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(show.date));

  return (
    <>
      <PageType>Show</PageType>

      <PageTitle>{showTitle}</PageTitle>

      <PageSubtitle>{formattedDate}</PageSubtitle>

      <PageContent className="space-y-8">
        {show.imageUrl ? (
          <Image
            src={show.imageUrl}
            alt={`Album cover for ${showTitle}`}
            className="aspect-square w-full"
            width={500}
            height={500}
          />
        ) : null}

        <div className="space-y-4">
          <h3 className="text-3xl">
            Performances from this show with rankings
          </h3>

          {showPerformances.length > 0 ? (
            <ol className="space-y-4">
              {showPerformances.map((performance) => {
                const performancePath = getPerformancePath(performance);
                const song = allSongs.find(
                  (song) => song.id === performance.songId,
                )!;
                const album = getAlbumById(song.albumId)!;

                return (
                  <li
                    key={performance.id}
                    className="flex items-center space-x-2"
                  >
                    <Image
                      src={album.imageUrl}
                      alt={album.title}
                      width={48}
                      height={48}
                    />

                    <div>
                      <Link
                        href={performancePath}
                        className="text-2xl no-underline"
                      >
                        {song.title}
                      </Link>

                      <div className="text-muted">
                        <Suspense fallback="Loading Elo score...">
                          <PerformanceElo performanceId={performance.id} />
                        </Suspense>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          ) : (
            <p>No performances from this show have been submitted yet.</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl">Listen to this show</h3>

          <div>
            <a href={`https://tapes.kglw.net/${show.date}/`}>
              Listen to this show on Gizz Tapes
            </a>

            {show.bandcampAlbumId && (
              <>
                {" "}
                or on Bandcamp:
                <iframe
                  style={{
                    border: 0,
                    marginTop: 8,
                    width: "100%",
                    height: 472,
                  }}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${show.bandcampAlbumId}/size=large/bgcol=333333/linkcol=e32c14/artwork=none/transparent=true/`}
                />
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl">Gizz Tapes show notes</h3>

          <Suspense fallback="Loading note from Gizz Tapes...">
            <GizzTapesNote show={show} />
          </Suspense>
        </div>

        <div>
          <Link href="/shows" className="no-underline">
            Back to all shows
          </Link>
        </div>
      </PageContent>
    </>
  );
}
