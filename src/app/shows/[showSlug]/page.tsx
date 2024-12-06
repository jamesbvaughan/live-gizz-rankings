import { eq } from "drizzle-orm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { db } from "@/drizzle/db";
import { performances, Show } from "@/drizzle/schema";
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
  };
}

async function ShowPerformances({ show }: { show: Show }) {
  const showPerformances = await db.query.performances.findMany({
    where: eq(performances.showId, show.id),
    with: { song: true },
  });

  return (
    <ol className="space-y-4">
      {showPerformances.map((performance) => {
        const performancePath = getPerformancePath(performance);

        return (
          <li key={performance.id}>
            <Link href={performancePath} className="text-2xl no-underline">
              {performance.song.title}
            </Link>

            <div className="text-muted">
              ({Math.round(performance.eloRating)})
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default async function ShowPage({ params }: Props) {
  const { showSlug } = await params;
  const show = getShowBySlug(showSlug);
  if (!show) {
    notFound();
  }

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

        <Suspense fallback="Loading performances...">
          <ShowPerformances show={show} />
        </Suspense>
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
