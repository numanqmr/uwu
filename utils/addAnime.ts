export const addAnimeFormInputs: {
  label: string;
  inputType: string;
  placeholder: string;
  required: boolean;
  value: string;
  schemaType: string;
}[] = [
  {
    label: "Title",
    inputType: "text",
    placeholder: "",
    required: true,
    value: "",
    schemaType: "title",
  },
  {
    label: "Title (English)",
    inputType: "text",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "titleEnglish",
  },
  {
    label: "MAL URL",
    inputType: "text",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "malURL",
  },
  {
    label: "Img URL",
    inputType: "text",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "imgURL",
  },
  {
    label: "Seasons",
    inputType: "number",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "seasons",
  },
  {
    label: "Episodes",
    inputType: "number",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "episodes",
  },
  {
    label: "Status",
    inputType: "text",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "status",
  },
  {
    label: "Genre(s)",
    inputType: "text",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "genres",
  },
  {
    label: "Year",
    inputType: "text",
    placeholder: "",
    required: false,
    value: "",
    schemaType: "year",
  },
];
