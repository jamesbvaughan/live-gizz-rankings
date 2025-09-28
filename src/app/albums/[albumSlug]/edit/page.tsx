import type { Metadata } from "next";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import { editAlbum } from "@/actions/editAlbum";
import { ensureAdmin } from "@/auth/utils";
import AlbumForm from "@/components/AlbumForm";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { albums } from "@/drizzle/schema";

interface EditAlbumPageProps {
  params: Promise<{ albumSlug: string }>;
}

export async function generateMetadata({
  params,
}: EditAlbumPageProps): Promise<Metadata> {
  const { albumSlug } = await params;
  const album = await db.query.albums.findFirst({
    where: eq(albums.slug, albumSlug),
  });

  if (!album) {
    return {
      title: "Album Not Found",
    };
  }

  return {
    title: `Edit Album: ${album.title}`,
    description: `Edit details for the King Gizzard & The Lizard Wizard album "${album.title}" on Live Gizz Rankings.`,
  };
}

export default async function EditAlbumPage({ params }: EditAlbumPageProps) {
  await ensureAdmin();

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
