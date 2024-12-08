import { Metadata } from "next";
import Link from "next/link";

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
  const performance = getPerformanceById(vote.winnerId)!;
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

      <div className="text-sm text-muted">
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
      <h2 className="text-4xl">Left/right ratio: {ratio.toFixed(2)}</h2>

      <p>
        This ratio indicates how often voters choose the left vs the right
        performance from the voting page. That order is generated randomly on
        each page load, so this <i>should</i> <Converge /> on 1.00.
      </p>

      <LeftRightChart votes={votes} />

      <p>
        If this number is far from 1.00, then that indicates a bias toward one
        side or the other and that we should change the design of that page.
      </p>

      <hr className="border-muted-2" />

      <div className="space-y-2">
        <p>
          <b>2024-12-07 update</b>: As of now, there are 583 votes and the ratio
          is 1:1.27, which seems to indicate a clear bias being introduced by
          the candidate ordering.
        </p>
        <p>
          My intial theory was that recency bias is at play here: if a voter
          listens to both performances, they&apos;ll probably start with the one
          on the left, then the one on the right, and then they&apos;ll prefer
          the more recent one.
        </p>
        <p>
          But after digging deeper, I found an issue with my
          performance-pair-generation logic: I was choosing performances
          randomly, but for any <i>specific</i> pair of songs, thier order
          relative to each other would always be the same. Not good! I&apos;ve
          now corrected this.
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
    <div className="space-y-4">
      <h2 className="text-4xl">All votes</h2>

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
    </div>
  );
}

export default async function Votes() {
  const votes = await db.query.votes.findMany();

  return (
    <div className="space-y-6">
      <VotesList votes={votes} />
      <LeftRightStats votes={votes} />
    </div>
  );
}
