import adEngineData from "@/data/ad-engine.json";
import type { AdEnginePage } from "@/types/ad-engine";
import { Hero } from "@/components/sales-page/Hero";
import { Pain } from "@/components/sales-page/Pain";
import { Leaks } from "@/components/sales-page/Leaks";
import { Reveal } from "@/components/sales-page/Reveal";
import { Inside } from "@/components/sales-page/Inside";
import { Blueprints } from "@/components/sales-page/Blueprints";
import { Fit } from "@/components/sales-page/Fit";
import { Pricing } from "@/components/sales-page/Pricing";
import { Proof } from "@/components/sales-page/Proof";
import { FAQ } from "@/components/sales-page/FAQ";
import { FinalCTA } from "@/components/sales-page/FinalCTA";


const pageData = adEngineData as AdEnginePage;

export default function HomePage() {
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
    </main>
  );
}
