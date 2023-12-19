import { db } from "@/drizzle.config";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users?.email, body?.email));
  return user;
});
