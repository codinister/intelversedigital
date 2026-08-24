import type { FAQItem } from "@/types/ad-engine";

export function Accordion({ items }: { items: FAQItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <details key={item.question} className="border-b border-[#e3e8f0] py-1">
          <summary className="relative cursor-pointer list-none py-3.5 pr-9 font-display text-[1.02rem] font-bold text-navy after:absolute after:right-1.5 after:top-2.5 after:text-[1.3rem] after:font-bold after:text-cyan after:content-['+'] [&::-webkit-details-marker]:hidden">
            {item.question}
          </summary>
          <p className="max-w-[680px] pb-4 text-[.96rem] text-muted-ink">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
