'use client';

import navData from '@/components/nav/navDava';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import useGetQuery from '@/state/query/useGetQuery';


const DesktopNav = () => {
  const path = usePathname();

  const data = useGetQuery('settings', 'settings');

  return (
    <div className="sm:flex hidden mx-auto container py-3  justify-between items-center">
      <div
 
      >
        <Image
          src={data[0]?.logo || '/empty.png'}
          alt="logo"
          width={100}
          height={70}
        />
      </div>
      <div>
        <ul 


        className="flex gap-6 ">
          {navData.map(
            (
              v: {
                name: string;
                path: string;
              },
              k: number,
            ) => (
              <li 
     
              key={k}>
                <Link
                  className={`block rounded-3xl px-3 hover:bg-primary hover:text-black ${path === v.path ? 'bg-primary text-black' : 'text-white'}`}
                  href={v.path}
                >
                  {v.name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
