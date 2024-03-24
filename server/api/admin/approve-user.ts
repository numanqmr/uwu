import { db } from "@/drizzle.config";
import { profile } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { serverSupabaseUser } from "#supabase/server";
import { z } from "zod";

const userSchema = z.object({ userId: z.string() });

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    userSchema.safeParse(body),
  );

  if (!result.success) throw result.error.issues;

  const client = await serverSupabaseUser(event);

  const [you] = await db
    .selectDistinct()
    .from(profile)
    .where(eq(profile.id, client?.id as string));

  // MIDDLEWARE TO CHECK IF USER IS ADMIN
  you.userType === "admin";

  const approveUser: { isApproved: boolean | null }[] = await db
    .update(profile)
    .set({ isApproved: true })
    .where(eq(profile.id, result.data.userId))
    .returning();

  return approveUser;
});
