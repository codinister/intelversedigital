import type { FitSection, FitCard } from "@/types/ad-engine";

function FitCardView({ data, positive }: { data: FitCard; positive: boolean }) {
  return <div className={positive ? "rounded-[14px] border border-[#bfe9ff] bg-[#f0faff] p-6.5" : "rounded-[14px] border border-[#ffd6cd] bg-[#fff6f4] p-6.5"}>
    <h3 className={positive ? "mb-3 text-[1.05rem] text-[#0b6aa8]" : "mb-3 text-[1.05rem] text-[#b23422]"}>{data.title}</h3>
    <ul>{data.items.map((item) => <li key={item} className="mb-2 ml-5 text-[.95rem]">{item}</li>)}</ul>
  </div>;
}
export function Fit({ data }: { data: FitSection }) {
  return <section className="py-14 md:py-18"><div className="mx-auto max-w-260 px-5.5"><span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mb-4 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold">{data.title}</h2><div className="mt-8 grid grid-cols-1 gap-4.5 md:grid-cols-2"><FitCardView data={data.yes} positive /><FitCardView data={data.no} positive={false} /></div></div></section>;
}
