import { serverSupabaseUser } from "#supabase/server";
import { db } from "@/drizzle.config";
import { profile } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { H3Event, EventHandlerRequest } from "h3";

export default async function checkUserRole(
  event: H3Event<EventHandlerRequest>,
) {
  // throw new HttpException(401, "Unauthorized");

  const client = await serverSupabaseUser(event);
  const [you] = await db
    .selectDistinct()
    .from(profile)
    .where(eq(profile.id, client?.id as string));
  // MIDDLEWARE TO CHECK IF USER IS ADMIN
  you.userType === "admin";

  if (you.userType === "admin") {
    console.log("YOU ARE ADMIN");
  } else {
    console.log("YOU ARE NUT ADMIN");
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
}
