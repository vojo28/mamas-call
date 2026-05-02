import Header from "@/components/header";
import PartnersHero from "@/components/partners/PartnersHero";
import ProblemSection from "@/components/partners/ProblemSection";
import GapResponseSection from "@/components/partners/GapResponseSection";
import Footer from "@/components/footer";
import HowItWorksSection from "@/components/partners/HowItWorksSection";
import PartnersCTASection from "@/components/partners/PartnersCTASection";
import BottomSide from "@/components/partners/BottomSide";
import CriticalDelaysSection from "@/components/partners/CriticalDelaySection";
import SharedGoalBanner from "@/components/partners/SharedGoalBanner";
import PartnersFinalCTA from "@/components/partners/PartnersFinalCTA";

export default function PartnersPage() {
  return (
    <main>
      <Header />
      <PartnersHero/>
      <ProblemSection />
      <GapResponseSection />
      <BottomSide />
      <HowItWorksSection />
      <CriticalDelaysSection />
      <PartnersCTASection />
      <SharedGoalBanner />
      <PartnersFinalCTA/>
      <Footer />
    </main>
  );
}