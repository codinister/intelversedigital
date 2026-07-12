import React from 'react';
import { MdOutlineReviews } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  icon: MdOutlineReviews,
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
      media: 'npost.thumb'
    }
  }
});

