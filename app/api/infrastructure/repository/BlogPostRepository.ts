import serverConfig from '@/state/sanity/server.config';
import BlogRepository from '../../domain/repository/blogRepository';
import { groq } from 'next-sanity';

class BlogPostRepository extends BlogRepository {
  async getPost(type: string) {
    return await serverConfig.fetch(
      groq`
        *[_type == $type]{
        ..., 
        'image': thumb.asset->url, 
        'excerpt': array::join(
        string::split((pt::text(body), '')[0..150] , ''
        +'...'
        )
        }
      `,
      { type },
    );
  }

  async getAbout() {
    return await serverConfig.fetch(groq`*[_type=='about']`);
  }

  async getSettings() {
    return await serverConfig.fetch(groq`
      *[_type == 'settings']{
      ..., 
      'logo': logo.asset->url
      }
      `);
  }
}

export const postData = new BlogPostRepository();
