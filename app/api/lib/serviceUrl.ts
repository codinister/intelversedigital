import getUrl from './getUrl';

const serviceUrl = () => {
  return {
    reviews: getUrl('reviews'),
    comparisons: getUrl('comparisons'),
    besttools: getUrl('besttools'),
    tutorials: getUrl('tutorials'),
    pages: getUrl('pages'),
    posts: getUrl('posts'),
    settings: getUrl('settings'),
    menu: getUrl('menu'),
    footer: getUrl('footer'),
    comments: getUrl('comments'),
  };
};

export default serviceUrl;
