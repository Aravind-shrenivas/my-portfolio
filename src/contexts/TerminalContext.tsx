
import React, { createContext, useContext, useState } from 'react';

interface TerminalContextType {
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
  closeTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);
  const closeTerminal = () => setIsTerminalOpen(false);

  return (
    <TerminalContext.Provider value={{ isTerminalOpen, toggleTerminal, closeTerminal }}>
      {children}
    </TerminalContext.Provider>
  );
};
