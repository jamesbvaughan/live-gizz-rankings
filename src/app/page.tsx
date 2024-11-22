import Link from "next/link";
import { PropsWithChildren } from "react";

function LinkButton({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="block h-24 w-64 content-center border-2 border-gray-100 text-center text-xl hover:bg-gray-100 hover:text-black"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-4">
      <p className="text-xl">
        The purpose of this site is to identify what the fan community believes
        to be King Gizzard &amp; The Lizard Wizard&apos;s best live performances
        of their songs.
      </p>

      <div className="flex items-center justify-around">
        <LinkButton href="/rank">rank some songs</LinkButton>
        <LinkButton href="/albums">browse rankings by album</LinkButton>
      </div>
    </div>
  );
}
