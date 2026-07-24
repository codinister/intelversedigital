'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import SeeAll from '../SeeAll';

const RightSideBar = () => {
  const data = useGetQuery('tutorials', 'tutorials');

  return (
    <div className="flex-3">
      <h6 className="mb-6 border-t-2 border-t-black">Tutorials</h6>
      {data?.slice(0,2).map(
        (
          v: {
            slug: string;
            thumb: string;
            excerpt: string;
            title: string;
          },
          k: number,
        ) => (
          <Link href={`/post/${v.slug}`} key={k} className="block mb-6">
            <div
              className="sm:h-25 h-50 mb-3"
              style={{
                backgroundImage: `url(${v.thumb})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top left',
              }}
            ></div>
            <strong className="mb-4">{v.title}</strong>
            <div>{v.excerpt?.slice(0, 50) + '...'}</div>
          </Link>
        ),
      )}

      <SeeAll data={data} type="tutorials" />
    </div>
  );
};

export default RightSideBar;
