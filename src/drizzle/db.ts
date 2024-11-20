import "@/drizzle/envConfig";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const db = drizzle(process.env.POSTGRES_URL!, { schema });
