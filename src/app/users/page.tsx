import { clerkClient, currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { forbidden, unauthorized } from "next/navigation";

import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";

import { allPairs } from "../rank/getRandomPair";
import UsersTable from "./users-table";

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

  const [allVotes, allNominations, allActivityLogs] = await Promise.all([
    db.query.votes.findMany(),
    db.query.nominations.findMany(),
    db.query.activityLogs.findMany(),
  ]);

  const userToVotes = Object.groupBy(allVotes, (vote) => vote.voterId);

  const users = Object.entries(userToVotes);

  const userIds = users.map(([userId]) => userId);
  const clerk = await clerkClient();
  const clerkUsers = await clerk.users.getUserList({
    userId: userIds,
    limit: 500,
  });
  const userIdToUsername = new Map(
    clerkUsers.data.map((u) => [
      u.id,
      u.username ?? u.emailAddresses[0]?.emailAddress ?? u.id,
    ]),
  );

  const tableData = users.map(([userId, userVotes]) => {
    const nominations = allNominations.filter(
      (nomination) => nomination.userId === userId,
    );

    const edits = allActivityLogs.filter((log) => log.userId === userId);

    const leftVotes = userVotes!.filter(
      (vote) => vote.winnerId === vote.performance1Id,
    );
    const rightVotes = userVotes!.filter(
      (vote) => vote.winnerId === vote.performance2Id,
    );

    return {
      userId,
      username: userIdToUsername.get(userId) ?? userId,
      votes: userVotes!.length,
      leftVotes: leftVotes.length,
      rightVotes: rightVotes.length,
      nominations: nominations.length,
      edits: edits.length,
    };
  });

  return (
    <>
      <PageTitle>Users</PageTitle>

      <PageContent>
        <p>There are {nPairs} pairs of performances available to vote on.</p>

        <UsersTable data={tableData} />
      </PageContent>
    </>
  );
}
