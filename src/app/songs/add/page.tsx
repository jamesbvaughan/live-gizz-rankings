import type { Metadata } from "next";

import { addSong } from "@/actions/addSong";
import { ensureAdmin } from "@/auth/utils";
import SongForm from "@/components/SongForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";

export const metadata: Metadata = {
  title: "Add Song",
  description:
    "Add a new King Gizzard & The Lizard Wizard song to Live Gizz Rankings.",
};

interface AddSongPageProps {
  searchParams: Promise<{ album?: string }>;
}

export default async function AddSongPage({ searchParams }: AddSongPageProps) {
  await ensureAdmin();

  const { album: albumId } = await searchParams;
  const albums = await db.query.albums.findMany();

  return (
    <>
      <PageTitle>Add New Song</PageTitle>

      <PageContent>
        <SongForm
          action={addSong}
          albums={albums}
          submitLabel="Add Song"
          defaultAlbumId={albumId}
        />
      </PageContent>
    </>
  );
}
