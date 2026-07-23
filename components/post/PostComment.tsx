'use client';

import CommentForm from './CommentForm';

const PostComment = ({id}: {id: string}) => {
  return (
    <>
      <CommentForm id={id} />
    </>
  );
};

export default PostComment;
