import serviceUrl from './serviceUrl';

const serviceRoutes = (path: string[]) => {
  const [newLink, ...rest] = path;

  const obj = serviceUrl();
  const url = obj[newLink as keyof typeof obj] || '';

  if (!url) {
    throw new Error('Invalid endpoint!');
  }

  return `${url}/${rest.join('/')}`;
};

export default serviceRoutes;
