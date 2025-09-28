import { redirect } from "next/navigation";

import { addSong } from "@/actions/addSong";
import { isAdmin } from "@/auth/utils";
import SongForm from "@/components/SongForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";

export default async function AddSongPage() {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    redirect("/");
  }

  const albums = await db.query.albums.findMany();

  return (
    <>
      <PageTitle>Add New Song</PageTitle>

      <PageContent>
        <SongForm action={addSong} albums={albums} submitLabel="Add Song" />
      </PageContent>
    </>
  );
}
