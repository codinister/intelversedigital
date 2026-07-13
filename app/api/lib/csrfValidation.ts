import { headers } from 'next/headers';

const csrfValidation = async () => {
  const header = await headers();
  const apiKey = header.get('x-api-key')?.split(',')[0].trim() || '';

  if (!apiKey) {
    throw new Error('Unauthorized access!');
  }
};

export default csrfValidation;
