import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import NewsTicker from "@/components/home/NewsTicker"; // <--- Add this
import ProjectGallery from "@/components/home/ProjectGallery"; // <--- Add this
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import ContactPreview from "@/components/home/ContactPreview";
import ClientsMarquee from "@/components/home/ClientsMarquee"; 
// CTASection and NewsTicker are not present; removed their imports/usages

const Index = () => {
  return (
    <Layout>
      <NewsTicker />
      <HeroSection />
      <ClientsMarquee /> 
      <AboutPreview />
      <ProjectGallery /> 
      <ServicesPreview />
      <ContactPreview />
      
    </Layout>
  );
};

export default Index;