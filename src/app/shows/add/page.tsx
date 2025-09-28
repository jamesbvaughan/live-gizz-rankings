import { addShow } from "@/actions/addShow";
import { ensureAdmin } from "@/auth/utils";
import ShowForm from "@/components/ShowForm";
import { PageContent, PageTitle } from "@/components/ui";

export default async function AddShowPage() {
  await ensureAdmin();

  return (
    <>
      <PageTitle>Add New Show</PageTitle>

      <PageContent>
        <ShowForm action={addShow} submitLabel="Add Show" />
      </PageContent>
    </>
  );
}
