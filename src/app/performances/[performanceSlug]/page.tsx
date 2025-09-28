import { Metadata } from "next";
import Link from "next/link";

import { isAdmin } from "@/auth/utils";
import { BoxedButtonLink } from "@/components/BoxedButtonLink";
import { MediaPlayers } from "@/components/MediaPlayers";
import {
  PageContent,
  PageSubtitle,
  PageTitle,
  PageType,
} from "@/components/ui";
import { getPerformanceBySlug, getShowById, getSongById } from "@/dbUtils";
import { getShowPath, getShowTitle, getSongPath } from "@/utils";

type Params = { performanceSlug: string };
type Props = { params: Promise<Params> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { performanceSlug } = await params;
  const performance = await getPerformanceBySlug(performanceSlug);
  const show = await getShowById(performance.showId);
  const song = await getSongById(performance.songId);

  const showTitle = getShowTitle(show);
  const title = `${song.title} - ${getShowTitle(show)}`;

  return {
    title,
    description: `Listen to King Gizzard & The Lizard Wizard's performance of ${song.title} from ${showTitle} on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
  };
}

export default async function PerformancePage({ params }: Props) {
  const { performanceSlug } = await params;
  const [performance, adminStatus] = await Promise.all([
    getPerformanceBySlug(performanceSlug),
    isAdmin(),
  ]);
  const show = await getShowById(performance.showId);
  const showPath = getShowPath(show);
  const showTitle = getShowTitle(show);

  const song = await getSongById(performance.songId);
  const songPath = getSongPath(song);

  const formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(show.date));

  return (
    <>
      <PageType>Performance</PageType>

      <div className="flex items-center justify-between">
        <PageTitle>
          <Link href={songPath} className="no-underline">
            {song.title}
          </Link>{" "}
          -{" "}
          <Link href={showPath} className="no-underline">
            {showTitle}
          </Link>
        </PageTitle>
        {adminStatus && (
          <BoxedButtonLink href={`/performances/${performanceSlug}/edit`}>
            Edit Performance
          </BoxedButtonLink>
        )}
      </div>

      <PageSubtitle>{formattedDate}</PageSubtitle>

      <PageContent className="space-y-8">
        <MediaPlayers performance={performance} />

        <div className="flex flex-col space-y-2">
          <Link href={songPath} className="inline-block no-underline">
            See all performances of {song.title}
          </Link>

          <Link href={showPath} className="inline-block no-underline">
            See all performances at {showTitle}
          </Link>
        </div>
      </PageContent>
    </>
  );
}
