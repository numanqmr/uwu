export interface IAnime {
  id: string | number;
  name: string;
  reviews: number; // or Review type?
  likes: number; //or anime like type
  watches: number; //or watchers?
  description: string;
  stats: string; // I dont know why I have this added
  created: string;
  lastEdited: string;
}

export interface IAnimeLikes {
  animeId: string | number;
  userId: string | number;
  like: number;
  watched: number;
}

export interface IAnimeReviews {
  id: string | number;
  animeId: string | number;
  userId: string | number;
  review: string;
  likes: number;
  dateAdded: string;
  lastEdited: string;
}

export interface IAnimeReviewLikes {
  reviewId: string | number;
  userId: string | number;
  like: string;
}
