// oxlint-disable-next-line require-module-specifiers
export {};

declare global {
  interface CustomJwtSessionClaims {
    meta?: {
      isAdmin?: boolean;
    };
  }
}
