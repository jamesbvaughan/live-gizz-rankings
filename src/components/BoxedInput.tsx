import type { InputHTMLAttributes } from "react";

interface BoxedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorMessage?: string;
}

export function BoxedInput({
  label,
  helpText,
  errorMessage,
  id,
  ...props
}: BoxedInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="peer border-muted focus:border-foreground invalid:border-muted mt-1 block w-full border-2 bg-transparent px-2 py-1 user-invalid:border-red-500 user-invalid:text-red-500 focus:outline-none"
      />
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
