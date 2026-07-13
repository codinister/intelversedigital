export const apiEndpoints = () => {
  if (process.env.API_ENDPOINTS) {
    return process.env.API_ENDPOINTS || '';
  }
  throw new Error('Api endpoints error');
};

export const upstashUrl = () => {
  if (process.env.UPSTASH_URL) {
    return process.env.UPSTASH_URL || '';
  }
  throw new Error('Upstash url required');
};

export const upstashToken = () => {
  if (process.env.UPSTASH_TOKEN) {
    return process.env.UPSTASH_TOKEN || '';
  }
  throw new Error('Upstash token required!');
};

export const apiKey = () => {
  if (process.env.API_KEY) {
    return process.env.API_KEY;
  }
  throw new Error('Api key required!');
};
