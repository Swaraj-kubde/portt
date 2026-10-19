import React from 'react';
import { Briefcase, Calendar, MapPin, Terminal, Wrench, Radio, Shield, Flag } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="mono-label">
            <Briefcase size={14} />
            <span>INDUSTRY EXPERIENCE // 02</span>
          </div>
          <h2 className="section-title">Industry Experience & Contributions</h2>
          <p className="section-subtitle">
            Engineering internship at CerebroSpark Innovation spanning UAV integration, embedded Linux systems, and field trials.
          </p>
        </div>

        {/* Single Employer Card */}
        <div className="experience-card">
          <span className="reticle-corner reticle-tl" />
          <span className="reticle-corner reticle-tr" />
          <span className="reticle-corner reticle-bl" />
          <span className="reticle-corner reticle-br" />

          {/* Role Header */}
          <div className="experience-header">
            <div className="role-headline-group">
              <div className="role-badge-row">
                <span className="role-status-badge">
                  <span className="status-dot-sm" />
                  PROJECT INTERNSHIP
                </span>
                <span className="role-domain">UAV R&D & EMBEDDED SYSTEMS</span>
              </div>
              <h3 className="role-title">Project Intern</h3>
              <div className="company-info-row">
                <span className="company-name">CerebroSpark Innovation</span>
                <span className="location-tag">
                  <MapPin size={13} /> Pune, Maharashtra
                </span>
                <span className="duration-tag">
                  <Calendar size={13} /> January 2026 – Present
                </span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="experience-overview">
            <p>
              Hands-on internship focused on UAV hardware integration, companion computers, telemetry communications, and embedded software prototyping.
            </p>
          </div>

          {/* Subsections Grid */}
          <div className="experience-subsections-grid">
            {/* Subsection 1: Simplified R&D & Embedded Software Contributions */}
            <div className="sub-card rnd-master-card" id="rnd-embedded-contributions">
              <div className="sub-header">
                <Terminal size={17} className="sub-icon accent-icon" />
                <h4 className="sub-title">1. R&D & Embedded Software Contributions</h4>
              </div>
              <ul className="sub-list">
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Autonomous drone research and GPS-denied navigation on embedded Linux.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Python/OpenCV vision pipelines for target tracking and perception.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Raspberry Pi companion computer integration for sensors, cameras, and telemetry.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Distance sensor interfacing and real-time proximity-detection research.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Participation in interceptor-drone development and embedded testing.</span>
                </li>
              </ul>
            </div>

            {/* Subsection 2: Mamba Product Assembly, Sourcing & Testing */}
            <div className="sub-card">
              <div className="sub-header">
                <Wrench size={17} className="sub-icon" />
                <h4 className="sub-title">2. Mamba Product Assembly & Hardware Testing</h4>
              </div>
              <ul className="sub-list">
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Airframe Assembly:</strong> Assembled airframes, motor mounts, and ESC harnesses for the Mamba platform.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>BOM Sourcing:</strong> Procured electronic components, connectors, and structural hardware.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Bench Diagnostics:</strong> Calibrated ESCs, verified motor rotation, and debugged power lines.</span>
                </li>
              </ul>
            </div>

            {/* Subsection 3: Android-to-Drone Communication Architecture */}
            <div className="sub-card">
              <div className="sub-header">
                <Radio size={17} className="sub-icon" />
                <h4 className="sub-title">3. Android-to-Drone Communication Interface</h4>
              </div>
              <ul className="sub-list">
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Mobile Interface:</strong> Built an Android layout for clear display of critical flight telemetry.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Telemetry Parsing:</strong> Integrated serial MAVLink ingestion for attitude, battery, and flight modes.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Bench Verification:</strong> Validated packet parsing and screen updates using simulated feeds.</span>
                </li>
              </ul>
            </div>

            {/* Subsection 4: Field Trials & Technology Demonstration — Rajasthan (Optional & Modular) */}
            <div className="sub-card field-testing-card" id="rajasthan-field-testing">
              <div className="sub-header">
                <Shield size={17} className="sub-icon accent-icon" />
                <div className="sub-title-group">
                  <h4 className="sub-title">Field Trials & Technology Demonstration — Rajasthan</h4>
                  <span className="confidential-badge">CONFIDENTIAL R&D // TECHNICAL DEMONSTRATION</span>
                </div>
              </div>
              <ul className="sub-list">
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Demonstrated platform RF-jamming capabilities on-site alongside the technical lead and CTO.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Assisted platform deployment, pre-flight readiness checks, and operational trials.</span>
                </li>
              </ul>
              <div className="field-confidential-note">
                <span className="confidential-note-label">CONFIDENTIALITY NOTE:</span>
                <p>
                  Operational frequencies, schematics, and performance metrics are proprietary.
                </p>
              </div>
            </div>

            {/* Subsection 5: Pandharpur Wari Marketing Campaign Leadership */}
            <div className="sub-card pandharpur-card">
              <div className="sub-header">
                <Flag size={17} className="sub-icon" />
                <h4 className="sub-title">5. Pandharpur Wari Campaign Leadership</h4>
              </div>
              <p className="cross-functional-label">SECONDARY CROSS-FUNCTIONAL CONTRIBUTION</p>
              <ul className="sub-list">
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Coordinated on-ground flight demonstrations and public outreach during the Pandharpur Wari event.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Managed flight demonstration perimeters, team logistics, and platform safety.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Strip */}
          <div className="experience-tech-footer">
            <span className="tech-footer-label">CORE TOOLS:</span>
            <div className="tech-tags-row">
              <span className="mono-tag">ArduPilot</span>
              <span className="mono-tag">Raspberry Pi</span>
              <span className="mono-tag">Python</span>
              <span className="mono-tag">OpenCV</span>
              <span className="mono-tag">MAVLink</span>
              <span className="mono-tag">Hardware Assembly</span>
              <span className="mono-tag">Bench Testing</span>
              <span className="mono-tag">Field Demonstrations</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
