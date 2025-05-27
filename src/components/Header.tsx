
import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold gradient-text transition-all duration-500 hover:scale-105">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'experience', 'skills', 'projects', 'publications', 'certifications', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 transform hover:scale-110 font-medium relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 dark:from-gray-100 dark:to-gray-300 dark:hover:from-gray-200 dark:hover:to-gray-400 text-white dark:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl"
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
