import { asc, eq } from "drizzle-orm";
import DOMPurify from "isomorphic-dompurify";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { isAdmin, isSignedIn } from "@/auth/utils";
import { BoxedButtonLink } from "@/components/BoxedButtonLink";
import { EloScore } from "@/components/EloScore";
import { YouTubePlayer } from "@/components/MediaPlayers";
import {
  PageContent,
  PageSubtitle,
  PageTitle,
  PageType,
} from "@/components/ui";
import { getShowBySlug } from "@/dbUtils";
import { db } from "@/drizzle/db";
import type { Show } from "@/drizzle/schema";
import { performances, showVideos } from "@/drizzle/schema";
import { getPerformancePathBySongAndShow, getShowTitle } from "@/utils";

interface Params {
  showSlug: string;
}
interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { showSlug } = await params;
  const show = await getShowBySlug(showSlug);

  const showTitle = getShowTitle(show);

  return {
    title: showTitle,
    description: `Find the top-ranked song performances from King Gizzard & The Lizard Wizard's ${showTitle} show on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.`,
  };
}

async function GizzTapesNote({ show }: { show: Show }) {
  const gizzTapesShowId = show.date;

  let note;
  try {
    const response = await fetch(
      `https://tapes.kglw.net/api/v1/shows/${gizzTapesShowId}.json`,
    );
    if (response.status === 404) {
      return <div>No Gizz Tapes notes for this show.</div>;
    }
    const data = (await response.json()) as { notes: string };
    note = data.notes;
  } catch (error) {
    const showTitle = getShowTitle(show);
    console.error(`Unable to fetch Gizz Tapes notes for ${showTitle}:`, error);
    return <div>Error fetching Gizz Tapes notes for this show.</div>;
  }

  const htmlWithLineBreaks = note.replaceAll("\\n", "<br>");

  // Sanitize the modified HTML string
  const sanitizedHtml = DOMPurify.sanitize(htmlWithLineBreaks);

  return (
    <div className="space-y-2">
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

      <Link
        href={`https://tapes.kglw.net/${gizzTapesShowId}/`}
        className="text-muted inline-block"
        target="_blank"
        rel="noopener"
      >
        Read more on Gizz Tapes
      </Link>
    </div>
  );
}

async function PerformanceElo({ performanceId }: { performanceId: string }) {
  const performance = await db.query.performances.findFirst({
    where: eq(performances.id, performanceId),
  });
  if (performance == null) {
    return "No score yet";
  }

  return <EloScore score={performance.eloRating} />;
}

export default async function ShowPage({ params }: Props) {
  const { showSlug } = await params;
  const [show, adminStatus, signedIn] = await Promise.all([
    getShowBySlug(showSlug),
    isAdmin(),
    isSignedIn(),
  ]);
  const [showPerformances, videos] = await Promise.all([
    db.query.performances.findMany({
      where: eq(performances.showId, show.id),
      orderBy: asc(performances.showPosition),
      with: {
        song: {
          with: {
            album: true,
          },
        },
      },
    }),
    db.query.showVideos.findMany({
      where: eq(showVideos.showId, show.id),
    }),
  ]);

  const showTitle = getShowTitle(show);

  const formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(show.date));

  return (
    <>
      <PageType>Show</PageType>

      <div className="flex items-center justify-between">
        <PageTitle>{showTitle}</PageTitle>
        <div className="flex gap-2">
          {signedIn && (
            <BoxedButtonLink href={`/performances/add?show=${show.id}`}>
              Add Performance
            </BoxedButtonLink>
          )}
          {adminStatus && (
            <BoxedButtonLink href={`/shows/${show.slug}/edit`}>
              Edit Show
            </BoxedButtonLink>
          )}
        </div>
      </div>

      <PageSubtitle>{formattedDate}</PageSubtitle>

      <PageContent className="space-y-8">
        {show.imageUrl ? (
          <Image
            src={show.imageUrl}
            alt={`Album cover for ${showTitle}`}
            className="aspect-square w-full"
            width={500}
            height={500}
          />
        ) : null}

        <div className="space-y-4">
          <h3 className="text-3xl">
            Performances from this show with rankings
          </h3>

          {showPerformances.length > 0 ? (
            <ol className="space-y-4">
              {showPerformances.map((performance) => {
                const { song } = performance;
                const { album } = song;
                const performancePath = getPerformancePathBySongAndShow(
                  song,
                  show,
                );

                return (
                  <li
                    key={performance.id}
                    className="flex items-center space-x-2"
                  >
                    <Image
                      src={album.imageUrl}
                      alt={album.title}
                      width={48}
                      height={48}
                    />

                    <div>
                      <Link
                        href={performancePath}
                        className="text-2xl no-underline"
                      >
                        {song.title}
                      </Link>

                      <div className="text-muted">
                        <Suspense fallback="Loading Elo score...">
                          <PerformanceElo performanceId={performance.id} />
                        </Suspense>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          ) : (
            <p>No performances from this show have been submitted yet.</p>
          )}
        </div>

        {videos.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-3xl">Watch this show</h3>

            {videos.map((video) => (
              <div key={video.id} className="space-y-2">
                <h4 className="text-xl">{video.title}</h4>
                <YouTubePlayer
                  videoId={video.youtubeVideoId}
                  startTime={null}
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="space-y-4">
          <h3 className="text-3xl">Listen to this show</h3>

          <div>
            <Link href={`https://tapes.kglw.net/${show.date}/`}>
              Listen to this show on Gizz Tapes
            </Link>

            {show.bandcampAlbumId && (
              <>
                {" "}
                or on Bandcamp:
                {/* eslint-disable-next-line iframe-missing-sandbox */}
                <iframe
                  title={`Bandcamp player for ${showTitle}`}
                  style={{
                    border: 0,
                    marginTop: 8,
                    width: "100%",
                    height: 472,
                  }}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${show.bandcampAlbumId}/size=large/bgcol=333333/linkcol=e32c14/artwork=none/transparent=true/`}
                />
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl">Gizz Tapes show notes</h3>

          <Suspense fallback="Loading note from Gizz Tapes...">
            <GizzTapesNote show={show} />
          </Suspense>
        </div>

        <div>
          <Link href="/shows" className="no-underline">
            Back to all shows
          </Link>
        </div>
      </PageContent>
    </>
  );
}
