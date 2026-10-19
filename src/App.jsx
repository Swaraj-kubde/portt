import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AboutAcademics from './components/AboutAcademics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* 1. Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area in exact specified sequence */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Featured Projects */}
        <Projects />

        {/* 4. Industry Experience */}
        <Experience />

        {/* 5. Technical Skills and Engineering Experiments */}
        <Skills />

        {/* 6. About and Academics */}
        <AboutAcademics />

        {/* 7. Contact */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Global Resume Modal / Document Status */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
