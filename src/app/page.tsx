import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        The purpose of this site is to identify what the fan community believes
        to be King Gizzard &amp; The Lizard Wizard&apos;s best live performances
        of their songs.
      </p>

      <Link href="/rank">rank some songs</Link>
      <br />
      <Link href="/albums">browse rankings by album</Link>
    </div>
  );
}
