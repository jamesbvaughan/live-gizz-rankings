import { notFound } from "next/navigation";

import { editPerformance } from "@/actions/editPerformance";
import { ensureAdmin } from "@/auth/utils";
import PerformanceForm from "@/components/PerformanceForm";
import { PageContent, PageTitle } from "@/components/ui";
import { getPerformanceBySlug, getShowById, getSongById } from "@/dbUtils";
import { db } from "@/drizzle/db";

interface EditPerformancePageProps {
  params: Promise<{ performanceSlug: string }>;
}

export default async function EditPerformancePage({
  params,
}: EditPerformancePageProps) {
  await ensureAdmin();

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

  return (
    <>
      <PageTitle>
        Edit Performance: {song.title} - {show.location}
      </PageTitle>

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
