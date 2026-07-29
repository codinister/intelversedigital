'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const sett = useGetQuery('settings', 'settings');

  if (!sett) {
    return '';
  }

  const logos = sett?.[0]?.logo;

  if (!logos) return 'Logo loading...';

  return (
    <Link href="/">
      <Image src={logos} alt="" width={200} height={60} />
    </Link>
  );
};

export default Logo;
