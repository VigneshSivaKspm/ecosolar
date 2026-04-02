import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { AchievementsBar } from "./components/AchievementsBar";
import { ServicesGrid } from "./components/ServicesGrid";
import { TechnicalSpecs } from "./components/TechnicalSpecs";
import { HowItWorks } from "./components/HowItWorks";
import { FinancialAdvantages } from "./components/FinancialAdvantages";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CustomerRoadmap } from "./components/CustomerRoadmap";
import { Footer } from "./components/Footer";
import { FloatingCallButton } from "./components/FloatingCallButton";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <AchievementsBar />
      <ServicesGrid />
      <TechnicalSpecs />
      <HowItWorks />
      <FinancialAdvantages />
      <TestimonialsSection />
      <FAQSection />
      <CustomerRoadmap />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
