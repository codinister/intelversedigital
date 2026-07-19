'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { PiEnvelope } from 'react-icons/pi';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const { pages, reviews, settings } = useGetQuery('footer', 'footer');

  return (
    <footer className="py-15 bg-black/80 text-white">
      <div className="cont flex gap-10">
        <div className="flex-1">
          <h5 className="mb-6">{settings?.[0]?.title}</h5>
          <div>{pages?.[0].excerpt}</div>
        </div>
        <div className="flex-1">
          <h5 className="mb-6">Reviews</h5>

          <div>
            <ul>
              {reviews?.map((v: { title: string; slug: string }, k: number) => (
                <li key={k} className="mb-4">
                  <Link
                    className="hover:border-b-2 border-white"
                    href={`/post/${v.slug}`}
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h5 className="mb-6">Get in touch</h5>
          <ul>
            <li className="flex gap-3 mb-4">
              <span>
                <IoLocationOutline />
              </span>
              <span>{settings?.[0].location}</span>
            </li>
            <li className="flex gap-3 mb-4">
              <span>
                <MdOutlineLocalPhone />
              </span>
              <span>{settings?.[0].phone1}</span>
            </li>
            <li className="flex gap-3 mb-4">
              <span>
                <PiEnvelope />
              </span>
              <span>{settings?.[0].email}</span>
            </li>

            <li className=" mb-4">
              <a
                href={settings?.[0].facebook || ''}
                className="group items-center flex gap-3"
              >
                <span className="w-7 h-7 rounded-full border border-white flex justify-center items-center">
                  <GrFacebookOption />
                </span>
                <span
                  className="hover:border-b-2
                 hover:border-white"
                >
                  Facebook
                </span>
              </a>
            </li>

            <li className=" mb-4">
              <a
                href={settings?.[0].facebook || ''}
                className="group items-center flex gap-3"
              >
                <span className="w-7 h-7 rounded-full border border-white flex justify-center items-center">
                  <FaInstagram />
                </span>
                <span
                  className="hover:border-b-2
                 hover:border-white"
                >
                  Instagram
                </span>
              </a>
            </li>

            <li className=" mb-4">
              <a
                href={settings?.[0].facebook || ''}
                className="group items-center flex gap-3"
              >
                <span className="w-7 h-7 rounded-full border border-white flex justify-center items-center">
                  <FaXTwitter />
                </span>
                <span
                  className="hover:border-b-2
                 hover:border-white"
                >
                  Twitter
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 cont flex justify-center gap-10">
        <span>
          &copy; {new Date().getFullYear()} {settings?.[0].title || ''}
        </span>
        <span>
          <Link
            className="hover:border-b-2 hover:border-white"
            href={`/page/${pages?.[1].slug || ''}`}
          >
            {pages?.[1].title || ''}
          </Link>
        </span>
        <span>
          <Link
            className="hover:border-b-2 hover:border-white"
            href={`/page/${pages?.[2].slug || ''}`}
          >
            {pages?.[2].title || ''}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
