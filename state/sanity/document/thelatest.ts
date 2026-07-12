import React from 'react';
import { IoNewspaperOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'thelatest',
  title: 'The Latest',
  type: 'document',
  icon: IoNewspaperOutline,
  fields: [
    defineField({
      title: 'Add new Post',
      name: 'npost',
      type: 'post',
    }),
  ],
  preview: {
    select: {
      title: 'npost.title',
      media: 'npost.thumb',
    },
  },
});
