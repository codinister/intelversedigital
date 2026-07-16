abstract class BlogRepository {
  abstract getPost(type: string): Promise<unknown>;
  abstract getAbout(): Promise<unknown>;
  abstract getSettings(): Promise<unknown>;
  abstract getMenu(): Promise<unknown>;
}

export default BlogRepository;
