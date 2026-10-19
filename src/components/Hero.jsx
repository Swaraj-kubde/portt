import React from 'react';
import { ArrowDown, FileText, Mail, ChevronRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import ProfilePortrait from './ProfilePortrait';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Technical Introduction */}
        <div className="hero-content">
          {/* Engineering Category Tag */}
          <div className="hero-kicker-group">
            <span className="kicker-badge">
              <span className="status-dot" />
              ROBOTICS / EMBEDDED SYSTEMS / AUTONOMY
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">Swaraj Kubde</h1>

          {/* Main Statement */}
          <p className="hero-statement">
            Building intelligent systems from hardware to software.
          </p>

          {/* Supporting Text */}
          <p className="hero-supporting">
            ENTC engineering student with hands-on experience across embedded systems, robotics, computer vision, and autonomous technologies.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>Explore Projects</span>
              <ArrowDown size={16} />
            </a>

            <button
              type="button"
              className="btn-secondary"
              onClick={onOpenResume}
              aria-label="Download resume"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </button>

            <a href="#contact" className="hero-contact-link">
              <Mail size={15} />
              <span>Get in Touch</span>
              <ChevronRight size={14} />
            </a>

            <div className="hero-social-strip">
              <a
                href="https://github.com/Swaraj-kubde"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="GitHub Profile"
                title="GitHub — Swaraj-kubde"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/swaraj-kubde"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn — Swaraj Kubde"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          {/* Technical Metadata Bar */}
          <div className="hero-telemetry-strip">
            <div className="telemetry-item">
              <span className="telemetry-label">INSTITUTION</span>
              <span className="telemetry-value">Trinity Academy of Engineering</span>
            </div>
            <div className="telemetry-separator">/</div>
            <div className="telemetry-item">
              <span className="telemetry-label">CURRENT ROLE</span>
              <span className="telemetry-value">R&D Intern @ CerebroSpark</span>
            </div>
            <div className="telemetry-separator">/</div>
            <div className="telemetry-item">
              <span className="telemetry-label">LOCATION</span>
              <span className="telemetry-value">Pune, Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Portrait */}
        <div className="hero-portrait-column">
          <ProfilePortrait />
        </div>
      </div>
    </section>
  );
}
