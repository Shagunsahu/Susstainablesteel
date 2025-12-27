import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "10% off this month",
  "Free site survey",
  "Same-day callback",
  "Certified engineers",
];

const ContactPreview = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone || !formData.service) {
        toast({
          title: "Missing Fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      console.log('📤 Sending form data:', formData);
      
      const res = await fetch("https://sustainable-api.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });

      console.log('📥 Response status:', res.status);
      const data = await res.json();
      console.log('📥 Response data:', data);

      if (!res.ok) {
        throw new Error(data.error || data.message || `Failed to submit (${res.status})`);
      }

      toast({
        title: "Quote Request Submitted!",
        description: "Our team will contact you within 5 minutes.",
      });
      setFormData({ name: "", phone: "", email: "", company: "", service: "", message: "" });
    } catch (err: any) {
      let errorMessage = "Failed to submit. Please try again.";
      
      if (err instanceof TypeError) {
        errorMessage = "Unable to connect to server. Please call:\n+971 50 861 4171";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      console.error('❌ Submission error:', err);
      toast({
        title: "Submission failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Start Your Project
          </h2>
          <p className="text-lg text-foreground/80">
            Ready to build? Fill out the form below and our engineering team will get back to you within 5 minutes.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+971508614171"
                className="group rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-primary/70 hover:bg-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-[#111] transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Call Us Now</h3>
                <p className="text-sm text-foreground/70">+971 50 861 4171</p>
                <p className="text-sm text-foreground/70">+971 56 653 8609</p>
              </a>

              <a
                href="mailto:sales@sustainablesteelllc.com"
                className="group rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-primary/70 hover:bg-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-[#111] transition-transform group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Email Support</h3>
                <p className="text-sm text-foreground/70">sales@sustainablesteelllc.com</p>
                <p className="text-sm text-foreground/70">jk@sustainablesteelllc.com</p>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-[#111]">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">UAE Headquarters</h3>
                <p className="text-sm text-foreground/70">Dubai, United Arab Emirates</p>
              </div>

              <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-[#111]">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Working Hours</h3>
                <p className="text-sm text-foreground/70">Sun - Thu: 8AM - 6PM</p>
              </div>
            </div>

            <div className="relative rounded-xl border border-accent/40 bg-muted/40 p-6 backdrop-blur-sm">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #E63946 0, #E63946 10px, transparent 10px, transparent 20px)",
                }}
              />

              <div className="relative z-10">
                <h3 className="mb-4 text-lg font-bold text-primary">🎉 Limited Time Offer!</h3>
                <p className="mb-4 text-white">
                  Get 10% OFF on all orders placed this month. Includes free site survey.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-[#e5e7eb] bg-white p-8 text-[#111] shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:p-10">
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-white/40 blur-3xl"
              aria-hidden
            />
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-accent via-accent to-primary" />
             <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-accent via-accent to-primary" />

            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-bold">Request Callback</h3>
              <p className="text-sm text-slate-500">
                Fill in the specs below. Average response time: <span className="font-bold text-accent">5 mins</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-4 text-[#111] transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className="h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-4 text-[#111] transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-4 text-[#111] transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-4 text-[#111] transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-4 text-[#111] transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="ventilators">Roof Ventilators</option>
                  <option value="skylights">Tubular Skylights</option>
                  <option value="steel">Steel Structures</option>
                  <option value="installation">Installation Services</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-[#111] transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full bg-gradient-to-r from-accent via-accent to-primary text-lg font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_25px_rgba(230,57,70,0.5)] hover:brightness-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Request
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