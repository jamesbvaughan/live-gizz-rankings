import { db } from "@/drizzle/db";
import Image from "next/image";
import Link from "next/link";

export default async function Albums() {
  const albums = await db.query.albums.findMany();

  return (
    <div className="grid grid-cols-2 gap-4">
      {albums.map((album) => (
        <Link key={album.id} href={`/albums/${album.id}`}>
          <Image
            src={album.imageUrl ?? "TODO"}
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
