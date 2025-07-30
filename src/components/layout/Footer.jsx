import React from 'react';
import { Github, Linkedin, Mail, Star, MapPin, Calendar, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navItems = ['About', 'Projects', 'Skills', 'Contact'];
  const services = ['Web Development', 'UI/UX Design', 'Consulting', 'Mobile Apps'];
  const technologies = ['React','Express', 'Node.js', 'Next.js', 'TypeScript', 'JavaScript', 'MySQL', 'MongoDB'];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 pt-10 pb-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#1e1b4b,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Logo et Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Portfolio</span>
                <p className="text-sm text-gray-400">Olivier</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences numériques innovantes. 
              Spécialisé dans les technologies modernes et les solutions sur mesure.
            </p>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-violet-400">3+</div>
                <div className="text-xs text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-violet-400">6+</div>
                <div className="text-xs text-gray-400">Projets réalisés</div>
              </div>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#contact"
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-violet-600/20 text-violet-400 rounded text-xs border border-violet-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:oliviergiovani00@gmail.com"
                    className="text-white hover:text-violet-400 transition-colors"
                  >
                    oliviergiovani00@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Localisation</p>
                  <p className="text-white">Madagascar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Disponibilité</p>
                  <p className="text-white">Disponible pour de nouveaux projets</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Suivez-moi</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/giovaniolivier" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 text-gray-400 hover:text-violet-400 hover:bg-gray-700 rounded-lg transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/giovaniolivier" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 text-gray-400 hover:text-violet-400 hover:bg-gray-700 rounded-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:oliviergiovani00@gmail.com"
                  className="p-2 bg-gray-800 text-gray-400 hover:text-violet-400 hover:bg-gray-700 rounded-lg transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur avec effet */}
        <div className="relative mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full" />
          </div>
        </div>

        {/* Copyright et liens légaux */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p>&copy; {currentYear} LOVASOA Heriniaina Olivier. Tous droits réservés.</p>
            <span className="hidden md:inline">•</span>
            <span>Développé avec ❤️ en React</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#privacy" 
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Politique de confidentialité
            </a>
            <a 
              href="#terms" 
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Conditions d'utilisation
            </a>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Retour en haut"
            >
              <span>Retour en haut</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;