import { defineField, defineType } from "sanity";


export default defineType({
  name: "blueprintItem",
  title: "Blueprint Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "examples", title: "Examples", type: "string" })
  ]
});
