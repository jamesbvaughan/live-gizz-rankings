"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export function AccountButtons() {
  return (
    <div style={{ width: 50 }} className="flex items-center">
      <ClerkLoaded>
        <SignedOut>
          <div id="sign-in-button-wrapper">
            <SignInButton mode="modal" />
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </ClerkLoaded>

      <ClerkLoading>
        <div className="cursor-wait text-muted-2">Sign in</div>
      </ClerkLoading>
    </div>
  );
}
