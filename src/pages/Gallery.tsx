import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { servicesData } from "@/data/services";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 1. Extract all gallery images from the servicesData
  // We flatten the data to create a single array of all photos with their category
  const allImages = servicesData.flatMap((service) =>
    service.gallery.map((img) => ({
      src: img,
      category: service.title,
      serviceId: service.id, // For linking back if needed
    }))
  );

  // 2. Get unique categories for the filter buttons
  const categories = ["All", ...new Set(servicesData.map((s) => s.title))];

  // 3. Filter images based on selection
  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Project <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our portfolio of industrial projects delivered across the UAE and Oman.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  filter === cat
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in-95"
              >
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3">
                        <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm tracking-wider uppercase">
                      View Project
                    </span>
                    <p className="text-white/80 text-xs mt-1">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;