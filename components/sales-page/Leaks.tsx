import type { LeaksSection } from "@/types/ad-engine";

export function Leaks({ data }: { data: LeaksSection }) {
  return <section className="bg-wash py-14 md:py-18"><div className="mx-auto max-w-260 px-5.5">
    <span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span>
    <h2 className="mb-4 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold leading-[1.15]">{data.title}</h2>
    <p className="max-w-155 text-[1.05rem] text-muted-ink">{data.description}</p>
    <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">{data.items.map((item) => <div key={item.title} className="rounded-xl border border-[#e3e8f0] border-l-4 border-l-cyan bg-white p-4 text-[.94rem]"><b className="mb-0.5 block font-display text-navy">{item.title}</b>{item.description}</div>)}</div>
  </div></section>;
}
