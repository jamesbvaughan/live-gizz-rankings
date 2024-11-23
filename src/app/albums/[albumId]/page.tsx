import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seedAlbums, seedSongs } from "@/drizzle/seeds";

type Props = { params: Promise<{ albumId: string }> };

function getAlbumById(albumId: string) {
  const album = Object.values(seedAlbums).find((album) => album.id === albumId);
  if (!album) {
    notFound();
  }
  return album;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { albumId } = await params;
  const album = getAlbumById(albumId);

  return {
    title: album.title,
  };
}

export function generateStaticParams() {
  const albums = Object.values(seedAlbums);

  return albums.map((album) => ({
    // TODO: maybe use a human-readable slug?
    albumId: album.id,
  }));
}

export const dynamicParams = false;

export default async function Album({ params }: Props) {
  const { albumId } = await params;
  const album = getAlbumById(albumId);

  const songs = Object.values(seedSongs).filter(
    (song) => song.albumId === albumId,
  );

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl">{album.title}</h2>

          <ul>
            {songs.map((song) => (
              <li key={song.id}>
                <Link
                  href={`/albums/${albumId}/song/${song.id}`}
                  className="hover:text-[#ff0000]"
                >
                  {song.title}
                </Link>
              </li>
            ))}
          </ul>
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
