import { Metadata } from "next";
import Link from "next/link";

import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { Vote } from "@/drizzle/schema";
import {
  getPerformanceById,
  getPerformancePath,
  getShowById,
  getShowTitle,
  getSongById,
} from "@/utils";

import { Converge } from "./Converge";
import { LeftRightChart } from "./LeftRightChart";

export const metadata: Metadata = {
  title: "Votes",
  description:
    "Browse all of the votes on Live Gizz Rankings, a site for browsing and voting on the band's best live performances.",
};

function PerformanceLink({ performanceId }: { performanceId: string }) {
  const performance = getPerformanceById(performanceId)!;
  const performancePath = getPerformancePath(performance);
  const show = getShowById(performance.showId)!;
  const showTitle = getShowTitle(show);

  return (
    <Link href={performancePath} className="font-bold">
      {showTitle}
    </Link>
  );
}

function VoteListItem({ vote }: { vote: Vote }) {
  const performance = getPerformanceById(vote.winnerId);
  if (!performance) {
    throw new Error(`Unable to find performance with ID ${vote.winnerId}`);
  }

  const song = getSongById(performance.songId)!;
  const losingPerformanceId =
    vote.winnerId === vote.performance1Id
      ? vote.performance2Id
      : vote.performance1Id;

  return (
    <li>
      <div>
        {song.title}: <PerformanceLink performanceId={vote.winnerId} /> beat{" "}
        <PerformanceLink performanceId={losingPerformanceId} />
      </div>

      <div className="text-muted text-sm">
        <time>{new Date(vote.createdAt).toLocaleString()}</time> -{" "}
        {vote.voterId}
      </div>
    </li>
  );
}

function LeftRightStats({ votes }: { votes: Vote[] }) {
  const leftVotes = votes.filter(
    (vote) => vote.winnerId === vote.performance1Id,
  );
  const rightVotes = votes.filter(
    (vote) => vote.winnerId === vote.performance2Id,
  );
  const ratio = leftVotes.length / rightVotes.length;

  return (
    <div className="space-y-4">
      <h2 className="text-4xl">Left/right ratio: {ratio.toFixed(2)}:1</h2>

      <p>
        This ratio indicates how often voters choose the left vs the right
        performance from the voting page. This <i>should</i> <Converge /> on
        1.00.
      </p>

      <LeftRightChart votes={votes} />

      <p>
        If this ratio is far from 1:1, then that indicates a bias toward one
        side or the other.
      </p>

      <hr className="border-muted-2" />

      <div className="space-y-2">
        <p>
          <b>2024-12-07 update</b>: As of now, there are 583 votes and the ratio
          is 1.27:1, which seems to indicate a clear bias being introduced by
          something.
        </p>

        <p>These are my current theories:</p>

        <ul className="ml-6 list-disc">
          <li>
            <b>Primacy bias</b>: If a voter listens to both performances,
            they&apos;ll probably start with the one on the left, then the one
            on the right, and then the primacy bias will make them favor the
            first one they listened to. I do not have a theory for why primacy
            bias would be stronger than recency bias here though.
          </li>
          <li>
            <p>
              <b>Non-random performance ordering</b>: I found a flaw in my
              performance selection logic: I was choosing pairs randomly
              randomly, but for any <i>specific</i> pair of performances, their
              order relative to each other would always be the same.
              Specifically, they&apos;d be in the order that they were added to
              the database, and I initially seeded the database with what I
              believed to be the best performances. I&apos;ve now corrected this
              (the vertical line on the chart indicates when I deployed the
              fix), and the performance order on the vote page is randomized.
            </p>
          </li>
        </ul>

        <p>
          Either or both of these could be contributors to the unexpected ratio
          here.
        </p>
      </div>

      <hr className="border-muted-2" />

      <div className="space-y-2">
        <p>
          <b>2025-01-05 update</b>: The fix I mentioned in that last update
          seems to have helped. Counting just the votes since then, the ratio is
          1.037:1, which is <i>probably</i> within a reasonanble margin of
          error.
        </p>
      </div>
    </div>
  );
}

function VotesList({ votes }: { votes: Vote[] }) {
  const sortedVotes = [...votes].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );

  return (
    <details>
      <summary className="select-none">
        {votes.length} total (click to view)
      </summary>

      <ol className="mt-4 list-disc space-y-2 pl-4">
        {sortedVotes.map((vote) => (
          <VoteListItem key={vote.id} vote={vote} />
        ))}
      </ol>
    </details>
  );
}

export default async function Votes() {
  const votes = await db.query.votes.findMany();

  return (
    <>
      <PageTitle>All votes</PageTitle>

      <PageContent className="space-y-6">
        <VotesList votes={votes} />
        <LeftRightStats votes={votes} />
      </PageContent>
    </>
  );
}
