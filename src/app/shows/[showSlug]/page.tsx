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
            <Link
              href={performancePath}
              className="text-2xl no-underline sm:text-4xl"
            >
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
          alt={showTitle}
          className="aspect-square w-full"
          width={500}
          height={500}
        />
      ) : null}

      <Suspense fallback="Loading performances...">
        <ShowPerformances show={show} />
      </Suspense>

      <div>
        <Link href="/shows" className="no-underline">
          Back to all shows
        </Link>
      </div>
    </div>
  );
}
