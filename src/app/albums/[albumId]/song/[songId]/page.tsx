import { db } from "@/drizzle/db";
import { performances, songs } from "@/drizzle/schema";
import { getPerformanceTitle } from "@/utils";
import { desc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Song({
  params,
}: {
  params: Promise<{ songId: string }>;
}) {
  const { songId } = await params;
  const song = await db.query.songs.findFirst({
    where: eq(songs.id, songId),
    with: {
      performances: {
        with: { show: true },
        orderBy: desc(performances.eloRating),
      },
    },
  });
  if (!song) {
    notFound();
  }

  return (
    <div>
      <h2>{song.title}</h2>

      {song.performances.map((performance) => {
        const performanceTitle = getPerformanceTitle(song, performance.show);
        return (
          <div key={performance.id}>
            {performanceTitle} ({performance.eloRating})
          </div>
        );
      })}
    </div>
  );
}
