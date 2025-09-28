import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import { editShow } from "@/actions/editShow";
import { ensureAdmin } from "@/auth/utils";
import ShowForm from "@/components/ShowForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { shows } from "@/drizzle/schema";
import { getShowTitle } from "@/utils";

interface EditShowPageProps {
  params: Promise<{ showSlug: string }>;
}

export default async function EditShowPage({ params }: EditShowPageProps) {
  await ensureAdmin();

  const { showSlug } = await params;
  const show = await db.query.shows.findFirst({
    where: eq(shows.slug, showSlug),
  });

  if (!show) {
    notFound();
  }

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
