import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    number: '01',
    title: 'PROGRAMMING',
    description: 'Core logic, object-oriented concepts, and algorithmic problem solving.',
    skills: [
      { name: 'Java', level: 'Intermediate' },
      { name: 'C', level: 'Intermediate' },
      { name: 'R', level: 'Intermediate' },
    ],
  },
  {
    number: '02',
    title: 'FRONTEND',
    description: 'Structured markup, custom styling, DOM interaction, and component UIs.',
    skills: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Basic' },
      { name: 'React.js', level: 'Learning' },
    ],
  },
  {
    number: '03',
    title: 'BACKEND',
    description: 'Event-driven server runtimes, RESTful API endpoints, and middleware logic.',
    skills: [
      { name: 'Node.js', level: 'Basic' },
      { name: 'Express.js', level: 'Basic' },
    ],
  },
  {
    number: '04',
    title: 'DATABASE',
    description: 'Relational database schema design, ACID transactions, and cloud databases.',
    skills: [
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'Supabase', level: 'Intermediate' },
    ],
  },
  {
    number: '05',
    title: 'TOOLS & PLATFORMS',
    description: 'Distributed version control, primary IDE tools, and cloud deployment platforms.',
    skills: [
      { name: 'Git', level: 'Intermediate' },
      { name: 'GitHub', level: 'Intermediate' },
      { name: 'VS Code', level: 'Strong' },
      { name: 'MySQL Workbench', level: 'Intermediate' },
      { name: 'Vercel', level: 'Intermediate' },
      { name: 'Render', level: 'Intermediate' },
      { name: 'Railway', level: 'Intermediate' },
    ],
  },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="editorial-skills-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="editorial-skills-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">CAPABILITIES &amp; TOOLS</div>
          <h2 className="section-title">Technical Directory.</h2>
          <p className="skills-editorial-subtitle">
            A structured index of languages, web technologies, databases, and development tools.
          </p>
        </motion.div>

        {/* Skill Directory Rows */}
        <div className="skill-directory">
          {skillCategories.map((cat, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <motion.div
                key={cat.number}
                className={`directory-row ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                {/* Row Header */}
                <div className="directory-row-header">
                  <div className="directory-num-title">
                    <span className="directory-num font-mono">{cat.number}</span>
                    <h3 className="directory-title">{cat.title}</h3>
                  </div>

                  <span className="directory-count">
                    {cat.skills.length} {cat.skills.length === 1 ? 'technology' : 'technologies'}
                  </span>
                </div>

                {/* Subtitle / Description reveal */}
                <p className="directory-desc">{cat.description}</p>

                {/* Tags List */}
                <div className="directory-skills-list">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="editorial-skill-badge">
                      <span className="skill-badge-name">{skill.name}</span>
                      <span className="skill-badge-level font-mono">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
