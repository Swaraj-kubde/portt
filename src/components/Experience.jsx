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
            Hands-on engineering internship at CerebroSpark Innovation across UAV hardware integration, embedded software experiments, and field trials.
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
              Hands-on internship focused on multirotor hardware assembly, embedded companion computer integration, and telemetry communications. Personal contributions are separated below into functional engineering areas, adhering strictly to technical accuracy and non-disclosure standards.
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
                  <span>Autonomous drone research involving GPS-denied navigation on Linux-based embedded platforms.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Python/OpenCV computer-vision pipelines for navigation, object tracking, and perception.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Raspberry Pi Zero 2 W and Raspberry Pi 5 integration for sensors, cameras, and embedded deployment.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Participation in interceptor-drone development and testing involving real-time embedded processing.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Android-to-drone communication architecture for MAVLink telemetry and remote monitoring.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Embedded sensor integration, distance-data processing, and obstacle-detection research.</span>
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
                  <span><strong>Airframe & Electronics Assembly:</strong> Performed mechanical airframe assembly, motor mounting, and electronic speed controller (ESC) harness wiring for the Mamba product platform.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Component Sourcing & Tracking:</strong> Assisted in sourcing electrical components, connectors, and airframe structural hardware according to project BOMs.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Bench Testing & Debugging:</strong> Verified motor spin direction, calibrated ESCs, and systematically diagnosed power and wiring faults using digital multimeters.</span>
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
                  <span><strong>Mobile Interface Layout:</strong> Created an Android mobile application layout designed for clear readability of essential flight status indicators.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Telemetry Packet Parsing:</strong> Integrated MAVLink message ingestion to extract and display real-time drone parameters (attitude, battery voltage, flight mode) over USB-OTG/serial connection.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span><strong>Bench Link Verification:</strong> Validated data packet parsing using simulated and benchtop serial telemetry feeds in laboratory conditions.</span>
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
                  <span>Participated in a three-person technical team comprising myself, my technical lead, and the company's co-founder/CTO in a demonstration of the drone platform's RF-jamming capabilities.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Collaborated directly on-site during operational trial demonstrations evaluating platform readiness and deployment operations.</span>
                </li>
              </ul>
              <div className="field-confidential-note">
                <span className="confidential-note-label">CONFIDENTIALITY NOTE:</span>
                <p>
                  Technical parameters, RF specifications, frequencies, operational procedures, system schematics, and performance results are confidential and are not disclosed.
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
                  <span>Led on-ground demonstration and public outreach coordination for the company during the Pandharpur Wari event.</span>
                </li>
                <li>
                  <span className="bullet-point">▸</span>
                  <span>Managed team logistics, flight demonstration safety perimeters, and answered public questions regarding commercial and social drone applications.</span>
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
