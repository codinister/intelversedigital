import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { upstashToken, upstashUrl } from './envConfigs';

export const redis = new Redis({
  url: upstashUrl(),
  token: upstashToken(),
});

export const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});
