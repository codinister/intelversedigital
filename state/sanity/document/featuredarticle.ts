import React from 'react';
import { PiArticle } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featuredarticle',
  title: 'Featured Article',
  type: 'document',
  icon: PiArticle,
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
