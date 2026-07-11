import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'Youtube',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
});
