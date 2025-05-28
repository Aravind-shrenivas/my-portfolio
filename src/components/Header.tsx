
import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { isDark } = useTheme();
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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'research-experience', label: 'Research' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Publication' },
    { id: 'projects', label: 'Projects' },
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

            {/* Hamburger Menu Button - All Screen Sizes */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 hover:from-blue-600 hover:to-blue-800 dark:from-gray-100 dark:to-gray-300 dark:hover:from-blue-200 dark:hover:to-blue-400 text-white dark:text-black transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu Overlay - All Screen Sizes */}
      {isMobileMenuOpen && (
        <>
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-black z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
            <div className="flex flex-col p-6 pt-20">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-4 px-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 font-medium border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
