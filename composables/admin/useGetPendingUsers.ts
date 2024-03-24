import { apiUrls } from "~/api";
import { type InferSelectModel } from "drizzle-orm";
import type { profile } from "~/schema";

type Response = InferSelectModel<typeof profile>;

export const useGetPendingUsersAdmin = async () => {
  const res = await useFetch<Response[]>(apiUrls.pendingUsers);

  return { res };
};
