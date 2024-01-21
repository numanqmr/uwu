import { apiUrls } from "~/api";

export const useGetAnimeReviews = async (id: string) => {
  const { isDataInCache } = useCheckInCache();

  const key = `/api/anime/${id}/reviews`;
  const res = await useFetch(apiUrls.animePageReviewsAll(id), {
    key: key,
    getCachedData: (key) => isDataInCache(key),
  });

  return { res };
};
