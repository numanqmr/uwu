import { db } from "@/drizzle.config";
import { animeTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
// import { mockAnimeList } from "@/utils/mockData";
// const anime = mockAnimeList.find((anime) => anime.id === parseInt(id));

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as any;

  const result = await db
    .select()
    .from(animeTable)
    .where(eq(animeTable.id, +id));

  return result?.[0];
});
