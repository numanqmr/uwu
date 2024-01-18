import { z } from "zod";

const requiredErr = { required_error: "Required" };

export const initialAddAnimeFormData = {
  content: undefined,
  yearReleased: undefined,
  episodes: undefined,
  seasons: undefined,
  status: undefined,
  genres: undefined,
  title: undefined,
  malURL: undefined,
  imgURL: undefined,
};

export const addAnimeFormSchema = z.object({
  content: z.string({ required_error: "Required Field" }).trim(),

  yearReleased: z.number(requiredErr).transform((num) => `${num}`),

  episodes: z.number(requiredErr).transform((num) => `${num}`),

  seasons: z.number(requiredErr).transform((num) => `${num}`),

  genres: z.string(requiredErr).trim().array().max(3),

  title: z.string(requiredErr).trim(),

  malURL: z.string(requiredErr).trim(),

  imgURL: z.string(requiredErr).trim(),

  status: z.string(requiredErr).trim(),
});

export type AddAnimeFormSchemaType = z.infer<typeof addAnimeFormSchema>;

export const addAnimeErrors =
  ref<z.ZodFormattedError<AddAnimeFormSchemaType> | null>(null);
