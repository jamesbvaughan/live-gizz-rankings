import { db } from "@/drizzle/db";
import { getPerformanceTitle } from "@/utils";

export default async function Rankings() {
  const performances = await db.query.performances.findMany({
    with: { song: true, show: true },
  });
  return (
    <div>
      <h2>All rankings</h2>

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
    </div>
  );
}
