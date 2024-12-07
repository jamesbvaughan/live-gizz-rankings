import { desc } from "drizzle-orm";
import { Metadata } from "next";
import Link from "next/link";

import { db } from "@/drizzle/db";
import { nominations } from "@/drizzle/schema";
import { getPerformancePath } from "@/utils";

export const metadata: Metadata = {
  title: "Nominations",
};

export default async function NominationsPage() {
  const allNominations = await db.query.nominations.findMany({
    orderBy: desc(nominations.createdAt),
  });

  return (
    <div className="space-y-6">
      <h2 className="text-4xl">Performance nominations</h2>

      <p>
        These are user-submitted nominations for performances to add to the
        database.
      </p>

      <ul className="ml-6 list-disc space-y-2">
        {allNominations.map((nomination) => {
          return (
            <li key={nomination.id}>
              <div>
                {nomination.performanceId ? (
                  <span>
                    <del>{nomination.message}</del> -{" "}
                    <Link href={getPerformancePath(nomination.performanceId)}>
                      Added!
                    </Link>
                  </span>
                ) : (
                  <span>Added!</span>
                )}
              </div>

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
