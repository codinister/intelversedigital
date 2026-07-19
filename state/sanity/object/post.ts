import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'npost.title',
      },
      validation: (Rule) => Rule.required().error('Slug field required!'),
    }),
    defineField({
      name: 'thumb',
      title: 'Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image required!'),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      validation: (Rule) => Rule.required().error('Author field required!'),
      options: {
        disableNew: true,
      },
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      validation: (Rule) => Rule.required().error('Content field required!'),
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      media: 'thumb',
      title: 'title',
    },
  },
});
