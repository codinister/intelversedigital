'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

const MiddleBox = () => {
  const [cur_post, ...other_posts] = useGetQuery('besttools', 'besttools');

  const img = cur_post?.thumb || '/empty.png';
  return (
    <div className="flex-8">
      <Link href={`/post/${cur_post?.slug}`}
        className="block h-80 w-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top left',
        }}
      ></Link>

      <h4 className="border-t-4  mt-4 mb-4 border-t-black font-bold">
        {cur_post?.title}
      </h4>
      <div className="mb-6">{cur_post?.excerpt || ''}</div>

      <div className="border-t-2 border-t-black">
        <span>Related</span>

        <div className="flex gap-6">
          {other_posts.map(
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
