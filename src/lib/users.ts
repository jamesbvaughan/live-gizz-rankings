import { clerkClient } from "@clerk/nextjs/server";

export async function getUserDisplayNames(
  userIds: string[],
): Promise<Map<string, string>> {
  if (userIds.length === 0) {
    return new Map();
  }

  const clerk = await clerkClient();
  const clerkUsers = await clerk.users.getUserList({
    userId: userIds,
    limit: 500,
  });

  return new Map(
    clerkUsers.data.map((u) => [
      u.id,
      u.username ?? u.emailAddresses[0]?.emailAddress ?? u.id,
    ]),
  );
}
