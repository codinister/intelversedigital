'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';

const AboutHeader = () => {
  const [about] = useGetQuery('pages', 'pages');

  return (
    <div className="mb-8 mx-auto text-center">
      <b>{about?.title || ''}</b>
      <br />
      <Link className='font-bold' href={`/page/${about?.slug || ''}`}>
      Learn more
      </Link>
    </div>
  );
};

export default AboutHeader;
