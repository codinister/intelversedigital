'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

type QueryProviderProp = {
  children: React.ReactNode;
};
const QueryProvider = ({ children }: QueryProviderProp) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
