import { relations } from "drizzle-orm";
import { animeReviews, profile } from "./schema";

export const profileRelations = relations(profile, ({ many }) => ({
  reviewer: many(animeReviews, { relationName: "reviewer" }),
}));

export const animeReviewRelations = relations(animeReviews, ({ one }) => ({
  reviewer: one(profile, {
    fields: [animeReviews.userId],
    references: [profile.id],
    relationName: "reviewer",
  }),
}));
