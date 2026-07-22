'use client';

import useGetQuery from '@/state/query/useGetQuery';

const CommentList = ({ id }: { id: string }) => {
  const data = useGetQuery('comments', `comments/${id}`);
  if (data?.length < 1) {
    return 'Comment list error!';
  }
  return (
    <div>
      <h6 className="mb-7">All Comments</h6>
      {data.map((v: { full_name: string; message: string }, k: number) => (
        <div key={k} className="flex gap-3 items-center my-6 border-t-2 border-t-[#eee]">
          <div className="w-14 h-14 rounded-full border-2 border-black/40 py-4"
          style={{
            backgroundImage: `url("/avarta.png")`, 
            backgroundSize: 'cover'
          }}
          ></div>
          <div>
            <strong className="mb-1 font-bold">{v.full_name}</strong>
            <p className="mb-2">3 days ago</p>
            <div>{v.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
