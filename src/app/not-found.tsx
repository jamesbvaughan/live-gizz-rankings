import Link from "next/link";

const notFoundMessages = [
  "Searching... but there's nothing at this URL!",
  "Your real's not real, and neither is this URL.",
  "There is no Planet B. There's also no webpage at this URL.",
];

export default function NotFound() {
  const message =
    notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)];

  return (
    <div className="space-y-6">
      <h2 className="text-4xl">404</h2>

      <p className="text-xl">{message}</p>

      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  );
}
