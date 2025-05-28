
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import ResearchExperience from '../components/ResearchExperience';
import Education from '../components/Education';
import Research from '../components/Research';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Header />
        <main className="relative">
          <AboutMe />
          <Experience />
          <ResearchExperience />
          <Education />
          <Research />
          <FeaturedProjects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
