import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { editPerformance } from "@/actions/editPerformance";
import { ensureSignedIn } from "@/auth/utils";
import PerformanceForm from "@/components/PerformanceForm";
import { PageContent, PageTitle } from "@/components/ui";
import { getPerformanceBySlug, getShowById, getSongById } from "@/dbUtils";
import { db } from "@/drizzle/db";
import { getPerformanceTitle, getShowTitle } from "@/utils";

interface EditPerformancePageProps {
  params: Promise<{ performanceSlug: string }>;
}

export async function generateMetadata({
  params,
}: EditPerformancePageProps): Promise<Metadata> {
  const { performanceSlug } = await params;
  const performance = await getPerformanceBySlug(performanceSlug);

  const [song, show] = await Promise.all([
    getSongById(performance.songId),
    getShowById(performance.showId),
  ]);

  const showTitle = getShowTitle(show);
  const performanceTitle = getPerformanceTitle(song, show);

  return {
    title: `Edit Performance: ${performanceTitle}`,
    description: `Edit details for the live performance of "${song.title}" from ${showTitle} on Live Gizz Rankings.`,
  };
}

export default async function EditPerformancePage({
  params,
}: EditPerformancePageProps) {
  await ensureSignedIn();

  const { performanceSlug } = await params;
  const [performance, songs, shows] = await Promise.all([
    getPerformanceBySlug(performanceSlug),
    db.query.songs.findMany({
      with: {
        album: true,
      },
    }),
    db.query.shows.findMany(),
  ]);

  if (!performance) {
    notFound();
  }

  const [song, show] = await Promise.all([
    getSongById(performance.songId),
    getShowById(performance.showId),
  ]);

  const performanceTitle = getPerformanceTitle(song, show);

  return (
    <>
      <PageTitle>Edit Performance: {performanceTitle}</PageTitle>

      <PageContent>
        <PerformanceForm
          action={editPerformance}
          songs={songs}
          shows={shows}
          performance={performance}
          submitLabel="Update Performance"
        />
      </PageContent>
    </>
  );
}
