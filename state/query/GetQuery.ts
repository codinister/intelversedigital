'use client'

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

  const result = useQuery({
    queryKey: [key],
    queryFn: fn,
  });

  const {data,isPending, isError} = result
  return isError ? 'An error occured' : isPending ? [] : data
};

export default GetQuery;
