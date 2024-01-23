// import { mockUsersList } from "../../../utils/mockData";
import { profile } from "@/drizzle/schema";
import { db } from "@/drizzle.config";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const allPeople = await db.select().from(profile);
  return allPeople;
});
