import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&q=80",
    title: "3D Printing Workshop",
    subtitle: "State-of-the-art facilities for your projects"
  },
  {
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80",
    title: "3D Design Modeling",
    subtitle: "Expert CAD design and optimization"
  },
  {
    image: "https://images.unsplash.com/photo-1631541909061-71e34dd5bf3b?auto=format&fit=crop&q=80",
    title: "Professional 3D Printers",
    subtitle: "High precision Bambu Lab technology"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ))}

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional 3D Printing Services in Marrakech
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From idea to reality with high precision 3D printing
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://wa.me/212611426133" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#875A7B] text-white rounded-lg font-semibold text-lg hover:bg-[#6a4660] transition-colors shadow-lg"
          >
            Contact on WhatsApp
          </a>
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-[#875A7B] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            View Our Projects
          </a>
        </motion.div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
}
