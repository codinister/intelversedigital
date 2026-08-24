import type { RevealSection } from "@/types/ad-engine";

export function Reveal({ data }: { data: RevealSection }) {
  return <section className="relative overflow-hidden bg-navy py-14 text-white md:py-18"><div className="absolute -left-44 -top-52 h-130 w-130 rounded-full bg-[radial-gradient(circle,rgba(28,196,255,.16),transparent_65%)]" />
    <div className="relative z-10 mx-auto grid max-w-260 grid-cols-1 items-center gap-9 px-5.5 md:grid-cols-[.85fr_1.15fr] md:gap-13">
      <div className="rounded-4.5 border border-cyan/35 bg-linear-to-br from-navy-2 to-navy p-[42px_30px] text-center shadow-[0_30px_60px_rgba(0,0,0,.45)]">
        <div className="text-[.72rem] font-extrabold uppercase tracking-[.3em] text-gold">{data.playbook.label}</div>
        <div className="my-2.5 font-display text-[2.3rem] font-bold">{data.playbook.title} <span className="text-cyan">{data.playbook.titleHighlight}</span>™</div>
        <div className="mb-5.5 text-[.92rem] text-[#b9c2d8]">{data.playbook.subtitle}</div>
        <div className="border-t border-white/10 pt-4.5 text-[.85rem] text-[#8a93a6]">{data.playbook.meta}</div>
      </div>
      <div><span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mb-4 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold leading-[1.15]">{data.title}</h2>
        {data.paragraphs.map((p) => <p key={p.text} className="mb-3.5 text-[#b9c2d8]">{p.strong ? <>{p.text.split(p.strong)[0]}<strong className="text-white">{p.strong}</strong>{p.text.split(p.strong)[1]}</> : p.text}</p>)}
      </div>
    </div>
  </section>;
}
