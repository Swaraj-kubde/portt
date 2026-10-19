import React from 'react';
import { ArrowUp, Terminal, Shield, Cpu } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Top Strip */}
        <div className="footer-top-strip">
          <div className="footer-brand">
            <div className="brand-reticle">
              <span className="reticle-corner reticle-tl" />
              <span className="reticle-corner reticle-br" />
              <Terminal size={16} className="brand-icon" />
            </div>
            <div>
              <span className="footer-name">Swaraj Kubde</span>
              <span className="footer-tagline">Robotics & Autonomous Systems Portfolio</span>
            </div>
          </div>

          <div className="footer-social-strip">
            <a
              href="https://github.com/Swaraj-kubde"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={15} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/swaraj-kubde"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={15} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="footer-status-pill">
            <span className="status-dot" />
            <span>ENGINEERING PORTFOLIO // VERIFIED ARCHIVE</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Middle Navigation & Information */}
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-col-title">NAVIGATION INDEX</span>
            <ul className="footer-links">
              <li><a href="#hero">00. Introduction</a></li>
              <li><a href="#projects">01. Featured Projects</a></li>
              <li><a href="#experience">02. Industry Experience</a></li>
              <li><a href="#skills">03. Technical Skills</a></li>
              <li><a href="#about">04. About & Academics</a></li>
              <li><a href="#contact">05. Direct Channels</a></li>
              <li>
                <a
                  href="https://github.com/Swaraj-kubde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-external"
                >
                  <GitHubIcon size={12} />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/swaraj-kubde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-external"
                >
                  <LinkedInIcon size={12} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">ENGINEERING FOCUS</span>
            <p className="footer-meta-text">
              Embedded systems, robotics, computer vision, companion computers, and intelligent autonomous systems.
            </p>
            <div className="geo-tag">
              <span>LOCATION:</span> Pune, Maharashtra, India (18.5204° N, 73.8567° E)
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">SYSTEM ARCHITECTURE</span>
            <p className="footer-meta-text">
              Engineered with React, Vanilla CSS design tokens, semantic HTML5, and responsive dark theme.
            </p>
            <span className="mono-subtext" style={{ marginTop: '8px', display: 'block' }}>
              STABLE BUILD: v1.0.0
            </span>
          </div>
        </div>

        {/* Bottom Legal / Metadata */}
        <div className="footer-bottom-strip">
          <p className="copyright-text">
            © {new Date().getFullYear()} Swaraj Pravin Kubde. All technical rights reserved.
          </p>
          <span className="editorial-text">
            Designed for technical depth, readability, and performance.
          </span>
        </div>
      </div>
    </footer>
  );
}
