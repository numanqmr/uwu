import { db } from "@/drizzle.config";
import { animeReviews } from "@/drizzle/schema";
import { desc, eq } from "drizzle-orm";
// import { mockAnimeList } from "@/utils/mockData";
// const anime = mockAnimeList.find((anime) => anime.id === parseInt(id));

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as any;
  console.log(event.context.params);

  const result = await db.query.animeReviews.findMany({
    where: eq(animeReviews.animeId, +id),
    with: {
      reviewer: { columns: { name: true, id: true } },
      animeInfo: { columns: { title: true } },
    },
    orderBy: desc(animeReviews.dateAdded),
  });

  return result;
});
