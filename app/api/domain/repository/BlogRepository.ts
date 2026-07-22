abstract class BlogRepository {
  abstract getPost(type: string): Promise<unknown>;
  abstract getPages(): Promise<unknown>;
  abstract getSettings(): Promise<unknown>;
  abstract getMenu(): Promise<unknown>;
  abstract getFooterData(): Promise<unknown>;
  abstract getSinglePost(slug: string): Promise<unknown>;
  abstract createComment({ ...options }): Promise<unknown>;
  abstract getComment(slug: string): Promise<unknown>;
}

export default BlogRepository;
