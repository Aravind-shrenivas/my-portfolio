
import React, { useState, useEffect } from 'react';
import SpotifyWidget from './SpotifyWidget';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Alex Johnson
              </span>
            </h1>
            <h2 className="text-3xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 font-semibold">
              Data Science Master's Student
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 animate-fade-in delay-300">
              I am a passionate Data Science Master's student with a deep love for uncovering insights from complex datasets. 
              My journey combines statistical rigor with creative problem-solving, focusing on machine learning, 
              predictive modeling, and data visualization. I thrive on transforming raw data into actionable intelligence 
              that drives meaningful decisions.
            </p>
            <div className="flex space-x-4 animate-fade-in delay-500">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 font-semibold">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-[2px] rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <span className="block bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-[10px] font-semibold">
                  View Projects
                </span>
              </a>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in delay-700">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-2 animate-pulse">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-2xl">
                  <span className="text-8xl animate-bounce">👨‍💻</span>
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
