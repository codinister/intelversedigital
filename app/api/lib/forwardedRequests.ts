import axios from 'axios';
import { NextRequest } from 'next/server';

const forwardedRequests = async (req: NextRequest, url: string) => {
  const data =
    req.method === 'GET' || req.method === 'HEAD' ? req.json() : undefined;

  const result = await axios({
    method: req.method,
    url,
    data,
  })
    .then((data) => data)
    .catch((error) => error);

  return result;
};

export default forwardedRequests;
