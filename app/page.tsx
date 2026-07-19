import HeroSection from '@/components/hero/HeroSection';
import PostBoxOne from '@/components/PostBoxOne';
import PostBoxTwo from '@/components/PostBoxTwo';

export default function Home() {
  return (
    <div className="cont">
      <HeroSection />
      <PostBoxOne keys="comparisons" url="comparisons" title="Comparisons" />
      <PostBoxTwo keys="reviews" url="reviews" title="Reviews" />
      <PostBoxOne keys="besttools" url="besttools" title="Best Tools" />
      <PostBoxTwo keys="tutorials" url="tutorials" title="Tutorials" />
    </div>
  );
}
