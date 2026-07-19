import { groq } from 'next-sanity';
import serverConfig from '@/state/sanity/server.config';
import BlogRepository from '../../domain/repository/BlogRepository';

const POST_TITLES_QUERY = groq`
  *[_type in ["reviews", "comparisons", "besttools", "tutorials"]]{
    "title": npost.title,
    "id": _id,
    "slug": slug.current,
    "type": _type
  }
`;

const POST_QUERY = groq`
  *[_type == $slug]{
    'author': npost.author->{
    'name': auth_name,  
    "image": auth_img.asset->url, 
    },
    'content': npost.content,
    'slug': npost.slug.current, 
    'title': npost.title,
    'date': _createdAt,
    "thumb": npost.thumb.asset->url,
    "excerpt": array::join(
      string::split(pt::text(npost.content), "")[0..150],
      ""
    ) + "..."
  }
`;

const SETTINGS_QUERY = groq`
  *[_type == "settings"]{
    ...,
    "logo": logo.asset->url
  }
`;

const PAGES_QUERY = groq`
  *[_type == "pages"]{
  ..., 
  "slug": slug.current, 
  "excerpt": array::join(
  string::split(
  (pt::text(content)), ''
  )[0..150], ''
  )+"..."
  }
`;

type MenuItem = {
  id: string;
  slug: string;
  title: string;
  type: 'reviews' | 'comparisons' | 'besttools' | 'tutorials';
};

class BlogPostRepository extends BlogRepository {
  override async getFooterData() {
    const [settings, reviews, pages] = await Promise.allSettled([
      serverConfig.fetch(groq`*[_type=="settings"]{
        ..., 
        "logo": logo.asset->url
      }`),
      serverConfig.fetch(groq`*[_type=="reviews"]{
        "title": npost.title, 
        "slug": npost.slug.current, 
      }`),
      serverConfig.fetch(groq`*[_type == "pages"]{
      "title": title,  
      "slug": slug.current, 
      "excerpt": array::join(
      string::split(
      (pt::text(content)), ""
      )[0..250], ""
      )+"..."
      }`),
    ]);

    return {
      settings: settings.status === 'fulfilled' ? settings.value : [],
      reviews: reviews.status === 'fulfilled' ? reviews.value : [],
      pages: pages.status === 'fulfilled' ? pages.value : [],
    };
  }
  override async getMenu() {
    const result = await serverConfig.fetch<MenuItem[]>(POST_TITLES_QUERY);

    return result.reduce<Record<MenuItem['type'], MenuItem[]>>(
      (groups, item) => {
        if (!groups[item.type]) {
          groups[item.type] = [];
        }

        groups[item.type].push(item);

        return groups;
      },
      {
        reviews: [],
        comparisons: [],
        besttools: [],
        tutorials: [],
      },
    );
  }

  override getPost(slug: string) {
    return serverConfig.fetch(POST_QUERY, { slug });
  }

  override getPages() {
    return serverConfig.fetch(PAGES_QUERY);
  }

  override getSettings() {
    return serverConfig.fetch(SETTINGS_QUERY);
  }
}

export const postData = new BlogPostRepository();
