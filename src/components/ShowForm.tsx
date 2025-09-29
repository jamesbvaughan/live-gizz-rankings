"use client";

import { useActionState } from "react";

import type { Show } from "@/drizzle/schema";

import { BoxedInput } from "./BoxedInput";
import { BoxedButton, BoxedButtonLink } from "./BoxedButtonLink";
import type { ActionState } from "@/lib/actionState";
import { getFormValue, initialActionState } from "@/lib/actionState";

interface ShowFormProps {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  show?: Show;
  submitLabel?: string;
}

export default function ShowForm({
  action,
  show,
  submitLabel = "Save",
}: ShowFormProps) {
  const [{ errorMessage, formData }, formAction, pending] = useActionState(
    action,
    initialActionState,
  );

  return (
    <form action={formAction} className="group space-y-6" noValidate>
      {show && <input type="hidden" name="showId" value={show.id} />}

      {errorMessage && <p className="text-red">{errorMessage}</p>}

      <BoxedInput
        label="Slug"
        id="slug"
        name="slug"
        type="text"
        required
        pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
        minLength={1}
        maxLength={100}
        defaultValue={getFormValue(formData, "slug") || show?.slug}
        placeholder="atlanta-2024"
        helpText="URL-friendly identifier (lowercase, hyphens, typically <location>-<year> format)"
        errorMessage="Slug must be lowercase letters, numbers, and hyphens only"
      />

      <BoxedInput
        label="Location"
        id="location"
        name="location"
        type="text"
        required
        minLength={1}
        maxLength={300}
        defaultValue={getFormValue(formData, "location") || show?.location}
        placeholder="Atlanta"
        helpText="Show location, typically just a city or festival name"
        errorMessage="Location is required and must be between 1-300 characters"
      />

      <BoxedInput
        label="Date"
        id="date"
        name="date"
        type="date"
        required
        defaultValue={getFormValue(formData, "date") || show?.date}
        helpText="Show date in YYYY-MM-DD format"
        errorMessage="Please select a valid date"
      />

      <BoxedInput
        label="Image URL"
        id="imageUrl"
        name="imageUrl"
        type="url"
        required
        defaultValue={getFormValue(formData, "imageUrl") || show?.imageUrl}
        placeholder="https://example.com/image.jpg"
        helpText="URL for an image of the show's cover art"
        errorMessage="Please provide a valid image URL"
      />

      <BoxedInput
        label="Bandcamp Album ID (optional)"
        id="bandcampAlbumId"
        name="bandcampAlbumId"
        type="text"
        defaultValue={
          getFormValue(formData, "bandcampAlbumId") ||
          show?.bandcampAlbumId ||
          ""
        }
        placeholder="e.g. 1234567890"
        helpText="The numeric ID from the Bandcamp album URL"
        errorMessage="Must be a valid Bandcamp album ID"
      />

      <BoxedInput
        label="YouTube Video ID (optional)"
        id="youtubeVideoId"
        name="youtubeVideoId"
        type="text"
        defaultValue={
          getFormValue(formData, "youtubeVideoId") || show?.youtubeVideoId || ""
        }
        placeholder="e.g. dQw4w9WgXcQ"
        helpText="The video ID from a YouTube URL"
        errorMessage="Must be a valid YouTube video ID"
      />

      <div className="flex gap-4">
        <BoxedButton type="submit" disabled={pending}>
          {pending ? `${submitLabel}...` : submitLabel}
        </BoxedButton>
        <BoxedButtonLink href="/shows">Cancel</BoxedButtonLink>
      </div>
    </form>
  );
}
