'use client';

import Image from 'next/image';

const PostThumb = ({ img }: { img: string }) => {
  return (
    <div className="my-13">
      <Image src={img || 'empty.png'} alt="" width={1000} height={500} />
    </div>
  );
};

export default PostThumb;
