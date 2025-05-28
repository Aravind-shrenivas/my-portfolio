
import React, { useState, useEffect } from 'react';

const AnimatedTagline = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    'Training data by day',
    'Training legs by night'
  ];

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 'Training '.length) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting to "Training ", switch text and start typing
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <p className="text-xl text-gray-600 dark:text-gray-400 font-medium italic mb-6">
      "{displayText}
      <span className="animate-pulse">|</span>"
    </p>
  );
};

export default AnimatedTagline;
