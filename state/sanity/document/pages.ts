import React from 'react';
import { FaRocketchat } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pages',
  type: 'document',
  title: 'Pages',
  icon: FaRocketchat,
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
      options: {
        source: 'title',
      },
      type: 'slug',
      validation: (Rule) => Rule.required().error('Slug field required!'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Content field required!'),
    }),
  ],
});
