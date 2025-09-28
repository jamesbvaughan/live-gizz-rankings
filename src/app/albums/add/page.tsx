import type { Metadata } from "next";

import { addAlbum } from "@/actions/addAlbum";
import { ensureAdmin } from "@/auth/utils";
import AlbumForm from "@/components/AlbumForm";
import { PageContent, PageTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Add Album",
  description:
    "Add a new King Gizzard & The Lizard Wizard album to Live Gizz Rankings.",
};

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
