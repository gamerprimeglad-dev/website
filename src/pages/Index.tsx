import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import TrustBadgeStrip from "@/components/home/TrustBadgeStrip";
import AboutSection from "@/components/home/AboutSection";
import BrandSection from "@/components/home/BrandSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import GlobalSection from "@/components/home/GlobalSection";
import QualitySection from "@/components/home/QualitySection";
import StorySection from "@/components/home/StorySection";
import ExportReadinessSection from "@/components/home/ExportReadinessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TabbedFormsSection from "@/components/home/TabbedFormsSection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <TrustBadgeStrip />
      <AboutSection />
      <BrandSection />
      <ProductsSection />
      <WhyChooseSection />
      <ExportReadinessSection />
      <GlobalSection />
      <QualitySection />
      <TestimonialsSection />
      <StorySection />
      <TabbedFormsSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
