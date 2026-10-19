import React from 'react';
import { Cpu, Terminal, Compass, Radio, Eye, Wrench, Sparkles } from 'lucide-react';
import './Skills.css';

export const SKILL_CATEGORIES = [
  {
    id: 'uav-flight-systems',
    title: 'UAV & Flight Systems',
    icon: Compass,
    skills: [
      { name: 'ArduPilot Platform', level: 'Configuration & Bench Testing' },
      { name: 'Mission Planner / QGC', level: 'Telemetry & Parameter Tuning' },
      { name: 'MAVLink Protocol', level: 'Telemetry & Message Handling' },
      { name: 'Multirotor Airframe Assembly', level: 'Mechanical Build & Wiring' },
      { name: 'ESC Calibration & Power Setup', level: 'Bench Verified' }
    ]
  },
  {
    id: 'embedded-hardware',
    title: 'Embedded Systems & Hardware',
    icon: Cpu,
    skills: [
      { name: 'Raspberry Pi', level: 'Companion Computer Setup' },
      { name: 'Arduino Platforms', level: 'Microcontroller Interfacing' },
      { name: 'Sensor Interfacing', level: 'LiDAR, MPU6050 IMU, Distance Sensors' },
      { name: 'GPIO & Hardware Wiring', level: 'Bench Prototyping & Soldering' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Terminal,
    skills: [
      { name: 'Python', level: 'Hardware Scripts, OpenCV & Telemetry' },
      { name: 'C / Embedded C', level: 'Microcontroller Firmware Logic' }
    ]
  },
  {
    id: 'comm-protocols',
    title: 'Communication Protocols',
    icon: Radio,
    skills: [
      { name: 'MAVLink', level: 'UAV Telemetry & Flight Packets' },
      { name: 'UART / Serial', level: 'Sensor & Telemetry Streaming' },
      { name: 'I2C Bus', level: 'Sensor Data Exchange' },
      { name: 'Telemetry Radios', level: 'Transceiver Serial Link' }
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    icon: Eye,
    skills: [
      { name: 'OpenCV with Python', level: 'Video Capture & Image Filtering' },
      { name: 'Image Processing Basics', level: 'Thresholding & Contours' },
      { name: 'Camera Stream Interfacing', level: 'USB / CSI Camera Inputs' }
    ]
  },
  {
    id: 'linux-tools',
    title: 'Linux & Laboratory Tools',
    icon: Wrench,
    skills: [
      { name: 'Basic Linux CLI', level: 'Navigation & Service Execution' },
      { name: 'Digital Multimeter', level: 'Voltage, Current & Continuity' },
      { name: 'Hardware Soldering', level: 'Harness Wiring & Rework' },
      { name: 'Git Basics', level: 'Repository Management' }
    ]
  }
];

export const CURRENTLY_LEARNING = [
  {
    title: 'ROS 2 (Robot Operating System)',
    status: 'In Progress (Self-Study)',
    focus: 'Studying nodes, topics, publishers/subscribers, and micro-ROS concepts for robotic systems integration.',
    badge: 'ACTIVE LEARNING'
  },
  {
    title: 'Deep Learning for Edge Robotics',
    status: 'In Progress (Foundations)',
    focus: 'Learning neural network basics and lightweight computer vision architectures suitable for edge devices.',
    badge: 'ACTIVE LEARNING'
  },
  {
    title: 'Autodesk Fusion 360',
    status: 'In Progress (CAD Foundations)',
    focus: 'Learning parametric 3D modeling for custom brackets, drone mount plates, and 3D print prototyping.',
    badge: 'ACTIVE LEARNING'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="mono-label">
            <Cpu size={14} />
            <span>TECHNICAL PROFICIENCY // 03</span>
          </div>
          <h2 className="section-title">Technical Skills & Lab Competencies</h2>
          <p className="section-subtitle">
            Grounded capabilities across drone hardware, microcontrollers, sensor interfacing, and active learning areas. Accurately documented without inflated percentage bars or unsupported claims.
          </p>
        </div>

        {/* Primary Skills Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="skill-cat-card">
                <span className="reticle-corner reticle-tl" />
                <span className="reticle-corner reticle-br" />

                <div className="cat-header">
                  <div className="cat-icon-frame">
                    <Icon size={18} />
                  </div>
                  <h3 className="cat-title">{cat.title}</h3>
                </div>

                <div className="skills-chip-list">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-chip">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated "Currently Learning" Section */}
        <div className="currently-learning-panel">
          <span className="reticle-corner reticle-tl" />
          <span className="reticle-corner reticle-tr" />
          <span className="reticle-corner reticle-bl" />
          <span className="reticle-corner reticle-br" />

          <div className="learning-header">
            <div className="learning-label-group">
              <span className="learning-badge">
                <Sparkles size={14} />
                ACTIVE LEARNING ROADMAP
              </span>
              <span className="mono-subtext">// TRANSPARENT SKILL EVOLUTION</span>
            </div>
            <h3 className="learning-title">Active Studies & Ongoing Learning</h3>
            <p className="learning-note">
              In the spirit of technical accuracy, these areas represent active coursework, self-study, and personal experimentation rather than production mastery.
            </p>
          </div>

          <div className="learning-cards-grid">
            {CURRENTLY_LEARNING.map((item) => (
              <div key={item.title} className="learning-card">
                <div className="learning-card-top">
                  <span className="learning-card-badge">{item.badge}</span>
                  <span className="learning-status">{item.status}</span>
                </div>
                <h4 className="learning-item-title">{item.title}</h4>
                <p className="learning-item-focus">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
