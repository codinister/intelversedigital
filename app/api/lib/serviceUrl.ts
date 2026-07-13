import getUrl from './getUrl';

const serviceUrl = () => {
  return {
    reviews: getUrl('reviews'),
    comparisons: getUrl('comparisons'),
    besttools: getUrl('besttools'),
    tutorials: getUrl('tutorials'),
    about: getUrl('about'),
    settings: getUrl('settings'),
  };
};

export default serviceUrl;
