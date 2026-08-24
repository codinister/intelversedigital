import type { PricingSection } from "@/types/ad-engine";
import { Button } from "@/components/ui/button";

export function Pricing({ data }: { data: PricingSection }) {
  return <section id="get" className="bg-wash py-14 md:py-18"><div className="mx-auto max-w-260 px-5.5"><span className="mb-3.5 block text-center text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mb-4 text-center font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold">{data.title}</h2><p className="mx-auto max-w-155 text-center text-[1.05rem] text-muted-ink">{data.description}</p>
    <div className="mx-auto mt-9 max-w-140 rounded-[20px] border-2 border-navy bg-white p-8 text-center shadow-[0_20px_50px_rgba(12,18,38,.10)] md:p-10"><div className="text-[.9rem] text-muted-ink">{data.priceLabel}</div><div className="my-2 font-display text-[3.2rem] font-bold leading-none text-navy">{data.price}</div><div className="mb-6 text-[.9rem] text-muted-ink">{data.once}</div>
      <ul className="mb-6.5 text-left">{data.inclusions.map((item) => <li key={item} className="relative border-b border-[#eef1f6] py-2 pl-8 text-[.96rem] last:border-b-0 before:absolute before:left-1 before:text-cyan before:content-['✓']">{item}</li>)}</ul>
      <Button href={data.cta.href}>{data.cta.label}<small className="block font-body text-[.72rem] font-semibold tracking-[.04em] opacity-75">{data.cta.subtext}</small></Button>
      <div className="mt-4 text-[.85rem] text-muted-ink">{data.paymentNote}</div>
    </div>
  </div></section>;
}
