import { db } from "@/drizzle.config";
import { animeTable, profile } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseUser(event);

  const [you] = await db
    .selectDistinct()
    .from(profile)
    .where(eq(profile.id, client?.id as string));

  // MIDDLEWARE TO CHECK IF USER IS ADMIN
  you.userType === "admin";

  const pendingAnime = await db.select().from(animeTable);

  return pendingAnime;
});
