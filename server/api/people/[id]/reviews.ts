// import { mockUserProfile, mockUsersList } from "../../../utils/mockData";
import { db } from "@/drizzle.config";
import { animeReviews } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as any;

  const result = await db.query.animeReviews.findMany({
    where: eq(animeReviews.userId, id),
    with: { animeInfo: { columns: { title: true } } },
  });

  return result;
});
