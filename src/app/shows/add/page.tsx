import { redirect } from "next/navigation";

import { addShow } from "@/actions/addShow";
import { isAdmin } from "@/auth/utils";
import ShowForm from "@/components/ShowForm";
import { PageContent, PageTitle } from "@/components/ui";

export default async function AddShowPage() {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    redirect("/");
  }

  return (
    <>
      <PageTitle>Add New Show</PageTitle>

      <PageContent>
        <ShowForm action={addShow} submitLabel="Add Show" />
      </PageContent>
    </>
  );
}
