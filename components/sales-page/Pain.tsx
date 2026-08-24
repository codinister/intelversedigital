import type { PainSection } from "@/types/ad-engine";

export function Pain({ data }: { data: PainSection }) {
  return <section className="bg-white py-14 md:py-18"><div className="mx-auto max-w-260 px-5.5">
    <span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span>
    <h2 className="mb-4 max-w-200 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold leading-[1.15]">{data.title}</h2>
    <div className="max-w-160 text-[1.08rem]">{data.paragraphs.map((p) => <p key={p} className="mb-4">{p}</p>)}<p className="mt-5.5 font-display text-[1.25rem] font-bold text-navy">{data.kicker}</p></div>
  </div></section>;
}
