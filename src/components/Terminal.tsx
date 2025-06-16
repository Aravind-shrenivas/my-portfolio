
import React, { useState, useEffect, useRef } from 'react';
import { useTerminal } from '../contexts/TerminalContext';
import { commands } from '../lib/terminalCommands';
import { X } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output';
  content: string | React.ReactNode;
  timestamp: Date;
}

const Terminal = () => {
  const { isTerminalOpen, closeTerminal } = useTerminal();
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const asciiArt = `
 ______   ______     ______     ______   ______   ______     __         __     ______    
/\\  == \\ /\\  __ \\   /\\  == \\   /\\__  _\\ /\\  ___\\ /\\  __ \\   /\\ \\       /\\ \\   /\\  __ \\   
\\ \\  _-/ \\ \\ \\/\\ \\  \\ \\  __<   \\/_/\\ \\/ \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\ \\____  \\ \\ \\  \\ \\ \\/\\ \\  
 \\ \\_\\    \\ \\_____\\  \\ \\_\\ \\_\\    \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\ \\_\\  \\ \\_____\\ 
  \\/_/     \\/_____/   \\/_/ /_/     \\/_/   \\/_/     \\/_____/   \\/_____/   \\/_/   \\/_____/ 
  `;

  const welcomeMessage = `Welcome to my portfolio! Type "help" for a list of commands.
Press Enter to run commands. Use Tab to auto-complete.`;

  useEffect(() => {
    if (isTerminalOpen) {
      setLines([
        { type: 'output', content: asciiArt, timestamp: new Date() },
        { type: 'output', content: welcomeMessage, timestamp: new Date() }
      ]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    if (trimmedCommand === 'clear') {
      setLines([]);
      return;
    }

    // Add input to history
    setLines(prev => [...prev, { type: 'input', content: command, timestamp: new Date() }]);
    
    // Execute command
    if (commands[trimmedCommand]) {
      const output = commands[trimmedCommand]();
      setLines(prev => [...prev, { type: 'output', content: output, timestamp: new Date() }]);
    } else {
      setLines(prev => [...prev, { 
        type: 'output', 
        content: `Command not found: ${command}. Type "help" for available commands.`, 
        timestamp: new Date() 
      }]);
    }

    // Update command history
    if (command.trim()) {
      setCommandHistory(prev => [...prev, command.trim()]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Escape') {
      closeTerminal();
    }
  };

  if (!isTerminalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-green-400 font-mono overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-2 bg-gray-800 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-white text-sm">Aravind-shrenivas@portfolio:~</span>
        </div>
        <button
          onClick={closeTerminal}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close terminal"
        >
          <X size={20} />
        </button>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-full overflow-y-auto p-4 pb-20"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === 'input' ? (
              <div className="flex">
                <span className="text-green-400 mr-2">Aravind-shrenivas:~/portfolio$</span>
                <span className="text-white">{line.content}</span>
              </div>
            ) : (
              <div className="text-green-400 whitespace-pre-wrap">
                {typeof line.content === 'string' ? line.content : line.content}
              </div>
            )}
          </div>
        ))}
        
        {/* Current Input Line */}
        <div className="flex items-center">
          <span className="text-green-400 mr-2">Aravind-shrenivas:~/portfolio$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
