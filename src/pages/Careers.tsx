import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, CheckCircle, Upload, ArrowRight, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Competitive Salary Packages",
  "Health Insurance & Benefits",
  "Professional Development",
  "Collaborative Work Environment",
  "Career Growth Opportunities",
  "Work-Life Balance",
];

const openPositions = [
  {
    title: "Structural Design Engineer",
    type: "Full-time",
    location: "UAE",
    description: "We are looking for an experienced Structural Engineer to design and analyze steel structures...",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Oman",
    description: "Lead complex industrial projects from conception to completion. Must have 5+ years experience...",
  },
  {
    title: "Sales Executive",
    type: "Full-time",
    location: "UAE",
    description: "Drive business growth by identifying new opportunities in the industrial sector...",
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for applying. Our HR team will review your application shortly.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">Join Our Team</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
            Build Your Career <span className="text-primary">With Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Sustainable Steel, we believe our people are our greatest asset. Join a team of passionate professionals dedicated to excellence.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground">We offer more than just a job; we offer a career path filled with opportunities.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions & Application Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left: Open Positions */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Current Openings</h2>
                <p className="text-muted-foreground mb-8">
                  We are currently hiring for the following positions. Even if you don't see a perfect match, feel free to send us your resume!
                </p>
              </div>

              <div className="space-y-4">
                {openPositions.map((job) => (
                  <div key={job.title} className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                          <span className="flex items-center gap-1"><ArrowRight className="w-4 h-4" /> {job.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Apply</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl border border-border/50 h-fit sticky top-24">
              <h2 className="font-display text-2xl font-bold mb-2">Apply Now</h2>
              <p className="text-sm text-muted-foreground mb-8">Fill out the form below to submit your application.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name *</label>
                  <Input 
                    required 
                    placeholder="John Doe" 
                    className="bg-secondary/30 h-11"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input 
                      required 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-secondary/30 h-11"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone *</label>
                    <Input 
                      required 
                      placeholder="+971..." 
                      className="bg-secondary/30 h-11"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Position Applying For *</label>
                  <Select onValueChange={(val) => setFormData({...formData, position: val})}>
                    <SelectTrigger className="bg-secondary/30 h-11">
                      <SelectValue placeholder="Select Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="structural-engineer">Structural Engineer</SelectItem>
                      <SelectItem value="project-manager">Project Manager</SelectItem>
                      <SelectItem value="sales-executive">Sales Executive</SelectItem>
                      <SelectItem value="other">Other / General Application</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Cover Letter / Message</label>
                  <Textarea 
                    rows={4} 
                    placeholder="Tell us a bit about yourself..." 
                    className="bg-secondary/30 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:bg-secondary/30 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                  <p className="text-sm font-medium">Upload Resume (PDF, DOCX)</p>
                  <p className="text-xs text-muted-foreground mt-1">Max file size: 5MB</p>
                </div>

                <Button variant="hero" size="xl" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;