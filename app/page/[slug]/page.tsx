'use client';

import AboutHeader from '@/components/hero/AboutHeader';
import useGetQuery from '@/state/query/useGetQuery';
import { useParams } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

type PagesProps = {
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
export default function Pages() {
  const { slug } = useParams();

  const url = String(slug) || '';

  const data = useGetQuery('pages', 'pages');

  const [result] = data.filter((v: PagesProps) => v.slug === url);

  console.log(result);

  return (
    <div className="p-6 sm:p-0">
      <AboutHeader />

      <div className="container sm:px-50 mx-auto mb-15">
        <h4 className="font-bold mb-7">{result?.title}</h4>

        <div className="text-black">
          <PortableText value={result?.content || ''} />
        </div>
      </div>
    </div>
  );
}
