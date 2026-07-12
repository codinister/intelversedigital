'use client'

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from '.';

const key = process.env.NEXT_PUBLIC_SANITY_CLIENT_KEY || '';

export default defineConfig({
  projectId: key,
  dataset: 'production',
  basePath: '/admindashboard',
  title: 'interversedigital4u',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});
