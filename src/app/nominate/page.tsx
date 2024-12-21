import { Metadata } from "next";
import Link from "next/link";

import { PageContent, PageTitle } from "@/components/ui";

import { NominationForm } from "../NominationForm";

export const metadata: Metadata = {
  title: "Nominate a performance",
};

export default function NominatePage() {
  return (
    <>
      <PageTitle>Nominate a performance</PageTitle>

      <PageContent className="space-y-6">
        <p>
          Is this site missing one of your favorite performances? Use this form
          to nominate it for inclusion, or{" "}
          <Link href="/nominations">browse existing nominations</Link>.
        </p>

        <NominationForm />
      </PageContent>
    </>
  );
}
