import type { FAQSection } from "@/types/ad-engine";
import { Accordion } from "@/components/ui/accordion";

export function FAQ({ data }: { data: FAQSection }) {
  return <section className="py-14 md:py-18"><div className="mx-auto max-w-260 px-5.5"><span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mb-4 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold">{data.title}</h2><Accordion items={data.items} /></div></section>;
}
