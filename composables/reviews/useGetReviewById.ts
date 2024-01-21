import { apiUrls } from "~/api";

export const useGetReviewById = async (id: string, reviewId: string) => {
  const { isDataInCache } = useCheckInCache();

  const animeKey = `anime-${id}-review-${reviewId}`;
  const res = await useFetch(apiUrls.animePageReviewSingle(id, reviewId), {
    key: animeKey,
    getCachedData: (key) => isDataInCache(key),
  });

  return { res };
};
