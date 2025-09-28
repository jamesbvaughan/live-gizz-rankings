import { eq } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";

import { editAlbum } from "@/actions/editAlbum";
import { isAdmin } from "@/auth/utils";
import AlbumForm from "@/components/AlbumForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { albums } from "@/drizzle/schema";

interface EditAlbumPageProps {
  params: Promise<{ albumSlug: string }>;
}

export default async function EditAlbumPage({ params }: EditAlbumPageProps) {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    redirect("/");
  }

  const { albumSlug } = await params;
  const album = await db.query.albums.findFirst({
    where: eq(albums.slug, albumSlug),
  });

  if (!album) {
    notFound();
  }

  return (
    <>
      <PageTitle>Edit Album: {album.title}</PageTitle>

      <PageContent>
        <AlbumForm
          action={editAlbum}
          album={album}
          submitLabel="Update Album"
        />
      </PageContent>
    </>
  );
}
