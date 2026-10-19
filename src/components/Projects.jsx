import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Radio, ShieldCheck } from 'lucide-react';
import ProjectModal from './ProjectModal';
import './Projects.css';

export const PROJECTS_DATA = [
  {
    id: 'autonomous-quadcopter',
    title: 'Autonomous Quadcopter Research Platform',
    category: 'Personal UAV Platform & Hardware Setup',
    status: 'Airframe Build & Bench Testbed',
    statusCode: 'PERSONAL RESEARCH PLATFORM',
    image: '/images/quadcopter-front.jpg',
    gallery: [
      {
        src: '/images/quadcopter-front.jpg',
        caption: 'Bench Testbed — Searchlight & Sensor Payload'
      },
      {
        src: '/images/quadcopter-top.jpg',
        caption: 'Overhead View — Airframe, Autopilot & GPS Mast'
      }
    ],
    placeholderLabel: 'QUADCOPTER PLATFORM',
    placeholderSubtext: 'MULTIROTAR AIRFRAME & ARDUPILOT BENCH SETUP',
    summary:
      'Multirotor research platform built to evaluate airframe assembly, ArduPilot flight control, and companion computer integration. Configured motor calibration, sensor damping, and MAVLink telemetry with a Raspberry Pi companion board. Successfully verified pre-arm safety checks and sensor telemetry in bench testing.',
    tags: ['ArduPilot', 'CrossFlight', 'Mission Planner', 'MAVLink', 'Hardware Assembly'],
    architecture: {
      flightController: 'RadioLink CrossFlight autopilot running ArduPilot firmware with damping mount',
      companionComputer: 'Raspberry Pi companion computer connected over serial telemetry',
      groundStation: 'Mission Planner for parameter configuration, calibration, and checks',
      powerSetup: 'LiPo battery with regulated power module supplying autopilot and ESCs'
    },
    keyHighlights: [
      'Assembled mechanical airframe, power distribution harness, and vibration-damped autopilot mount.',
      'Calibrated ESCs, compass, and IMU sensors in Mission Planner with motor direction verification.',
      'Configured MAVLink serial telemetry communication with Raspberry Pi companion computer.'
    ],
    statusDetails:
      'Airframe assembly, electronics wiring, and sensor calibrations verified on bench testbed.'
  },
  {
    id: 'android-ground-station',
    title: 'Android Drone Ground Station',
    category: 'Mobile Telemetry & UI Prototype',
    status: 'Mobile UI & Telemetry Prototype',
    statusCode: 'INDEPENDENT SOFTWARE PROTOTYPE',
    isMobileScreenshots: true,
    collage: [
      {
        src: '/images/groundstation-telemetry.jpg',
        label: 'PANEL A // FLIGHT HUD',
        alt: 'ArduPilot Companion Telemetry Screen'
      },
      {
        src: '/images/groundstation-diagnostics.jpg',
        label: 'PANEL B // MAVLINK LOGS',
        alt: 'MAVLink Diagnostics & Message Console'
      }
    ],
    gallery: [
      {
        src: '/images/groundstation-telemetry.jpg',
        caption: 'Flight HUD — Attitude, Relative Altitude & Battery Monitor'
      },
      {
        src: '/images/groundstation-diagnostics.jpg',
        caption: 'MAVLink Diagnostics — Packet Counters & EKF2 Sensor Stream'
      }
    ],
    placeholderLabel: 'GROUND STATION INTERFACE',
    placeholderSubtext: 'MOBILE TELEMETRY DISPLAY INTERFACE',
    summary:
      'Mobile telemetry display developed to monitor drone flight parameters over direct serial/USB-OTG links. Ingests and parses MAVLink packets to present attitude, battery status, and flight modes in a clean HUD. Validated data parsing and display refresh rates using bench telemetry feeds.',
    tags: ['Android UI', 'MAVLink', 'USB-OTG Serial', 'Telemetry HUD'],
    architecture: {
      platform: 'Android application interface',
      telemetrySource: 'MAVLink packet stream via USB-OTG serial transceiver link',
      displayParameters: 'Attitude (pitch/roll), battery voltage, armed state, flight mode',
      designFocus: 'High-contrast clean layout for field testing readability'
    },
    keyHighlights: [
      'Designed high-contrast Android HUD and diagnostics console for field readability.',
      'Implemented serial MAVLink parser for HEARTBEAT, ATTITUDE, and SYS_STATUS packets.',
      'Verified telemetry ingestion and data rendering with benchtop serial streams.'
    ],
    statusDetails:
      'UI layout and real-time telemetry packet parsing validated under bench simulation.'
  },
  {
    id: 'self-balancing-robot',
    title: 'Self-Balancing Robot Using Arduino',
    category: 'Control Systems & Robotics (Academic / Independent)',
    status: 'Completed Hardware Build',
    statusCode: 'ACADEMIC HARDWARE BUILD',
    image: '/images/self-balancing-robot.png',
    gallery: [
      {
        src: '/images/self-balancing-robot.png',
        caption: 'Two-Wheel Inverted Pendulum Chassis with Arduino Uno & MPU-6050'
      }
    ],
    placeholderLabel: 'SELF-BALANCING ROBOT',
    placeholderSubtext: 'TWO-WHEEL BALANCING RIG & PID FEEDBACK',
    summary:
      'Two-wheeled inverted pendulum robot built to study closed-loop feedback control and sensor fusion. Combines an MPU6050 IMU with a complementary filter and real-time PID algorithm to drive DC gear motors. Achieved dynamic balance stabilization and disturbance recovery on flat surfaces.',
    tags: ['Arduino', 'MPU6050', 'PID Control', 'Complementary Filter', 'L298N Driver'],
    architecture: {
      microcontroller: 'Arduino Uno executing real-time PID control loop',
      sensor: 'MPU6050 6-axis IMU communicating over I2C',
      actuation: 'DC gear motors driven by L298N dual H-Bridge module',
      sensorFusion: 'Complementary filter combining accelerometer and gyroscope inputs'
    },
    keyHighlights: [
      'Implemented complementary filter combining accelerometer angle and gyro angular velocity.',
      'Programmed real-time PID algorithm to calculate motor compensation PWM outputs.',
      'Tuned PID gains experimentally to achieve balance recovery and chassis stability.'
    ],
    statusDetails:
      'Mechanical assembly, sensor fusion, and stationary balancing verified in laboratory tests.'
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="mono-label">
            <Layers size={14} />
            <span>PROJECT PORTFOLIO // 01</span>
          </div>
          <h2 className="section-title">
            Featured Engineering Projects
          </h2>
          <p className="section-subtitle">
            Robotic platforms, UAV testbeds, and mobile telemetry interfaces documented with empirical bench and hardware testing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <article key={project.id} className="project-card">
              <span className="reticle-corner reticle-tl" />
              <span className="reticle-corner reticle-tr" />
              <span className="reticle-corner reticle-bl" />
              <span className="reticle-corner reticle-br" />

              {/* Styled Technical Image, Collage, or Blueprint */}
              <div className="project-media-box">
                {project.collage ? (
                  <div className="project-collage-box">
                    <div className="project-collage-grid">
                      {project.collage.map((pane, idx) => (
                        <div key={idx} className="project-collage-pane">
                          <img
                            src={pane.src}
                            alt={pane.alt || `${project.title} — Screen ${idx + 1}`}
                            className="project-collage-img"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="project-image-overlay">
                      <div className="placeholder-tag-strip">
                        <span className="placeholder-cat">{project.category}</span>
                      </div>
                      <div className="placeholder-bottom-strip collage-bottom-strip">
                        <span>01 // FLIGHT HUD</span>
                        <span>02 // MAVLINK LOGS</span>
                      </div>
                    </div>
                  </div>
                ) : project.image ? (
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card-image"
                      loading="lazy"
                    />
                    <div className="project-image-overlay">
                      <div className="placeholder-tag-strip">
                        <span className="placeholder-cat">{project.category}</span>
                      </div>
                      <div className="placeholder-bottom-strip">
                        <span>AUTHENTIC LAB HARDWARE</span>
                        <span>ID: {project.id.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="project-media-placeholder">
                    <div className="placeholder-blueprint-grid" />
                    <div className="placeholder-tag-strip">
                      <span className="placeholder-cat">{project.category}</span>
                    </div>

                    <div className="placeholder-center-label">
                      <div className="placeholder-scope-icon">
                        <Radio size={24} className="scope-svg" />
                      </div>
                      <span className="placeholder-title">{project.placeholderLabel}</span>
                      <span className="placeholder-sub">{project.placeholderSubtext}</span>
                    </div>

                    <div className="placeholder-bottom-strip">
                      <span>INDEPENDENT BUILD</span>
                      <span>ID: {project.id.toUpperCase()}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="project-content">
                <div className="project-meta-top">
                  <span className="project-status">
                    <span className="status-dot-sm" />
                    {project.status}
                  </span>
                  <span className="project-category-tag">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-summary">{project.summary}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mono-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link to Case Study Modal / Route */}
                <div className="project-footer">
                  <button
                    type="button"
                    className="case-study-trigger"
                    onClick={() => setActiveProject(project)}
                    aria-label={`Open technical case study for ${project.title}`}
                  >
                    <span>Inspect Engineering Specs</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
