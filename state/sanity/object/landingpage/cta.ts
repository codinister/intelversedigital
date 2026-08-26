import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cta',
  title: 'Call to Action Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Button text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ 
      name: 'price', 
      title: 'Price', 
      type: 'string' 
    }),
    defineField({
      name: 'href',
      title: 'URL',
      description: 'A whatsapp link or website link to view or download AD',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ 
      name: 'subtext', 
      title: 'Subtext', 
      description: 'Describe payment methods like Momo, Visa, Cheque',
      type: 'string' 
    }),
  ],
});
