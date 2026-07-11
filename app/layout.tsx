import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/state/query/QueryProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Interversedigital4u',
  description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.
  `,

  metadataBase: new URL('https://interversedigital4u.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'Interversedigital4u',
    description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.
    `,
    url: 'https://interversedigital4u.com',
    siteName: 'CODENESTA',
    images: [
      {
        url: '/logo.png', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'Codenesta logo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Interversedigital4u',
    description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.`,
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-qb-installed="true"
      suppressHydrationWarning={true}
      className={roboto.className}
    >
      <body cz-shortcut-listen="true">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
