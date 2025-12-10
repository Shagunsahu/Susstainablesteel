import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Award, Users, Clock, Shield, ArrowRight, Quote, Linkedin, Mail } from "lucide-react";

const highlights = [
  { icon: Award, title: "Quality First", description: "ISO certified processes ensuring top-tier quality" },
  { icon: Clock, title: "On-Time Delivery", description: "Committed to meeting all project deadlines" },
  { icon: Shield, title: "Safety Standards", description: "Rigorous safety protocols on every site" },
  { icon: Users, title: "Expert Team", description: "Skilled professionals with decades of experience" },
];

const timeline = [
  { year: "2002", title: "Company Founded", description: "Started operations in Oman with a small team" },
  { year: "2008", title: "Expansion to UAE", description: "Opened our first office in Dubai" },
  { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001:2008 certification" },
  { year: "2018", title: "500+ Projects", description: "Milestone of completing 500 successful projects" },
  { year: "2023", title: "Regional Leader", description: "Recognized as leading PEB contractor in the region" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 skew-x-12 origin-top"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">About Us</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
            Building Excellence <span className="text-primary">Since 2002</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming one of the leading construction companies in the region, we've built our reputation on quality, reliability, and innovation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Sustainable Steel Industries LLC SP began its journey in 2002 with a vision to transform the construction landscape in the Middle East. What started as a small team with big dreams has grown into a regional leader.
                </p>
                <p>
                  Over the years, we have completed more than 500 projects across UAE and Oman. Our success is built on a foundation of quality, innovation, and customer satisfaction.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in steel construction, embracing sustainable practices and cutting-edge technologies.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Floating Image Gallery */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4 mt-8">
                <img
                  src="/assets/a3.jpg"
                  alt="Construction"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 animate-float"
                  style={{ animationDelay: '0ms' }}
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/assets/a2.jpg"
                  alt="Steel"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 animate-float"
                  style={{ animationDelay: '1500ms' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Lift Effect */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-card rounded-2xl p-10 shadow-sm border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                <Eye className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most sought-after PEB contractor for challenging projects in the Middle East, known for innovation, quality, and sustainable practices.
              </p>
            </div>
            <div className="group bg-card rounded-2xl p-10 shadow-sm border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                <Target className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional project implementations with unwavering commitment to safety, timely delivery, and budget adherence while exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW FOUNDER SECTION --- */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* UPDATED GRID COLUMNS HERE: Changed lg:grid-cols-2 to lg:grid-cols-[400px_1fr] */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-center lg:justify-between animate-fade-in">
            
            {/* Left: Founder Image with Effects */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/founder.jpg" 
                  alt="Mukesh Singh"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Name Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 pt-20">
                  <h3 className="text-white font-display text-2xl font-bold">Mukesh Singh</h3>
                  <p className="text-primary font-medium">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Right: Founder's Message */}
            <div className="relative">
              <Quote className="w-20 h-20 text-primary/10 absolute -top-10 -left-6 -z-10" />
              
              <div className="space-y-6">
                <span className="text-primary text-sm font-bold uppercase tracking-widest border-l-4 border-primary pl-4">Founder's Message</span>
                
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  "Quality is not just an act, <span className="text-primary">it is a habit.</span>"
                </h2>
                
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    When I established Sustainable Steel Industries in 2002, my vision was simple: to bring world-class industrial construction standards to the Gulf region.
                  </p>
                  <p>
                    We didn't just want to build structures; we wanted to build relationships based on trust, transparency, and engineering excellence. Over two decades later, while technologies have changed, our core commitment to safety and quality remains our unshakeable foundation.
                  </p>
                  <p>
                    Thank you for trusting us with your vision. We look forward to building the future with you.
                  </p>
                </div>

                {/* Signature & Socials */}
                <div className="pt-8 flex items-center gap-8 border-t border-border mt-8">
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/mukesh-s-b5ba7457?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:mukesh@sustainablesteelind.com" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group bg-card rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Milestones & Achievements
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-8 mb-12 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-card border-4 border-primary text-primary flex items-center justify-center font-bold text-lg shadow-lg z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2 group-hover:bg-primary/30 transition-colors" />
                  )}
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border flex-1 hover:shadow-md transition-all relative top-2">
                   {/* Little arrow pointing left */}
                  <div className="absolute top-6 -left-2 w-4 h-4 bg-card border-l border-b border-border transform rotate-45"></div>
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Build with Us?
          </h2>
          <Link to="/contact">
            <Button variant="secondary" size="xl" className="shadow-2xl hover:shadow-white/20 transition-all">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;