import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-display">3D Atlas</h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Professional 3D printing and rapid prototyping services in Marrakech, Morocco.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#a37696] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#a37696] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#a37696] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[#a37696] transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#a37696] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Marrakech, Morocco</li>
              <li>+212 611 426 133</li>
              <li>contact@3datlas.ma</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 3D Atlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
