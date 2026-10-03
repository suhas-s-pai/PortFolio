import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        {/* Left: Copyright */}
        <div className="footer-left">
          <span className="footer-brand">SUHAS S PAI</span>
          <span className="footer-copyright">© 2026 Suhas S Pai. All rights reserved.</span>
        </div>

        {/* Center: Built with React */}
        <div className="footer-center">
          <span>Built with <span className="react-highlight">React</span> &amp; Framer Motion</span>
        </div>

        {/* Right: Socials & Scroll to Top */}
        <div className="footer-right">
          <div className="footer-social-links">
            <a
              href="https://github.com/suhas-s-pai"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/suhas-s-pai-072889357"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
