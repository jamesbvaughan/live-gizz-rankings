import { redirect } from "next/navigation";

import { isAdmin } from "@/auth/utils";

import AddAlbumForm from "./AddAlbumForm";

export default async function AddAlbumPage() {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Add New Album</h1>
      <AddAlbumForm />
    </div>
  );
}
