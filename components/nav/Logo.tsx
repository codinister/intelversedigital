'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const sett = useGetQuery('settings', 'settings');

  return (
    <Link href="/">
    <Image
      src={sett[0]?.logo || '/empty.png'}
      alt=""
      width={200}
      height={60}
    />
    </Link>
  );
};

export default Logo;
