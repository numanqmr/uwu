export const authRoutes = {
  dashboard: "/dashboard",
  feed: "/feed",
  people: "/people",
  peopleId: (id: string) => `/people/${id}`,
  anime: "/anime",
  animeId: (id: string) => `/anime/${id}`,
  addAnime: "/add-anime",
  addReview: "/add-review",
  editReview: "/edit-review",
  editAnime: "/edit-anime",
  notifications: "/notifications",
};

export const unauthRoutes = {
  login: "/login",
  register: "/register",
};

export const publicRoutes = {
  home: "/",
};
