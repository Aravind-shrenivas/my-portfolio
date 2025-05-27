
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Research from '../components/Research';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Header />
        <main className="relative">
          <AboutMe />
          <Experience />
          <Education />
          <Research />
          <Skills />
          <Contact />
        </main>
        
        {/* Content Editing Instructions */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              📝 How to Edit This Website
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-semibold mb-2">Personal Information:</h4>
                <ul className="space-y-1">
                  <li>• Edit name, tagline, and bio in <code>src/components/AboutMe.tsx</code></li>
                  <li>• Update contact info in <code>src/components/Contact.tsx</code></li>
                  <li>• Replace profile photo by uploading new image and updating the src path</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Sections:</h4>
                <ul className="space-y-1">
                  <li>• Work experience: <code>src/components/Experience.tsx</code></li>
                  <li>• Education: <code>src/components/Education.tsx</code></li>
                  <li>• Research & publications: <code>src/components/Research.tsx</code></li>
                  <li>• Technical skills: <code>src/components/Skills.tsx</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
