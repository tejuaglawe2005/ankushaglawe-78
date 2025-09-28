import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContributionsSection from "@/components/ContributionsSection";
import AwardsSection from "@/components/AwardsSection";
import PositionsSection from "@/components/PositionsSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ContributionsSection />
        <AwardsSection />
        <PositionsSection />
        <VisionSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <h3 className="text-xl font-bold">Dr. Ankush Kisan Aglawe</h3>
              <span className="text-muted">•</span>
              <p className="text-muted">District President • Politician • Social Worker</p>
            </div>
            <p className="text-muted max-w-2xl mx-auto">
              Dedicated to empowering rural communities, youth, and farmers through service, 
              sustainable development, and progressive leadership for a self-reliant India.
            </p>
            <div className="text-sm text-muted">
              © 2024 Dr. Ankush Kisan Aglawe. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;