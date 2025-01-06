import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export function EloScore({ score }: { score: number }) {
  return (
    <Popover className="relative">
      <PopoverButton className="text-muted outline-0">
        <span className="underline decoration-dotted underline-offset-4">
          {Math.round(score)}
        </span>
      </PopoverButton>

      <PopoverPanel
        className="w-72 bg-muted-2 bg-opacity-50 px-4 py-3 shadow backdrop-blur [--anchor-gap:8px]"
        anchor="bottom"
      >
        This is an{" "}
        <a
          href="https://en.wikipedia.org/wiki/Elo_rating_system"
          target="blank"
          rel="noopener"
        >
          Elo score
        </a>{" "}
        based on all of the fan votes on this song.
      </PopoverPanel>
    </Popover>
  );
}
