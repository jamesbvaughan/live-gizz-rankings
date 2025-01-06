import { PropsWithChildren } from "react";

import { PageContent, PageTitle } from "@/components/ui";

export default async function ChangelogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <PageTitle>Changelog</PageTitle>

      <PageContent className="prose prose-lg prose-stone prose-invert leading-6">
        {children}
      </PageContent>
    </>
  );
}
