import { db } from "@/drizzle.config";
import { profile } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import checkUserRole from "~/server/utils/checkRole";

const userSchema = z.object({ userId: z.string() });

export default defineEventHandler({
  onRequest: [checkUserRole],
  handler: async (event) => {
    const result = await readValidatedBody(event, (body) =>
      userSchema.safeParse(body),
    );

    if (!result.success) throw result.error.issues;

    // APPROVE USER CODE
    // const approveUser: { isApproved: boolean | null }[] = await db
    //   .update(profile)
    //   .set({ isApproved: true })
    //   .where(eq(profile.id, result.data.userId))
    //   .returning();

    return true;
  },
});
