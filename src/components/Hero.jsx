import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ChevronRight, Terminal } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Pill Badge */}
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="badge-pulse" />
            <Sparkles size={14} className="badge-icon" />
            <span>COMPUTER SCIENCE & ENGINEERING</span>
          </motion.div>

          {/* Main Hero Heading */}
          <motion.h1 variants={itemVariants} className="hero-heading">
            Hi, I'm <span className="hero-name-highlight">Suhas S Pai.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2 variants={itemVariants} className="hero-subheading">
            I build modern digital experiences and full-stack applications.
          </motion.h2>

          {/* Secondary Description */}
          <motion.p variants={itemVariants} className="hero-description">
            Computer Science student and Java-focused developer passionate about building practical, scalable and meaningful software.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div variants={itemVariants} className="hero-cta-group">
            <button
              onClick={() => handleScrollTo('#skills')}
              className="btn btn-primary"
            >
              <span>VIEW MY SKILLS</span>
              <ChevronRight size={18} className="btn-icon" />
            </button>

            <button
              onClick={() => handleScrollTo('#contact')}
              className="btn btn-secondary"
            >
              <Terminal size={16} />
              <span>CONTACT ME</span>
            </button>
          </motion.div>

          {/* Quick Highlight Cards */}
          <motion.div variants={itemVariants} className="hero-pills-row">
            <div className="hero-pill">
              <span className="pill-dot emerald" /> Java & Full-Stack
            </div>
            <div className="hero-pill">
              <span className="pill-dot cyan" /> CGPA: 9.13
            </div>
            <div className="hero-pill">
              <span className="pill-dot purple" /> Class of 2028
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => handleScrollTo('#about')}
      >
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="scroll-icon-wrapper"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
