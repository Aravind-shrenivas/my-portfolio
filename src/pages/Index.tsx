
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

console.log('Index page loading...');

// Import components with error handling
let Header, AboutMe, Experience, ResearchExperience, Education, Research, FeaturedProjects, Skills, Contact, Footer, FloatingThemeToggle;

try {
  Header = require('../components/Header').default;
  console.log('Header component loaded');
} catch (e) {
  console.error('Failed to load Header:', e);
}

try {
  AboutMe = require('../components/AboutMe').default;
  console.log('AboutMe component loaded');
} catch (e) {
  console.error('Failed to load AboutMe:', e);
}

try {
  Experience = require('../components/Experience').default;
  console.log('Experience component loaded');
} catch (e) {
  console.error('Failed to load Experience:', e);
}

try {
  ResearchExperience = require('../components/ResearchExperience').default;
  console.log('ResearchExperience component loaded');
} catch (e) {
  console.error('Failed to load ResearchExperience:', e);
}

try {
  Education = require('../components/Education').default;
  console.log('Education component loaded');
} catch (e) {
  console.error('Failed to load Education:', e);
}

try {
  Research = require('../components/Research').default;
  console.log('Research component loaded');
} catch (e) {
  console.error('Failed to load Research:', e);
}

try {
  FeaturedProjects = require('../components/FeaturedProjects').default;
  console.log('FeaturedProjects component loaded');
} catch (e) {
  console.error('Failed to load FeaturedProjects:', e);
}

try {
  Skills = require('../components/Skills').default;
  console.log('Skills component loaded');
} catch (e) {
  console.error('Failed to load Skills:', e);
}

try {
  Contact = require('../components/Contact').default;
  console.log('Contact component loaded');
} catch (e) {
  console.error('Failed to load Contact:', e);
}

try {
  Footer = require('../components/Footer').default;
  console.log('Footer component loaded');
} catch (e) {
  console.error('Failed to load Footer:', e);
}

try {
  FloatingThemeToggle = require('../components/FloatingThemeToggle').default;
  console.log('FloatingThemeToggle component loaded');
} catch (e) {
  console.error('Failed to load FloatingThemeToggle:', e);
}

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {Header && <Header />}
        <main className="relative">
          {AboutMe && <AboutMe />}
          {Experience && <Experience />}
          {ResearchExperience && <ResearchExperience />}
          {Education && <Education />}
          {Research && <Research />}
          {FeaturedProjects && <FeaturedProjects />}
          {Skills && <Skills />}
          {Contact && <Contact />}
        </main>
        {Footer && <Footer />}
        {FloatingThemeToggle && <FloatingThemeToggle />}
      </div>
    </ThemeProvider>
  );
};

export default Index;
