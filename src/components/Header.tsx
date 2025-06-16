import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTerminal } from '../contexts/TerminalContext';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';

const Header = () => {
  const { isDark } = useTheme();
  const { toggleTerminal } = useTerminal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Publication' },
    { id: 'featured-projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-xl border-b border-gray-200 dark:border-gray-800' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 max-h-12 flex-shrink-0">
                <img 
                  src={`${import.meta.env.BASE_URL}${isDark ? 'lovable-uploads/42f950fd-753d-406e-b4f5-88d74eeae472.png' : 'lovable-uploads/29ae3c9e-f26f-439b-a6b2-b5387b8cb61f.png'}`}
                  alt="Aravind Logo" 
                  className="w-auto h-full object-contain max-w-full"
                />
              </div>
            </div>

            {/* Terminal and Menu Buttons */}
            <div className="flex items-center space-x-3">
              {/* Terminal Button - Hidden on mobile */}
              <button
                onClick={toggleTerminal}
                className="hidden md:flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 hover:from-blue-600 hover:to-blue-800 dark:from-gray-100 dark:to-gray-300 dark:hover:from-blue-200 dark:hover:to-blue-400 text-white dark:text-black transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl group"
                aria-label="Open terminal"
                title="Open Terminal"
              >
                <TerminalIcon size={20} />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
              </button>

              {/* Enhanced Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 hover:from-blue-600 hover:to-blue-800 dark:from-gray-100 dark:to-gray-300 dark:hover:from-blue-200 dark:hover:to-blue-400 text-white dark:text-black transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl overflow-hidden group"
                aria-label="Toggle menu"
              >
                {/* Enhanced animated hamburger lines */}
                <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                  {/* Top line */}
                  <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}></span>
                  {/* Middle line */}
                  <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}></span>
                  {/* Bottom line */}
                  <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}></span>
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Animated Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={() => setIsMobileMenuOpen(false)} />
      
      {/* Enhanced Side Menu with smooth slide animation */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white/95 dark:bg-black/95 backdrop-blur-xl z-50 transform transition-all duration-400 ease-out shadow-2xl border-l border-gray-200 dark:border-gray-800 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Menu Items */}
        <div className="flex flex-col p-6 space-y-2 pt-20">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-4 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transform hover:translate-x-2 ${
                isMobileMenuOpen ? 'animate-slide-in-menu' : ''
              }`}
              style={{ 
                animationDelay: `${(index + 1) * 50}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <span className="block text-base">{item.label}</span>
            </button>
          ))}
        </div>
        
        {/* Menu Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-4"></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            © 2025 Aravind Shrenivas
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
