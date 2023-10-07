import { mockAnimeList } from "../../../utils/mockData";

export default defineEventHandler((event) => {
  const { id } = event.context.params as any;
  const anime = mockAnimeList.find((anime) => anime.id === parseInt(id));
  return anime;
});
