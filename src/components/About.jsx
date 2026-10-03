import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const editorialStats = [
    { number: '09.06', label: 'CGPA' },
    { number: '2028', label: 'GRADUATION' },
    { number: 'CSE', label: 'BRANCH' },
    { number: 'JAVA', label: 'PRIMARY FOCUS' },
  ];

  return (
    <section id="about" className="editorial-about-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="editorial-about-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">BACKGROUND &amp; FOCUS</div>
          <h2 className="section-title">A little about me.</h2>
        </motion.div>

        {/* Magazine Editorial Layout */}
        <div className="editorial-about-grid">
          {/* Left Column: Lead Paragraph Copy */}
          <motion.div
            className="editorial-about-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="lead-editorial-paragraph">
              I'm <strong>Suhas S Pai</strong>, a Computer Science &amp; Engineering student at Canara Engineering College with a strong interest in Java development, backend engineering, databases, and full-stack applications.
            </p>
            <p className="editorial-paragraph">
              I enjoy building practical software, experimenting with new technologies, and improving my development skills through projects and hands-on experience.
            </p>
            <p className="editorial-paragraph">
              My current focus is strengthening Core Java, backend development, REST APIs, databases, and modern full-stack architecture.
            </p>
          </motion.div>

          {/* Right Column: Editorial Typography Stat Grid */}
          <motion.div
            className="editorial-stats-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="editorial-stat-block">
              {editorialStats.map((stat, idx) => (
                <div key={stat.label} className="editorial-stat-item">
                  <span className="editorial-stat-number font-serif">{stat.number}</span>
                  <span className="editorial-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
