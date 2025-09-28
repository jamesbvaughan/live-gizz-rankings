"use client";

import { useActionState } from "react";

import { Album, Performance, Show, Song } from "@/drizzle/schema";

import { BoxedInput } from "./BoxedInput";
import { BoxedSelect } from "./BoxedSelect";
import { BoxedButton, BoxedButtonLink } from "./BoxedButtonLink";

interface PerformanceFormProps {
  action: (state: unknown, formData: FormData) => Promise<void>;
  songs: (Song & { album: Album })[];
  shows: Show[];
  performance?: Performance;
  submitLabel?: string;
  defaultSongId?: string;
  defaultShowId?: string;
}

export default function PerformanceForm({
  action,
  songs,
  shows,
  performance,
  submitLabel = "Save",
  defaultSongId,
  defaultShowId,
}: PerformanceFormProps) {
  const [_state, formAction, pending] = useActionState(action, null);

  // Sort songs by album release date (newest first) then by album position
  const sortedSongs = [...songs].sort((a, b) => {
    const dateCompare =
      new Date(b.album.releaseDate).getTime() -
      new Date(a.album.releaseDate).getTime();
    if (dateCompare !== 0) return dateCompare;
    return a.albumPosition - b.albumPosition;
  });

  // Sort shows by date (newest first)
  const sortedShows = [...shows].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <form action={formAction} className="group space-y-6" noValidate>
      {performance && (
        <input type="hidden" name="performanceId" value={performance.id} />
      )}

      <BoxedSelect
        label="Song"
        id="songId"
        name="songId"
        required
        defaultValue={performance?.songId || defaultSongId}
        errorMessage="Please select a song"
      >
        <option value="">Select a song...</option>
        {sortedSongs.map((song) => (
          <option key={song.id} value={song.id}>
            {song.title} ({song.album.title} -{" "}
            {new Date(song.album.releaseDate).getFullYear()})
          </option>
        ))}
      </BoxedSelect>

      <BoxedSelect
        label="Show"
        id="showId"
        name="showId"
        required
        defaultValue={performance?.showId || defaultShowId}
        errorMessage="Please select a show"
      >
        <option value="">Select a show...</option>
        {sortedShows.map((show) => (
          <option key={show.id} value={show.id}>
            {show.location} - {new Date(show.date).toLocaleDateString()}
          </option>
        ))}
      </BoxedSelect>

      <BoxedInput
        label="Show Position"
        id="showPosition"
        name="showPosition"
        type="number"
        required
        min={1}
        max={99}
        defaultValue={performance?.showPosition}
        placeholder="1"
        helpText="Position of this song in the show setlist"
        errorMessage="Show position must be between 1 and 99"
      />

      <BoxedInput
        label="Bandcamp Track ID (optional)"
        id="bandcampTrackId"
        name="bandcampTrackId"
        type="text"
        defaultValue={performance?.bandcampTrackId || ""}
        placeholder="e.g., 1234567890"
        helpText="The numeric track ID from Bandcamp"
        errorMessage="Must be a valid Bandcamp track ID"
      />

      <BoxedInput
        label="YouTube Video ID (optional)"
        id="youtubeVideoId"
        name="youtubeVideoId"
        type="text"
        defaultValue={performance?.youtubeVideoId || ""}
        placeholder="e.g., dQw4w9WgXcQ"
        helpText="The video ID from a YouTube URL"
        errorMessage="Must be a valid YouTube video ID"
      />

      <BoxedInput
        label="YouTube Start Time (optional)"
        id="youtubeVideoStartTime"
        name="youtubeVideoStartTime"
        type="number"
        min={0}
        defaultValue={performance?.youtubeVideoStartTime ?? undefined}
        placeholder="0"
        helpText="Start time in seconds for this song in the YouTube video"
        errorMessage="Start time must be 0 or greater"
      />

      <div className="flex gap-4">
        <BoxedButton type="submit" disabled={pending}>
          {pending ? `${submitLabel}...` : submitLabel}
        </BoxedButton>
        <BoxedButtonLink href="/">Cancel</BoxedButtonLink>
      </div>
    </form>
  );
}
