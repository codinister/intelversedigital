import React from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { defineField, defineType } from 'sanity';

const YoutubeFn = ({ value }: { value: undefined }) => {
  return JSON.stringify(value, null, 2);
};

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'Youtube',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      url: 'url',
      component: 'YoutubeFn',
    },
  },
});
