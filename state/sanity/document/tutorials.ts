import React from 'react';
import { IoMdBook } from 'react-icons/io';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tutorials',
  title: 'Tutorials',
  type: 'document',
  icon: IoMdBook,
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
