'use client';

import Link from "next/link";

type SeeAllProps = {
  data: object[], 
  type: string;
}
const SeeAll = ({data, type}: SeeAllProps) => {
  return (
    <Link className="w-max block sm:mx-auto mt-6 font-bold border-b-2 border-b-black text-center" href={`/archive/${type}`}>See All {data?.length} post(s)</Link>
  )
}

export default SeeAll