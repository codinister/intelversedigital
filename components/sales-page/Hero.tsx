import type { HeroSection } from "@/types/ad-engine";
import { Button } from "@/components/ui/button";

export function Hero({ data }: { data: HeroSection }) {
  return (
    <header className="relative overflow-hidden bg-navy py-16 text-white md:py-[84px]">
      <div className="absolute -right-40 -top-56 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(28,196,255,.20),transparent_65%)]" />
      <div className="absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,178,36,.13),transparent_65%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-9 px-[22px] md:grid-cols-[1.2fr_.8fr] md:gap-12">
        <div>
          <div className="font-body text-[.75rem] font-extrabold uppercase tracking-[.4em] text-cyan">{data.brand}</div>
          <h1 className="my-5 font-display text-[clamp(2.1rem,5.5vw,3.4rem)] font-bold leading-[1.08] tracking-[-.015em]">
            {data.headline}<br /><em className="not-italic text-cyan">{data.highlight}</em>
          </h1>
          <p className="mb-7 max-w-[520px] text-[1.12rem] text-[#b9c2d8]">{data.description}</p>
          <Button href={data.cta.href} aria-label={data.cta.label}>
            {data.cta.label}
            {data.cta.subtext && <small className="block font-body text-[.72rem] font-semibold tracking-[.04em] opacity-75">{data.cta.subtext}</small>}
          </Button>
          <div className="mt-4 text-[.85rem] text-[#8a93a6]">{data.cast}</div>
        </div>
        <div className="mx-auto max-w-[420px] rounded-[20px] border border-white/10 bg-white/5 p-7 text-center backdrop-blur-[2px]">
          <div className="mb-[18px] text-[.72rem] font-extrabold uppercase tracking-[.25em] text-[#8a93a6]">{data.retiredLabel}</div>
          <span className="relative inline-block rounded-[10px] bg-[#2d3a5f] px-11 py-4 font-display text-[1.15rem] font-bold tracking-[.02em] text-[#9fb0d8] after:absolute after:left-[-6%] after:right-[-6%] after:top-1/2 after:h-[5px] after:rotate-[-7deg] after:rounded-[3px] after:bg-gold after:content-['']">{data.boostLabel}</span>
          <div className="mt-[18px] text-[.98rem] text-[#d9e2f5]">{data.epitaph}<br /><strong className="text-gold">{data.epitaphStrong}</strong></div>
        </div>
      </div>
    </header>
  );
}
