import { clsx } from "clsx";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ComponentProps } from "react";

function StyledBoxedButton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        "border-muted hover:border-foreground hover:text-foreground border-2 px-2 py-1 no-underline",
        className,
      )}
    />
  );
}

export function BoxedButtonLink<RouteType>({
  children,
  ...props
}: Exclude<LinkProps<RouteType>, "className">) {
  return (
    <Link {...props} className="no-underline">
      <StyledBoxedButton>{children}</StyledBoxedButton>
    </Link>
  );
}

export function BoxedButton({
  children,
  className,
  ...props
}: Exclude<ComponentProps<"button">, "className">) {
  return (
    <button
      {...props}
      className={clsx(
        "group-invalid:pointer-events-none enabled:cursor-pointer disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
    >
      <StyledBoxedButton className="group-invalid:border-muted disabled:border-muted group-invalid:hover:border-muted group-invalid:opacity-50 group-invalid:hover:text-current">
        {children}
      </StyledBoxedButton>
    </button>
  );
}
