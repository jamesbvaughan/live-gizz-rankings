import { db } from "@/drizzle/db";
import Image from "next/image";
import { performances, songs } from "@/drizzle/schema";
import { getShowTitle } from "@/utils";
import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
      <h2 className="text-6xl">{song.title}</h2>

      <ol className="space-y-4">
        {song.performances.map((performance, index) => {
          const showTitle = getShowTitle(performance.show);

          return (
            <li key={performance.id} className="flex">
              <div className="w-12 text-4xl">{index + 1}.</div>

              <div className="flex space-x-4">
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

                <div className="text-4xl">
                  {showTitle} ({Math.round(performance.eloRating)})
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
