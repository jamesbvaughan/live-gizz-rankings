import { eq } from "drizzle-orm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { db } from "@/drizzle/db";
import { performances } from "@/drizzle/schema";
import { allPerformances, allShows, allSongs } from "@/drizzle/seeds";
import { getPerformancePath, getShowBySlug, getShowTitle } from "@/utils";

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

  const showPerformances = allPerformances.filter(
    (performance) => performance.showId === show.id,
  );

  const showTitle = getShowTitle(show);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl sm:text-6xl">{showTitle}</h2>

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
        <h3 className="text-3xl">Performances from this show with rankings</h3>

        {showPerformances.length > 0 ? (
          <ol className="space-y-4">
            {showPerformances.map((performance) => {
              const performancePath = getPerformancePath(performance);
              const song = allSongs.find(
                (song) => song.id === performance.songId,
              )!;

              return (
                <li key={performance.id}>
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
                style={{ border: 0, marginTop: 8, width: "100%", height: 472 }}
                src={`https://bandcamp.com/EmbeddedPlayer/album=${show.bandcampAlbumId}/size=large/bgcol=333333/linkcol=e32c14/artwork=none/transparent=true/`}
              />
            </>
          )}
        </div>
      </div>

      <div>
        <Link href="/shows" className="no-underline">
          Back to all shows
        </Link>
      </div>
    </div>
  );
}
