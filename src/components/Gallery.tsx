import { motion } from "motion/react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80",
    title: "Mechanical Parts",
    category: "Engineering"
  },
  {
    image: "https://images.unsplash.com/photo-1631541909061-71e34dd5bf3b?auto=format&fit=crop&q=80",
    title: "Bambu Lab Printing",
    category: "Production"
  },
  {
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&q=80",
    title: "3D Prototypes",
    category: "Prototyping"
  },
  {
    image: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&q=80",
    title: "Workshop Environment",
    category: "Facilities"
  },
  {
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80",
    title: "Custom 3D Objects",
    category: "Design"
  },
  {
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80",
    title: "Industrial Components",
    category: "Manufacturing"
  }
];

export default function Gallery() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our 3D Printing Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#875A7B] mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#a37696] font-medium text-sm mb-1">{project.category}</span>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
