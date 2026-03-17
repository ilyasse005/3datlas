import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#875A7B] mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#875A7B]/10 rounded-xl flex items-center justify-center text-[#875A7B] mr-4 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Marrakech, Morocco</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#875A7B]/10 rounded-xl flex items-center justify-center text-[#875A7B] mr-4 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp / Phone</h4>
                  <p className="text-gray-600">+212 611 426 133</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#875A7B]/10 rounded-xl flex items-center justify-center text-[#875A7B] mr-4 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@3datlas.ma</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#875A7B]/10 rounded-xl flex items-center justify-center text-[#875A7B] mr-4 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/212611426133" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20b858] transition-colors"
              >
                WhatsApp Chat
              </a>
              <a 
                href="mailto:contact@3datlas.ma" 
                className="flex-1 text-center px-6 py-3 bg-[#875A7B] text-white rounded-lg font-semibold hover:bg-[#6a4660] transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.11667086055!2d-8.082067751367188!3d31.634748500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1709841234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="3D Atlas Location in Marrakech"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
