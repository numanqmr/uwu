// import { mockUserProfile, mockUsersList } from "../../../utils/mockData";
import { profile } from "@/drizzle/schema";
import { db } from "@/drizzle.config";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as any;

  const result = await db.query.profile.findFirst({
    where: eq(profile.id, id),
  });

  return result;
});
