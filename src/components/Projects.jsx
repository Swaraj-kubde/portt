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
        caption: 'Bench Testbed — Front Searchlight & Sensor Payload'
      },
      {
        src: '/images/quadcopter-top.jpg',
        caption: 'Overhead View — Airframe Assembly, CrossFlight Autopilot & GPS Mast'
      }
    ],
    placeholderLabel: 'QUADCOPTER PLATFORM',
    placeholderSubtext: 'MULTIROTAR AIRFRAME & ARDUPILOT BENCH SETUP',
    summary:
      'Independent hardware research platform built to explore multirotor assembly, ArduPilot flight controller configuration, electronic speed controller (ESC) calibration, and companion computer wiring.',
    tags: ['ArduPilot', 'CrossFlight Autopilot', 'Mission Planner', 'MAVLink', 'Hardware Assembly', 'ESC Calibration'],
    architecture: {
      flightController: 'RadioLink CrossFlight autopilot running ArduPilot firmware with anti-vibration damping',
      companionComputer: 'Raspberry Pi companion board connected via serial telemetry port',
      groundStation: 'Mission Planner for parameter configuration, sensor calibration, and telemetry checks',
      powerSetup: 'LiPo battery pack with regulated power module supplying autopilot and ESCs'
    },
    keyHighlights: [
      'Assembled mechanical quadcopter airframe, motor mounts, and power distribution wiring.',
      'Conducted ESC calibration, motor rotation verification, and flight controller accelerometer/compass calibration in Mission Planner.',
      'Configured serial telemetry link for communication with Raspberry Pi companion board over MAVLink.',
      'Performed tethered motor spin-up tests and verified pre-arm safety checks.'
    ],
    statusDetails:
      'Hardware assembly, electronics wiring, and bench-level ArduPilot sensor calibrations completed; offboard autonomous flight validation remains an ongoing engineering step.'
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
        caption: 'ArduPilot Companion Telemetry HUD — Flight Mode STABILIZE, Attitude, Relative Altitude & Battery Health Monitor'
      },
      {
        src: '/images/groundstation-diagnostics.jpg',
        caption: 'MAVLink Diagnostics & Message Console — Packet Counters (Heartbeat, Attitude, Battery) & EKF2 Sensor Stream'
      }
    ],
    placeholderLabel: 'GROUND STATION INTERFACE',
    placeholderSubtext: 'MOBILE TELEMETRY DISPLAY INTERFACE',
    summary:
      'Personal project developing a mobile Android telemetry display interface to receive and visualize real-time drone flight parameters (attitude, battery voltage, flight mode) over a direct serial/telemetry link.',
    tags: ['Android UI', 'MAVLink Packets', 'Serial / USB-OTG', 'Telemetry Display', 'Field Utility'],
    architecture: {
      platform: 'Android application interface',
      telemetrySource: 'MAVLink packet stream received via USB-OTG serial transceiver link',
      displayParameters: 'Attitude (pitch/roll), battery voltage, armed status, and current flight mode',
      designFocus: 'High-contrast clean layout for practical readability during field testing'
    },
    keyHighlights: [
      'Developed mobile user interface screens tailored for viewing essential UAV status metrics.',
      'Integrated MAVLink message handling to parse incoming HEARTBEAT, ATTITUDE, and SYS_STATUS packets.',
      'Tested data flow and screen updates using simulated telemetry streams in the laboratory.',
      'Focused contribution on layout design, UI responsiveness, and serial data presentation.'
    ],
    statusDetails:
      'Core UI layout and telemetry packet reception demonstrated in lab conditions; further UI refinements and field validation ongoing.'
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
        caption: 'Hardware Prototype — Two-Wheel Inverted Pendulum Chassis with Arduino Uno & MPU-6050 IMU'
      }
    ],
    placeholderLabel: 'SELF-BALANCING ROBOT',
    placeholderSubtext: 'TWO-WHEEL BALANCING RIG & PID FEEDBACK',
    summary:
      'Two-wheeled inverted pendulum robotic vehicle utilizing an Arduino microcontroller, MPU6050 6-axis IMU, and closed-loop PID control algorithm for balance stabilization.',
    tags: ['Arduino', 'MPU6050 (IMU)', 'PID Control', 'Complementary Filter', 'DC Gear Motors', 'L298N Driver'],
    architecture: {
      microcontroller: 'Arduino Uno executing real-time PID control loop',
      sensor: 'MPU6050 6-axis IMU (Gyroscope + Accelerometer) communicating over I2C',
      actuation: 'DC gear motors driven by L298N dual H-Bridge motor driver module',
      sensorFusion: 'Complementary filter combining accelerometer tilt angle and gyroscope angular velocity'
    },
    keyHighlights: [
      'Implemented complementary filter to compute pitch angle from raw accelerometer and gyroscope readings.',
      'Programmed closed-loop PID algorithm to calculate motor compensation PWM outputs.',
      'Experimentally tuned proportional, integral, and derivative gains to achieve upright balance recovery.',
      'Constructed mechanical two-wheel chassis with centered battery and electronics placement.'
    ],
    statusDetails:
      'Hardware construction and stationary balancing demonstrated on flat laboratory surfaces.'
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
            Personal and academic robotic platforms, UAV hardware setups, and mobile telemetry interfaces. Documented with empirical honesty, clearly distinguishing bench testing from live autonomous flight.
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
