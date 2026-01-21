import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, ImageIcon, Settings } from "lucide-react";
import { servicesData } from "@/data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the service that matches the ID in the URL
  const service = servicesData.find((s) => s.id === id);

  // If service not found, redirect back to services list
  useEffect(() => {
    if (!service) {
      navigate("/services");
    } else {
      window.scrollTo(0, 0); // Scroll to top on load
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <Layout>
      {/* 1. HERO SECTION (Full Height Image with Overlay) */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-16 animate-fade-in">
             <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Services
             </Link>
             
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                   <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <span className="font-bold uppercase tracking-widest text-sm text-cyan-200">{service.subtitle}</span>
             </div>
             
             <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
                 {service.title}
             </h1>
        </div>
      </section>

      {/* 2. DETAILED CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-16">
                
                {/* Left Column: Description & Gallery */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Overview</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12">
                        {service.detailedDescription}
                    </p>

                      {/* --- HOW IT WORKS SECTION --- */}
                    {service.howItWorksDescription && service.howItWorksImage && (
                        <div className="mb-16 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <Settings className="w-6 h-6 text-primary" /> How It Works
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                        {service.howItWorksDescription}
                                    </p>
                                </div>
                                <div className="relative min-h-[300px]">
                                    <img 
                                        src={service.howItWorksImage} 
                                        alt="How it works diagram" 
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                      {service.benefits && service.benefits.length > 0 && (
                        <div className="mb-12 space-y-4">
                          <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Detailed Benefits</h3>
                          <div className="grid sm gap-4">
                            {service.benefits.map((benefit) => (
                              <div key={benefit.title} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <p className="text-sm font-semibold text-primary mb-1">{benefit.title}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <ImageIcon className="w-6 h-6 text-primary" /> Project Gallery
                      </h3>

                      {/* Gallery Grid */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        {service.gallery.map((photo, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center"
                          >
                            <img 
                              src={photo} 
                              alt={`Project ${idx + 1}`} 
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                </div>

                {/* Right Column: Sticky Sidebar (Key Benefits & CTA) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
                        
                        <div className="space-y-4 mb-10">
                            {service.keyPoints.map((point) => (
                                <div key={point} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                             <div className="text-center mb-2">
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Ready to start?</p>
                             </div>
                             <Link to="/contact">
                                <Button variant="hero" size="xl" className="w-full shadow-lg group">
                                    Get a Free Quote
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>
                             </Link>
                             <p className="text-xs text-center text-slate-400 mt-4">
                                No obligation. Fast response guaranteed.
                             </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 3. CTA FOOTER */}
      <section className="py-24 bg-secondary/10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Have questions about {service.title}?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Our engineers are ready to discuss your project requirements and provide a technical consultation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
             <Link to="/contact">
                <Button size="lg">Contact Us</Button>
             </Link>
             <Link to="/services">
                <Button variant="outline" size="lg">View Other Services</Button>
             </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
