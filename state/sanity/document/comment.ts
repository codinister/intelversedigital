import React from 'react';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: HiOutlinePencilSquare,
  readOnly: true,
  fields: [
    defineField({
      name: 'full_name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
  ],
});
