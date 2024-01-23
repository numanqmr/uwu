import { apiUrls } from "~/api";

export const useGetUsersList = async () => {
  const { isDataInCache } = useCheckInCache();

  const key = "all-users";
  const res = await useFetch(apiUrls.allProfiles, {
    key,
    getCachedData: (key) => isDataInCache(key),
  });

  return { res };
};
