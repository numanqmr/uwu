import {
  pgTable,
  pgEnum,
  bigint,
  text,
  numeric,
  timestamp,
  boolean,
  unique,
  uuid,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const keyStatus = pgEnum("key_status", [
  "default",
  "valid",
  "invalid",
  "expired",
]);
export const keyType = pgEnum("key_type", [
  "aead-ietf",
  "aead-det",
  "hmacsha512",
  "hmacsha256",
  "auth",
  "shorthash",
  "generichash",
  "kdf",
  "secretbox",
  "secretstream",
  "stream_xchacha20",
]);
export const aalLevel = pgEnum("aal_level", ["aal1", "aal2", "aal3"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "s256",
  "plain",
]);
export const factorStatus = pgEnum("factor_status", ["unverified", "verified"]);
export const factorType = pgEnum("factor_type", ["totp", "webauthn"]);
export const userType = pgEnum("user_type", ["admin", "user", "test"]);

export const animeTable = pgTable("AnimeTable", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  title: text("title"),
  imageLink: text("image_link"),
  desc: text("desc"),
  malLink: text("mal_link"),
  reviews: numeric("reviews").default("0").notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
  editedAt: timestamp("edited_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
  likes: numeric("likes").default("0").notNull(),
  watches: numeric("watches").notNull(),
  genre: text("genre").default("{}").array(),
});

export const users = pgTable(
  "profile",
  {
    name: text("name"),
    email: text("email").notNull(),
    dateJoined: timestamp("date_joined", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
    lastOnline: timestamp("last_online", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
    isApproved: boolean("is_approved"),
    userType: userType("user_type"),
    id: uuid("id").primaryKey().notNull(),
  },
  (table) => {
    return {
      usersEmailKey: unique("users_email_key").on(table.email),
      usersIdKey: unique("users_id_key").on(table.id),
    };
  },
  //   // Need fields for animeAdded, reviews, animeOfTheWeek, likes, watches, allTimeAnimeList
);
