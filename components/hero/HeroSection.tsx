'use client';

import AboutHeader from './AboutHeader';
import LeftSideBar from './LeftSideBar';
import MiddleBox from './MiddleBox';
import RightSideBar from './RightSideBar';

const HeroSection = () => {
  return (
    <div className="bg-white p-4 mb-13">
      <AboutHeader />
      <div className="sm:flex sm:gap-4">
        <LeftSideBar />
        <MiddleBox />
        <RightSideBar />
      </div>
    </div>
  );
};

export default HeroSection;
