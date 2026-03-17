import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Rapid prototyping",
  "Custom 3D printing",
  "Product design",
  "Industrial parts printing",
  "Creative projects and prototypes"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              About 3D Atlas
            </h2>
            <div className="w-20 h-1 bg-[#875A7B] mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              3D Atlas is a Marrakech based company specializing in professional 3D printing and 3D design services. We help creators, engineers, and businesses transform ideas into physical objects using advanced 3D printing technology.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Services include:</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="text-[#875A7B] mr-3" size={20} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                alt="3D Atlas Workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#875A7B]/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 rounded-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#875A7B]/20 rounded-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
