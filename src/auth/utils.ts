import { auth } from "@clerk/nextjs/server";
import { forbidden, unauthorized } from "next/navigation";

export async function isAdmin(): Promise<boolean> {
  const { sessionClaims } = await auth();
  return !!sessionClaims?.meta?.isAdmin;
}

export async function isSignedIn(): Promise<boolean> {
  const { userId } = await auth();
  return !!userId;
}

export async function ensureSignedIn(): Promise<string> {
  const { userId } = await auth();
  if (!userId) {
    unauthorized();
  }

  return userId;
}

export async function ensureAdmin(): Promise<string> {
  const { sessionClaims, userId } = await auth();
  if (!userId) {
    unauthorized();
  }

  const isAdmin = !!sessionClaims?.meta?.isAdmin;
  if (!isAdmin) {
    forbidden();
  }

  return userId;
}
