import { redis } from './redis.config';

const redisCache = async (key: string, fn: () => void) => {
  try {
    const fetch = (await redis.get(key)) || [];

    if (fetch !== null) {
      return fetch;
    } else {
      const data = await fn();
      await redis.set(key, JSON.stringify(data), {
        ex: 1,
      });
      return data;
    }
  } catch (error) {
    return error;
  }
};

export default redisCache;
