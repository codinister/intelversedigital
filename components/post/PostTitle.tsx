'use client'

type PostTitleProp = {
  title: string;
}
const PostTitle = ({title}: PostTitleProp) => {
  return (
    <h4 className="font-bold mb-2 border-t-5 border-t-black">{title}</h4>
  )
}

export default PostTitle