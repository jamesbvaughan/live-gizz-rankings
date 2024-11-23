import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <p>There&apos;s nothing at this URL!</p>
      <p>
        <Link href="/" className="underline">
          Go back home
        </Link>
      </p>
    </div>
  );
}
