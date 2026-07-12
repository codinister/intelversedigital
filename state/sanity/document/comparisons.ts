import React from 'react';
import { IoIosGitCompare } from 'react-icons/io';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'comparisons',
  title: 'Comparisons',
  type: 'document',
  icon: IoIosGitCompare,
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
