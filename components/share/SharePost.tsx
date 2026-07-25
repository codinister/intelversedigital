'use client';

import useGetQuery from '@/state/query/useGetQuery';
import FacebookShare from '../share/FacebookShare';
import { usePathname } from 'next/navigation';
import TwitterShare from './TwitterShare';
import LinkedinShare from './LinkedinShare';
import WhatsappShare from './WhatsappShare';


const SharePost = ({ text }: { text: string }) => {
  const path = usePathname();
  const data = useGetQuery('settings', '/v1/settings') || [];
  const url = data[0]?.domain + path;

  return (
    <div className="flex items-center gap-3 my-6">
      <WhatsappShare  url={url} />
      <FacebookShare url={url} />
      <TwitterShare text={text} url={url} />
      <LinkedinShare url={url} />
    </div>
  );
};

export default SharePost;
