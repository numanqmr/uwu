import { db } from "@/drizzle.config";
import { profile } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const [user] = await db
    .select()
    .from(profile)
    .where(eq(profile?.email, body?.email));
  return user;
});
