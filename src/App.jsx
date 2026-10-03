import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import WarmBackground from './components/WarmBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonalStatement from './components/PersonalStatement';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-root">
      {/* Custom Desktop Floating Cursor */}
      <CustomCursor />

      {/* Warm Ambient Background */}
      <WarmBackground />

      {/* Floating Editorial Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Portfolio Content Flow */}
      <main className="main-content">
        <Hero />
        <About />
        <PersonalStatement />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
