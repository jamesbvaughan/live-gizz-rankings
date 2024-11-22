import { db } from "@/drizzle/db";
import Image from "next/image";
import { performances, songs } from "@/drizzle/schema";
import { getShowTitle } from "@/utils";
import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = { params: Promise<{ songId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { songId } = await params;
  const song = await db.query.songs.findFirst({
    where: eq(songs.id, songId),
  });
  if (!song) {
    notFound();
  }

  return {
    title: song.title,
  };
}

export default async function Song({ params }: Props) {
  const { songId } = await params;
  const song = await db.query.songs.findFirst({
    where: eq(songs.id, songId),
    with: {
      performances: {
        with: { show: true },
        orderBy: desc(performances.eloRating),
      },
    },
  });
  if (!song) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <h2 className="text-4xl sm:text-6xl">{song.title}</h2>

      <ol className="space-y-4">
        {song.performances.map((performance, index) => {
          const showTitle = getShowTitle(performance.show);

          return (
            <li key={performance.id} className="flex">
              <div className="w-10 shrink-0 text-4xl">{index + 1}.</div>

              <div className="flex shrink-0 space-x-4">
                <div className="aspect-square w-24 bg-gray-900">
                  {performance.show.imageUrl ? (
                    <Image
                      src={performance.show.imageUrl}
                      alt={showTitle}
                      width={500}
                      height={500}
                    />
                  ) : null}
                </div>

                <div>
                  <div className="text-2xl sm:text-4xl">{showTitle}</div>

                  <div className="text-gray-500">
                    ({Math.round(performance.eloRating)})
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div>
        <Link href={`/albums/${song.albumId}`}>Back to album</Link>
      </div>
    </div>
  );
}
