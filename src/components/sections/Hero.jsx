import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import myImage from '../../assets/images/GIO3.jpg';

const Hero = () => {
  const socialLinks = [
    { 
      Icon: Github, 
      href: "https://github.com/giovaniolivier", 
      label: "Github",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    { 
      Icon: Linkedin, 
      href: "https://linkedin.com/in/giovaniolivier", 
      label: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    { 
      Icon: Mail, 
      href: "mailto:oliviergiovani00@gmail.com", 
      label: "Email" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#4c1d95,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1e40af,transparent_50%)]" />
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="relative mb-8 group"
            variants={itemVariants}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-800">
              <img 
                src={myImage} 
                alt="LOVASOA Heriniaina Olivier - Développeur Full Stack" 
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Title and Description */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h1 className="text-6xl font-bold text-white">LOVASOA Heriniaina Olivier</h1>
            <p className="text-2xl text-violet-400">Développeur Full Stack Créatif</p>
          </motion.div>

          <motion.p 
            className="max-w-2xl text-lg text-gray-400"
            variants={itemVariants}
          >
            Créateur d'expériences numériques innovantes, spécialisé dans le développement 
            d'applications web modernes et performantes.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map(({ Icon, href, label, target, rel }, index) => (
              <motion.a
                key={index}
                href={href}
                target={target}
                rel={rel}
                className="group relative p-4"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gray-800 rounded-lg transform group-hover:translate-x-1 group-hover:translate-y-1 transition duration-300" />
                <div className="relative bg-gray-900 p-4 rounded-lg border border-gray-800 group-hover:border-violet-500 transition duration-300">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-violet-400 transition duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#projects"
            className="relative px-8 py-4 group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-gray-900 px-8 py-4 rounded-lg border border-gray-800 text-white group-hover:bg-gray-800 transition duration-300">
              Voir mes projets
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;