'use client';

import { FaShare } from 'react-icons/fa';
import { motion } from 'motion/react';

const Share = ({ url }: { url: string }) => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;



  return (
    <a  href={whatsappUrl} title="Share on whatsapp">
      <FaShare size={25} />
    </a>
  );
};

export default Share;
