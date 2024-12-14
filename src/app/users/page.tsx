import { Metadata } from "next";

import { db } from "@/drizzle/db";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const [allVotes, allNominations] = await Promise.all([
    db.query.votes.findMany(),
    db.query.nominations.findMany(),
  ]);

  const userToVotes = Object.groupBy(allVotes, (vote) => vote.voterId);

  const users = Object.entries(userToVotes);
  users.sort(([, votesA], [, votesB]) => votesB!.length - votesA!.length);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl">Users</h2>

      <table className="table-auto">
        <thead>
          <tr>
            <th className="p-4">User ID</th>
            <th className="p-4">Votes</th>
            <th className="p-4">L:R</th>
            <th className="p-4">Nominations</th>
          </tr>
        </thead>

        <tbody>
          {users.map(([userId, userVotes]) => {
            const nominations = allNominations.filter(
              (nomination) => nomination.userId === userId,
            );

            const leftVotes = userVotes!.filter(
              (vote) => vote.winnerId === vote.performance1Id,
            );
            const rightVotes = userVotes!.filter(
              (vote) => vote.winnerId === vote.performance2Id,
            );

            return (
              <tr key={userId}>
                <td className="p-2">{userId}</td>
                <td className="p-2">{userVotes!.length}</td>
                <td className="p-2">
                  {leftVotes.length}:{rightVotes.length}
                </td>
                <td className="p-2">{nominations.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
