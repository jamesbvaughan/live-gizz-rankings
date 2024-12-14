"use client";

import { SignInButton, SignOutButton, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AccountButtons() {
  const clerk = useClerk();
  const { isSignedIn, isLoaded, user } = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isLoaded) {
    return <div className="cursor-wait text-muted-2">sign in</div>;
  }

  const isAdmin = user?.publicMetadata.isAdmin;

  return isSignedIn ? (
    <div className="flex flex-col items-end space-y-2">
      <div className="flex flex-col items-end">
        <button
          className="hover:text-red"
          onClick={() => {
            clerk.openUserProfile();
          }}
        >
          account
        </button>

        <SignOutButton>
          <button className="hover:text-red">sign out</button>
        </SignOutButton>
      </div>

      {isAdmin ? (
        <>
          <hr className="w-full border-muted-2" />

          <div className="flex flex-col">
            <Link href="/users">users</Link>
            <Link href="/votes">votes</Link>
          </div>
        </>
      ) : null}
    </div>
  ) : (
    <SignInButton mode="modal">
      <button className="hover:text-red">sign in</button>
    </SignInButton>
  );
}
