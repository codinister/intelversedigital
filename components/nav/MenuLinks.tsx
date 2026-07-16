'use client';

import { MenuData } from '@/types/types';
import Link from 'next/link';

type MenuLinksProp = {
  setClose: (value: boolean) => void;
  data: MenuData[];
};
const MenuLinks = ({ setClose, data }: MenuLinksProp) => {
  return (
    <ul>
      {data.map((v, k) => (
        <li key={k}>
          <Link href={`/post/${v.id}`} onClick={() => setClose(false)}>
            {v.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
