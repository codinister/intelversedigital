import axios from 'axios';

const client = axios.create({
  baseUrl: '/api',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default function fetch({ ...options }) {
  return client(options)
    .then((resp) => resp)
    .catch((err) => err);
}
