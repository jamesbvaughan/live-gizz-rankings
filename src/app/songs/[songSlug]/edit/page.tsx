import { eq } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";

import { editSong } from "@/actions/editSong";
import { isAdmin } from "@/auth/utils";
import SongForm from "@/components/SongForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { songs } from "@/drizzle/schema";

interface EditSongPageProps {
  params: Promise<{ songSlug: string }>;
}

export default async function EditSongPage({ params }: EditSongPageProps) {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    redirect("/");
  }

  const { songSlug } = await params;
  const [song, albums] = await Promise.all([
    db.query.songs.findFirst({
      where: eq(songs.slug, songSlug),
    }),
    db.query.albums.findMany(),
  ]);

  if (!song) {
    notFound();
  }

  return (
    <>
      <PageTitle>Edit Song: {song.title}</PageTitle>

      <PageContent>
        <SongForm
          action={editSong}
          albums={albums}
          song={song}
          submitLabel="Update Song"
        />
      </PageContent>
    </>
  );
}
