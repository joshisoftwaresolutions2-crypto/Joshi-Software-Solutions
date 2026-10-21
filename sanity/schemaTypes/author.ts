import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "name" } }),
    defineField({ name: "image", type: "image", title: "Portrait", options: { hotspot: true } }),
    defineField({ name: "bio", type: "text", title: "Bio", rows: 4 }),
  ],
});