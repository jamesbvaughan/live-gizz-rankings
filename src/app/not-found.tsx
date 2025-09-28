import Link from "next/link";

const notFoundMessages: React.ReactNode[] = [
  "Searching... but there's nothing at this URL!",
  "Your real's not real, and neither is this URL.",
  <span key="planet-b">
    There is no Planet B.
    <br />
    There&apos;s also no webpage at this URL.
  </span>,
  "To have no soul, to have no body... Life was a hallucination... just like the page at this URL.",
  <span key="mirage">
    Is that a <s>city</s> <i>webpage</i> drifting from afar or a reflection
    mirage?
  </span>,
  <span key="magenta">
    I don&apos;t believe you
    <br />
    Your eyes deceive you
    <br />
    Better check yourself in, the mirage is creeping
    <br />
    Outwards from your dream, can&apos;t you see you&apos;ve gone insane?
    <br />
    <br />
    Magenta Mountain might exist, but a webpage at this URL does not.
  </span>,
];

// Force this page to be dynamic so that the error message is different each
// time it loads.
export const dynamic = "force-dynamic";

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
