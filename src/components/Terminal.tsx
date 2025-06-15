
import React, { useState, useEffect, useRef } from 'react';
import { useTerminal } from '../contexts/TerminalContext';
import { commands } from '../lib/terminalCommands';
import { X, Terminal as TerminalIcon } from 'lucide-react';

const banner = String.raw`
 ______   ______     ______     ______   ______   ______     __         __     ______    
/\  == \ /\  __ \   /\  == \   /\__  _\ /\  ___\ /\  __ \   /\ \       /\ \   /\  __ \   
\ \  _-/ \ \ \/\ \  \ \  __<   \/_/\ \/ \ \  __\ \ \ \/\ \  \ \ \____  \ \ \  \ \ \/\ \  
 \ \_\    \ \_____\  \ \_\ \_\    \ \_\  \ \_\    \ \_____\  \ \_____\  \ \_\  \ \_____\ 
  \/_/     \/_____/   \/_/ /_/     \/_/   \/_/     \/_____/   \/_____/   \/_/   \/_____/ 
`;

const welcomeMessage = `Welcome to my portfolio! Type "help" for a list of commands.`;

interface HistoryItem {
    command: string;
    output: React.ReactNode;
}

const Terminal: React.FC = () => {
    const { isTerminalOpen, closeTerminal } = useTerminal();
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isTerminalOpen) {
            inputRef.current?.focus();
            if (history.length === 0) {
                // You can add an initial command like 'help' here if you want
            }
        }
    }, [isTerminalOpen, history.length]);

    useEffect(() => {
        if(scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeTerminal();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [closeTerminal]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const commandStr = input.trim().toLowerCase();
        if (!commandStr) return;

        const [command, ...args] = commandStr.split(' ');

        let output: React.ReactNode;
        const commandFunc = commands[commandStr] || commands[command];

        if (commandFunc) {
            output = commandFunc(args);
        } else {
            output = `bash: command not found: ${commandStr}`;
        }
        
        const newHistoryItem = { command: commandStr, output };

        if (output === 'clear') {
            setHistory([]);
        } else {
            setHistory(prev => [...prev, newHistoryItem]);
        }

        setInput('');
    };

    if (!isTerminalOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] bg-[#1a1a1a] text-white font-mono text-sm p-4 flex flex-col animate-fade-in"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex justify-between items-center pb-2 border-b border-gray-700 flex-shrink-0">
                <div className="flex items-center gap-2">
                    <TerminalIcon size={16} />
                    <span>Aravind's Portfolio -- bash</span>
                </div>
                <button onClick={closeTerminal} className="p-1 rounded-full hover:bg-gray-700 transition-colors">
                    <X size={20} />
                </button>
            </div>
            <div ref={scrollRef} className="flex-grow overflow-y-auto pt-2 mt-2">
                <pre className="text-green-400 whitespace-pre-wrap leading-tight">{banner}</pre>
                <p className="mt-4">{welcomeMessage}</p>
                <div className="pt-4">
                    {history.map((item, index) => (
                        <div key={index} className="mb-2">
                            <div className="flex items-center">
                                <span className="text-blue-400">Aravind-shrenivas:~/portfolio$</span>
                                <span className="ml-2 text-gray-300">{item.command}</span>
                            </div>
                            <div className="text-gray-200">{item.output}</div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleFormSubmit} className="flex items-center">
                    <label htmlFor="terminal-input" className="text-blue-400">Aravind-shrenivas:~/portfolio$</label>
                    <input
                        id="terminal-input"
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        className="flex-grow bg-transparent border-none outline-none text-white ml-2"
                        autoFocus
                        autoComplete="off"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;
