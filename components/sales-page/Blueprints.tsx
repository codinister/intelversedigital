import type { BlueprintsSection } from "@/types/ad-engine";

export function Blueprints({ data }: { data: BlueprintsSection }) {
  return <section className="bg-navy py-14 text-white md:py-18"><div className="mx-auto max-w-260 px-5.5"><span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mb-4 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold">{data.title}</h2><p className="max-w-155 text-[1.05rem] text-[#b9c2d8]">{data.description}</p>
    <div className="mt-8.5 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">{data.items.map((item) => <div key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center font-display text-[.98rem] font-bold">{item.name}<span className="mt-1 block font-body text-[.78rem] font-normal text-[#8a93a6]">{item.examples}</span></div>)}</div>
    <p className="mt-6 text-[.9rem] text-[#8a93a6]">{data.note}</p>
  </div></section>;
}
