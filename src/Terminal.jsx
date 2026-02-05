import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Audio context for musical elements
const AudioEngine = {
  ctx: null,
  initialized: false,
  
  init() {
    if (this.initialized) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.initialized = true;
  },
  
  // Soft synth tone for keypresses
  playKeystroke() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    // Random pitch for organic feel
    const baseFreq = 200 + Math.random() * 100;
    osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialDecayTo?.(0.001, this.ctx.currentTime + 0.1) 
      || gain.gain.setValueAtTime(0.001, this.ctx.currentTime + 0.1);
    
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.1);
  },
  
  // Boot sequence chord
  playBootSound() {
    if (!this.ctx) return;
    const notes = [220, 277.18, 329.63, 440]; // A minor chord
    
    notes.forEach((freq, i) => {
      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.type = 'triangle';
        
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
        
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 1.5);
      }, i * 150);
    });
  },
  
  // Command execution sound
  playExecute() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(880, this.ctx.currentTime + 0.1);
    osc.type = 'square';
    
    gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.15);
    
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.15);
  },
  
  // Error sound
  playError() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.type = 'sawtooth';
    
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.2);
    
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.2);
  }
};

// Terminal content/commands
const COMMANDS = {
  help: {
    output: `Available commands:
  whoami      - About me
  skills      - Technical skills  
  projects    - Featured work
  contact     - Get in touch
  links       - Social links
  clear       - Clear terminal
  theme       - Toggle dark/light
  audio       - Toggle sound effects
  secret      - ???`,
  },
  
  whoami: {
    output: `
┌─────────────────────────────────────────┐
│  Danish Shah                            │
│  Software Engineer · Mumbai, India      │
├─────────────────────────────────────────┤
│  Building intelligent systems at the    │
│  intersection of AI, video, and code.   │
│                                         │
│  Currently exploring:                   │
│  → Video AI pipelines                   │
│  → Real-time processing                 │
│  → Trading automation                   │
└─────────────────────────────────────────┘`,
  },
  
  skills: {
    output: `
  ╔═══════════════════════════════════════╗
  ║           TECHNICAL STACK             ║
  ╠═══════════════════════════════════════╣
  ║                                       ║
  ║  Languages                            ║
  ║  ├── Python ████████████░░ 85%        ║
  ║  ├── Rust   ███████░░░░░░ 55%        ║
  ║  ├── TypeScript ██████████░░ 80%     ║
  ║  └── CUDA   █████░░░░░░░░ 40%        ║
  ║                                       ║
  ║  Domains                              ║
  ║  ├── AI/ML (SAM2, LLMs, Vision)      ║
  ║  ├── Video Processing                 ║
  ║  ├── Full-Stack Web                   ║
  ║  └── Technical Analysis               ║
  ║                                       ║
  ║  Tools                                ║
  ║  ├── React / Next.js                  ║
  ║  ├── Node.js / FastAPI               ║
  ║  ├── TradingView / Pine Script       ║
  ║  └── Docker / Linux                   ║
  ║                                       ║
  ╚═══════════════════════════════════════╝`,
  },
  
  projects: {
    output: `
  Featured Projects
  ─────────────────

  [01] AI Video Platform
       Real-time video processing with SAM2
       segmentation and voice synthesis
       Status: In Development
  
  [02] Order Block Indicator  
       TradingView Pine Script for identifying
       supply/demand zones in price action
       Status: Active
  
  [03] This Website
       Terminal-style portfolio running da9i.sh
       Status: You're looking at it

  → Type 'contact' to discuss projects`,
  },
  
  contact: {
    output: `
  ┌──────────────────────────────────────┐
  │           GET IN TOUCH               │
  ├──────────────────────────────────────┤
  │                                      │
  │  Email    shah.danish.1996@gmail.com │
  │  Telegram @da9ish_shah               │
  │  Location Mumbai, India              │
  │                                      │
  │  Open to:                            │
  │  • Freelance projects                │
  │  • Full-time opportunities           │
  │  • Interesting collaborations        │
  │                                      │
  └──────────────────────────────────────┘`,
  },
  
  links: {
    output: `
  Social Links
  ────────────
  
  GitHub    → github.com/da9ish
  Twitter   → twitter.com/da9ish
  LinkedIn  → linkedin.com/in/da9ish
  Dribbble  → dribbble.com/da9ish`,
    links: true,
  },
  
  secret: {
    output: `
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░                                     ░
  ░   You found the secret command.     ░
  ░                                     ░
  ░   "The best code is no code,        ░
  ░    but if you must write code,      ░
  ░    make it sing."                   ░
  ░                                     ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`,
  },
  
  'sudo rm -rf /': {
    output: `Nice try 😏`,
    isError: true,
  },
  
  ls: {
    output: `about.txt  projects/  contact.txt  .secrets`,
  },
  
  pwd: {
    output: `/home/da9ish`,
  },
  
  date: {
    output: () => new Date().toString(),
  },
  
  echo: {
    handler: (args) => args.join(' ') || '',
  },
  
  cat: {
    output: `Usage: Try 'whoami', 'skills', or 'projects' instead`,
  },
  
  vim: {
    output: `Error: vim not installed. This is a feature, not a bug.`,
    isError: true,
  },
  
  neofetch: {
    output: `
        ████████████████        da9ish@da9i.sh
      ██░░░░░░░░░░░░░░██      ────────────────
    ██░░████████████░░██      OS: WebOS (Chrome)
    ██░░██        ██░░██      Host: da9i.sh
    ██░░██  ████  ██░░██      Shell: da9i.sh v1.0
    ██░░██  ████  ██░░██      Terminal: browser
    ██░░██        ██░░██      CPU: Your Device
    ██░░████████████░░██      Memory: Infinite*
      ██░░░░░░░░░░░░░░██      
        ████████████████      *terms and conditions apply`,
  },
};

