'use client';

import LandingPageLinks from '@/components/LandingPageLinks';
import useGetQuery from '@/state/query/useGetQuery';

export default function HomePage() {
  const links = useGetQuery('landingpages', 'landingpages') ?? null;

  if(!links) return ''

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Landing Page Links
          </h1>

          <p className="mt-3 text-gray-600">
            Browse and copy any of the available landing page links.
          </p>
        </div>

        <LandingPageLinks links={links} />
      </div>
    </main>
  );
}
