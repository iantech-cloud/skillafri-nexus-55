import NavigationHeader from "@/components/NavigationHeader";
import Hero from "@/components/sections/Hero";
import VisionSection from "@/components/VisionSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { LiveChatSupport } from "@/components/LiveChatSupport";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <Hero />
        <VisionSection />
        <ServicesSection />
        <WhyChooseSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <LiveChatSupport />
    </div>
  );
};

export default Index;
