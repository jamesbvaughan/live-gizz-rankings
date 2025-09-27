"use client";

import { useActionState } from "react";

import { addAlbum } from "@/actions/addAlbum";
import { BoxedInput } from "@/components/BoxedInput";
import { BoxedButton, BoxedButtonLink } from "@/components/BoxedButtonLink";

export default function AddAlbumForm() {
  const [_state, formAction, pending] = useActionState(addAlbum, undefined);

  return (
    <form action={formAction} className="group space-y-6" noValidate>
      <BoxedInput
        label="Title"
        id="title"
        name="title"
        type="text"
        required
        minLength={1}
        maxLength={300}
        errorMessage="Title is required and must be between 1-300 characters"
      />

      <BoxedInput
        label="Slug"
        id="slug"
        name="slug"
        type="text"
        required
        pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
        minLength={1}
        maxLength={100}
        placeholder="e.g., nonagon-infinity"
        helpText="URL-friendly version of the title (lowercase, hyphens instead of spaces)"
        errorMessage="Slug must be lowercase letters, numbers, and hyphens only (e.g., 'nonagon-infinity')"
      />

      <BoxedInput
        label="Release Date"
        id="releaseDate"
        name="releaseDate"
        type="date"
        required
        min="1960-01-01"
        max={new Date().toISOString().split("T")[0]}
        errorMessage="Please enter a valid date between 1960 and today"
      />

      <BoxedInput
        label="Image URL"
        id="imageUrl"
        name="imageUrl"
        type="url"
        required
        pattern="https?://.*"
        placeholder="https://example.com/album-cover.jpg"
        errorMessage="Please enter a valid URL starting with http:// or https://"
      />

      <BoxedInput
        label="Bandcamp Album ID"
        id="bandcampAlbumId"
        name="bandcampAlbumId"
        type="text"
        required
        pattern="^[0-9]+$"
        errorMessage="Bandcamp Album ID is required and must contain only numbers"
      />

      <div className="flex gap-4">
        <BoxedButton type="submit" disabled={pending}>
          {pending ? "Adding..." : "Add Album"}
        </BoxedButton>
        <BoxedButtonLink href="/albums">Cancel</BoxedButtonLink>
      </div>
    </form>
  );
}
