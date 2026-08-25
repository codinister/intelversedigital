import { defineArrayMember, defineField, defineType } from "sanity";


export default defineType({
  name: "fitCard",
  title: "Fit Card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ]
});



