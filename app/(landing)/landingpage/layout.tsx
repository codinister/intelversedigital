import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/sales-page/Footer';
import QueryProvider from '@/state/query/QueryProvider';

export const metadata: Metadata = {
  title:
    'The Ad Engine™ — Run Your Own Facebook & Instagram Ads the Ghana Way | Intelverse Digital',
  description:
    'Ten modules, six plug-and-play campaign blueprints, and a 15-minute weekly ritual — the playbook for Ghanaian business owners done donating to the Boost button.',
  openGraph: {
    title:
      'The Ad Engine™ — Run Your Own Facebook & Instagram Ads the Ghana Way | Intelverse Digital',
    description:
      'Ten modules, six plug-and-play campaign blueprints, and a 15-minute weekly ritual — the playbook for Ghanaian business owners done donating to the Boost button.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Ad Engine™ — Run Your Own Facebook & Instagram Ads the Ghana Way | Intelverse Digital',
    description:
      'Ten modules, six plug-and-play campaign blueprints, and a 15-minute weekly ritual — the playbook for Ghanaian business owners done donating to the Boost button.',
  },
};

export default function LandingPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-qb-installed="true"
      className="roboto_d9e29c6f-module__Hwx4wq__className"
      suppressHydrationWarning={true}
    >
      <body cz-shortcut-listen="true">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
