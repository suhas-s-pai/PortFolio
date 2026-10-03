import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  FileCode,
  Layout,
  Database,
  Server,
  GitBranch,
  Cpu,
  Boxes,
  Globe,
  Layers,
  Wrench,
  Flame,
  Cloud,
  Command,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Skills.css';

const categories = [
  'All',
  'Programming Languages',
  'Frontend',
  'Backend',
  'Database',
  'Tools & Platforms',
];

const skillsData = [
  // Category 1: Programming Languages
  {
    name: 'Java',
    category: 'Programming Languages',
    level: 'INTERMEDIATE',
    icon: CoffeeBeanIcon,
    color: '#e76f51',
    description: 'OOP, Collections, Stream API & Backend Logic',
  },
  {
    name: 'C',
    category: 'Programming Languages',
    level: 'INTERMEDIATE',
    icon: Code2,
    color: '#38bdf8',
    description: 'Memory Management, Pointers & System Fundamentals',
  },
  {
    name: 'R',
    category: 'Programming Languages',
    level: 'INTERMEDIATE',
    icon: Cpu,
    color: '#a855f7',
    description: 'Data Analysis, Vector Math & Statistical Computing',
  },
  {
    name: 'JavaScript',
    category: 'Programming Languages',
    level: 'BASIC',
    icon: FileCode,
    color: '#f7df1e',
    description: 'ES6+, Async/Await & DOM Manipulation',
  },
  {
    name: 'SQL',
    category: 'Programming Languages',
    level: 'INTERMEDIATE',
    icon: Database,
    color: '#00f0ff',
    description: 'Complex Queries, Joins, Indexing & Normalization',
  },

  // Category 2: Frontend
  {
    name: 'HTML',
    category: 'Frontend',
    level: 'INTERMEDIATE',
    icon: Layout,
    color: '#e34f26',
    description: 'Semantic Markup, Accessibility & Modern Standards',
  },
  {
    name: 'CSS',
    category: 'Frontend',
    level: 'INTERMEDIATE',
    icon: Layers,
    color: '#1572b6',
    description: 'Flexbox, Grid, Animations & Custom Properties',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 'BASIC',
    icon: FileCode,
    color: '#f7df1e',
    description: 'Interactive UI Logic & Client-side Scripting',
  },
  {
    name: 'React.js',
    category: 'Frontend',
    level: 'LEARNING',
    icon: Globe,
    color: '#61dafb',
    description: 'Component Lifecycle, Hooks, State & SPA Architecture',
  },

  // Category 3: Backend
  {
    name: 'Node.js',
    category: 'Backend',
    level: 'BASIC',
    icon: Server,
    color: '#68a063',
    description: 'Event-driven Runtime & Server-side I/O',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 'BASIC',
    icon: Boxes,
    color: '#ffffff',
    description: 'RESTful API Routing & Middleware',
  },

  // Category 4: Database
  {
    name: 'MySQL',
    category: 'Database',
    level: 'INTERMEDIATE',
    icon: Database,
    color: '#00758f',
    description: 'Relational Schema Design & Transaction Management',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 'INTERMEDIATE',
    icon: Database,
    color: '#336791',
    description: 'Advanced Relational Database & Constraints',
  },
  {
    name: 'Firebase',
    category: 'Database',
    level: 'INTERMEDIATE',
    icon: Flame,
    color: '#ffca28',
    description: 'Firestore, Authentication & Realtime DB',
  },
  {
    name: 'Supabase',
    category: 'Database',
    level: 'INTERMEDIATE',
    icon: Cloud,
    color: '#3ecf8e',
    description: 'Open source Firebase alternative & Postgres BaaS',
  },

  // Category 5: Tools & Platforms
  {
    name: 'Git',
    category: 'Tools & Platforms',
    level: 'INTERMEDIATE',
    icon: GitBranch,
    color: '#f05032',
    description: 'Version Control, Branching & Commit Workflows',
  },
  {
    name: 'GitHub',
    category: 'Tools & Platforms',
    level: 'INTERMEDIATE',
    icon: GithubIcon,
    color: '#f5f5f5',
    description: 'Code Hosting, Collaboration & Pull Requests',
  },
  {
    name: 'VS Code',
    category: 'Tools & Platforms',
    level: 'STRONG',
    icon: Command,
    color: '#007acc',
    description: 'Primary IDE, Debugging & Extension Ecosystem',
  },
  {
    name: 'MySQL Workbench',
    category: 'Tools & Platforms',
    level: 'INTERMEDIATE',
    icon: Database,
    color: '#00758f',
    description: 'Visual DB Modeling, Querying & Administration',
  },
  {
    name: 'Vercel',
    category: 'Tools & Platforms',
    level: 'INTERMEDIATE',
    icon: Cloud,
    color: '#ffffff',
    description: 'Frontend Deployment & CI/CD Pipelines',
  },
  {
    name: 'Render',
    category: 'Tools & Platforms',
    level: 'INTERMEDIATE',
    icon: Server,
    color: '#46e3b7',
    description: 'Cloud Hosting for Web Services & Apps',
  },
  {
    name: 'Railway',
    category: 'Tools & Platforms',
    level: 'INTERMEDIATE',
    icon: Wrench,
    color: '#a855f7',
    description: 'Infrastructure Platform for Backend Deployments',
  },
];

function CoffeeBeanIcon(props) {
  return <Terminal {...props} />;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'STRONG':
        return 'level-strong';
      case 'INTERMEDIATE':
        return 'level-intermediate';
      case 'BASIC':
        return 'level-basic';
      case 'LEARNING':
        return 'level-learning';
      default:
        return 'level-intermediate';
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="badge-pulse" /> TECH STACK
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical capabilities, languages, tools and frameworks.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="skills-category-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
              {selectedCategory === cat && (
                <motion.div
                  className="cat-tab-indicator"
                  layoutId="categoryIndicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  layout
                  key={`${skill.category}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="skill-card glass-panel"
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="skill-card-glow" style={{ background: `radial-gradient(circle at center, ${skill.color}25 0%, transparent 70%)` }} />
                  
                  <div className="skill-card-top">
                    <div
                      className="skill-icon-container"
                      style={{
                        background: `${skill.color}15`,
                        borderColor: `${skill.color}35`,
                        color: skill.color === '#ffffff' ? '#ffffff' : skill.color,
                      }}
                    >
                      <IconComponent size={22} />
                    </div>

                    <span className={`skill-level-tag ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  <div className="skill-card-content">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-category-label">{skill.category}</span>
                    <p className="skill-desc">{skill.description}</p>
                  </div>

                  <div className="skill-border-glow" style={{ background: skill.color }} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
