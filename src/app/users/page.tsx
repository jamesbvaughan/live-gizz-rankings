import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { forbidden, unauthorized } from "next/navigation";

import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";

import { allPairs } from "../rank/getRandomPair";

export const metadata: Metadata = {
  title: "Users",
};

const nPairs = Object.values(allPairs).reduce(
  (acc, pairsForSong) => acc + pairsForSong.length,
  0,
);

export default async function UsersPage() {
  const user = await currentUser();
  if (!user) {
    unauthorized();
  }

  const isAdmin = user.publicMetadata.isAdmin;
  if (!isAdmin) {
    forbidden();
  }

  const [allVotes, allNominations] = await Promise.all([
    db.query.votes.findMany(),
    db.query.nominations.findMany(),
  ]);

  const userToVotes = Object.groupBy(allVotes, (vote) => vote.voterId);

  const users = Object.entries(userToVotes);
  users.sort(([, votesA], [, votesB]) => votesB!.length - votesA!.length);

  return (
    <>
      <PageTitle>Users</PageTitle>

      <PageContent>
        <p>There are {nPairs} pairs of performances available to vote on.</p>

        <div className="overflow-x-scroll">
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
      </PageContent>
    </>
  );
}
