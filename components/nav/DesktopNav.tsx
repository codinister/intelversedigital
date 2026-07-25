'use client';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo2 from './Logo2';
import Menu from './Menu';
import useGetQuery from '@/state/query/useGetQuery';


const DesktopNav = () => {
  const [open, setOpen] = useState(false);

  const menu = useGetQuery('menu', 'menu');


  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <GiHamburgerMenu className="text-2xl font-bold text-black" />
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="p-8 h-screen">
            <div className="mb-6">
              <Logo2 />
            </div>
            <Menu setClose={setOpen} menu={menu} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DesktopNav;
