import { MediaPlayers } from "@/components/MediaPlayers";
import { Show } from "@/drizzle/schema";
import { seedPerformances } from "@/drizzle/seeds";
import {
  getPerformanceById,
  getShowById,
  getShowTitle,
  getSongById,
} from "@/utils";
import { Metadata } from "next";

type Props = { params: Promise<{ performanceId: string }> };

export function generateStaticParams() {
  return Object.values(seedPerformances).map((performance) => ({
    // TODO: maybe use a human-readable slug?
    performanceId: performance.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { performanceId } = await params;
  const performance = getPerformanceById(performanceId);
  const show = getShowById(performance.showId);
  const song = getSongById(performance.songId);
  const title = `${song.title} - ${getShowTitle(show as Show)}`;

  return { title };
}

export default async function Performance({ params }: Props) {
  const { performanceId } = await params;
  const performance = getPerformanceById(performanceId);
  const show = getShowById(performance.showId);
  const song = getSongById(performance.songId);
  return (
    <div className="space-y-4">
      <h2 className="text-4xl">
        {song.title} - {getShowTitle(show)}
      </h2>

      <MediaPlayers performance={performance} show={show} />
    </div>
  );
}
