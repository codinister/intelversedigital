import { defineArrayMember, defineField, defineType } from 'sanity';
import cta from '../object/landingpage/cta';

export const adEnginePage = defineType({
  name: 'landingpage',
  title: 'Landing Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'brand',
          type: 'string',
          description: 'example brand: Intelverse Digital',
        }),
        defineField({
          name: 'headline',
          type: 'string',
          description: 'example headline: Bury the Boost button.',
        }),
        defineField({
          name: 'highlight',
          type: 'string',
          description: 'example highlight: Build the engine.',
        }),
        defineField({
          name: 'description',
          type: 'text',
          description: 'text describing the ad product',
        }),
        defineField({
          name: 'cta',
          type: 'object',
          description: 'Call to action button details',
          fields: cta.fields,
        }),
        defineField({
          name: 'cast',
          type: 'string',
          description: 'example cast: 10 modules · 6 campaign blueprints',
        }),
        defineField({
          name: 'retiredLabel',
          type: 'string',
          description: 'retiredlabel example: Retired · With Thanks...',
        }),
        defineField({
          name: 'boostLabel',
          type: 'string',
          description: 'Boost button title',
        }),
        defineField({
          name: 'epitaph',
          type: 'string',
          description: 'Boost button info example: This button has chopped....',
        }),
        defineField({
          name: 'epitaphStrong',
          type: 'string',
          description:
            'Boost button info highlighted example: There a better way....',
        }),
      ],
    }),
    defineField({
      name: 'pain',
      type: 'object',
      title: 'First Section',
      fields: [
        defineField({
          name: 'eyebrow',
          type: 'string',
          description: 'example: You know this story',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'paragraphs',
          type: 'array',
          of: [defineArrayMember({ type: 'text' })],
        }),
        defineField({ name: 'kicker', type: 'text' }),
      ],
    }),
    defineField({
      name: 'leaks',
      type: 'object',
      title: 'Section Two',
      fields: [
        defineField({
          name: 'eyebrow',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'items',
          type: 'array',
          of: [defineArrayMember({ type: 'leakItem' })],
        }),
      ],
    }),
    defineField({
      name: 'reveal',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'paragraphs',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'text', type: 'text' }),
                defineField({ name: 'strong', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'playbook',
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'titleHighlight', type: 'string' }),
            defineField({ name: 'subtitle', type: 'string' }),
            defineField({ name: 'meta', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'inside',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [defineArrayMember({ type: 'insideItem' })],
        }),
      ],
    }),
    defineField({
      name: 'blueprints',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [defineArrayMember({ type: 'blueprintItem' })],
        }),
        defineField({ name: 'note', type: 'text' }),
      ],
    }),
    defineField({
      name: 'fit',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'yes', type: 'fitCard' }),
        defineField({ name: 'no', type: 'fitCard' }),
      ],
    }),
    defineField({
      name: 'pricing',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'priceLabel', type: 'string' }),
        defineField({ name: 'price', type: 'string' }),
        defineField({ name: 'once', type: 'string' }),
        defineField({
          name: 'inclusions',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ name: 'cta', type: 'object', fields: cta.fields }),
        defineField({ name: 'paymentNote', type: 'text' }),
      ],
    }),
    defineField({
      name: 'proof',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'publisherNote', type: 'text' }),
      ],
    }),
    defineField({
      name: 'faq',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [defineArrayMember({ type: 'faqItem' })],
        }),
      ],
    }),
    defineField({
      name: 'finalCta',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'cta', type: 'object', fields: cta.fields }),
      ],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      fields: [
        defineField({ name: 'copyright', type: 'text' }),
        defineField({ name: 'trademarks', type: 'text' }),
        defineField({ name: 'disclaimer', type: 'text' }),
      ],
    }),
  ],
});
