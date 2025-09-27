export {};

declare global {
  interface CustomJwtSessionClaims {
    meta?: {
      isAdmin?: boolean;
    };
  }
}
