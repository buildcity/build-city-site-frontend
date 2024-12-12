import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (using larger numbers)
    const chars = '0123456789'.split('');
    const fontSize = 32; // Larger font size
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);

    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i] += fontSize;
      });
    };

    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-80"
      style={{ zIndex: -1 }}
    />
  );
};

export default MatrixRain;