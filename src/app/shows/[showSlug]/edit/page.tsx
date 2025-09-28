import type { Metadata } from "next";

import { editShow } from "@/actions/editShow";
import { ensureAdmin } from "@/auth/utils";
import ShowForm from "@/components/ShowForm";
import { PageContent, PageTitle } from "@/components/ui";
import { getShowTitle } from "@/utils";
import { getShowBySlug } from "@/dbUtils";

interface EditShowPageProps {
  params: Promise<{ showSlug: string }>;
}

export async function generateMetadata({
  params,
}: EditShowPageProps): Promise<Metadata> {
  const { showSlug } = await params;
  const show = await getShowBySlug(showSlug);

  const showTitle = getShowTitle(show);

  return {
    title: `Edit Show: ${showTitle}`,
    description: `Edit details for the King Gizzard & The Lizard Wizard show "${showTitle}" on Live Gizz Rankings.`,
  };
}

export default async function EditShowPage({ params }: EditShowPageProps) {
  await ensureAdmin();

  const { showSlug } = await params;
  const show = await getShowBySlug(showSlug);

  const showTitle = getShowTitle(show);

  return (
    <>
      <PageTitle>Edit Show: {showTitle}</PageTitle>

      <PageContent>
        <ShowForm action={editShow} show={show} submitLabel="Update Show" />
      </PageContent>
    </>
  );
}
