import { apiKey } from '@/app/api/lib/envConfigs';
import LandingPageComponent from '@/components/LandingPageComponent';


export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const id = (await params)?.id;

  const result = await fetch(
    `${process.env.SITE_DOMAIN}/api/presentation/landingpages/${id}`,
    {
      headers: {
        'x-api-key': apiKey(),
      },
      cache: 'no-store',
    },
  );

  const data = await result.json();

  if (!data) return { title: 'No data found!' };



  return {
    title: data?.metadata.title,
    description: data?.metadata.description,
    openGraph: {
      title: data?.metadata.title,
      description: data?.metadata.description,
      images: [
        {
          url: data?.thumb + '?w=1200&h=630&fit=crop',
          width: 1200,
          height: 630,
        },
      ],

      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: data?.metadata.title,
      description: data?.metadata.description,
      images: [data?.thumb],
    },
  };
}

const LandingPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const id = (await params)?.id;
  const data = await fetch(
    `${process.env.SITE_DOMAIN}/api/presentation/landingpages/${id}`,
    {
      headers: {
        'x-api-key': apiKey(),
      },
      cache: 'no-store',
    },
  );

  const result = await data.json();

  return <LandingPageComponent data={result} />;
};

export default LandingPage
