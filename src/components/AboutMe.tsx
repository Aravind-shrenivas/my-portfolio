
import React, { useState, useEffect } from 'react';
import SpotifyWidget from './SpotifyWidget';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Data Science Master's Student
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I am a passionate Data Science Master's student with a deep love for uncovering insights from complex datasets. 
              My journey combines statistical rigor with creative problem-solving, focusing on machine learning, 
              predictive modeling, and data visualization. I thrive on transforming raw data into actionable intelligence 
              that drives meaningful decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Projects
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            
            <SpotifyWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
