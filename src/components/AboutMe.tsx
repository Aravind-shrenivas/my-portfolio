
import React, { useState, useEffect } from 'react';
import BlogSection from './BlogSection';
import AnimatedTagline from './AnimatedTagline';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="pt-24 pb-8 min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                  Aravind
                </span>
              </h1>
              <AnimatedTagline />
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in delay-300">
              Data scientist by training, magician by mindset (I turn chaos into code). With 4+ years of experience and a Springer-published MICCAI 2024 paper, I build ML systems that actually work in the wild.
              When I'm not wrangling data, I'm lifting at the gym, gaming with friends, or deep in an anime binge.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in delay-500">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/16yaHzOuZpZhXr4IVq4mLE6NqUwWFI4Ic/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right delay-300">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-black via-gray-600 to-gray-800 dark:from-white dark:via-gray-300 dark:to-gray-100 p-1 animate-scale-in delay-500">
                  <img 
                    src="/lovable-uploads/288ce896-b348-49f9-a597-372745fdd5d2.png"
                    alt="Aravind Shrenivas Murali"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-full animate-bounce">
                  💻
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in delay-700">
              <BlogSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
