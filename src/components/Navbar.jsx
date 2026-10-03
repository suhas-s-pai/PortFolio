import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`editorial-navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-outer-container">
        <div className="nav-pill">
          {/* Brand Name */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-brand">
            SUHAS S PAI
          </a>

          {/* Desktop Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <li key={item.name} className="nav-item">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="active-dot"
                          layoutId="editorialActiveDot"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Availability Badge */}
          <div className="nav-status-badge">
            <span className="status-dot-pulse" />
            <span className="status-text">Available for opportunities</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-dropdown-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mobile-menu-inner container">
              <ul className="mobile-nav-list">
                {navItems.map((item, idx) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="mobile-nav-link"
                    >
                      <span className="mobile-nav-num">0{idx + 1}</span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-status-row">
                <span className="status-dot-pulse" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
