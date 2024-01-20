export const apiUrls = {
  allProfiles: "/api/people",
  userProfile: (id: string | number) => `/api/people/${id}`,

  allAnime: "/api/anime",
  animePage: (id: string | number) => `/api/anime/${id}`,
  animePageReviewsOverview: (id: string | number) =>
    `/api/anime/${id}/reviews-overview`,
  animePageReviewsAll: (id: string | number) => `/api/anime/${id}/reviews`,
};
