import { db } from "@/drizzle/db";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Albums",
};

export default async function Albums() {
  const albums = await db.query.albums.findMany();

  return (
    <div className="grid grid-cols-2 gap-4">
      {albums.map((album) => (
        <Link
          key={album.id}
          href={`/albums/${album.id}`}
          className="no-underline"
        >
          <Image
            src={album.imageUrl}
            alt={album.title}
            className="aspect-square w-full"
            width={500}
            height={500}
          />
          <div className="text-lg">{album.title}</div>
        </Link>
      ))}
    </div>
  );
}
