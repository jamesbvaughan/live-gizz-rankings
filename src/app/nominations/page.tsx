import { desc } from "drizzle-orm";

import { db } from "@/drizzle/db";
import { nominations } from "@/drizzle/schema";

export default async function NominationsPage() {
  const allNominations = await db.query.nominations.findMany({
    orderBy: desc(nominations.createdAt),
  });

  return (
    <div className="space-y-6">
      <h2 className="text-4xl">Performance nominations</h2>

      <ul className="ml-6 list-disc space-y-2">
        {allNominations.map((nomination) => {
          return (
            <li key={nomination.id}>
              <div>{nomination.message}</div>
              <div className="text-sm text-muted">
                {nomination.createdAt.toLocaleString()} - submitted by{" "}
                {nomination.userId ?? "an anonymouse user"}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
