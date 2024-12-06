"use client";

import * as Sentry from "@sentry/nextjs";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="space-y-4">
      <p className="text-center">Something went wrong!</p>
      <p className="text-center">
        Sorry about that. Try refreshing the page or{" "}
        <Link href="/">head back to the home page</Link>.
      </p>
    </div>
  );
}
