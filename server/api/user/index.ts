import { db } from "@/drizzle.config";
import { profile } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  if (!id) return false;

  const [user] = await db.select().from(profile).where(eq(profile.id, id));

  return user;
});
