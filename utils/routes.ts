export const authRoutes = {
  dashboard: "/dashboard",
  feed: "/feed",
  people: "/people",
  peopleId: (id: string | number) => `/people/${id}`,
  anime: "/anime",
  animeId: (id: string | number) => `/anime/${id}`,
  addAnime: "/add-anime",
  addReview: "/add-review",
  editReview: "/edit-review",
  editAnime: "/edit-anime",
  notifications: "/notifications",

  // Reviews
  allReviews: (id: string) => `/anime/${id}/reviews`,
  viewReview: (animeId: string | number, reviewId: string) =>
    `/anime/${animeId}/reviews/${reviewId}`,

  profileReviews: (id: string | number) => `/people/${id}/reviews`,

  // Admin Routes
  adminPage: "/admin",
};

export const unauthRoutes = {
  login: "/login",
  register: "/register",
};

export const publicRoutes = {
  home: "/",
};
