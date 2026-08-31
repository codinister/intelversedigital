import { FooterSection } from '@/types/ad-engine';

export default function Footer({ data }: { data: FooterSection }) {
  return (
    <footer className="bg-[#080d1c] px-5.5 py-7 text-center text-[.8rem] text-[#5a6478]">
      <div className="mx-auto max-w-190">
        <p>{data.copyright}</p>
        <p>{data.trademarks}</p>
        <p>{data.disclaimer}</p>
      </div>
    </footer>
  );
}
