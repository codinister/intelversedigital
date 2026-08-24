import type { InsideSection } from "@/types/ad-engine";

export function Inside({ data }: { data: InsideSection }) {
  return <section className="py-14 md:py-18"><div className="mx-auto max-w-260 px-5.5"><span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mb-4 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold leading-[1.15]">{data.title}</h2>
    <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4.5">{data.items.map((item) => <article key={item.title} className="rounded-[14px] bg-wash p-6"><div className="text-[.7rem] font-extrabold uppercase tracking-[.25em] text-gold">{item.label}</div><h3 className="my-1.5 font-display text-[1.15rem] text-navy">{item.title}</h3><p className="text-[.93rem] text-muted-ink">{item.description}</p></article>)}</div>
  </div></section>;
}
