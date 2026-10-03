import React from 'react';
import { motion } from 'framer-motion';
import './PersonalStatement.css';

export default function PersonalStatement() {
  return (
    <section className="editorial-quote-section">
      <div className="container">
        <motion.div
          className="quote-content-wrapper"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="quote-mark font-serif">“</span>
          <blockquote className="editorial-quote-text font-serif">
            Curious about how things work. <br />
            <span className="quote-highlight">Focused on building things that work.</span>
          </blockquote>
          <div className="quote-author-line">
            <span className="author-dash" />
            <span className="author-name">SUHAS S PAI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
