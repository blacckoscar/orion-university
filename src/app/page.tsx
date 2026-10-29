import { AthleticsSection } from "@/components/AthleticsSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroVideo } from "@/components/HeroVideo";
import { IntroSection } from "@/components/IntroSection";
import { LandscapeCarousel } from "@/components/LandscapeCarousel";
import { LatestSection } from "@/components/LatestSection";
import { NewsGrid } from "@/components/NewsGrid";
import { ResearchSection } from "@/components/ResearchSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroVideo />
        <IntroSection />
        <NewsGrid />
        <ResearchSection />
        <EducationSection />
        <AthleticsSection />
        <LatestSection />
        <LandscapeCarousel />
      </main>
      <Footer />
    </>
  );
}
