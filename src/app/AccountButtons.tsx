"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

export function AccountButtons() {
  return (
    <div className="flex items-center">
      <ClerkLoaded>
        <SignedOut>
          <div id="sign-in-button-wrapper">
            <SignInButton mode="modal">
              <button className="hover:text-red">sign in</button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <SignOutButton>
            <button className="hover:text-red">sign out</button>
          </SignOutButton>
        </SignedIn>
      </ClerkLoaded>

      <ClerkLoading>
        <div className="cursor-wait text-muted-2">Sign in</div>
      </ClerkLoading>
    </div>
  );
}
