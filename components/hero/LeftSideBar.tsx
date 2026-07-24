'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import SeeAll from '../SeeAll';

const LeftSideBar = () => {
  const post = useGetQuery('reviews', 'reviews');

  return (
    <div className="flex-3 mb-10">
      <h6 className="mb-6 border-t-2 border-black">Reviews</h6>

      <ul>
        {post?.slice(0,5).map(
          (v: { slug: string; title: string; excerpt: string }, k: number) => (
            <li key={k} className="mb-4">
              <Link
                className="hover:text-black/50 mb-4"
                href={`/post/${v.slug}`}
              >
                <strong>{v.title}</strong>
                <div>{v.excerpt.slice(0, 45) + '...'}</div>
              </Link>
            </li>
          ),
        )}
      </ul>

      <SeeAll data={post} type="reviews" />
    </div>
  );
};

export default LeftSideBar;
