// eslint-disable-next-line no-unassigned-import
import "@/drizzle/envConfig";

import { drizzle as drizzleHTTP } from "drizzle-orm/neon-http";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import { drizzle as drizzleWebsocket } from "drizzle-orm/neon-serverless";

import * as schema from "./schema";

const postgresUrl = process.env.POSTGRES_URL!;

export const db = drizzleWebsocket(postgresUrl, { schema });

export type DrizzleClient = NeonDatabase<typeof schema>;

export const dbHTTP = drizzleHTTP(postgresUrl, { schema });
