import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

const editorialProjects = [
  {
    number: '01',
    title: 'AGRISPHERE',
    subtitle: 'Smart Farming. Better Decisions.',
    description:
      'Agriculture-focused AI assistant and smart farming platform designed to empower farmers with crop advisory, real-time market data, and intelligent recommendations.',
    techStack: ['React', 'Node.js', 'Supabase', 'JavaScript'],
    githubUrl: 'https://github.com/suhas-s-pai',
    accentColor: '#C96F4A',
    visualVariant: 'agrisphere',
  },
  {
    number: '02',
    title: 'KALISOS / PARASHU',
    subtitle: 'Women Safety & Emergency Platform',
    description:
      'Voice-assisted SOS emergency application featuring real-time location dispatch, automated SMS alerts, and geofence safety monitoring.',
    techStack: ['Java', 'Android', 'Firebase', 'Location API'],
    githubUrl: 'https://github.com/suhas-s-pai',
    accentColor: '#B85C38',
    visualVariant: 'kalisos',
  },
  {
    number: '03',
    title: 'SMART ATTENDANCE',
    subtitle: 'Role-Based Attendance Management',
    description:
      'React + Firebase attendance platform featuring tailored dashboards for students, faculty members, and institution administrators with analytics export.',
    techStack: ['React', 'Express.js', 'Firebase', 'Node.js'],
    githubUrl: 'https://github.com/suhas-s-pai',
    accentColor: '#68705A',
    visualVariant: 'attendance',
  },
  {
    number: '04',
    title: 'JATHAYU',
    subtitle: 'Real-Time Family Location Sharing',
    description:
      'Family safety monitoring application providing continuous geolocation tracking, custom circle management, and instant emergency broadcasts.',
    techStack: ['Java', 'Firebase', 'Node.js', 'Maps API'],
    githubUrl: 'https://github.com/suhas-s-pai',
    accentColor: '#A0522D',
    visualVariant: 'jathayu',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="editorial-projects-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="editorial-projects-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">SELECTED WORK</div>
          <h2 className="section-title">Featured Projects.</h2>
          <p className="projects-editorial-subtitle">
            Thoughtful software solutions built with Java, full-stack web frameworks, and cloud databases.
          </p>
        </motion.div>

        {/* Editorial Project Entries */}
        <div className="editorial-projects-list">
          {editorialProjects.map((proj, idx) => (
            <motion.div
              key={proj.number}
              className="editorial-project-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Left Side: Editorial Typography & Content */}
              <div className="project-editorial-info">
                <div className="project-num-tag">
                  <span className="project-large-num font-serif">{proj.number}</span>
                </div>

                <h3 className="project-serif-title font-serif">{proj.title}</h3>
                <span className="project-subtitle-tagline">{proj.subtitle}</span>

                <p className="project-editorial-desc">{proj.description}</p>

                {/* Tech Tags */}
                <div className="project-tech-row">
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="editorial-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-editorial-actions">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-project-btn"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                    <ArrowUpRight size={15} className="btn-arrow-icon" />
                  </a>
                </div>
              </div>

              {/* Right Side: Artistic Abstract Project Visual Area */}
              <div className="project-editorial-visual-wrapper">
                <div className={`project-abstract-visual ${proj.visualVariant}`}>
                  <div className="visual-inner-card">
                    <span className="visual-monogram font-serif">{proj.title.substring(0, 2)}</span>
                    <span className="visual-badge">{proj.subtitle.split('.')[0]}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
