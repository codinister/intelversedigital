'uxe client';

import { MenuData } from '@/types/types';
import Link from 'next/link';
import MenuLinks from './MenuLinks';
import { useState } from 'react';

type MenuProps = {
  setClose: (value: boolean) => void;
  menu: {
    reviews: MenuData[];
    comparisons: MenuData[];
    besttools: MenuData[];
    tutorials: MenuData[];
  };
};
const Menu = ({ setClose, menu }: MenuProps) => {
  const reviews = menu['reviews'];
  const comparisons = menu['comparisons'];
  const besttools = menu['besttools'];
  const tutorials = menu['tutorials'];

  const [open, setOpen] = useState<null | string>('');

  const handleClick = (menu: string) => {
    setOpen((prev) => (prev === menu ? null : menu));
  };

  return (
    <ul className="menu-links flex gap-8 flex-col mt-10">
      <li>
        <Link onClick={() => handleClick('reviews')} href="#">
          Reviews
        </Link>
        {open === 'reviews' && <MenuLinks setClose={setClose} data={reviews} />}
      </li>
      <li>
        <Link onClick={() => handleClick('comparisons')} href="#">
          Comparisons
        </Link>
        {open === 'comparisons' && (
          <MenuLinks setClose={setClose} data={comparisons} />
        )}
      </li>
      <li>
        <Link onClick={() => handleClick('besttools')} href="#">
          Best tools
        </Link>
        {open === 'besttools' && (
          <MenuLinks setClose={setClose} data={besttools} />
        )}
      </li>
      <li>
        <Link onClick={() => handleClick('tutorials')} href="#">
          Tutorials
        </Link>
        {open === 'tutorials' && (
          <MenuLinks setClose={setClose} data={tutorials} />
        )}
      </li>
    </ul>
  );
};

export default Menu;
