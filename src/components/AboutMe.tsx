
import React, { useState, useEffect } from 'react';
import SpotifyWidget from './SpotifyWidget';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="pt-24 pb-16 gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-800 to-black dark:from-gray-300 dark:to-white rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-6 animate-slide-in-left">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="gradient-text">
                Alex Johnson
              </span>
            </h1>
            <h2 className="text-3xl gradient-text mb-6 font-semibold">
              Data Science Master's Student
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 animate-fade-in delay-300">
              I am a passionate Data Science Master's student with a deep love for uncovering insights from complex datasets. 
              My journey combines statistical rigor with creative problem-solving, focusing on machine learning, 
              predictive modeling, and data visualization. I thrive on transforming raw data into actionable intelligence 
              that drives meaningful decisions.
            </p>
            <div className="flex space-x-4 animate-fade-in delay-500">
              <a href="#contact" className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black px-8 py-4 rounded-xl hover-lift font-semibold transition-all duration-300">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl hover-lift font-semibold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                View Projects
              </a>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right delay-300">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 p-2 animate-scale-in delay-500">
                <div className="w-full h-full rounded-full bg-white dark:bg-black flex items-center justify-center shadow-2xl hover-lift">
                  <span className="text-8xl animate-float">👨‍💻</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in delay-700">
              <SpotifyWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
