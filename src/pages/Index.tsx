import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import NewsTicker from "@/components/home/NewsTicker"; 
import ProjectGallery from "@/components/home/ProjectGallery"; 
import AboutPreview from "@/components/home/AboutPreview";
import StatsStrip from "@/components/home/StatsStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import ContactPreview from "@/components/home/ContactPreview";
import ClientsMarquee from "@/components/home/ClientsMarquee"; 
import Certifications from "@/components/home/Certifications";


const Index = () => {
  return (
    <Layout>
      <NewsTicker />
      <HeroSection />
      <StatsStrip />
      <AboutPreview />
      <ProjectGallery /> 
      <ServicesPreview />
      <Certifications />
      <ClientsMarquee /> 
      <ContactPreview />
      
    </Layout>
  );
};

export default Index;