import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

export function ScrambleText({ text, trigger }: { text: string, trigger: boolean }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!trigger) return;
    
    let iterations = 0;
    const maxIterations = 15;
    
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (index < iterations / 2 || char === ' ') {
          return text[index];
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(''));
      
      iterations++;
      
      if (iterations > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 40);
    
    return () => clearInterval(interval);
  }, [text, trigger]);

  return <span>{displayText}</span>;
}
