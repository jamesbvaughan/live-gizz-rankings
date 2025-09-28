export interface ActionState {
  errorMessage?: string;
  formData?: FormData;
}

export const initialActionState: ActionState = {};

export function getFormValue(
  formData: FormData | undefined,
  name: string,
): string | undefined {
  const value = formData?.get(name);
  return typeof value === "string" ? value : undefined;
}

export function getFormNumberValue(
  formData: FormData | undefined,
  name: string,
): number | undefined {
  const value = formData?.get(name);
  if (typeof value === "string") {
    const num = parseInt(value, 10);
    return isNaN(num) ? undefined : num;
  }
  return undefined;
}
