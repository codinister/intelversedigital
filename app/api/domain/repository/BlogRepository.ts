import {
  CommentType,
  CreateCommentType,
  MenuData,
  PageType,
  PostType,
  SinglePostType,
} from '@/types/types';

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
  abstract createComment({ ...options }): void;
  abstract getComment(slug: string): Promise<CommentType[]>;
  abstract getFooterData(): Promise<unknown>;
  abstract getSettings(): Promise<unknown>;
}

export default BlogRepository;
