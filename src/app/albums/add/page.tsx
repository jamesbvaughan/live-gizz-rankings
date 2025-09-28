import { redirect } from "next/navigation";

import { addAlbum } from "@/actions/addAlbum";
import { isAdmin } from "@/auth/utils";
import AlbumForm from "@/components/AlbumForm";
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
        <AlbumForm action={addAlbum} submitLabel="Add Album" />
      </PageContent>
    </>
  );
}
