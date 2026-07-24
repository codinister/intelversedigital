'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';

const MiddleBox = () => {
  const data = useGetQuery('besttools', 'besttools');

  const img = data?.[0]?.thumb || '/empty.png';
  return (
    <div className="flex-8 mb-10 sm:mb-0">
      <Link href={`/post/${data?.[0]?.slug}`}
        className="block  h-50 sm:h-80 sm:w-full"
        style={{ 
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top left',
        }}
      ></Link>

      <h4 className="border-t-4  mt-4 mb-4 border-t-black font-bold">
        {data?.[0]?.title}
      </h4>
      <div className="mb-6">{data?.[0]?.excerpt || ''}</div>

      <div className="py-6 border-t-2 border-t-black">
        <span>Related</span>

        <div className="flex gap-6">
          {data?.slice(1, data.length).map(
            (v: { thumb: string; title: string; slug: string }, k: number) => (
              <Link  href={`/post/${v.slug}`} key={k} className="flex gap-2">
                {v.title}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default MiddleBox;
