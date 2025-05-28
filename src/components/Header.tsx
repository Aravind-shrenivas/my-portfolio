
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-xl border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center transition-all duration-500 hover:scale-105">
            <div className="w-12 h-12 flex-shrink-0">
              <img 
                src="/lovable-uploads/62385505-a16b-4991-86b4-c201985c72c9.png" 
                alt="Aravind Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'experience', 'research-experience', 'education', 'research', 'projects', 'skills', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 font-medium relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item === 'research' ? 'Publication' : item === 'research-experience' ? 'Research' : item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 hover:from-blue-600 hover:to-blue-800 dark:from-gray-100 dark:to-gray-300 dark:hover:from-blue-200 dark:hover:to-blue-400 text-white dark:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl"
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
