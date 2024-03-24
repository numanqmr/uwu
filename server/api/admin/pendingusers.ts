import { db } from "@/drizzle.config";
import { profile } from "@/drizzle/schema";
import { eq, ne } from "drizzle-orm";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseUser(event);

  const [you] = await db
    .selectDistinct()
    .from(profile)
    .where(eq(profile.id, client?.id as string));

  // MIDDLEWARE TO CHECK IF USER IS ADMIN
  you.userType === "admin";

  const pendingUsers = await db
    .select()
    .from(profile)
    .where(ne(profile.isApproved, true));

  return pendingUsers;
});
