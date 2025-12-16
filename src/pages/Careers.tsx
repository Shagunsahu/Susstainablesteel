import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Briefcase, CheckCircle2, Upload, ArrowRight, Star, 
  MapPin, Clock, ShieldCheck, TrendingUp, Users 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Benefits aligned with Profile values (Safety, Growth, Quality)
const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Work on landmark projects across UAE & Oman." },
  { icon: ShieldCheck, title: "Safety First", desc: "Strict HSE protocols ensuring a safe work environment." },
  { icon: Users, title: "Expert Team", desc: "Learn from veterans with 20+ years of industry experience." },
  { icon: Star, title: "Performance Bonus", desc: "Competitive packages rewarded on project success." },
];

const openPositions = [
  {
    id: 1,
    title: "Structural Design Engineer",
    type: "Full-time",
    location: "Sharjah, UAE",
    department: "Engineering",
    description: "We are looking for an experienced Structural Engineer proficient in STAAD.Pro and MBS to design PEB structures tailored to Middle East standards.",
    requirements: ["Bachelor's in Civil Engineering", "3+ Years Experience", "Proficiency in AutoCAD & Tekla"]
  },
  {
    id: 2,
    title: "Project Manager",
    type: "Full-time",
    location: "Sohar, Oman",
    department: "Operations",
    description: "Lead complex industrial projects from conception to completion. Responsible for scheduling, budget management, and client coordination.",
    requirements: ["PMP Certification preferred", "5+ Years in Steel Construction", "Strong Leadership Skills"]
  },
  {
    id: 3,
    title: "Sales Executive",
    type: "Full-time",
    location: "Dubai, UAE",
    department: "Sales",
    description: "Drive business growth by identifying new opportunities in the industrial warehousing and logistics sector.",
    requirements: ["Valid UAE Driving License", "Proven Track Record in B2B Sales", "Fluent in English & Hindi/Arabic"]
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", message: "" });
  const [activeJob, setActiveJob] = useState<number | null>(null);

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
      
      {/* 1. HERO SECTION (Dark Navy Theme) */}
      <section className="relative py-24 bg-background overflow-hidden">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
              
               <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Join Our Team</span>
            </div>
            
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Build Your Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FF4444]">With Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a team of passionate professionals dedicated to engineering excellence. We build more than structures; we build careers.
          </p>
        </div>
      </section>

      {/* 2. CULTURE / BENEFITS GRID */}
      <section className="py-20 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Why Sustainable Steel?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: JOBS & FORM */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_450px] gap-16">
            
            {/* LEFT: OPEN POSITIONS */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" /> Current Openings
              </h2>

              <div className="space-y-4">
                {openPositions.map((job) => (
                  <div 
                    key={job.id} 
                    className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                      activeJob === job.id 
                        ? "border-primary bg-primary/5 shadow-md" 
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    {/* Job Header (Clickable) */}
                    <div 
                      className="p-6 cursor-pointer flex justify-between items-start"
                      onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                    >
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-muted-foreground/60" /> {job.type}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-muted-foreground/60" /> {job.location}</span>
                          <span className="flex items-center gap-1.5 bg-muted px-2 py-0.5 rounded text-xs font-semibold uppercase">{job.department}</span>
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-300 ${activeJob === job.id ? "rotate-90" : ""}`}>
                         <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4" />
                         </div>
                      </div>
                    </div>

                    {/* Job Details (Expandable) */}
                    <div className={`px-6 pb-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeJob === job.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                       <div className="pt-4 border-t border-border/50">
                          <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                          <h4 className="font-bold text-foreground text-sm mb-2 uppercase tracking-wide">Key Requirements:</h4>
                          <ul className="space-y-2 mb-6">
                             {job.requirements.map(req => (
                               <li key={req} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-primary" /> {req}
                               </li>
                             ))}
                          </ul>
                          <Button 
                            onClick={(e) => {
                               e.stopPropagation();
                               setFormData({...formData, position: job.title});
                               window.scrollTo({ top: 0, behavior: 'smooth' });
                               document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-primary hover:bg-primary/80 text-white"
                          >
                            Apply for this Role
                          </Button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: APPLICATION FORM (Sticky) */}
            <div id="application-form" className="relative">
               <div className="sticky top-24">
                  <div className="bg-card text-foreground p-8 rounded-3xl shadow-2xl border border-border relative overflow-hidden">
                     {/* Decorative Background */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                     
                     <h2 className="font-display text-2xl font-bold mb-2 relative z-10">Start Your Journey</h2>
                     <p className="text-muted-foreground text-sm mb-6 relative z-10">Fill out the form below to join our growing team.</p>
                     
                     <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <div className="space-y-1.5">
                           <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                           <Input 
                             required 
                             placeholder="John Doe" 
                             className="bg-muted border-border text-foreground placeholder:text-muted-foreground/60 focus:bg-muted/80"
                             value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                           />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                              <Input 
                                required 
                                type="email"
                                placeholder="john@doe.com" 
                                className="bg-muted border-border text-foreground placeholder:text-muted-foreground/60 focus:bg-muted/80"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                           </div>
                           <div className="space-y-1.5">
                              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                              <Input 
                                required 
                                placeholder="+971..." 
                                className="bg-muted border-border text-foreground placeholder:text-muted-foreground/60 focus:bg-muted/80"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              />
                           </div>
                        </div>

                        <div className="space-y-1.5">
                           <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Position</label>
                           <Select value={formData.position} onValueChange={(val) => setFormData({...formData, position: val})}>
                              <SelectTrigger className="bg-muted border-border text-foreground focus:bg-muted/80">
                                 <SelectValue placeholder="Select Position" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="Structural Design Engineer">Structural Design Engineer</SelectItem>
                                 <SelectItem value="Project Manager">Project Manager</SelectItem>
                                 <SelectItem value="Sales Executive">Sales Executive</SelectItem>
                                 <SelectItem value="General Application">General Application</SelectItem>
                              </SelectContent>
                           </Select>
                        </div>

                        <div className="space-y-1.5">
                           <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Resume</label>
                           <div className="border border-dashed border-border rounded-lg p-4 text-center hover:bg-muted transition-colors cursor-pointer group">
                              <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                              <p className="text-xs text-muted-foreground">Click to upload PDF/DOCX</p>
                           </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/80 text-white font-bold mt-2 shadow-lg">
                           Submit Application
                        </Button>
                     </form>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Careers;