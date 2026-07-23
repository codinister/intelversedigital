import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/state/query/QueryProvider';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'intelversedigital',
  description: `IntelverseDigital: Empowering the Digital World Through Technology Insights and Innovation
IntelverseDigital is a technology startup based in Accra, Ghana, founded by Julius Horla Kinih.
  `,

  metadataBase: new URL('https://intelversedigital.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'intelversedigital',
    description: `IntelverseDigital: Empowering the Digital World Through Technology Insights and Innovation
IntelverseDigital is a technology startup based in Accra, Ghana, founded by Julius Horla Kinih.
    `,
    url: 'https://intelversedigital.com',
    siteName: 'Intelversedigital',
    images: [
      {
        url: '/logo.jpeg', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'intelversedigital logo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'intelversedigital',
    description: `IntelverseDigital: Empowering the Digital World Through Technology Insights and Innovation
IntelverseDigital is a technology startup based in Accra, Ghana, founded by Julius Horla Kinih.`,
    images: ['/logo.jpeg'],
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
        <QueryProvider>
          <Nav />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
