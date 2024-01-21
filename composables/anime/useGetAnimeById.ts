import { apiUrls } from "~/api";

export const useGetAnimeById = async (id: string) => {
  const { isDataInCache } = useCheckInCache();

  const animeKey = `anime-${id}`;
  const res = await useFetch(apiUrls.animePage(id), {
    key: animeKey,
    getCachedData: (key) => isDataInCache(key),
  });

  return { res };
};
