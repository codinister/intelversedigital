import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dailydeals',
  title: 'Daily Deals',
  type: 'document',
  icon: BiCodeAlt,
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
