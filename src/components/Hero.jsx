import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="editorial-hero-section">
      <div className="container hero-editorial-container">
        <motion.div
          className="hero-asymmetrical-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Editorial Headline & Copy */}
          <div className="hero-left-col">
            <motion.div variants={itemVariants} className="hero-category-tag">
              COMPUTER SCIENCE &amp; ENGINEERING
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-author-name">
              Suhas S Pai
            </motion.h1>

            <motion.h2 variants={itemVariants} className="hero-editorial-headline">
              I build thoughtful digital products with Java &amp; the web.
            </motion.h2>

            <motion.p variants={itemVariants} className="hero-editorial-copy">
              Java-focused developer building practical full-stack applications. I enjoy turning ideas into useful software through clean interfaces, reliable backend systems, and modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-editorial-actions">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="editorial-btn btn-primary"
              >
                <span>Explore My Work</span>
                <ArrowUpRight size={17} />
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="editorial-btn btn-secondary"
              >
                <span>Let's Connect</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Artistic Editorial Visual */}
          <motion.div variants={itemVariants} className="hero-right-col">
            <div className="artistic-visual-box">
              <div className="visual-background-shape" />
              <div className="visual-accent-circle" />

              {/* Serif Monogram Display */}
              <div className="visual-monogram-card">
                <span className="monogram-letter font-serif">S</span>
                <span className="monogram-letter font-serif accent">S</span>
                <span className="monogram-letter font-serif">P</span>
                <div className="monogram-tagline">SUHAS S PAI</div>
              </div>

              {/* Decorative warm code card snippet */}
              <div className="visual-floating-badge">
                <span className="badge-bullet" />
                <span>Java &amp; Full-Stack Architecture</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Information Strip */}
        <motion.div
          className="hero-info-strip"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="strip-tag">JAVA</span>
          <span className="strip-divider">•</span>
          <span className="strip-tag">FULL-STACK</span>
          <span className="strip-divider">•</span>
          <span className="strip-tag">BACKEND</span>
          <span className="strip-divider">•</span>
          <span className="strip-tag">CSE • 2028</span>
          <span className="strip-divider">•</span>
          <span className="strip-tag highlight">CGPA 9.06</span>
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onClick={() => handleScrollTo('#about')}
      >
        <span className="cue-text">SCROLL TO READ</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
