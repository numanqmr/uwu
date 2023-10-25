import { IAnime } from "./anime.type";

export interface IUser {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  isApproved: boolean;
  type: "User" | "Admin" | "Guest";
  joined: string;
  lastLogin: string;
  animeAdded: string[];
  reviews: string[];
  animeOfTheWeek: IAnime[];
  animeAllTime: IAnime[];
  likes: number;
  watched: number;
}
