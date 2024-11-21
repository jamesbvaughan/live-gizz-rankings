import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Find the best live version of every King Gizzard &amp; The Lizard Wizard
        song.
      </p>

      <Link href="/rank">rank some songs</Link>
      <Link href="/albums">browse rankings by album</Link>
    </div>
  );
}
