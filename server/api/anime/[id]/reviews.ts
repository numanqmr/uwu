import { db } from "@/drizzle.config";
import { animeTable, animeReviews } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
// import { mockAnimeList } from "@/utils/mockData";
// const anime = mockAnimeList.find((anime) => anime.id === parseInt(id));

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as any;

  const result = await db
    .select()
    .from(animeReviews)
    .where(eq(animeReviews.animeId, +id));

  const walahh = await db.query.animeReviews.findMany({
    where: eq(animeReviews.animeId, +id),
    with: { reviewer: { columns: { name: true } } },
  });

  console.log("walahh");
  console.log(walahh);

  return result;
});
