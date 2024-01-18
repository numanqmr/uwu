export const apiUrls = {
  allProfiles: "/api/people",
  userProfile: (id: string | number) => `/api/people/${id}`,

  allAnime: "/api/anime",
  animePage: (id: string | number) => `/api/anime/${id}`,
  animePageReviews: (id: string | number) => `/api/anime/${id}/reviews`,
};
