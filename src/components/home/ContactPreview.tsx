import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Zap, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const freeOffers = [
  "Free Price Estimate",
  "Free Consultation",
  "Free Site Survey",
  "Free Quotation",
];

const ContactPreview = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay for effect
    setTimeout(() => {
        setIsSubmitting(false);
        toast({
        title: "Quote Request Submitted!",
        description: "Our team will contact you within 5 minutes.",
        });
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      
      {/* 1. Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
           <span className="text-[#00AEEF] text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#FF0000] rounded-full"></span> Contact Us
           </span>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Project</span>
           </h2>
           <p className="text-slate-400 max-w-xl mx-auto text-lg">
             Ready to build? Fill out the form below and our engineering team will get back to you within 5 minutes.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: Contact Information (HUD Style) */}
          <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
            
            {/* Phone Card */}
            <a href="tel:+971508614171" className="group flex items-center gap-5 p-5 bg-[#0a1e40] rounded-xl border border-white/10 hover:border-[#00AEEF] transition-all duration-300 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="w-12 h-12 rounded-lg bg-[#112b5a] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                 <Phone className="w-5 h-5 text-[#00AEEF]" />
               </div>

               <div className="relative z-10">
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Call Us Now</p>
                 <p className="text-white text-lg font-bold font-display group-hover:text-[#00AEEF] transition-colors">+971 50 861 4171</p>
                 <p className="text-white text-lg font-bold font-display group-hover:text-[#00AEEF] transition-colors">+971 56 653 8609</p>
               </div>
            </a>

            {/* Email Card */}
            <a href="mailto:sales@sustainablesteelind.com" className="group flex items-center gap-5 p-5 bg-[#0a1e40] rounded-xl border border-white/10 hover:border-[#00AEEF] transition-all duration-300 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="w-12 h-12 rounded-lg bg-[#112b5a] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                 <Mail className="w-5 h-5 text-[#00AEEF]" />
               </div>
               <div className="relative z-10">
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Email Support</p>
                 <p className="text-white text-lg font-bold font-display group-hover:text-[#00AEEF] transition-colors">sales@sustainablesteelind.com</p>
                 <p className="text-white text-lg font-bold font-display group-hover:text-[#00AEEF] transition-colors">jk@sustainablesteelind.com</p>
               </div>
            </a>

            {/* Location & Hours Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 bg-[#0a1e40] rounded-xl border border-white/10">
                    <MapPin className="w-6 h-6 text-[#FF0000] mb-3" />
                    <p className="text-white font-bold mb-1">UAE Headquarters</p>
                    
                </div>
                <div className="p-5 bg-[#0a1e40] rounded-xl border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                        <Clock className="w-6 h-6 text-[#FF0000]" />
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                    <p className="text-white font-bold mb-1">Working Hours</p>
                    <p className="text-slate-400 text-sm">Sun - Thu: 8AM - 6PM</p>
                </div>
            </div>

            {/* "Limited Time Offer" Box */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#FF0000]/10 to-transparent rounded-xl border border-[#FF0000]/30 relative overflow-hidden group">
                {/* Diagonal Stripes Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FF0000 0, #FF0000 10px, transparent 10px, transparent 20px)' }}></div>
                
                <div className="relative z-10 flex items-start gap-4">
                    <div className="p-2 bg-[#FF0000] rounded-lg shadow-lg shadow-red-900/50 animate-bounce">
                        <Zap className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                        <h4 className="text-[#FF0000] font-bold text-lg mb-1">Limited Time Offer!</h4>
                        <p className="text-slate-300 text-sm mb-4">Get <span className="text-white font-bold">10% OFF</span> on all orders placed this month. Includes free site survey.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                             {freeOffers.map((offer, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                                    <CheckCircle2 className="w-3 h-3 text-green-500" /> {offer}
                                </div>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* RIGHT: "Control Panel" Form */}
          <div className="bg-[#0a1e40] rounded-2xl p-8 lg:p-10 border border-white/10 shadow-2xl relative animate-fade-in delay-200">
             
            {/* Top Bar Decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] via-[#FF0000] to-[#00AEEF]"></div>

            <div className="mb-8">
               <h3 className="font-display text-2xl font-bold text-white mb-2">Request Callback</h3>
               <p className="text-slate-400 text-sm">Fill in the specs below. Average response time: <span className="text-[#00AEEF] font-bold">5 mins</span>.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5 group">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 group-focus-within:text-[#00AEEF] transition-colors">Full Name</label>
                <Input
                  className="bg-[#112b5a] border-white/10 text-white focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all h-12"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 group">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 group-focus-within:text-[#00AEEF] transition-colors">Phone Number</label>
                    <Input
                    className="bg-[#112b5a] border-white/10 text-white focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all h-12"
                    placeholder="+971..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    />
                </div>
                <div className="space-y-1.5 group">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 group-focus-within:text-[#00AEEF] transition-colors">Email Address</label>
                    <Input
                    type="email"
                    className="bg-[#112b5a] border-white/10 text-white focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all h-12"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    />
                </div>
              </div>

              <div className="space-y-1.5 group">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 group-focus-within:text-[#00AEEF] transition-colors">Service Required</label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="bg-[#112b5a] border-white/10 text-white focus:border-[#00AEEF] h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1e40] border-[#112b5a] text-slate-300">
                    <SelectItem value="roof-ventilators">Roof Ventilators</SelectItem>
                    <SelectItem value="tubular-skylights">Tubular Skylights</SelectItem>
                    <SelectItem value="steel-structures">Steel Structures</SelectItem>
                    <SelectItem value="installation">Installation Services</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5 group">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 group-focus-within:text-[#00AEEF] transition-colors">Message</label>
                <Textarea
                  className="bg-[#112b5a] border-white/10 text-white focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] min-h-[120px] resize-none"
                  placeholder="Tell us about your project specs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button 
                variant="default" 
                size="lg" 
                className="w-full h-14 text-lg font-bold bg-[#FF0000] hover:bg-red-700 text-white shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all mt-4" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Transmitting...
                  </span>
                ) : (
                  <>
                    Send Request
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;