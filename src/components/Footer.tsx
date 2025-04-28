
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-magenta">Blesso's</span>
              <span className="text-cyan">Portfolio</span>
            </h2>
            <p className="text-gray-300 mt-2">Building the future, one project at a time.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/blessing-leso" className="hover:text-cyan transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/blessing-leso-724052183/" className="hover:text-cyan transition-colors">
              <Linkedin size={24} />
            </a>           
            <a href="https://api.whatsapp.com/send/?phone=%2B27647328373&text&type=phone_number&app_absent=0" className="hover:text-cyan transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {currentYear} Blessing Itlotleng Leso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
