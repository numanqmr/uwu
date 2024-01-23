import { apiUrls } from "~/api";

export const useGetUserReviews = async (id: string) => {
  const { isDataInCache } = useCheckInCache();

  const key = `/api/people/${id}/reviews`;
  const res = await useFetch<any>(apiUrls.userReviews(id), {
    key: key,
    getCachedData: (key) => isDataInCache(key),
  });

  return { res };
};
