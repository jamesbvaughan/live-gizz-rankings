import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";

export function PageType({ children }: PropsWithChildren) {
  return <div className="text-base font-bold text-muted">{children}</div>;
}

export function PageTitle({ children }: PropsWithChildren) {
  return <h1 className="text-4xl font-semibold">{children}</h1>;
}

export function PageContent({
  children,
  className,
  ...divProps
}: ComponentProps<"div">) {
  return (
    <div {...divProps} className={clsx("mt-6", className)}>
      {children}
    </div>
  );
}
