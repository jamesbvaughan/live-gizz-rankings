import { PropsWithChildren } from "react";

import { isAdmin } from "@/auth/utils";

export async function OnlyAdmins({ children }: PropsWithChildren) {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    return null;
  }

  return <>{children}</>;
}
