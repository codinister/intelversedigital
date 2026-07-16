import { groq } from 'next-sanity';

import serverConfig from '@/state/sanity/server.config';
import BlogRepository from '../../domain/repository/BlogRepository';

const POST_TITLES_QUERY = groq`
  *[_type in ["reviews", "comparisons", "besttools", "tutorials"]]{
    "title": npost.title,
    "id": _id,
    "type": _type
  }
`;

const POST_QUERY = groq`
  *[_type == $slug]{
    ...,
    "image": npost.thumb.asset->url,
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

const ABOUT_QUERY = groq`
  *[_type == "about"]
`;

type MenuItem = {
  id: string;
  title: string;
  type: 'reviews' | 'comparisons' | 'besttools' | 'tutorials';
};

class BlogPostRepository extends BlogRepository {
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

  override getAbout() {
    return serverConfig.fetch(ABOUT_QUERY);
  }

  override getSettings() {
    return serverConfig.fetch(SETTINGS_QUERY);
  }
}

export const postData = new BlogPostRepository();