import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { LoreSection } from "@/components/LoreSection";
import { SightingsSection } from "@/components/SightingsSection";
import { MemeCarousel } from "@/components/MemeCarousel";
import { SurvivalGuide } from "@/components/SurvivalGuide";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LoreSection />
        <SightingsSection />
        <MemeCarousel />
        <SurvivalGuide />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
