import { useState, useEffect, useCallback } from 'react';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const useTypingEffect = ({
  text,
  speed = 30,
  delay = 0,
  onComplete
}: UseTypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    setIsTyping(false);

    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, onComplete]);

  return { displayedText, isTyping, isComplete };
};

export const useMultiLineTyping = (lines: string[], speed = 30, lineDelay = 500) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleLineComplete = useCallback(() => {
    setCompletedLines(prev => [...prev, lines[currentLineIndex]]);
    if (currentLineIndex < lines.length - 1) {
      setTimeout(() => setCurrentLineIndex(prev => prev + 1), lineDelay);
    } else {
      setIsComplete(true);
    }
  }, [currentLineIndex, lines, lineDelay]);

  const { displayedText, isTyping } = useTypingEffect({
    text: lines[currentLineIndex] || '',
    speed,
    onComplete: handleLineComplete,
  });

  return {
    completedLines,
    currentLine: displayedText,
    isTyping,
    isComplete,
    currentLineIndex,
  };
};
