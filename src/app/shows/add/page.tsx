import type { Metadata } from "next";

import { addShow } from "@/actions/addShow";
import { ensureAdmin } from "@/auth/utils";
import ShowForm from "@/components/ShowForm";
import { PageContent, PageTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Add Show",
  description:
    "Add a new King Gizzard & The Lizard Wizard live show to Live Gizz Rankings.",
};

export default async function AddShowPage() {
  await ensureAdmin();

  return (
    <>
      <PageTitle>Add New Show</PageTitle>

      <PageContent>
        <ShowForm action={addShow} submitLabel="Add Show" />
      </PageContent>
    </>
  );
}
