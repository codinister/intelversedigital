import { defineField, defineType } from "sanity";

export default defineType({
  name: "insideItem",
  title: "Inside Item",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" })
  ]
});

