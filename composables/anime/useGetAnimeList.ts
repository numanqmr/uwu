import { apiUrls } from "~/api";

export const useGetAnimeList = async () => {
  const { isDataInCache } = useCheckInCache();

  const res = await useFetch(apiUrls.allAnime, {
    key: "anime",
    getCachedData: (key) => isDataInCache(key),
  });

  return { res };
};
