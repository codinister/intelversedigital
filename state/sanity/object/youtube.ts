
import { defineField, defineType } from 'sanity';
import YouTubePreview from '@/components/YouTubePreview';

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
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
