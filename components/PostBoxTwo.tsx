'use client';

import useGetQuery from '@/state/query/useGetQuery';
import SeeAll from './SeeAll';
import Link from 'next/link';

type PostBoxOneProps = {
  keys: string;
  url: string;
  title: string;
};
const PostBoxTwo = ({ keys, url, title }: PostBoxOneProps) => {
  const data: {
    title: string;
    slug: string;
    excerpt: string;
    thumb: string;
  }[] = useGetQuery(keys, url) || [];

  if (data?.length < 1) {
    return 'PostBoxTwo data error!';
  }

  const [curpost, ...posts] = data;

  return (
    <div className="mb-13 bg-white p-6">
      <h4 className="mb-6 border-t-5 border-t-black">{title}</h4>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <Link href={`/post/${curpost?.slug}`}
            className="h-85 mb=4 block"
            style={{
              backgroundImage: `url(${curpost?.thumb})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top left',
            }}
          ></Link>
          <h5 className="font-bold mt-6 mb-4">{curpost?.title}</h5>
          <div>{curpost?.excerpt}</div>
        </div>

        <div className="flex-1">
          {posts.slice(0, 3).map((v, k) => (
            <Link href={`/post/${v.slug}`} key={k} className="flex gap-4 mb-6">
              <div
                className="h-35 flex-3"
                style={{
                  backgroundImage: `url(${v.thumb})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top left',
                }}
              ></div>

              <div className="flex-5">
                <h6 className="mb-4 font-bold">{v.title}</h6>
                <div>{v.excerpt.slice(0, 70) + '...'}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SeeAll data={data} type={url} />
    </div>
  );
};

export default PostBoxTwo;
