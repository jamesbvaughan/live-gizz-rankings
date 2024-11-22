import { db } from "@/drizzle/db";
import Image from "next/image";
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
      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl">{album.title}</h2>

          <div>
            {album.songs.map((song) => (
              <Link
                key={song.id}
                href={`/albums/${albumId}/song/${song.id}`}
                className="hover:text-[#ff0000]"
              >
                {song.title}
              </Link>
            ))}
          </div>
        </div>

        <Image
          src={album.imageUrl}
          alt={album.title}
          className="aspect-square w-full"
          width={500}
          height={500}
        />
      </div>

      <Link href="/albums">Back to albums</Link>
    </div>
  );
}
