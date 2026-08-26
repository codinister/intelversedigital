import { defineField, defineType } from "sanity";

export default defineType({
  name: "leakItem",
  title: "Leak Item",
  type: "object",
  fields: [
    defineField({ 
      name: "title", 
      title: "Title", 
      type: "string" 
    }),
    defineField({ 
      name: "description", 
      title: "Description", 
      type: "text" 
    })
  ]
});
