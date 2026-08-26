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
          description: 'Metadata title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          description: 'Metadata description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
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
          description: 'describe your AD',
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
          description: '',
        }),
        defineField({
          name: 'retiredLabel',
          type: 'string',
          description: 'retiredlabel text example: Retired · With Thanks...',
        }),
        defineField({
          name: 'boostLabel',
          type: 'string',
          description: 'Boost button text',
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
      title: 'Section One',
      fields: [
        defineField({
          name: 'eyebrow',
          type: 'string',
          description: 'example: You know this story',
        }),
        defineField({
          name: 'title',
          type: 'string',
          description: 'Section one title',
        }),
        defineField({
          name: 'paragraphs',
          description: 'Section one paragraph',
          type: 'array',
          of: [defineArrayMember({ type: 'text' })],
        }),
        defineField({
          name: 'kicker',
          description: 'Ad caption, example: The ads were never the problem.',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'leaks',
      type: 'object',
      title: 'Section Two',
      fields: [
        defineField({
          name: 'eyebrow',
          description: 'example: The diagnosis',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
          description: 'Section two title',
        }),
        defineField({
          name: 'description',
          description: 'Section two description',
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
      title: 'Section Three',
      fields: [
        defineField({
          name: 'eyebrow',
          description: 'example: The Fix',
          type: 'string',
        }),
        defineField({
          name: 'title',
          description: 'Section three title',
          type: 'string',
        }),
        defineField({
          name: 'paragraphs',
          description: 'Section three paragraphs',
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
            defineField({
              name: 'label',
              description: 'example: The Play Book',
              type: 'string',
            }),
            defineField({
              name: 'title',
              description: 'Playbook title',
              type: 'string',
            }),
            defineField({
              name: 'titleHighlight',
              description: 'Playbook title highlighted',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              description: 'Playbook subtitle',
              type: 'string',
            }),
            defineField({
              name: 'meta',
              description: 'Playbook meta',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'inside',
      type: 'object',
      title: 'Section Four',
      fields: [
        defineField({
          name: 'eyebrow',
          description: "example: What's inside",
          type: 'string',
        }),
        defineField({
          name: 'title',
          description: 'Section four title',
          type: 'string',
        }),
        defineField({
          name: 'items',
          description: 'Section four items',
          type: 'array',
          of: [defineArrayMember({ type: 'insideItem' })],
        }),
      ],
    }),
    defineField({
      name: 'blueprints',
      type: 'object',
      title: 'Section Five',
      fields: [
        defineField({
          name: 'eyebrow',
          description: 'example: Find your business',
          type: 'string',
        }),
        defineField({
          name: 'title',
          description: 'Section five title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          description: 'Section five description',
          type: 'text',
        }),
        defineField({
          name: 'items',
          description: 'Section five items',
          type: 'array',
          of: [defineArrayMember({ type: 'blueprintItem' })],
        }),
        defineField({
          name: 'note',
          description: 'Section five caption',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'fit',
      type: 'object',
      title: 'Section six',
      fields: [
        defineField({
          name: 'eyebrow',
          description: 'example: Honest talk',
          type: 'string',
        }),
        defineField({
          name: 'title',
          description: 'Section six title',
          type: 'string',
        }),
        defineField({
          name: 'yes',
          description: 'Fit Card One',
          type: 'fitCard',
        }),
        defineField({
          name: 'no',
          description: 'Fit Card Two',
          type: 'fitCard',
        }),
      ],
    }),
    defineField({
      name: 'pricing',
      type: 'object',
      title: 'Section Seven', 
      fields: [
        defineField({ 
          name: 'eyebrow', 
          description: 'example: Get the engine',
          type: 'string' 
        }),
        defineField({ 
          name: 'title', 
          description: 'Section seven title',
          type: 'string' 
        }),
        defineField({ 
          name: 'description', 
          description: 'Section seven description',
          type: 'text' 
        }),
        defineField({ 
          name: 'priceLabel', 
          description: 'example: One-time payment',
          type: 'string' 
        }),
        defineField({ 
          name: 'price', 
          description: 'example: GHS 249',
          type: 'string' 
        }),
        defineField({ 
          name: 'once', 
          description: 'example: No subscription', 
          type: 'string' 
        }),
        defineField({
          name: 'inclusions',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ 
          name: 'cta', 
          type: 'object', 
          fields: cta.fields 
        }),
        defineField({ 
          name: 'paymentNote', 
          description: 'example: Payment by MoMo or bank transfe',
          type: 'text' 
        }),
      ],
    }),
    defineField({
      name: 'proof',
      type: 'object',
      title: 'Section Eight',
      fields: [
        defineField({ 
          name: 'eyebrow', 
          description: 'example: Results',
          type: 'string' 
        }),
        defineField({ 
          name: 'title', 
          description: 'Section eight title',
          type: 'string' 
        }),
        defineField({ 
          name: 'publisherNote', 
          type: 'text' 
        }),
      ],
    }),
    defineField({
      name: 'faq',
      type: 'object',
      title: 'Section nine', 
      fields: [
        defineField({ 
          name: 'eyebrow', 
          description: 'example: Questions',
          type: 'string' 
        }),
        defineField({ 
          name: 'title', 
          description: 'Asked and answered.',
          type: 'string' 
        }),
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
      title: 'Section ten', 
      fields: [
        defineField({ 
          name: 'eyebrow', 
          description: 'One decision',
          type: 'string' 
        }),
        defineField({ 
          name: 'title', 
          title: 'Section ten title',
          type: 'string' 
        }),
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
