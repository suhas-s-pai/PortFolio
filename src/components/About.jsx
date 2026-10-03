import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Code, CheckCircle2 } from 'lucide-react';
import TerminalVisual from './TerminalVisual';
import './About.css';

const stats = [
  {
    value: '09.13',
    label: 'CGPA',
    description: 'Cumulative GPA out of 10.0',
    icon: Award,
    color: '#00ff9d',
  },
  {
    value: '2028',
    label: 'GRADUATION',
    description: 'B.E. Computer Science',
    icon: GraduationCap,
    color: '#38bdf8',
  },
  {
    value: 'CSE',
    label: 'BRANCH',
    description: 'Canara Engineering College',
    icon: BookOpen,
    color: '#a78bfa',
  },
  {
    value: 'JAVA',
    label: 'PRIMARY FOCUS',
    description: 'Full-Stack & Backend Dev',
    icon: Code,
    color: '#f472b6',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="badge-pulse" /> WHO I AM
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Main Grid: Left Bio & Stats, Right Terminal */}
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Left Column: Story & Stats */}
          <motion.div variants={itemVariants} className="about-left-col">
            <div className="about-bio-card glass-panel">
              <h3 className="bio-headline">
                Building scalable, practical & modern software solutions.
              </h3>
              <p className="bio-paragraph">
                I'm <strong>Suhas S Pai</strong>, a Computer Science & Engineering student with a strong interest in Java development, full-stack applications and modern web technologies.
              </p>
              <p className="bio-paragraph">
                I enjoy turning ideas into practical software and continuously improving my development skills through projects, internships and hands-on learning.
              </p>
              <p className="bio-paragraph">
                My current focus is strengthening my Java and backend development skills while building modern full-stack applications.
              </p>

              <div className="bio-highlights">
                <div className="bio-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Strong foundation in Object-Oriented Programming & Data Structures</span>
                </div>
                <div className="bio-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Experienced in SQL relational databases & Supabase BaaS</span>
                </div>
                <div className="bio-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Passionate about modern UI design & clean architecture</span>
                </div>
              </div>
            </div>

            {/* Stat Cards Grid */}
            <div className="stats-grid">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="stat-card glass-panel"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="stat-card-header">
                      <span className="stat-value" style={{ color: stat.color }}>
                        {stat.value}
                      </span>
                      <div className="stat-icon-wrapper" style={{ background: `${stat.color}15`, color: stat.color }}>
                        <IconComponent size={20} />
                      </div>
                    </div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-desc">{stat.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Developer Terminal Visual */}
          <motion.div variants={itemVariants} className="about-right-col">
            <div className="terminal-wrapper">
              <div className="terminal-ambient-glow" />
              <TerminalVisual />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
