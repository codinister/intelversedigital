'use client';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

const PostComment = ({id}: {id: string}) => {
  return (
    <>
      <CommentForm id={id} />
    </>
  );
};

export default PostComment;
