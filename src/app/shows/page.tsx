import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageContent, PageTitle } from "@/components/ui";
import { allShows } from "@/drizzle/data/shows";
import { Show } from "@/drizzle/schema";
import { getShowPath, getShowTitle } from "@/utils";

export const metadata: Metadata = {
  title: "Shows",
  description: `Browse all of King Gizzard & The Lizard Wizard's live shows on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
};

const showsByYear: Record<string, Show[]> = {};

for (const show of allShows) {
  const year = new Date(show.date).getFullYear().toString();
  showsByYear[year] ??= [];
  showsByYear[year].push(show);
}

const sortedShowsByYear = Object.entries(showsByYear).sort(
  ([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA),
);

for (const [_year, shows] of sortedShowsByYear) {
  shows.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function ShowsPage() {
  return (
    <>
      <PageTitle>Shows with ranked performances</PageTitle>

      <PageContent className="space-y-8">
        {sortedShowsByYear.map(([year, shows]) => {
          return (
            <div key={year} className="space-y-4">
              <h3 className="text-2xl">{year}</h3>

              <div className="grid grid-cols-2 gap-4">
                {shows!.map((show, index) => {
                  const showPath = getShowPath(show);
                  const showTitle = getShowTitle(show);

                  return (
                    <Link
                      key={show.id}
                      href={showPath}
                      className="no-underline"
                    >
                      <div className="bg-muted-3 aspect-square">
                        {show.imageUrl ? (
                          <Image
                            priority={index < 4}
                            src={show.imageUrl}
                            alt={`Album cover for ${showTitle}`}
                            className="aspect-square w-full"
                            width={500}
                            height={500}
                          />
                        ) : null}
                      </div>

                      <div className="text-lg font-semibold">{showTitle}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </PageContent>
    </>
  );
}
