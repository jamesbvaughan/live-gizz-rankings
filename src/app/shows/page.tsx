import { allShows } from "@/drizzle/seeds";
import { getShowPath, getShowTitle } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shows",
};

export default async function ShowsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl">All Shows</h2>

      <div className="grid grid-cols-2 gap-4">
        {allShows.map((show) => {
          const showPath = getShowPath(show);
          const showTitle = getShowTitle(show);

          return (
            <Link key={show.id} href={showPath} className="no-underline">
              <div className="aspect-square bg-muted-3">
                {show.imageUrl ? (
                  <Image
                    src={show.imageUrl}
                    alt={showTitle}
                    className="aspect-square w-full"
                    width={500}
                    height={500}
                  />
                ) : null}
              </div>

              <div className="text-lg">{showTitle}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
