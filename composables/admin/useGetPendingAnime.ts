import { apiUrls } from "~/api";
import { type InferSelectModel } from "drizzle-orm";
import type { animeTable } from "~/schema";

type Response = InferSelectModel<typeof animeTable>;

export const useGetPendingAnimeAdmin = async () => {
  const res = await useFetch<Response[]>(apiUrls.pendingAnime);

  return { res };
};
