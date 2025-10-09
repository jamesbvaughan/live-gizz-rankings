import { auth } from "@clerk/nextjs/server";
import { forbidden, unauthorized } from "next/navigation";
import * as Sentry from "@sentry/nextjs";

export async function authWithSentry() {
  const session = await auth();

  Sentry.setUser({
    id: session.userId ?? undefined,
    email: session.sessionClaims?.email ?? undefined,
    username: session.sessionClaims?.username ?? undefined,
    ip_address: "{{auto}}",
  });

  return session;
}

export async function isAdmin(): Promise<boolean> {
  const { sessionClaims } = await authWithSentry();
  return !!sessionClaims?.meta?.isAdmin;
}

export async function isSignedIn(): Promise<boolean> {
  const { userId } = await authWithSentry();
  return !!userId;
}

export async function ensureSignedIn(): Promise<string> {
  const { userId } = await authWithSentry();
  if (!userId) {
    unauthorized();
  }

  return userId;
}

export async function ensureAdmin(): Promise<string> {
  const { sessionClaims, userId } = await authWithSentry();
  if (!userId) {
    unauthorized();
  }

  const isAdmin = !!sessionClaims?.meta?.isAdmin;
  if (!isAdmin) {
    forbidden();
  }

  return userId;
}
