import { PageTransition } from "../components/PageTransition";
import { Hero } from "../sections/Hero";
import { TrustStrip } from "../sections/TrustStrip";
import { ServicesGrid } from "../sections/ServicesGrid";
import { BeforeAfterSlider } from "../sections/BeforeAfterSlider";
import { GalleryPreview } from "../sections/GalleryPreview";
import { ReviewsCTA } from "../sections/ReviewsCTA";
import { CTABanner } from "../sections/CTABanner";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <BeforeAfterSlider />
      <GalleryPreview />
      <ReviewsCTA />
      <CTABanner />
    </PageTransition>
  );
}
