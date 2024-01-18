import { db } from "@/drizzle.config";
import { animeTable } from "@/drizzle/schema";
// import { mockAnimeList } from "@/utils/mockData";

export default defineEventHandler(async (event) => {
  const allAnime = await db.select().from(animeTable);
  return allAnime;
});
