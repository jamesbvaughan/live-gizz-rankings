import { db } from "@/drizzle/db";

export default async function Votes() {
  const votes = await db.query.votes.findMany({
    with: {
      performance1: { with: { song: true, show: true } },
      performance2: { with: { song: true, show: true } },
      winner: { with: { song: true, show: true } },
    },
  });

  return (
    <div className="space-y-4">
      <h2 className="text-4xl">All votes</h2>

      <ol className="list-disc space-y-2 pl-4">
        {votes.map((vote) => {
          return (
            <li key={vote.id}>
              {vote.voterId} voted for {vote.winner.song.title} at{" "}
              {vote.winner.show.location}
            </li>
          );
        })}
      </ol>
    </div>
  );
}