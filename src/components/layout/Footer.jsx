import React from 'react';
import { Github, Linkedin, Mail, Star } from 'lucide-react';

const Footer = () => {
  const navItems = ['About', 'Projects', 'Skills', 'Contact'];
  const services = ['Web Development', 'UI/UX Design', 'Consulting'];

  return (
    <footer className="relative bg-gray-900 pt-24 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#1e1b4b,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            <p className="text-gray-400">
              Création d'expériences web innovantes et performantes.
            </p>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="gio"
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>oliviergiovani00@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <div className="flex space-x-4">
                  <a 
                    href="gio" 
                    className="hover:text-violet-400 transition-colors duration-300"
                    aria-label="Github"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="gio" 
                    className="hover:text-violet-400 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Votre Portfolio. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="gio" className="hover:text-violet-400 transition-colors duration-300">
              Mentions légales
            </a>
            <a href="gio" className="hover:text-violet-400 transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;