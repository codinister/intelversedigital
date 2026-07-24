'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const sett = useGetQuery('settings', 'settings');
const settLogo = sett?.[0]?.logo || '/empty.png'
  return (
    <Link href="/">
    <Image
      src={settLogo}
      alt=""
      width={200}
      height={60}
    />
    </Link>
  );
};

export default Logo;
