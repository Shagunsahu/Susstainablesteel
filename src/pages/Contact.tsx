import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle, Zap, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+971 50 861 4171",
    link: "tel:+971508614171",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+971 56 653 8609",
    link: "tel:+971566538609",
    
  },
  {
    icon: Mail,
    title: "Email",
    value: "sales@sustainablesteelllc.com",
    link: "mailto:sales@sustainablesteelllc.com",
 
  },
  {
    icon: Mail,
    title: "Email",
    value: "jk@sustainablesteelllc.com",
    link: "mailto:jk@sustainablesteelllc.com",
   
  },
  {
    icon: MapPin,
    title: "Locations",
    value: "UAE",
   
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Sun - Thu: 8AM - 6PM",
    
  },
];

const freeOffers = [
  "Free Price Estimate",
  "Free Consultation",
  "Free Site Survey",
  "Free Quotation",
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve UAE , with the capability to handle projects across the GCC region.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. Small installations take 1-2 weeks, while large steel structures may take 2-6 months.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer: "Yes, all our products come with manufacturer warranties ranging from 5-20 years depending on the product type.",
  },
  {
    question: "Can you customize solutions for specific needs?",
    answer: "Absolutely! We specialize in custom solutions tailored to your specific industrial requirements.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone || !formData.service) {
        toast({ title: "Missing Fields", description: "Please fill in all required fields.", variant: "destructive" });
        setLoading(false);
        return;
      }

      // Send data to your Node.js server
      const response = await fetch('https://sustainable-api.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Server returned ${response.status}`);
      }

      toast({ title: "Message Sent!", description: "We will get back to you soon." });
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Server error. Try again later.";
      console.error("Form submission error:", errorMessage);
      toast({ 
        title: "Submission Failed", 
        description: errorMessage, 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
              
               <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Contact Us</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Get a Free Quote Today
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 5 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-card rounded-xl p-4 shadow-card border border-border"
                  >
                    {info.link ? (
                      <a href={info.link} className="flex items-start gap-4 hover:text-primary transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{info.title}</p>
                          <p className="text-primary">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{info.title}</p>
                          <p className="text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Free Offers */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border mb-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Free Offers
                </h3>
                <ul className="space-y-3">
                  {freeOffers.map((offer) => (
                    <li key={offer} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limited Time Offer */}
              <div className="bg-destructive/10 rounded-xl p-6 border border-destructive/20">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-destructive" />
                  <p className="font-semibold text-destructive">Limited Time Offer!</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get 10% off on orders placed this month
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold mb-2">Request a Callback</h2>
                <p className="text-muted-foreground mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Get a Callback in 5 Minutes
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                      <Input
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                 

                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Required *</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roof-ventilators">Roof Ventilators</SelectItem>
                        <SelectItem value="tubular-skylights">Tubular Skylights</SelectItem>
                        <SelectItem value="steel-structures">Steel Structures</SelectItem>
                        <SelectItem value="installation">Installation Services</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="energy-solutions">Energy Solutions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Get Free Quote"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Free Consultation • No Obligations • Quick Response
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-secondary flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold mb-2">Visit Our Offices</h3>
          <p className="text-muted-foreground">UAE </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
