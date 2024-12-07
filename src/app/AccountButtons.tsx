"use client";

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function AccountButtons() {
  const { isSignedIn, isLoaded } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isLoaded) {
    return <div className="cursor-wait text-muted-2">sign in</div>;
  }

  return isSignedIn ? (
    <SignOutButton>
      <button className="hover:text-red">sign out</button>
    </SignOutButton>
  ) : (
    <SignInButton mode="modal">
      <button className="hover:text-red">sign in</button>
    </SignInButton>
  );
}
