'use client';

import FacebookShare from '../share/FacebookShare';
import { usePathname } from 'next/navigation';
import TwitterShare from './TwitterShare';
import LinkedinShare from './LinkedinShare';
import WhatsappShare from './WhatsappShare';

const SharePost = ({ text }: { text: string }) => {
  const path = usePathname();

  if (!process.env.SITE_DOMAIN) {
    return 'Site Domain is not set in the .env file';
  }

  const domain = process.env.SITE_DOMAIN;

  const url = domain + path;

  return (
    <div className="flex items-center gap-3 my-6">
      <WhatsappShare url={url} />
      <FacebookShare url={url} />
      <TwitterShare text={text} url={url} />
      <LinkedinShare url={url} />
    </div>
  );
};

export default SharePost;
