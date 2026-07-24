'use client';

import DesktopNav from './DesktopNav';
import Logo from './Logo';

const Nav = () => {
  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between   items-center">
          <div className="sm:flex-1 ml-4 sm:ml-0">
            <DesktopNav />
          </div>
          <div className="sm:flex sm:justify-center sm:flex-10">
            <Logo />
          </div>
          <div className="hidden sm:flex sm:flex-1"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
