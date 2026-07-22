'use client';

import useGetQuery from '@/state/query/useGetQuery';
import FacebookShare from '../share/FacebookShare';
import Share from './Share';
import Whatsapp from './Whatsapp';
import { usePathname } from 'next/navigation';
import TwitterShare from './TwitterShare';
import LinkedinShare from './LinkedinShare';

interface ShareProductProps {
  url: string;
  text: string;
}

const SharePost = ({ text }: { text: string }) => {
  const path = usePathname();
  const data = useGetQuery('settings', '/v1/settings') || [];
  const url = data[0]?.domain + path;
  const phone = data[0]?.whatsapp;

  return (
    <div className="flex items-center gap-3 my-6">
      <Whatsapp phone={phone} url={url} />
      <FacebookShare url={url} />
      <TwitterShare text={text} url={url} />
      <LinkedinShare url={url} />
    </div>
  );
};

export default SharePost;
