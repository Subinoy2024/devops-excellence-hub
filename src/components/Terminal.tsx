import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { getAIResponse, getWelcomeMessage } from '@/lib/aiResponses';

interface Message {
  type: 'system' | 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const Terminal = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Show welcome message on load
    const welcomeMessage = getWelcomeMessage();
    typeMessage(welcomeMessage, 'system');
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages, displayedResponse]);

  const typeMessage = (text: string, type: 'system' | 'ai') => {
    setIsTyping(true);
    setDisplayedResponse('');
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedResponse(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setMessages(prev => [...prev, { type, content: text, timestamp: new Date() }]);
        setDisplayedResponse('');
        setIsTyping(false);
      }
    }, 5); // Fast typing speed

    return () => clearInterval(typeInterval);
  };

  const handleSubmit = () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage, timestamp: new Date() }]);
    setInput('');

    // Simulate processing delay
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      typeMessage(response, 'ai');
    }, 300);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  return (
    <div 
      className="relative w-full h-full bg-terminal-bg border border-terminal-border rounded-lg overflow-hidden neon-glow-cyan scanlines"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-terminal-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <span className="ml-4 text-xs text-muted-foreground font-mono">
          devops-ai@subinoy-debnath:~
        </span>
        <span className="ml-auto text-xs text-primary pulse-glow px-2 py-0.5 rounded border border-primary/30">
          ● ONLINE
        </span>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-[calc(100%-80px)] overflow-y-auto p-4 font-mono text-sm space-y-2"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className="animate-fade-in">
            {msg.type === 'user' ? (
              <div className="flex items-start gap-2">
                <span className="text-accent neon-text-pink">user@terminal</span>
                <span className="text-muted-foreground">$</span>
                <span className="text-foreground">{msg.content}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap text-primary leading-relaxed">
                {msg.content}
              </pre>
            )}
          </div>
        ))}

        {/* Currently typing response */}
        {isTyping && displayedResponse && (
          <pre className="whitespace-pre-wrap text-primary leading-relaxed">
            {displayedResponse}
            <span className="cursor-blink text-accent">█</span>
          </pre>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-terminal-border bg-muted/30 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-accent neon-text-pink">user@terminal</span>
          <span className="text-muted-foreground">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            placeholder={isTyping ? 'Processing...' : 'Type a command...'}
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground font-mono text-sm"
          />
          <span className="cursor-blink text-primary">█</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
