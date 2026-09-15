import { PageTransition } from "../components/PageTransition";
import { Hero } from "../sections/Hero";
import { AboutTeaser } from "../sections/AboutTeaser";
import { ServicesGrid } from "../sections/ServicesGrid";
import { ProcessTimeline } from "../sections/ProcessTimeline";
import { GalleryPreview } from "../sections/GalleryPreview";
import { WhyUsGrid } from "../sections/WhyUsGrid";
import { ReviewsCTA } from "../sections/ReviewsCTA";
import { CTABanner } from "../sections/CTABanner";
import { Marquee } from "../components/Marquee";
import { services } from "../data/content";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Marquee items={services.map((s) => s.name)} />
      <AboutTeaser />
      <ServicesGrid />
      <ProcessTimeline />
      <GalleryPreview />
      <WhyUsGrid />
      <ReviewsCTA />
      <CTABanner />
    </PageTransition>
  );
}
