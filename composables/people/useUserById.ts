import { apiUrls } from "~/api";

export const useUserById = async (id: string) => {
  const { isDataInCache } = useCheckInCache();

  const key = `user-${id}`;
  const res = await useFetch<any>(apiUrls.userProfile(id), {
    key,
    getCachedData: (key) => isDataInCache(key),
  });

  return { res };
};
