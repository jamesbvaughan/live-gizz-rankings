import { db } from "@/drizzle/db";
import { Vote } from "@/drizzle/schema";
import {
  getPerformanceById,
  getPerformancePath,
  getShowById,
  getShowTitle,
  getSongById,
} from "@/utils";
import Link from "next/link";

function PerformanceLink({ performanceId }: { performanceId: string }) {
  const performance = getPerformanceById(performanceId)!;
  const performancePath = getPerformancePath(performance);
  const show = getShowById(performance.showId)!;
  const showTitle = getShowTitle(show);

  return (
    <Link href={performancePath} className="font-bold hover:text-red">
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
      <h2 className="text-4xl">Left/Right ratio: {ratio.toFixed(2)}</h2>

      <p>
        This ratio indicates how often voters choose the left vs the right
        performance from the voting page. That order is generated randomly on
        each page load.
      </p>
      <p>
        If this number is far from 1.00, then that indicates a bias toward one
        side or the other and that we should change the design of that page.
      </p>
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

      <div>{votes.length} total</div>

      <ol className="list-disc space-y-2 pl-4">
        {sortedVotes.map((vote) => (
          <VoteListItem key={vote.id} vote={vote} />
        ))}
      </ol>
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
