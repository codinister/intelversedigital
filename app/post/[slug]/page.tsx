'use client'

import { useParams } from 'next/navigation';

export default function Post() {
  const {slug} = useParams();



  return <div>{slug}</div>;
}
