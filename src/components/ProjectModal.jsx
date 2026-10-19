import React, { useEffect } from 'react';
import { X, Cpu, Layers, Activity, CheckCircle, Shield, FileText } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <span className="reticle-corner reticle-tl" />
        <span className="reticle-corner reticle-tr" />
        <span className="reticle-corner reticle-bl" />
        <span className="reticle-corner reticle-br" />

        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="mono-subtext">// {project.isCompanyRnd ? 'COMPANY R&D SPECIFICATION' : 'ENGINEERING CASE SPECIFICATION'}</span>
            <span className="modal-id-badge">{project.statusCode}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-scroll-area">
          <div className="modal-hero">
            <span className="modal-category">{project.category}</span>
            <h2 id="modal-project-title" className="modal-title">{project.title}</h2>
            <p className="modal-summary">{project.summary}</p>
          </div>

          {/* Media in Modal: Authentic Gallery or Blueprint Placeholder */}
          {project.gallery && project.gallery.length > 0 ? (
            <div className="modal-gallery-box">
              <div className={`modal-gallery-grid ${project.gallery.length === 1 ? 'single-item' : ''} ${project.isMobileScreenshots ? 'mobile-screenshots' : ''}`}>
                {project.gallery.map((imgItem, idx) => (
                  <div key={idx} className={`modal-gallery-card ${project.isMobileScreenshots ? 'mobile-card' : ''}`}>
                    <div className="modal-gallery-img-wrapper">
                      <img
                        src={imgItem.src}
                        alt={`${project.title} — ${imgItem.caption}`}
                        className="modal-gallery-img"
                      />
                      <span className="gallery-tag">0{idx + 1} // {project.isMobileScreenshots ? 'APP INTERFACE' : 'HARDWARE VIEW'}</span>
                    </div>
                    <div className="modal-gallery-caption">
                      <span className="caption-bullet">▸</span>
                      <span>{imgItem.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="modal-media-box">
              <div className="modal-placeholder-grid" />
              <div className="modal-placeholder-content">
                <span className="modal-placeholder-badge">{project.placeholderLabel}</span>
                <span className="modal-placeholder-sub">{project.placeholderSubtext}</span>
                <span className="modal-placeholder-note">
                  Hardware documentation and technical imagery available upon request.
                </span>
              </div>
            </div>
          )}

          {/* Architecture Matrix */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Cpu size={16} className="section-icon" />
              <span>System & Hardware Architecture</span>
            </h3>
            <div className="specs-grid">
              {Object.entries(project.architecture).map(([key, val]) => (
                <div key={key} className="spec-card">
                  <span className="spec-key">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                  <p className="spec-val">{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Contributions & Highlights */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Activity size={16} className="section-icon" />
              <span>Key Technical Contributions</span>
            </h3>
            <ul className="modal-highlights-list">
              {project.keyHighlights.map((item, index) => (
                <li key={index} className="modal-highlight-item">
                  <span className="bullet-point">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Engineering Status */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Shield size={16} className="section-icon" />
              <span>Current Status & Verification</span>
            </h3>
            <div className="status-box">
              <p className="status-text">{project.statusDetails}</p>
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="modal-section">
            <span className="spec-key" style={{ marginBottom: '8px', display: 'block' }}>APPLIED TECHNOLOGIES & PROTOCOLS</span>
            <div className="modal-tags">
              {project.tags.map((t) => (
                <span key={t} className="mono-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="mono-subtext">ID: {project.id} • {project.isCompanyRnd ? 'CEREBROSPARK INNOVATION R&D ARCHIVE' : 'SWARAJ KUBDE LAB ARCHIVE'}</span>
          <button type="button" className="btn-secondary" onClick={onClose}>
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
}
