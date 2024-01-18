import type { Config } from "drizzle-kit";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error("DATABASE_URL is missing");
}

const connectionString = process.env.DB_CONNECTION_STRING || "";

export default {
  schema: "./schema",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: { connectionString },
} satisfies Config;

export const client = postgres(connectionString);
export const db = drizzle(client, { schema });
