import React from 'react';
import { Cpu, Terminal, Compass, Radio, Eye, Wrench, Sparkles } from 'lucide-react';
import './Skills.css';

export const SKILL_CATEGORIES = [
  {
    id: 'uav-flight-systems',
    title: 'UAV & Flight Systems',
    icon: Compass,
    skills: [
      { name: 'ArduPilot Platform', level: 'Configuration & Parameters' },
      { name: 'Mission Planner / QGC', level: 'Calibration & Telemetry' },
      { name: 'Multirotor Assembly', level: 'Airframe & Harness Wiring' },
      { name: 'ESC Calibration', level: 'Bench Spin & Power Setup' }
    ]
  },
  {
    id: 'embedded-hardware',
    title: 'Embedded Systems & Hardware',
    icon: Cpu,
    skills: [
      { name: 'Raspberry Pi', level: 'Companion Computer Linux' },
      { name: 'Arduino Platforms', level: 'Embedded Microcontrollers' },
      { name: 'Sensor Interfacing', level: 'LiDAR, MPU6050, Ultrasonic' },
      { name: 'Hardware Prototyping', level: 'Bench Wiring & Soldering' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Terminal,
    skills: [
      { name: 'Python', level: 'OpenCV, Hardware & Telemetry' },
      { name: 'C / Embedded C', level: 'Firmware & Logic Control' }
    ]
  },
  {
    id: 'comm-protocols',
    title: 'Communication Protocols',
    icon: Radio,
    skills: [
      { name: 'MAVLink Protocol', level: 'Telemetry & Flight Messages' },
      { name: 'UART / Serial', level: 'Sensor & Data Streaming' },
      { name: 'I2C Bus', level: 'Onboard Sensor Communication' },
      { name: 'Telemetry Radios', level: 'Transceiver Serial Links' }
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    icon: Eye,
    skills: [
      { name: 'OpenCV with Python', level: 'Image Filtering & Contours' },
      { name: 'Object Tracking', level: 'Feature Detection Pipelines' },
      { name: 'Camera Interfacing', level: 'USB & CSI Video Feeds' }
    ]
  },
  {
    id: 'linux-tools',
    title: 'Linux & Laboratory Tools',
    icon: Wrench,
    skills: [
      { name: 'Linux CLI', level: 'Embedded Command Line' },
      { name: 'Digital Multimeter', level: 'Electrical Diagnostics' },
      { name: 'Hardware Soldering', level: 'Wiring & Cable Harnesses' },
      { name: 'Git & GitHub', level: 'Version Control Workflows' }
    ]
  }
];

export const CURRENTLY_LEARNING = [
  {
    title: 'ROS 2 (Robot Operating System)',
    status: 'In Progress (Self-Study)',
    focus: 'Nodes, topics, publishers/subscribers, and micro-ROS concepts for robotic systems.',
    badge: 'ACTIVE LEARNING'
  },
  {
    title: 'Deep Learning for Edge Robotics',
    status: 'In Progress (Foundations)',
    focus: 'Neural network foundations and lightweight computer vision models for edge devices.',
    badge: 'ACTIVE LEARNING'
  },
  {
    title: 'Autodesk Fusion 360',
    status: 'In Progress (CAD Foundations)',
    focus: 'Parametric 3D CAD modeling for custom robotic brackets and 3D prototyping.',
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
            Demonstrated competencies across embedded hardware, robotics, protocols, and active learning areas.
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
              Active self-study, coursework, and emerging technical experiments.
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
