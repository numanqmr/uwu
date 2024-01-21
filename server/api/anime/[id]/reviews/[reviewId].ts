import { db } from "@/drizzle.config";
import { animeReviews } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as any;
  const { reviewId } = event.context.params as any;

  const result = await db.query.animeReviews.findFirst({
    where: and(eq(animeReviews.animeId, +id), eq(animeReviews.id, reviewId)),
    with: {
      reviewer: { columns: { name: true, id: true } },
      animeInfo: { columns: { title: true } },
    },
  });

  return result;
});
