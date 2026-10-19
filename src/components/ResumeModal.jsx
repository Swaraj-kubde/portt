import React, { useEffect } from 'react';
import { X, Mail, Download } from 'lucide-react';
import './ResumeModal.css';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div className="resume-modal-box" onClick={(e) => e.stopPropagation()}>
        <span className="reticle-corner reticle-tl" />
        <span className="reticle-corner reticle-tr" />
        <span className="reticle-corner reticle-bl" />
        <span className="reticle-corner reticle-br" />

        <div className="modal-header">
          <div className="modal-header-left">
            <span className="mono-subtext">// DOCUMENT REPOSITORY</span>
            <span className="modal-id-badge">RESUME_V1</span>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="resume-modal-body">
          <div className="resume-header-group">
            <h3 id="resume-modal-title" className="resume-modal-title">
              Engineering Resume // Swaraj Pravin Kubde
            </h3>
            <p className="resume-modal-subtitle">
              Undergraduate coursework, robotics research, embedded hardware integration, and industry internship.
            </p>
          </div>

          <div className="resume-details-box">
            <span className="spec-key">VERIFIED CREDENTIAL SUMMARY</span>
            <ul className="resume-bullets">
              <li><strong>Candidate:</strong> Swaraj Pravin Kubde</li>
              <li><strong>Education:</strong> B.E. in Electronics & Telecommunication, Trinity Academy of Engineering (2023–2027)</li>
              <li><strong>Academic Performance:</strong> FE: 9.27 | SE: 9.20 | TE: 8.97</li>
              <li><strong>Experience:</strong> Project Intern @ CerebroSpark Innovation (Robotics, MAVLink, Embedded Linux, Computer Vision)</li>
            </ul>
          </div>

          <div className="resume-action-buttons">
            <a
              href="/Swaraj_Kubde_Resume.pdf"
              download="Swaraj_Kubde_Resume.pdf"
              className="btn-primary"
            >
              <Download size={16} />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href="mailto:swarajwork.06@gmail.com?subject=Inquiry%20regarding%20Swaraj%20Kubde%20Resume&body=Hi%20Swaraj,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20opportunity.%0A%0AThanks!"
              className="btn-secondary"
            >
              <Mail size={16} />
              <span>Request Custom Format via Email</span>
            </a>
          </div>
        </div>

        <div className="modal-footer">
          <span className="mono-subtext">SWARAJ KUBDE // DOCUMENTATION INDEX</span>
          <button type="button" className="btn-ghost" onClick={onClose}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
