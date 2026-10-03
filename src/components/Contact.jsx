import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
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
      setErrorMessage('Please complete all fields before sending.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');

      try {
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#C96F4A', '#B85C38', '#68705A'],
        });
      } catch (err) {
        // fallback
      }

      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 900);
  };

  return (
    <section id="contact" className="editorial-contact-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="editorial-contact-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">GET IN TOUCH</div>
          <h2 className="section-title">Let's build something useful.</h2>
          <p className="contact-editorial-subtitle">
            Have an idea, internship opportunity, collaboration, or project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="editorial-contact-grid">
          {/* Left Side: Prominent Email & Direct Links */}
          <motion.div
            className="contact-direct-col"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="email-display-card">
              <span className="email-label font-mono">DIRECT EMAIL</span>
              <a href="mailto:suhaspai13@gmail.com" className="prominent-email-link font-serif">
                suhaspai13@gmail.com
              </a>
              <span className="email-hint">Click to launch your email client</span>
            </div>

            <div className="editorial-social-list">
              {/* GitHub Link */}
              <a
                href="https://github.com/suhas-s-pai"
                target="_blank"
                rel="noopener noreferrer"
                className="social-editorial-item"
              >
                <div className="social-left">
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </div>
                <span className="social-sub font-mono">@suhas-s-pai</span>
                <ArrowUpRight size={16} className="social-arrow" />
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/suhas-s-pai-072889357"
                target="_blank"
                rel="noopener noreferrer"
                className="social-editorial-item"
              >
                <div className="social-left">
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </div>
                <span className="social-sub font-mono">suhas-s-pai-072889357</span>
                <ArrowUpRight size={16} className="social-arrow" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Clean Contact Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="editorial-form-card">
              <h3 className="form-card-title">Send a message</h3>

              {status === 'success' ? (
                <motion.div
                  className="form-success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={38} className="success-check-icon" />
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. This is a client-side demonstration form.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="editorial-contact-form">
                  {errorMessage && <div className="form-error-msg">{errorMessage}</div>}

                  <div className="form-field">
                    <label htmlFor="name" className="field-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="field-input"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="field-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="field-input"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="field-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="field-input field-textarea"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="editorial-btn btn-primary form-submit-btn"
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <span className="form-preview-notice font-mono">
                    * Client-side portfolio form demonstration
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
