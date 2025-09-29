import type { ReactNode, SelectHTMLAttributes } from "react";

interface BoxedSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  helpText?: ReactNode;
  errorMessage?: string;
}

export function BoxedSelect({
  label,
  helpText,
  errorMessage,
  id,
  children,
  ...props
}: BoxedSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        {...props}
        className="peer border-muted focus:border-foreground invalid:border-muted mt-1 block w-full border-2 bg-transparent px-2 py-1 user-invalid:border-red-500 user-invalid:text-red-500 focus:outline-none"
      >
        {children}
      </select>

      {errorMessage && (
        <p className="mt-1 hidden text-sm text-red-500 peer-user-invalid:block">
          {errorMessage}
        </p>
      )}

      {helpText && (
        <p className="text-muted-foreground mt-1 text-sm peer-user-invalid:hidden">
          {helpText}
        </p>
      )}
    </div>
  );
}
