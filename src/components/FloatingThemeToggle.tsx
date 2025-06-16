
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTerminal } from '../contexts/TerminalContext';

const FloatingThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isTerminalOpen } = useTerminal();
  const [isHovered, setIsHovered] = useState(false);

  // Hide theme toggle when terminal is open
  if (isTerminalOpen) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={toggleTheme}
        className={`
          p-3 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 hover:from-blue-600 hover:to-blue-800 
          dark:from-gray-100 dark:to-gray-300 dark:hover:from-blue-200 dark:hover:to-blue-400 
          text-white dark:text-black transition-all duration-300 transform hover:scale-110 
          shadow-lg hover:shadow-2xl
          ${isHovered ? 'opacity-100 scale-110' : 'opacity-70 scale-100'}
        `}
        aria-label="Toggle theme"
      >
        <span className="text-xl">
          {isDark ? '☀️' : '🌙'}
        </span>
      </button>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg whitespace-nowrap opacity-90 transition-all duration-200">
          {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingThemeToggle;
