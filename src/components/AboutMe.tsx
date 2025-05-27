
import React, { useState, useEffect } from 'react';
import SpotifyWidget from './SpotifyWidget';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="pt-24 pb-16 min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                  Aravind Shrenivas Murali
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium italic">
                "Training data by day, training legs by night."
              </p>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in delay-300">
              Hi, I'm Aravind Shrenivas Murali — part data scientist, part magician (the kind who replaces guesswork with algorithms).
              I'm a Master's student in Data Science at the University of Arizona with 4+ years of industry experience across healthcare, insurance, and finance.
              I build scalable ML systems, automate data workflows, and make neural networks behave (mostly).
              I'm also the first author on a Springer-published paper from MICCAI 2024, and I bring structure, storytelling, and statistical sass to every project.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in delay-500">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Resume
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-700">
              <div>📍 Fremont, California</div>
              <div>📧 aravindshrenivas@gmail.com</div>
              <div>📱 +1 (520) 535-7327</div>
              <div>🌐 datascienceportfol.io/aravindshrenivas</div>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right delay-300">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-emerald-500 to-yellow-500 p-1 animate-scale-in delay-500">
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
              <SpotifyWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
