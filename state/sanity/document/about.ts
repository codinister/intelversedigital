import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About Us',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
});
