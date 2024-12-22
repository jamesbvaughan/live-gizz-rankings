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

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button className="hover:text-red">sign in</button>
      </SignInButton>
    );
  }

  const isAdmin = user.publicMetadata.isAdmin;
  const username = user.username ?? user.primaryEmailAddress?.emailAddress;

  return (
    <div className="flex flex-col items-end space-y-2">
      <div className="">{username || "signed in"}</div>

      <hr className="w-full border-muted-2" />

      <div className="flex flex-col items-end space-y-2">
        <div className="flex flex-col items-end space-y-1">
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

            <div className="flex flex-col space-y-1">
              <Link href="/users">users</Link>
              <Link href="/votes">votes</Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
