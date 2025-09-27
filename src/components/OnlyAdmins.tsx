import { auth } from "@clerk/nextjs/server";
import { PropsWithChildren } from "react";

export async function OnlyAdmins({ children }: PropsWithChildren) {
  const { sessionClaims } = await auth();
  if (!sessionClaims?.meta?.isAdmin) {
    return null;
  }

  return <>{children}</>;
}
