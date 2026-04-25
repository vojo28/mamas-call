import Header from "@/components/header";
import Hero from "@/components/hero";
import UserTypeSection from "@/components/user-type-section";
import BudgetPreviewSection from "@/components/budget-preview-section";
import TrustSection from "@/components/trust-section";
import SecuritySection from "@/components/security-section";
import FinalCTA from "@/components/final-cta";
import PartnershipSection from "@/components/partnership-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <UserTypeSection />
      <BudgetPreviewSection />
      <TrustSection />
      <SecuritySection />
      <FinalCTA />
      <PartnershipSection />
      <Footer />
    </main>
  );
}