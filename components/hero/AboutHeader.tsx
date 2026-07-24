'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';

const AboutHeader = () => {
  const data = useGetQuery('pages', 'pages') || [];

  return (
    <div className="my-6 mx-auto sm:text-center">
      <b>{data[0]?.title || ''}</b>
      <br />
      <Link className='mt-4  block font-bold' href={`/page/${data[0]?.slug || ''}`}>
      Learn more
      </Link>
    </div>
  );
};

export default AboutHeader;
