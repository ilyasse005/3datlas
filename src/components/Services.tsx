import { motion } from "motion/react";
import { Printer, PenTool, Zap, Settings } from "lucide-react";

const services = [
  {
    icon: <Printer size={32} />,
    title: "3D Printing",
    description: "High precision printing using professional machines."
  },
  {
    icon: <PenTool size={32} />,
    title: "3D Design",
    description: "Custom 3D modeling for products and prototypes."
  },
  {
    icon: <Zap size={32} />,
    title: "Rapid Prototyping",
    description: "Fast production of prototypes for testing ideas."
  },
  {
    icon: <Settings size={32} />,
    title: "Custom Parts",
    description: "Manufacturing custom mechanical and decorative parts."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#875A7B] mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#875A7B]/10 text-[#875A7B] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#875A7B] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
