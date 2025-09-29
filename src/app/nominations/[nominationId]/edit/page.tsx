import type { Metadata } from "next";
import { desc } from "drizzle-orm";
import { formatDistanceToNow } from "date-fns";

import { editNomination } from "@/actions/editNomination";
import { ensureAdmin } from "@/auth/utils";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { performances } from "@/drizzle/schema";
import NominationForm from "@/components/NominationEditForm";
import { getNominationById } from "@/dbUtils";

interface EditNominationPageProps {
  params: Promise<{ nominationId: string }>;
}

export function generateMetadata(): Metadata {
  return {
    title: "Edit Nomination",
    description:
      "Link a nomination to a performance or mark it as will not add.",
  };
}

export default async function EditNominationPage({
  params,
}: EditNominationPageProps) {
  await ensureAdmin();

  const { nominationId } = await params;
  const [nomination, recentPerformances] = await Promise.all([
    getNominationById(nominationId),
    db.query.performances.findMany({
      limit: 50,
      orderBy: desc(performances.createdAt),
      with: {
        song: {
          with: {
            album: true,
          },
        },
        show: true,
      },
    }),
  ]);

  return (
    <>
      <PageTitle>Edit Nomination</PageTitle>

      <PageContent>
        <div className="mb-6 border border-muted-2 p-4">
          <p>
            <span className="font-medium">Nomination:</span>{" "}
            <span className="">{nomination.message}</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            Submitted{" "}
            {formatDistanceToNow(nomination.createdAt, { addSuffix: true })} by{" "}
            {nomination.userId ?? "an anonymous visitor"}
          </p>
        </div>

        <NominationForm
          action={editNomination}
          nomination={nomination}
          performances={recentPerformances}
          submitLabel="Update Nomination"
        />
      </PageContent>
    </>
  );
}
