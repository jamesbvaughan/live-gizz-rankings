import { Metadata } from "next";

import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { getPerformanceTitle } from "@/utils";

export const metadata: Metadata = {
  title: "Ranked Performances",
};

export default async function Rankings() {
  const performances = await db.query.performances.findMany({
    with: { song: true, show: true },
  });

  return (
    <>
      <PageTitle>All rankings</PageTitle>

      <PageContent>
        {performances.map((performance) => {
          const performanceTitle = getPerformanceTitle(
            performance.song,
            performance.show,
          );
          return (
            <div key={performance.id}>
              {performanceTitle} ({performance.eloRating})
            </div>
          );
        })}
      </PageContent>
    </>
  );
}
