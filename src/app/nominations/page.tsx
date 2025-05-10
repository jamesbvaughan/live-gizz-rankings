import { currentUser } from "@clerk/nextjs/server";
import { desc } from "drizzle-orm";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { Nomination, nominations } from "@/drizzle/schema";
import { getPerformancePath } from "@/utils";

export const metadata: Metadata = {
  title: "Nominations",
};

function NominationList({ nominations }: { nominations: Nomination[] }) {
  return (
    <ul className="ml-6 list-disc space-y-2">
      {nominations.map((nomination) => {
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

            <div className="text-muted text-sm">
              {nomination.createdAt.toLocaleString()} - submitted by{" "}
              {nomination.userId ?? "an anonymous visitor"}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

async function RefreshButton() {
  const user = await currentUser();
  const isAdmin = !!user?.publicMetadata.isAdmin;
  if (!isAdmin) {
    return null;
  }

  return (
    <button
      className="border-foreground hover:bg-foreground hover:text-background border-2 p-2"
      onClick={async () => {
        "use server";
        revalidatePath("/nominations");
      }}
    >
      Refresh
    </button>
  );
}

export default async function NominationsPage() {
  const allNominations = await db.query.nominations.findMany({
    orderBy: desc(nominations.createdAt),
  });

  const nominationsThatWillNotBeAdded = allNominations.filter(
    (nomination) => nomination.willNotAdd,
  );
  const addedNominations = allNominations.filter(
    (nomination) => nomination.performanceId != null,
  );
  const nominationsToBeAdded = allNominations.filter(
    (nomination) => !nomination.willNotAdd && nomination.performanceId == null,
  );

  return (
    <>
      <PageTitle>Performance nominations</PageTitle>

      <PageContent className="space-y-6">
        <p>
          These are user-submitted nominations for performances to add to the
          database.
        </p>

        <Suspense>
          <RefreshButton />
        </Suspense>

        <div className="space-y-4">
          <h2 className="text-2xl">
            Nominated performances to be added ({nominationsToBeAdded.length})
          </h2>
          <NominationList nominations={nominationsToBeAdded} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl">
            Nominated performances that have been added (
            {addedNominations.length})
          </h2>
          <NominationList nominations={addedNominations} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl">
            Nominated performances will not be added (
            {nominationsToBeAdded.length})
          </h2>
          <p>
            These nominations are either ambiguous or invalid. If one of these
            is your nomination, please re-submit it with more context.
          </p>
          <NominationList nominations={nominationsThatWillNotBeAdded} />
        </div>
      </PageContent>
    </>
  );
}
