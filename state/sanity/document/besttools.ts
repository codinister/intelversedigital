import React from 'react';
import { GoTools } from 'react-icons/go';

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'besttools',
  title: 'Best Tools',
  type: 'document',
  icon: GoTools,
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
