'use client';

import Image from 'next/image';
import { CommentType } from '@/types/types';
import { daysleft } from '../DateFormats';

interface CommentListProps {
  data: CommentType[];
}

const CommentList = ({ data }: CommentListProps) => {
  if (!data?.length) {
    return <p>No comments available.</p>;
  }

  return (
    <div>
      <h6 className="mb-7">All Comments</h6>

      {data.map(({ full_name, message, now, date }, index) => {
        const days = daysleft(now, date);
        const daysAgo = days < 1 ? 'Today' : `${days} day(s) ago`;

        return (
          <div
            key={index}
            className="my-6 flex items-center gap-3 border-t-2 border-t-[#eee] pt-4"
          >
            <Image
              src="/avarta.png"
              alt={full_name}
              width={56}
              height={56}
              className="rounded-full border-2 border-black/40"
            />

            <div>
              <strong className="mb-1 block font-bold">{full_name}</strong>
              <p className="mb-2 text-sm text-gray-500">{daysAgo}</p>
              <p>{message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;