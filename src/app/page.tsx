import { AthleticsSection } from "@/components/AthleticsSection";
import { CampusParallax } from "@/components/CampusParallax";
import { EducationSection } from "@/components/EducationSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroVideo } from "@/components/HeroVideo";
import { IntroSection } from "@/components/IntroSection";
import { LandscapeCarousel } from "@/components/LandscapeCarousel";
import { LatestSection } from "@/components/LatestSection";
import { NewsGrid } from "@/components/NewsGrid";
import { ResearchMatters } from "@/components/ResearchMatters";
import { ResearchSection } from "@/components/ResearchSection";
import { SchoolsGrid } from "@/components/SchoolsGrid";
import { SnapFeatures } from "@/components/SnapFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroVideo />
        <IntroSection />
        <NewsGrid />
        <ResearchSection />
        <SnapFeatures />
        <EducationSection />
        <CampusParallax />
        <AthleticsSection />
        <SchoolsGrid />
        <ResearchMatters />
        <EventsSection />
        <LatestSection />
        <LandscapeCarousel />
      </main>
      <Footer />
    </>
  );
}