// Boot sequence lines
const BOOT_SEQUENCE = [
  { text: '#!/bin/bash', delay: 0 },
  { text: '# da9i.sh v1.0.0', delay: 100 },
  { text: '', delay: 200 },
  { text: 'Initializing...', delay: 300 },
  { text: '[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%', delay: 600, typing: true },
  { text: '', delay: 1200 },
  { text: 'Loading Danish Shah...', delay: 1300 },
  { text: '', delay: 1600 },
  { text: '✓ Systems online', delay: 1700, success: true },
  { text: '✓ Audio engine ready', delay: 1900, success: true },
  { text: '✓ Welcome, visitor', delay: 2100, success: true },
  { text: '', delay: 2400 },
  { text: 'Type "help" for available commands.', delay: 2500 },
  { text: '', delay: 2700 },
];

// Main Terminal Component
const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [bootIndex, setBotIndex] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [theme, setTheme] = useState('dark');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  
  // Initialize audio on first interaction
  const initAudio = useCallback(() => {
    if (audioEnabled) {
      AudioEngine.init();
    }
  }, [audioEnabled]);
  
  // Boot sequence
  useEffect(() => {
    if (!isBooting) return;
    
    if (bootIndex < BOOT_SEQUENCE.length) {
      const item = BOOT_SEQUENCE[bootIndex];
      const timer = setTimeout(() => {
        setLines(prev => [...prev, { 
          text: item.text, 
          isSuccess: item.success,
          isTyping: item.typing 
        }]);
        setBotIndex(bootIndex + 1);
        
        // Play boot sound on specific line
        if (bootIndex === 3 && audioEnabled) {
          AudioEngine.init();
          AudioEngine.playBootSound();
        }
      }, item.delay);
      
      return () => clearTimeout(timer);
    } else {
      setIsBooting(false);
      inputRef.current?.focus();
    }
  }, [bootIndex, isBooting, audioEnabled]);
  
  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);
  
  // Handle command execution
  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const [command, ...args] = trimmed.split(' ');
    
    // Add command to output
    setLines(prev => [...prev, { text: `$ ${cmd}`, isCommand: true }]);
    
    if (command === 'clear') {
      setLines([]);
      return;
    }
    
    if (command === 'theme') {
      setTheme(t => t === 'dark' ? 'light' : 'dark');
      setLines(prev => [...prev, { text: `Theme switched to ${theme === 'dark' ? 'light' : 'dark'} mode` }]);
      return;
    }
    
    if (command === 'audio') {
      setAudioEnabled(e => !e);
      setLines(prev => [...prev, { text: `Audio ${audioEnabled ? 'disabled' : 'enabled'}` }]);
      return;
    }
    
    const cmdObj = COMMANDS[trimmed] || COMMANDS[command];
    
    if (cmdObj) {
      if (audioEnabled) AudioEngine.playExecute();
      
      let output;
      if (cmdObj.handler) {
        output = cmdObj.handler(args);
      } else if (typeof cmdObj.output === 'function') {
        output = cmdObj.output();
      } else {
        output = cmdObj.output;
      }
      
      setLines(prev => [...prev, { 
        text: output, 
        isError: cmdObj.isError,
        hasLinks: cmdObj.links 
      }]);
    } else if (trimmed) {
      if (audioEnabled) AudioEngine.playError();
      setLines(prev => [...prev, { 
        text: `Command not found: ${command}. Type 'help' for available commands.`,
        isError: true 
      }]);
    }
  };
  
  const handleKeyDown = (e) => {
    initAudio();
    
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (audioEnabled && e.key.length === 1) {
      AudioEngine.playKeystroke();
    }
  };
  
  const handleTerminalClick = () => {
    initAudio();
    inputRef.current?.focus();
  };
  
  const themeStyles = theme === 'dark' 
    ? { bg: 'bg-[#0a0a0a]', text: 'text-green-400', accent: 'text-green-500' }
    : { bg: 'bg-gray-100', text: 'text-gray-800', accent: 'text-blue-600' };
  
  return (
    <div 
      className={`min-h-screen ${themeStyles.bg} ${themeStyles.text} font-mono p-4 md:p-8`}
      onClick={handleTerminalClick}
    >
      {/* Window chrome */}
      <div className={`max-w-4xl mx-auto rounded-lg overflow-hidden border ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'}`}>
        {/* Title bar */}
        <div className={`flex items-center gap-2 px-4 py-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'}`}>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className={`ml-4 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
            da9ish@da9i.sh ~ 
          </span>
          <span className={`ml-auto text-xs ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>
            {audioEnabled ? '🔊' : '🔇'}
          </span>
        </div>
        
        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className={`p-4 h-[70vh] overflow-y-auto ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-white'}`}
        >
          <AnimatePresence>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`whitespace-pre-wrap mb-1 ${
                  line.isError ? 'text-red-400' : 
                  line.isSuccess ? 'text-green-500' :
                  line.isCommand ? (theme === 'dark' ? 'text-cyan-400' : 'text-blue-600') : 
                  ''
                }`}
              >
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Input line */}
          {!isBooting && (
            <div className="flex items-center">
              <span className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}>$ </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`flex-1 bg-transparent outline-none ${themeStyles.text} caret-current`}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className={`w-2 h-5 ${theme === 'dark' ? 'bg-green-400' : 'bg-gray-800'}`}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile hint */}
      <p className={`text-center mt-4 text-sm ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} md:hidden`}>
        Tap anywhere to type
      </p>
      
      {/* Footer */}
      <p className={`text-center mt-4 text-xs ${theme === 'dark' ? 'text-gray-700' : 'text-gray-400'}`}>
        © 2026 Danish Shah · da9i.sh
      </p>
    </div>
  );
};

export default Terminal;
