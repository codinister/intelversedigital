import React from 'react';

import { CiUser } from 'react-icons/ci';

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: CiUser,
  fields: [
    defineField({
      name: 'auth_name',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author name required'),
    }),
    defineField({
      name: 'auth_img',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image field required'),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required().error('Description required'),
    }),
  ],
  preview: {
    select: {
      title: 'auth_name',
      media: 'auth_img',
    },
  },
});
