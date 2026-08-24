import type { ProofSection } from "@/types/ad-engine";

export function Proof({ data }: { data: ProofSection }) {
  return <section className="py-14 md:py-18"><div className="mx-auto max-w-260 px-5.5"><span className="mb-3.5 inline-block text-[.72rem] font-extrabold uppercase tracking-[.28em] text-cyan">{data.eyebrow}</span><h2 className="mb-4 font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-bold">{data.title}</h2><div className="max-w-160 rounded-[14px] border-2 border-dashed border-[#d9a218] bg-[#fff7e8] p-6.5 text-[.95rem] text-[#7a5a08]"><strong>PUBLISHER NOTE — remove before launch:</strong>{data.publisherNote.replace("PUBLISHER NOTE — remove before launch:", "")}</div></div></section>;
}
