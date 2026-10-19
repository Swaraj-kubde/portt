import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import './Navbar.css';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Identity */}
        <a href="#hero" className="navbar-brand" onClick={closeMobile}>
          <div className="brand-reticle">
            <span className="reticle-corner reticle-tl" />
            <span className="reticle-corner reticle-br" />
            <Terminal size={16} className="brand-icon" />
          </div>
          <div className="brand-text-group">
            <span className="brand-name">Swaraj Kubde</span>
            <span className="brand-meta">
              <span className="status-dot" />
              ROBOTICS & AUTONOMY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a href="#projects" className="nav-link">
                <span className="nav-num">01.</span>Work
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link">
                <span className="nav-num">02.</span>Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                <span className="nav-num">03.</span>Skills
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                <span className="nav-num">04.</span>About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <span className="nav-num">05.</span>Contact
              </a>
            </li>
          </ul>

          <div className="navbar-social-links">
            <a
              href="https://github.com/Swaraj-kubde"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-btn"
              aria-label="GitHub Profile"
              title="GitHub — Swaraj-kubde"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/swaraj-kubde"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn — Swaraj Kubde"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>

          <button
            type="button"
            className="resume-btn"
            onClick={onOpenResume}
            aria-label="View or download resume"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-drawer-content">
          <ul className="mobile-nav-list">
            <li>
              <a href="#projects" className="mobile-nav-link" onClick={closeMobile}>
                <span className="nav-num">01.</span> Work / Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="mobile-nav-link" onClick={closeMobile}>
                <span className="nav-num">02.</span> Industry Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="mobile-nav-link" onClick={closeMobile}>
                <span className="nav-num">03.</span> Technical Skills
              </a>
            </li>
            <li>
              <a href="#about" className="mobile-nav-link" onClick={closeMobile}>
                <span className="nav-num">04.</span> About & Academics
              </a>
            </li>
            <li>
              <a href="#contact" className="mobile-nav-link" onClick={closeMobile}>
                <span className="nav-num">05.</span> Contact
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-social-row">
              <a
                href="https://github.com/Swaraj-kubde"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <GitHubIcon size={16} />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/swaraj-kubde"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                closeMobile();
                onOpenResume();
              }}
            >
              <span>Download Resume</span>
              <ArrowUpRight size={16} />
            </button>
            <div className="mobile-status-bar">
              <span className="mono-subtext">ENTC • TRINITY ACADEMY OF ENGINEERING</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
