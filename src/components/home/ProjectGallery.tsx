import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  anchor?: string;
  title: string;
  category: string;
  image: string;
  location: string;
};

const projects: Project[] = [
  { id: 1, anchor: "dubai-logistics", title: "Dubai Logistics Centre", category: "Warehouses", image: "/assets/s1.jpg", location: "Dubai, UAE" },
  { id: 2, anchor: "oman-power-plant", title: "Oman Power Plant", category: "Power Plants", image: "/assets/s2.jpg", location: "Sohar, Oman" },
  { id: 3, anchor: "al-futtaim-steel", title: "Al Futtaim Steel Works", category: "Factories", image: "/assets/s4.jpg", location: "Abu Dhabi, UAE" },
  { id: 4, anchor: "city-skylight", title: "City Skylight Installation", category: "Skylights", image: "/assets/s5.jpg", location: "Sharjah, UAE" },
  { id: 5, anchor: "industrial-ventilation", title: "Industrial Ventilation Unit", category: "Ventilation", image: "/assets/s7.jpg", location: "Jebel Ali, UAE" },
  { id: 6, anchor: "heavy-steel-complex", title: "Heavy Steel Complex", category: "Factories", image: "/assets/s1.jpg", location: "Riyadh, KSA" },
];

const categories = ["All", "Warehouses", "Factories", "Power Plants", "Skylights", "Ventilation"];

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle Hash Scrolling
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Minor adjustment if header is sticky
      setTimeout(() => window.scrollBy({ top: -88, left: 0, behavior: 'smooth' }), 60);
    }
  }, [location]);

  // Handle Horizontal Scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; // Adjust scroll distance
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-background" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="projects-heading" className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Explore our portfolio across the Middle East.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat ? 'bg-primary text-white border-primary shadow' : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Row */}
        <div className="relative group/container">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all opacity-0 group-hover/container:opacity-100 -translate-x-1/2 md:translate-x-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all opacity-0 group-hover/container:opacity-100 translate-x-1/2 md:translate-x-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map(project => (
              <article 
                id={project.anchor} 
                key={project.id} 
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center"
              >
                <div className="h-64 overflow-hidden rounded-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent absolute inset-x-0 bottom-0 text-white">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                  <h3 className="text-xl font-display font-bold mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.location}</p>
                  <div>
                    <button onClick={() => setSelectedProject(project)} className="inline-flex items-center text-white text-sm font-semibold border-b border-primary pb-0.5 hover:text-primary transition-colors">
                      View Details <ArrowUpRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div className="relative bg-card rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl z-10 animate-fade-in">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white z-20 transition-colors">
                <X className="w-5 h-5" />
              </button>

              {/* Stacked layout: Image on top, details below, buttons after */}
              <div>
                <div className="w-full h-64 md:h-96 bg-muted">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{selectedProject.category}</p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {selectedProject.location}
                  </p>

                  <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                    Detailed project information goes here. Replace this with the project's description, key facts, timelines, client, and any other relevant details regarding {selectedProject.title}.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setSelectedProject(null)} className="px-5 py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg transition-colors font-medium">Close</button>
                    <a href="/contact" className="px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors font-medium">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;