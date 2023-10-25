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
  animeOfTheWeek: ""; // ADD ANIME TYPE
  animeAllTime: ""; // ADD ANIME TYPE
  likes: number;
  watched: number;
}
