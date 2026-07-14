import serverConfig from '@/state/sanity/server.config';
import BlogRepository from '../../domain/repository/BlogRepository';
import { groq } from 'next-sanity';

class BlogPostRepository extends BlogRepository {
  async getPost(slug: string) {
    return await serverConfig.fetch(
      groq`
        *[_type == $slug]{
        ..., 
        'image': npost.thumb.asset->url, 
        'excerpt': array::join(
        string::split((pt::text(npost.content)), '')[0..150], ''
        )+'...'

    }
 
      `,
      { slug },
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
