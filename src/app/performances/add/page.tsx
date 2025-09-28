import type { Metadata } from "next";

import { addPerformance } from "@/actions/addPerformance";
import { ensureAdmin } from "@/auth/utils";
import PerformanceForm from "@/components/PerformanceForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";

export const metadata: Metadata = {
  title: "Add Performance",
  description:
    "Add a new live performance of a King Gizzard & The Lizard Wizard song to Live Gizz Rankings.",
};

interface AddPerformancePageProps {
  searchParams: Promise<{ song?: string; show?: string }>;
}

export default async function AddPerformancePage({
  searchParams,
}: AddPerformancePageProps) {
  await ensureAdmin();

  const { song: songId, show: showId } = await searchParams;
  const [songs, shows] = await Promise.all([
    db.query.songs.findMany({
      with: {
        album: true,
      },
    }),
    db.query.shows.findMany(),
  ]);

  return (
    <>
      <PageTitle>Add New Performance</PageTitle>

      <PageContent>
        <PerformanceForm
          action={addPerformance}
          songs={songs}
          shows={shows}
          submitLabel="Add Performance"
          defaultSongId={songId}
          defaultShowId={showId}
        />
      </PageContent>
    </>
  );
}
