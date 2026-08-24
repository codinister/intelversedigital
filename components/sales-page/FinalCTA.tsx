import type { FinalCTASection } from "@/types/ad-engine";
import { Button } from "@/components/ui/button";

export function FinalCTA({ data }: { data: FinalCTASection }) {
  return <section className="relative overflow-hidden bg-navy py-14 text-center text-white md:py-18"><div className="absolute -bottom-72 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,178,36,.14),transparent_65%)]" /><div className="relative z-10 mx-auto max-w-260 px-5.5"><span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mx-auto mb-4 max-w-160 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold">{data.title}</h2><p className="mx-auto mb-7 max-w-140 text-[#b9c2d8]">{data.description}</p><Button href={data.cta.href}>{data.cta.label}<small className="block font-body text-[.72rem] font-semibold tracking-[.04em] opacity-75">{data.cta.subtext}</small></Button></div></section>;
}
