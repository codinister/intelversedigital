import { redis } from './redis.config';

const redisCache = async (key: string, fn: () => void) => {
  try {
    
    const get_data = await redis.get(key)
    if(get_data !== null){
      return get_data
    }
    else{
      const data = await fn()
       redis.set(key, JSON.stringify(data), {
        ex: 0
      })
      return data
    }

  } catch (error) {
    return error;
  }
};

export default redisCache;
