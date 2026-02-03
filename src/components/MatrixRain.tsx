import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (mix of DevOps symbols and katakana)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]<>/\\|=+-*&^%$#@!~kubectl terraform docker helm ansible aws azure k8s yaml json';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(5, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient from cyan to green
        const hue = 160 + Math.random() * 40; // 160-200 range (cyan-green)
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${0.3 + Math.random() * 0.4})`;
        ctx.fillText(char, x, y);

        // Bright leading character
        if (Math.random() > 0.95) {
          ctx.fillStyle = 'hsla(180, 100%, 80%, 0.9)';
          ctx.fillText(char, x, y);
        }

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

export default MatrixRain;
