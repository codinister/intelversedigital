'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link'
import SeeAll from './SeeAll';

type PostBoxOneProps = {
  keys: string;
  url: string;
  title: string;
};
const PostBoxOne = ({ keys, url, title }: PostBoxOneProps) => {
  const data: {
    title: string;
    slug: string;
    excerpt: string;
    thumb: string;
  }[] = useGetQuery(keys, url);
  return (
    <div className="bg-white p-6 mb-10">
      <h4 className="mb-6 border-t-5 border-t-black">{title}</h4>

      <div className="flex sm:flex-row flex-col  gap-4">
        {data.slice(0,4).map((v, k: number) => (
          <Link href={`/post/${v.slug}`} key={k} className="flex-1">
            <div
              className="h-50"
              style={{
                backgroundImage: `url(${v.thumb})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top left',
              }}
            ></div>
            <h6 className="my-4 font-bold">{v.title}</h6>
            <div>{v.excerpt}</div>
          </Link>
        ))}
      </div>

      <SeeAll data={data} type={url} />
    </div>
  );
};

export default PostBoxOne;
