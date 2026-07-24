'use client';

import { PortableTextBlock } from '@portabletext/types';
import { PortableText } from '@portabletext/react';
import AboutHeader from './hero/AboutHeader';
import PostTitle from './post/PostTitle';
import PostDate from './post/PostDate';
import SharePost from './share/SharePost';
import PostThumb from './post/PostThumb';
import PostComment from './post/PostComment';
import YouTubeComponent from './YouTubeComponent';
import Author from './post/Author';

type PostComponentProp = {
  data: {
    id: string;
    title: string;
    slug: string;
    date: string;
    thumb: string;
    excerpt: string;
    content: PortableTextBlock[];
    author: {
      name: string;
      image: string;
      desc: string;
    };
    comments: {
      full_name: string;
      email: string;
      message: string;
      date: string;
    }[];
  };
};

const components = {
  types: {
    youtube: YouTubeComponent,
  },
};
const PostComponent = ({ data }: PostComponentProp) => {

  const result = data || []
  const authorData = result?.author || []

  return (
    <div className="p-6 sm:p-0">
      <AboutHeader />

      <div className="container mx-auto sm:px-50">
        <PostTitle title={result?.title} />
        <PostDate date={result?.date} />
        <SharePost text={result?.excerpt} />
      </div>

      <div className="container mx-auto">
        <PostThumb img={result?.thumb} />
      </div>

      <div className="my-4 container mx-auto sm:px-50">
        <Author authorData={authorData} />
      </div>

      <div className="container mx-auto sm:px-50">
        <PortableText value={result?.content || ''} components={components} />
        <PostComment id={result?.id} />
      </div>
    </div>
  );
};

export default PostComponent;
