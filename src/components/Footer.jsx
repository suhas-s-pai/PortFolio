import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container footer-editorial-inner">
        {/* Left Side: Brand & Tagline */}
        <div className="footer-left-area">
          <span className="footer-serif-brand font-serif">SUHAS S PAI</span>
          <p className="footer-tagline font-mono">
            Java Developer • Full-Stack Developer • CSE Student
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="footer-copyright font-mono">
          © 2026 Suhas S Pai
        </div>

        {/* Right Side: Links & Scroll Top */}
        <div className="footer-right-area">
          <div className="footer-links-row">
            <a
              href="https://github.com/suhas-s-pai"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/suhas-s-pai-072889357"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:suhaspai13@gmail.com" className="footer-link-item">
              <span>Email</span>
            </a>
          </div>

          <button onClick={scrollToTop} className="footer-scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
