"use client";

import { useState } from "react";

type LandingLink = {
  id: string;
  title: string;
};

type LandingPageLinksProps = {
  links: LandingLink[];
};

export default function LandingPageLinks({
  links,
}: LandingPageLinksProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const url = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? ''

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4">
      {links.map((link) => {

        const urlLink = `${url}/landingpage/${link.id}`
        
        return (
        <div
          key={link.id}
          className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-gray-900">
              {link.title}
            </h2>

            <a
              href={urlLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block truncate text-sm text-blue-600 hover:underline"
            >
              {urlLink}
            </a>
          </div>

          <button
            onClick={() => handleCopy(urlLink, link.id)}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 active:scale-95"
          >
            {copiedId === link.id ? "Copied!" : "Copy"}
          </button>
        </div>
      )
    }
      
      )}
    </div>
  );
}
