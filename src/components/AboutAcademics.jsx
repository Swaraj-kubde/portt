import React from 'react';
import { GraduationCap } from 'lucide-react';
import './AboutAcademics.css';

export default function AboutAcademics() {
  const academicScores = [
    { year: 'FE', label: 'First Year', score: '9.27', note: 'Semester I & II' },
    { year: 'SE', label: 'Second Year', score: '9.20', note: 'Semester III & IV' },
    { year: 'TE', label: 'Third Year', score: '8.97', note: 'Semester V & VI' },
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="mono-label">
            <GraduationCap size={14} />
            <span>ACADEMICS & BACKGROUND // 04</span>
          </div>
          <h2 className="section-title">About Me & Academic Foundation</h2>
          <p className="section-subtitle">
            Electronics and Telecommunication Engineering student focused on embedded systems, robotics, and intelligent systems development.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Engineering Philosophy & Personal Narrative */}
          <div className="about-bio-column">
            <span className="reticle-corner reticle-tl" />
            <span className="reticle-corner reticle-br" />

            <h3 className="bio-heading">Building Systems from Silicon to Software</h3>

            <p className="bio-paragraph">
              I am an undergraduate engineering student at <strong>Trinity Academy of Engineering, Pune</strong>, pursuing Electronics and Telecommunication (ENTC). My technical focus spans embedded systems, robotics, computer vision, and AI-driven intelligent systems.
            </p>

            <p className="bio-paragraph">
              My engineering approach combines hands-on prototyping with systematic software and hardware testing. I build practical solutions across robotics, embedded computing, and computer vision—prioritizing disciplined validation and reliability from sensor interfacing to system-level integration.
            </p>
          </div>

          {/* Right Column: Academic Credential & Degree Records */}
          <div className="about-academics-column">
            <span className="reticle-corner reticle-tr" />
            <span className="reticle-corner reticle-bl" />

            <div className="degree-header">
              <span className="degree-status-pill">UNDERGRADUATE DEGREE PROGRAM</span>
              <h3 className="degree-title">Bachelor of Engineering (B.E.)</h3>
              <p className="degree-discipline">Electronics and Telecommunication Engineering (ENTC)</p>
            </div>

            <div className="institution-info">
              <div className="institution-row">
                <span className="inst-label">INSTITUTION:</span>
                <span className="inst-value">Trinity Academy of Engineering, Pune</span>
              </div>
              <div className="institution-row">
                <span className="inst-label">TIMELINE:</span>
                <span className="inst-value">2023 – 2027</span>
              </div>
              <div className="institution-row">
                <span className="inst-label">AFFILIATION:</span>
                <span className="inst-value">SPPU (Pune University)</span>
              </div>
            </div>

            {/* Academic Performance Section */}
            <div className="academic-performance-section">
              <div className="perf-header">
                <span className="perf-label">ACADEMIC PERFORMANCE</span>
              </div>

              <div className="year-scores-grid">
                {academicScores.map((item) => (
                  <div key={item.year} className="year-score-card">
                    <div className="year-score-header">
                      <span className="year-code">{item.year}</span>
                      <span className="year-title">{item.label}</span>
                    </div>
                    <div className="year-score-value">{item.score}</div>
                    <span className="year-score-note">{item.note}</span>
                  </div>
                ))}
              </div>

              <p className="performance-disclaimer">
                Academic evaluation scores across completed terms under SPPU curriculum.
              </p>
            </div>

            {/* Relevant Coursework */}
            <div className="coursework-box">
              <span className="coursework-label">RELEVANT COURSEWORK & LABS:</span>
              <div className="coursework-tags">
                <span className="mono-tag">Embedded Systems</span>
                <span className="mono-tag">Control Systems</span>
                <span className="mono-tag">Signals & DSP</span>
                <span className="mono-tag">Circuit Design</span>
                <span className="mono-tag">Data Networks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
