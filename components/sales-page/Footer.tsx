import adEngineData from "@/data/ad-engine.json";
import { AdEnginePage } from "@/types/ad-engine";


const pageData = adEngineData as AdEnginePage;
export default function Footer() {

  const data = pageData.footer

  return <footer className="bg-[#080d1c] px-5.5 py-7 text-center text-[.8rem] text-[#5a6478]"><div className="mx-auto max-w-190"><p>{data.copyright}</p><p>{data.trademarks}</p><p>{data.disclaimer}</p></div></footer>;
}
