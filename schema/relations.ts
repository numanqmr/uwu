import { relations } from "drizzle-orm";
import { animeReviews, animeTable, profile } from "./schema";

export const profileRelations = relations(profile, ({ many }) => ({
  reviewer: many(animeReviews, { relationName: "reviewer" }),
}));

export const animeTableRelations = relations(profile, ({ many }) => ({
  animeInfo: many(animeReviews, { relationName: "animeInfo" }),
}));

export const animeReviewRelations = relations(animeReviews, ({ one }) => ({
  reviewer: one(profile, {
    fields: [animeReviews.userId],
    references: [profile.id],
    relationName: "reviewer",
  }),
  animeInfo: one(animeTable, {
    fields: [animeReviews.animeId],
    references: [animeTable.id],
    relationName: "animeInfo",
  }),
}));
