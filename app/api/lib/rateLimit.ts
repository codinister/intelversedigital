import { headers } from 'next/headers';
import { limiter } from './redis.config';

const rateLimit = async () => {
  const header = await headers();
  const ip = header.get('x-forwarded-for')?.split(',')[0].trim() || '';

  const limit = limiter.limit(ip);

  if (!(await limit).success) {
    throw new Error('Too many request!');
  }

  return limit
};

export default rateLimit;
