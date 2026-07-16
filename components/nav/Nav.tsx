'use client';

import DesktopNav from './DesktopNav';
import Logo from './Logo';

const Nav = () => {
  return (
    <>
      <nav>
        <div className="cont flex justify-between items-center">
          <div className="flex-1">
            <DesktopNav />
          </div>
          <div className="hidden sm:flex sm:justify-center sm:flex-10">
            <Logo />
          </div>
          <div className="hidden sm:flex sm:flex-1"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
