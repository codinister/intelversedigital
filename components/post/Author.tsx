'use client';

type AuthorProps = {
  name: string;
  image: string;
  desc: string;
};
const Author = ({ authorData }: {authorData: AuthorProps}) => {


  return (
    <div className="flex gap-4">
      <div
        className="w-18.75 h-17.5 rounded-full border-4 border-black/50 p-2"
        style={{
          backgroundImage: `url(${authorData?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
        }}
      ></div>
      <div>
        <strong className="mb-2">By {authorData?.name}</strong>
        <p>{authorData?.desc}</p>
      </div>
    </div>
  );
};

export default Author;
