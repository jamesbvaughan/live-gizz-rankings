import { desc } from "drizzle-orm";
import { Metadata } from "next";
import Link from "next/link";

import { PageContent, PageTitle } from "@/components/ui";
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
    <>
      <PageTitle>Performance nominations</PageTitle>

      <PageContent>
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
                    <span>{nomination.message}</span>
                  )}
                </div>

                <div className="text-sm text-muted">
                  {nomination.createdAt.toLocaleString()} - submitted by{" "}
                  {nomination.userId ?? "an anonymouse visitor"}
                </div>
              </li>
            );
          })}
        </ul>
      </PageContent>
    </>
  );
}
