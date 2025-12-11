import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Zap, ArrowRight, Send } from "lucide-react";
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
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">Contact Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
            Get a Free Quote Today
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Fill out the form below and our team will get back to you within 5 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Interactive Contact Info */}
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold mb-6">Contact Information</h3>
              
              {/* Phone Card */}
              <a href="tel:+971 508614171" className="group flex items-start gap-4 p-5 bg-card rounded-2xl shadow-sm border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">Phone</p>
                  <p className="text-muted-foreground">+971 508614171</p>
                </div>
              </a>

              {/* Email Card */}
              <a href="mailto:sales@sustainablesteelind.com" className="group flex items-start gap-4 p-5 bg-card rounded-2xl shadow-sm border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">Email</p>
                  <p className="text-muted-foreground">sales@sustainablesteelind.com</p>
                </div>
              </a>

              {/* Location Card (Static but styled same) */}
              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Location</p>
                  <p className="text-muted-foreground">UAE </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Working Hours</p>
                  <p className="text-muted-foreground">Sun - Thu: 8AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Free Offers & Pulse Alert */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border relative overflow-hidden">
              <h4 className="font-semibold text-lg mb-4">What You Get For Free</h4>
              <ul className="space-y-3 mb-8">
                {freeOffers.map((offer, i) => (
                  <li key={offer} className="flex items-center gap-3 text-sm animate-fade-in" style={{ animationDelay: `${i * 100 + 500}ms` }}>
                    <div className="bg-green-500/10 p-1 rounded-full">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>

              {/* Pulsing Offer Box */}
              <div className="relative p-4 bg-destructive/5 rounded-xl border border-destructive/20 flex items-center gap-4 overflow-hidden group">
                <div className="absolute inset-0 bg-destructive/5 animate-pulse-glow"></div>
                <div className="bg-white p-2 rounded-full shadow-sm z-10 animate-bounce" style={{ animationDuration: '2s' }}>
                    <Zap className="w-5 h-5 text-destructive fill-destructive" />
                </div>
                <div className="z-10">
                  <p className="font-bold text-destructive">Limited Time Offer!</p>
                  <p className="text-xs text-destructive/80 font-medium">Get 10% off on orders placed this month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Form */}
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl border border-border relative animate-fade-in delay-200">
             {/* Form Heading */}
            <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">Request a Callback</h3>
                <p className="text-muted-foreground text-sm">We usually respond within 5 minutes during working hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5 group">
                <label className="text-sm font-semibold text-foreground/80 group-focus-within:text-primary transition-colors">Full Name</label>
                <Input
                  className="bg-secondary/20 border-border focus:bg-background focus:border-primary transition-all duration-300 h-12"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 group">
                    <label className="text-sm font-semibold text-foreground/80 group-focus-within:text-primary transition-colors">Phone Number</label>
                    <Input
                    className="bg-secondary/20 border-border focus:bg-background focus:border-primary transition-all duration-300 h-12"
                    placeholder="+968..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    />
                </div>
                <div className="space-y-1.5 group">
                    <label className="text-sm font-semibold text-foreground/80 group-focus-within:text-primary transition-colors">Email Address</label>
                    <Input
                    type="email"
                    className="bg-secondary/20 border-border focus:bg-background focus:border-primary transition-all duration-300 h-12"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    />
                </div>
              </div>

              <div className="space-y-1.5 group">
                <label className="text-sm font-semibold text-foreground/80 group-focus-within:text-primary transition-colors">Service Required</label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="bg-secondary/20 border-border focus:bg-background focus:border-primary transition-all duration-300 h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roof-ventilators">Roof Ventilators</SelectItem>
                    <SelectItem value="tubular-skylights">Tubular Skylights</SelectItem>
                    <SelectItem value="steel-structures">Steel Structures</SelectItem>
                    <SelectItem value="installation">Installation Services</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="energy-solutions">Energy Solutions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5 group">
                <label className="text-sm font-semibold text-foreground/80 group-focus-within:text-primary transition-colors">Message</label>
                <Textarea
                  className="bg-secondary/20 border-border focus:bg-background focus:border-primary transition-all duration-300 min-h-[120px] resize-none"
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full h-14 text-lg group mt-4" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Sending...
                    </span>
                ) : (
                    <>
                        Get Free Quote
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                )}
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 Typical response time: 5 minutes
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;