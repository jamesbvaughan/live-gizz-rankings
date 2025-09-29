"use client";

import { useActionState } from "react";

import type { Album, Performance, Show, Song } from "@/drizzle/schema";

import { BoxedInput } from "./BoxedInput";
import { BoxedSelect } from "./BoxedSelect";
import { BoxedButton, BoxedButtonLink } from "./BoxedButtonLink";
import type { ActionState } from "@/lib/actionState";
import {
  getFormValue,
  getFormNumberValue,
  initialActionState,
} from "@/lib/actionState";
import Link from "next/link";

interface PerformanceFormProps {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  songs: (Song & { album: Album })[];
  shows: Show[];
  performance?: Performance;
  submitLabel?: string;
  defaultSongId?: string;
  defaultShowId?: string;
  defaultYoutubeVideoId?: string;
}

export default function PerformanceForm({
  action,
  songs,
  shows,
  performance,
  submitLabel = "Save",
  defaultSongId,
  defaultShowId,
  defaultYoutubeVideoId,
}: PerformanceFormProps) {
  const [{ errorMessage, formData }, formAction, pending] = useActionState(
    action,
    initialActionState,
  );

  // Group songs by album, sorted by release date (newest first)
  const songsByAlbum = songs.reduce(
    (acc, song) => {
      const albumKey = song.album.id;
      if (!acc[albumKey]) {
        acc[albumKey] = {
          album: song.album,
          songs: [],
        };
      }
      acc[albumKey].songs.push(song);
      return acc;
    },
    {} as Record<
      string,
      { album: (typeof songs)[0]["album"]; songs: typeof songs }
    >,
  );

  // Sort albums by release date (newest first) and songs within each album by position
  const sortedAlbumGroups = Object.values(songsByAlbum)
    .sort(
      (a, b) =>
        new Date(b.album.releaseDate).getTime() -
        new Date(a.album.releaseDate).getTime(),
    )
    .map((group) => ({
      ...group,
      songs: group.songs.sort((a, b) => a.albumPosition - b.albumPosition),
    }));

  // Sort shows by date (newest first)
  const sortedShows = [...shows].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <form action={formAction} className="group space-y-6" noValidate>
      {performance && (
        <input type="hidden" name="performanceId" value={performance.id} />
      )}

      {errorMessage && <p className="text-red">{errorMessage}</p>}

      <BoxedSelect
        label="Song"
        id="songId"
        name="songId"
        required
        defaultValue={
          getFormValue(formData, "songId") ||
          performance?.songId ||
          defaultSongId
        }
        errorMessage="Please select a song"
      >
        <option value="">Select a song...</option>
        {sortedAlbumGroups.map((albumGroup) => (
          <optgroup
            key={albumGroup.album.id}
            label={`${albumGroup.album.title} (${new Date(albumGroup.album.releaseDate).getFullYear()})`}
          >
            {albumGroup.songs.map((song) => (
              <option key={song.id} value={song.id}>
                {song.albumPosition}. {song.title}
              </option>
            ))}
          </optgroup>
        ))}
      </BoxedSelect>

      <BoxedSelect
        label="Show"
        id="showId"
        name="showId"
        required
        defaultValue={
          getFormValue(formData, "showId") ||
          performance?.showId ||
          defaultShowId
        }
        errorMessage="Please select a show"
        helpText={
          <>
            Don&apos;t see the show you&apos;re looking for?{" "}
            <Link href="/shows/add">Add it</Link>!
          </>
        }
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
        defaultValue={
          getFormNumberValue(formData, "showPosition") ||
          performance?.showPosition
        }
        placeholder="1"
        helpText="Position of this song in the show setlist. If this was part of a multi-show residency released as a single combined bootleg album, use the track number from the bootleg album."
        errorMessage="Show position must be between 1 and 99"
      />

      <BoxedInput
        label="Bandcamp Track ID (optional)"
        id="bandcampTrackId"
        name="bandcampTrackId"
        type="text"
        defaultValue={
          getFormValue(formData, "bandcampTrackId") ||
          performance?.bandcampTrackId ||
          ""
        }
        placeholder="e.g., 1234567890"
        helpText="The unique track ID from Bandcamp. You can get this from the individual track's page on Bandcamp by copying the HTML embed code for the track and finding the track ID in it."
        errorMessage="Must be a valid Bandcamp track ID"
      />

      <BoxedInput
        label="YouTube Video ID (optional)"
        id="youtubeVideoId"
        name="youtubeVideoId"
        type="text"
        defaultValue={
          getFormValue(formData, "youtubeVideoId") ||
          performance?.youtubeVideoId ||
          defaultYoutubeVideoId ||
          ""
        }
        placeholder="e.g., dQw4w9WgXcQ"
        helpText="The video ID from a YouTube URL. This should be the offical upload of the show from the band's channel if available. Otherwise, use the best fan upload that you can find."
        errorMessage="Must be a valid YouTube video ID"
      />

      <BoxedInput
        label="YouTube Start Time (optional)"
        id="youtubeVideoStartTime"
        name="youtubeVideoStartTime"
        type="number"
        min={0}
        defaultValue={
          getFormNumberValue(formData, "youtubeVideoStartTime") ||
          (performance?.youtubeVideoStartTime ?? undefined)
        }
        placeholder="0"
        helpText="Start time in seconds for this song in the YouTube video. You can get this from the YouTube URL by pausing the video at the song start, right-clicking on the video, and selecting 'Copy video URL at current time'."
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
