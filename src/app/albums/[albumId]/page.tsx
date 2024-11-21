import { db } from "@/drizzle/db";
import { albums } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ albumId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { albumId } = await params;
  const album = await db.query.albums.findFirst({
    where: eq(albums.id, albumId),
  });
  if (!album) {
    notFound();
  }

  return {
    title: album.title,
  };
}

export default async function Album({ params }: Props) {
  const { albumId } = await params;
  const album = await db.query.albums.findFirst({
    where: eq(albums.id, albumId),
    with: { songs: true },
  });
  if (!album) {
    notFound();
  }

  return (
    <div>
      <h2>{album.title}</h2>

      {album.songs.map((song) => (
        <Link key={song.id} href={`/albums/${albumId}/song/${song.id}`}>
          {song.title}
        </Link>
      ))}
    </div>
  );
}
