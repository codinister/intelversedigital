'use client';

type AuthorProps = {
  name: string;
  image: string;
  desc: string;
};
const Author = ({ name, image, desc }: AuthorProps) => {
  return (
    <div className="flex gap-4">
      <div
        className="w-[75px] h-[70px] rounded-full border-4 border-black/50 p-2"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
        }}
      ></div>
      <div>
        <strong className="mb-2">By {name}</strong>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Author;
