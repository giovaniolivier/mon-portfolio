import React from 'react';
import { User, Code, Coffee, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement Full Stack",
      description: "Spécialisé dans les technologies modernes React, Node.js et Laravel"
    },
    {
      icon: Target,
      title: "Solutions sur mesure",
      description: "Création d'applications adaptées aux besoins spécifiques des clients"
    },
    {
      icon: Coffee,
      title: "Passion pour l'innovation",
      description: "Toujours à la recherche des dernières technologies et bonnes pratiques"
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e1b4b,transparent_70%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">À propos de moi</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">LOVASOA Heriniaina Olivier</h3>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionné par le développement web depuis plus de 3 ans, je crée des expériences 
                numériques innovantes qui allient performance et esthétique. Mon expertise couvre 
                l'ensemble de la stack technique, du frontend au backend.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                J'ai travaillé sur des projets variés allant de simulateurs fiscaux complexes 
                à des systèmes de gestion d'entreprise, en passant par des sites web sur mesure 
                pour des hôtels de luxe.
              </p>
              
              <div className="flex space-x-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400">3+</div>
                  <div className="text-gray-400">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400">15+</div>
                  <div className="text-gray-400">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400">8+</div>
                  <div className="text-gray-400">Technologies maîtrisées</div>
                </div>
              </div>
            </div>
            
            {/* Colonne droite - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl opacity-50 blur group-hover:opacity-75 transition duration-300" />
                  <div className="relative bg-gray-900 p-6 rounded-xl border border-gray-800 transform group-hover:-translate-y-1 transition duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 