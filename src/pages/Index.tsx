
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="relative">
          <AboutMe />
          <Experience />
          <Skills />
          <Projects />
          <Publications />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
