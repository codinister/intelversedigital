import { apiKey } from '@/app/api/lib/envConfigs';
import PostComponent from '@/components/PostComponent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params)?.slug;


  const result = await fetch(
    `${process.env.SITE_DOMAIN}/api/presentation/posts/${slug}`,
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
    title: data?.title,
    description: data?.excerpt,
    openGraph: {
      title: data?.title,
      description: data?.excerpt,
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
      title: data?.title,
      description: data?.excerpt,
      images: [data?.thumb],
    },
  };
}

const Post = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const slug = (await params)?.slug;
  const data = await fetch(
    `${process.env.SITE_DOMAIN}/api/presentation/posts/${slug}`,
    {
      headers: {
        'x-api-key': apiKey(),
      },
      cache: 'no-store',
    },
  );

  const result = await data.json();

  return <PostComponent data={result} />;
};

export default Post;
