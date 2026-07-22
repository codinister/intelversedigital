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
  const { name, image, desc } = data.author;

  return (
    <>
      <AboutHeader />

      <div className="post-cont">
        <PostTitle title={data?.title} />
        <PostDate date={data?.date} />
        <SharePost text={data?.excerpt} />
      </div>

      <div className="cont">
        <PostThumb img={data?.thumb} />
      </div>

      <div className="my-4 post-cont">
        <Author image={image} name={name} desc={desc} />
      </div>

      <div className="post-cont">
        <PortableText value={data?.content || ''} components={components} />
        <PostComment id={data?.id} />
      </div>
    </>
  );
};

export default PostComponent;
