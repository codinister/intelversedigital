'use client';

import { SingleLandingPageType } from '@/types/types';
import { Hero } from '@/components/sales-page/Hero';
import { Pain } from '@/components/sales-page/Pain';
import { Leaks } from '@/components/sales-page/Leaks';
import { Reveal } from '@/components/sales-page/Reveal';
import { Inside } from '@/components/sales-page/Inside';
import { Blueprints } from '@/components/sales-page/Blueprints';
import { Fit } from '@/components/sales-page/Fit';
import { Pricing } from '@/components/sales-page/Pricing';
import { Proof } from '@/components/sales-page/Proof';
import { FAQ } from '@/components/sales-page/FAQ';
import { FinalCTA } from '@/components/sales-page/FinalCTA';
import Footer from './sales-page/Footer';

type LandingPagePropType = {
  data: SingleLandingPageType;
};

const LandingPageComponent = ({ data }: LandingPagePropType) => {
  const pageData = data ?? null;

  if (!pageData) return '';

  return (
    <main>
      <Hero data={pageData.hero} />
      <Pain data={pageData.pain} />
      <Leaks data={pageData.leaks} />
      <Reveal data={pageData.reveal} />
      <Inside data={pageData.inside} />
      <Blueprints data={pageData.blueprints} />
      <Fit data={pageData.fit} />
      <Pricing data={pageData.pricing} />
      <Proof data={pageData.proof} />
      <FAQ data={pageData.faq} />
      <FinalCTA data={pageData.finalCta} />
      <Footer data={pageData.footer} />
    </main>
  );
};

export default LandingPageComponent;
