import React from 'react';
import useScroll from './hooks/useScroll';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import './App.css';

const App = () => {
  const { scrolled, activeSection } = useScroll();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;