import type { Config } from "drizzle-kit";

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
