import { addAlbum } from "@/actions/addAlbum";
import { ensureAdmin } from "@/auth/utils";
import AlbumForm from "@/components/AlbumForm";
import { PageContent, PageTitle } from "@/components/ui";

export default async function AddAlbumPage() {
  await ensureAdmin();

  return (
    <>
      <PageTitle>Add New Album</PageTitle>

      <PageContent>
        <AlbumForm action={addAlbum} submitLabel="Add Album" />
      </PageContent>
    </>
  );
}
