import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ContactPreview />
    </Layout>
  );
};

export default Index;
