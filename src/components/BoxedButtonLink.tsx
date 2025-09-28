import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";

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
  ...props
}: Exclude<ComponentProps<"button">, "className">) {
  return (
    <button
      {...props}
      className="group-invalid:pointer-events-none enabled:cursor-pointer"
    >
      <StyledBoxedButton className="group-invalid:border-muted group-invalid:hover:border-muted group-invalid:opacity-50 group-invalid:hover:text-current disabled:opacity-50">
        {children}
      </StyledBoxedButton>
    </button>
  );
}
