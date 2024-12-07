"use client";

import { useUser } from "@clerk/nextjs";
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export function SentryUserManager() {
  const { user } = useUser();

  useEffect(() => {
    Sentry.setUser({
      id: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,
      ip_address: "{{auto}}",
    });
  }, [user]);

  return null;
}
