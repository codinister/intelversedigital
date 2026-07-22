'use client';

import { formatDate } from '../DateFormats';

type PostDateProp = {
  date: string;
};
const PostDate = ({ date }: PostDateProp) => {
  const dt = formatDate(date);
  return (
    <div className="flex gap-3 text-black/70">
      <span>Updated</span> <span>{dt}</span> 
    </div>
  );
};

export default PostDate;
