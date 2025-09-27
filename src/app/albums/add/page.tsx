import { redirect } from "next/navigation";

import { isAdmin } from "@/auth/utils";

import AddAlbumForm from "./AddAlbumForm";
import { PageContent, PageTitle } from "@/components/ui";

export default async function AddAlbumPage() {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    redirect("/");
  }

  return (
    <>
      <PageTitle>Add New Album</PageTitle>

      <PageContent>
        <AddAlbumForm />
      </PageContent>
    </>
  );
}
