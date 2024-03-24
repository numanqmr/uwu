import { db } from "@/drizzle.config";
import { profile } from "@/drizzle/schema";
import { count, eq } from "drizzle-orm";
import { serverSupabaseUser } from "#supabase/server";
import { animeTable } from "~/schema";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseUser(event);

  const [you] = await db
    .selectDistinct()
    .from(profile)
    .where(eq(profile.id, client?.id as string));

  // MIDDLEWARE TO CHECK IF USER IS ADMIN
  you.userType === "admin";

  const unapprovedUsersQuery = db
    .select({ value: count(), isApproved: profile.isApproved })
    .from(profile)
    .where(eq(profile.isApproved, false))
    .groupBy(profile.isApproved);

  const unapprovedAnimeQuery = db.select({ value: count() }).from(animeTable);

  const [pendingUserCount, pendingAnimeCount] = await Promise.all([
    unapprovedUsersQuery,
    unapprovedAnimeQuery,
  ]);

  return {
    pendingUsers: pendingUserCount[0].value,
    pendingAnime: pendingAnimeCount[0].value,
  };
});
