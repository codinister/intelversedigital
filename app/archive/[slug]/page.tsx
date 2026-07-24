'use client';

import AboutHeader from '@/components/hero/AboutHeader';
import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Archive() {
  const { slug } = useParams();

  const url = String(slug) || '';

  const posts = useGetQuery(url, url);

  return (
    <div className="p-6">
      <AboutHeader />

      <div className="container mx-auto">
        <div className="p-6 bg-white">
          <h6 className="font-bold mb-13 border-t-5 border-t-black">
            All {url} blog posts
          </h6>

          <div>
            {posts.map(
              (
                v: {
                  thumb: string;
                  title: string;
                  excerpt: string;
                  slug: string;
                },
                k: number,
              ) => (
                <div className="flex sm:flex-row flex-col gap-4 mb-10" key={k}>
                  <Link
                    href={`/post/${v.slug}`}
                    style={{
                      backgroundImage: `url(${v.thumb})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top left',
                    }}
                    className="block flex-3 sm:py-0 py-40 h-50"
                  ></Link>
                  <div className="flex-7">
                    <h6 className="mb-4">{v.title}</h6>
                    <div>{v.excerpt}</div> 
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
