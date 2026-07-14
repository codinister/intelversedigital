import { createClient } from 'next-sanity';

const key = process.env.SANITY_SERVER_KEY || '';
const token = process.env.SANITY_SERVER_TOKEN

export default createClient({
  projectId: key,
  dataset: 'production',
  apiVersion: '2026-07-06',
  useCdn: true,
  token
});
