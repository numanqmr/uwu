export const apiUrls = {
  // PEOPLE PAGE
  allProfiles: "/api/people",
  userProfile: (id: string | number) => `/api/people/${id}`,
  userReviews: (userId: string) => `/api/people/${userId}/reviews`,

  // ANIME PAGE
  allAnime: "/api/anime",
  animePage: (id: string | number) => `/api/anime/${id}`,
  animePageReviewsOverview: (id: string | number) =>
    `/api/anime/${id}/reviews-overview`,
  animePageReviewsAll: (id: string | number) => `/api/anime/${id}/reviews`,
  animePageReviewSingle: (animeId: string | number, reviewId: string) =>
    `/api/anime/${animeId}/reviews/${reviewId}`,

  // ADMIN PAGE
  pendingUsers: "/api/admin/pendingusers",
  pendingAnime: "/api/admin/pendinganime",
};
