import { PortableTextBlock } from '@portabletext/types';


export type MenuData = {
  id: string;
  slug: string;
  type: string;
  title: string;
};

export type CreateCommentType = {
  full_name: string;
  email: string;
  message: string;
  post: string;
};

export type CommentType = {
  full_name: string;
  email: string;
  message: string;
  date: string;
  now: string;
};

export type PostType = {
  author: {
    name: string;
    image: string;
  };
  content: PortableTextBlock;
  slug: string;
  title: string;
  date: string;
  thumb: string;
  excerpt: string;
};

export type SinglePostType = {
  author: {
    name: string;
    image: string;
  };
  comment: {
    full_name: string;
    email: string;
    date: string;
    message: string;
  };
  id: string;
  content: PortableTextBlock;
  slug: string;
  title: string;
  date: string;
  thumb: string;
  excerpt: string;
};

export type PageType = {
  title: string;
  content: PortableTextBlock;
  slug: string;
  excerpt: string;
};
