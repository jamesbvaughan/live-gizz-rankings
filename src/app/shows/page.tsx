import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Show } from "@/drizzle/schema";
import { allShows } from "@/drizzle/seeds";
import { getShowPath, getShowTitle } from "@/utils";

export const metadata: Metadata = {
  title: "Shows",
};

const showsByYear: Record<string, Show[]> = {};

for (const show of allShows) {
  const year = new Date(show.date).getFullYear().toString();
  showsByYear[year] ??= [];
  showsByYear[year].push(show);
}

const sortedShowsByYear = Object.entries(showsByYear).sort(
  ([yearA], [yearB]) => parseInt(yearA) - parseInt(yearB),
);

for (const [_year, shows] of sortedShowsByYear) {
  shows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export default async function ShowsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl">Shows with ranked performances</h2>

      {sortedShowsByYear.map(([year, shows]) => {
        return (
          <div key={year} className="space-y-4">
            <h3 className="text-2xl">{year}</h3>

            <div className="grid grid-cols-2 gap-4">
              {shows!.map((show) => {
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
      })}
    </div>
  );
}
