import { IAnime, IAnimeReviews } from "./anime.type";

export interface IUser {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  isApproved: boolean;
  type: "User" | "Admin" | "Guest";
  joined: string;
  lastLogin: string;
  animeAdded: IAnime[] | null;
  reviews: IAnimeReviews[] | null;
  animeOfTheWeek: IAnime[] | null;
  animeAllTime: IAnime[] | null;
  likes: number;
  watched: number;
}
