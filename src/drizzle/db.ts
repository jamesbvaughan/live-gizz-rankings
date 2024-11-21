import "@/drizzle/envConfig";
import { drizzle as drizzleWebsocket } from "drizzle-orm/neon-serverless";
import { drizzle as drizzleHTTP } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const postgresUrl = process.env.POSTGRES_URL!;

export const db = drizzleWebsocket(postgresUrl, { schema });

export const dbHTTP = drizzleHTTP(postgresUrl, { schema });
