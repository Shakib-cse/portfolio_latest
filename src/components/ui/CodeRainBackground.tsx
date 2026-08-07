'use client';

import { useEffect, useRef } from 'react';

const CODE_CHARS = [
  '0', '1', '{', '}', '<', '>', '/', '*', '=', ';',
  '(', ')', '[', ']', '&', '|', '!', '%', '#', '+',
  '=>', '&&', '||', '//', '/*', '*/', '!=', '==', '+=', '-=',
  'fn', 'if', 'for', 'let', 'var', 'def', 'end', 'new',
  'const', 'return', 'class', 'async', 'await', 'import', 'export',
  'function', 'null', 'true', 'false', 'void', 'type', 'interface',
  '010', '101', '001', '110', '111', '000',
];

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacities: number[];
  length: number;
  charTimer: number;
  charInterval: number;
}

export function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    const FONT_SIZE   = 12;
    const CELL_H      = 18;
    const COL_W       = 22;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const randChar = () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];

    let columns: Column[] = [];

    const buildColumns = () => {
      const cols = Math.ceil(canvas.width / COL_W);
      columns = Array.from({ length: cols }, (_, i) => {
        const trailLen = Math.floor(Math.random() * 18) + 6;
        return {
          x:            i * COL_W + COL_W / 2,
          y:            -(Math.random() * canvas.height),
          speed:        Math.random() * 1.2 + 0.4,
          chars:        Array.from({ length: trailLen }, randChar),
          opacities:    Array.from({ length: trailLen }, (_, j) => Math.max(0.03, 0.5 * (1 - j / trailLen))),
          length:       trailLen,
          charTimer:    0,
          charInterval: Math.floor(Math.random() * 10) + 6,
        };
      });
    };

    const handleResize = () => { resize(); buildColumns(); };
    window.addEventListener('resize', handleResize);
    resize();
    buildColumns();

    const isLightMode = () =>
      document.documentElement.classList.contains('light') ||
      document.body.classList.contains('light');

    let lastTime = performance.now();
    const frameInterval = 1000 / 30;

    const draw = (currentTime: number = performance.now()) => {
      raf = requestAnimationFrame(draw);
      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      lastTime = currentTime - (delta % frameInterval);

      const light = isLightMode();

      ctx.fillStyle = light
        ? 'rgba(248, 249, 255, 0.22)'
        : 'rgba(5, 7, 15, 0.20)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `600 ${FONT_SIZE}px "JetBrains Mono", "Fira Code", monospace`;
      ctx.textAlign = 'center';

      columns.forEach(col => {
        col.charTimer++;
        if (col.charTimer >= col.charInterval) {
          col.charTimer = 0;
          const idx = Math.floor(Math.random() * col.chars.length);
          col.chars[idx] = randChar();
          col.charInterval = Math.floor(Math.random() * 10) + 6;
        }

        col.chars.forEach((ch, j) => {
          const cellY = col.y - j * CELL_H;
          if (cellY < -CELL_H || cellY > canvas.height + CELL_H) return;

          const base    = col.opacities[j];
          const isHead  = j === 0;

          if (light) {
            const alpha = isHead ? 0.60 : Math.min(base * 1.2, 0.35);
            if (isHead) {
              ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
            } else {
              const hue = 250 + (j / col.length) * 40;
              ctx.fillStyle = `hsla(${hue}, 80%, 45%, ${alpha})`;
            }
          } else {
            const alpha = isHead ? 0.75 : Math.min(base * 1.5, 0.50);
            const t     = j / col.length;
            const hue   = isHead ? 185 : 185 + t * 90;
            const sat   = isHead ? 90 : 75;
            const lit   = isHead ? 72 : 55;
            ctx.fillStyle = `hsla(${hue}, ${sat}%, ${lit}%, ${alpha})`;
          }

          ctx.fillText(ch, col.x, cellY);
        });

        col.y += col.speed;

        if (col.y - col.length * CELL_H > canvas.height) {
          col.y     = -(Math.random() * 200 + 50);
          col.speed = Math.random() * 1.2 + 0.4;
          const newLen = Math.floor(Math.random() * 18) + 6;
          col.length   = newLen;
          col.chars     = Array.from({ length: newLen }, randChar);
          col.opacities = Array.from({ length: newLen }, (_, j) => Math.max(0.03, 0.5 * (1 - j / newLen)));
        }
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base color */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{ background: 'var(--bg-base)' }}
      />

      {/* Rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.45, filter: 'blur(0.5px)' }}
      />

      {/* Ambient gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 20% 10%, rgba(124,58,237,0.12) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 85% 80%, rgba(6,182,212,0.10) 0%, transparent 55%)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, transparent 40%, rgba(5,7,15,0.55) 100%)',
          opacity: 0.6,
        }}
      />
    </div>
  );
}
