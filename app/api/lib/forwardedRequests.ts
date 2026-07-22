import axios from 'axios';
import { NextRequest } from 'next/server';
import { apiKey } from './envConfigs';

const forwardedRequests = async (req: NextRequest, url: string) => {
  const data =
    req.method === 'GET' || req.method === 'HEAD' ? undefined : await req.json();


  const result = await axios({
    method: req.method,
    url,
    data,
    headers: {
      'x-api-key': apiKey(),
    },
  })
    .then((data) => data)
    .catch((error) => error);

  return result
};

export default forwardedRequests;
