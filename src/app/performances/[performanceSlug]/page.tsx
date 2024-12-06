import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MediaPlayers } from "@/components/MediaPlayers";
import { allPerformances } from "@/drizzle/seeds";
import {
  getPerformanceBySlug,
  getPerformanceSlug,
  getShowById,
  getShowPath,
  getShowTitle,
  getSongById,
  getSongPath,
} from "@/utils";

type Params = { performanceSlug: string };
type Props = { params: Promise<Params> };

export function generateStaticParams(): Params[] {
  return allPerformances.map((performance) => ({
    performanceSlug: getPerformanceSlug(performance),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { performanceSlug } = await params;
  const performance = getPerformanceBySlug(performanceSlug);
  if (!performance) {
    notFound();
  }

  const show = getShowById(performance.showId);
  const song = getSongById(performance.songId);
  if (!song || !show) {
    notFound();
  }

  const title = `${song.title} - ${getShowTitle(show)}`;

  return { title };
}

export default async function PerformancePage({ params }: Props) {
  const { performanceSlug } = await params;
  const performance = getPerformanceBySlug(performanceSlug);
  if (!performance) {
    notFound();
  }

  const show = getShowById(performance.showId);
  const song = getSongById(performance.songId);
  if (!song || !show) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h2 className="text-4xl">
        <Link href={getSongPath(song)} className="no-underline">
          {song.title}
        </Link>{" "}
        -{" "}
        <Link href={getShowPath(show)} className="no-underline">
          {getShowTitle(show)}
        </Link>
      </h2>

      <MediaPlayers performance={performance} show={show} />
    </div>
  );
}
