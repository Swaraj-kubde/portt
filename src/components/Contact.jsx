import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, ExternalLink } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';
import './Contact.css';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'swarajwork.06@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="mono-label">
            <Mail size={14} />
            <span>COMMUNICATION // 05</span>
          </div>
          <h2 className="section-title">Direct Contact & Channels</h2>
          <p className="section-subtitle">
            Open to technical discussions regarding embedded engineering, robotics, intelligent systems, and collaborative engineering projects.
          </p>
        </div>

        <div className="contact-card">
          <span className="reticle-corner reticle-tl" />
          <span className="reticle-corner reticle-tr" />
          <span className="reticle-corner reticle-bl" />
          <span className="reticle-corner reticle-br" />

          <div className="channels-grid">
            {/* Primary Email Channel */}
            <div className="channel-box primary-channel">
              <div className="channel-header">
                <div className="channel-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="channel-label">OFFICIAL DIRECT INBOX</span>
                  <h3 className="channel-title">Email Communication</h3>
                </div>
              </div>

              <p className="channel-desc">
                Fastest way to reach me for technical inquiries, research collaboration, or engineering opportunities.
              </p>

              <div className="channel-action-row">
                <a
                  href={`mailto:${email}?subject=Robotics%20Portfolio%20Inquiry%20-%20Swaraj%20Kubde`}
                  className="btn-primary"
                >
                  <Mail size={16} />
                  <span>Send Email via mailto:</span>
                </a>

                <button
                  type="button"
                  className="btn-secondary copy-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? <Check size={15} color="#B6F36A" /> : <Copy size={15} />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Address'}</span>
                </button>
              </div>

              <div className="email-display">
                <code>{email}</code>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="channel-box">
              <div className="channel-header">
                <div className="channel-icon-box">
                  <LinkedInIcon size={20} />
                </div>
                <div>
                  <span className="channel-label">PROFESSIONAL NETWORK</span>
                  <h3 className="channel-title">LinkedIn Profile</h3>
                </div>
              </div>

              <p className="channel-desc">
                Connect for professional updates, project milestones, and engineering networking.
              </p>

              <div className="channel-action-row">
                <a
                  href="https://linkedin.com/in/swaraj-kubde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="Connect with Swaraj Kubde on LinkedIn"
                >
                  <LinkedInIcon size={14} />
                  <span>linkedin.com/in/swaraj-kubde</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* GitHub Channel */}
            <div className="channel-box">
              <div className="channel-header">
                <div className="channel-icon-box">
                  <GitHubIcon size={20} />
                </div>
                <div>
                  <span className="channel-label">OPEN SOURCE & REPOSITORIES</span>
                  <h3 className="channel-title">GitHub Profile</h3>
                </div>
              </div>

              <p className="channel-desc">
                Explore autonomous robotics software, embedded companion computer code, and public repositories.
              </p>

              <div className="channel-action-row">
                <a
                  href="https://github.com/Swaraj-kubde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="View Swaraj Kubde on GitHub"
                >
                  <GitHubIcon size={14} />
                  <span>github.com/Swaraj-kubde</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Resume Download Channel */}
            <div className="channel-box resume-channel">
              <div className="channel-header">
                <div className="channel-icon-box">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="channel-label">CURRICULUM VITAE</span>
                  <h3 className="channel-title">Engineering Resume</h3>
                </div>
              </div>

              <p className="channel-desc">
                Comprehensive technical resume outlining engineering projects, embedded systems experience, and academic standing.
              </p>

              <div className="channel-action-row">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={onOpenResume}
                  aria-label="Download resume"
                >
                  <FileText size={16} />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
