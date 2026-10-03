import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ArrowUpRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all fields before sending.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#00ff9d', '#38bdf8', '#a855f7'],
        });
      } catch (err) {
        // fallback
      }

      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Contact Ambient Backdrop Glow */}
        <div className="contact-glow-bg" />

        {/* Section Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="badge-pulse" /> GET IN TOUCH
          </div>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something.</span>
          </h2>
          <p className="contact-subtitle">
            Have an idea, opportunity or project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Side: Contact Info & Social Cards */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card glass-panel">
              <h3 className="contact-card-title">
                <Sparkles className="contact-title-icon" size={20} />
                <span>Connect & Collaborate</span>
              </h3>
              <p className="contact-card-text">
                Whether you want to discuss Java architecture, full-stack development, student projects, or career opportunities, feel free to reach out directly through any platform below.
              </p>

              <div className="social-links-list">
                {/* GitHub */}
                <a
                  href="https://github.com/suhas-s-pai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-item glass-panel"
                >
                  <div className="social-icon-box github">
                    <GithubIcon size={20} />
                  </div>
                  <div className="social-info">
                    <span className="social-name">GitHub</span>
                    <span className="social-handle">@suhas-s-pai</span>
                  </div>
                  <ArrowUpRight size={18} className="social-arrow" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/suhas-s-pai-072889357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-item glass-panel"
                >
                  <div className="social-icon-box linkedin">
                    <LinkedinIcon size={20} />
                  </div>
                  <div className="social-info">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-handle">suhas-s-pai-072889357</span>
                  </div>
                  <ArrowUpRight size={18} className="social-arrow" />
                </a>

                {/* Email Placeholder */}
                <div className="social-card-item glass-panel">
                  <div className="social-icon-box email">
                    <Mail size={20} />
                  </div>
                  <div className="social-info">
                    <span className="social-name">Email</span>
                    <span className="social-handle">your-email@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Glass Contact Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-form-card glass-panel">
              <div className="form-card-header">
                <MessageSquare className="form-icon" size={20} />
                <span>Send a Direct Message</span>
              </div>

              {status === 'success' ? (
                <motion.div
                  className="form-success-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4>Message Received!</h4>
                  <p>
                    Thank you for reaching out. This form is a frontend preview, but your interest is appreciated!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {errorMessage && (
                    <div className="form-error-banner">{errorMessage}</div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your idea, project or opportunity..."
                      className="form-input form-textarea"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-primary submit-btn"
                  >
                    {status === 'submitting' ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={16} className="send-icon" />
                      </>
                    )}
                  </button>

                  <span className="form-notice">
                    * Frontend demonstration form with clean validation state.
                  </span>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
