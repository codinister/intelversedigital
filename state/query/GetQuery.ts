import { useQuery } from '@tanstack/react-query';
import fetch from './fetch';

type getQueryProp = {
  key: string;
  url: string;
};
const GetQuery = ({ key, url }: getQueryProp) => {
  const fn = () => {
    return fetch({ url });
  };

  return useQuery({
    queryKey: [key],
    queryFn: fn,
  });
};

export default GetQuery;
