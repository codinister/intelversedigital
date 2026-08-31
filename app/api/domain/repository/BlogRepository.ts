import {
  CommentType,
  MenuData,
  PageType,
  PostType,
  SinglePostType,
  SingleLandingPageType,
} from '@/types/types';
import { string } from 'zod';

abstract class BlogRepository {
  abstract getPost(type: string): Promise<PostType[]>;
  abstract getPages(): Promise<PageType[]>;
  abstract getMenu(): Promise<{
    reviews: MenuData[];
    comparisons: MenuData[];
    besttools: MenuData[];
    tutorials: MenuData[];
  }>;

  abstract getSinglePost(slug: string): Promise<SinglePostType[]>;

  abstract getSingleLandingPage(id: string): Promise<SingleLandingPageType[]>;

  abstract getLandingPage(): Promise<{
    id: string; 
    title: string;
  }[]>;

  abstract createComment({ ...options }): void;
  abstract getComment(slug: string): Promise<CommentType[]>;
  abstract getFooterData(): Promise<unknown>;
  abstract getSettings(): Promise<unknown>;
}

export default BlogRepository;
