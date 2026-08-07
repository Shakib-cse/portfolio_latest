'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let rafId: number;
    let mx = -200, my = -200;  // start offscreen
    let rx = -200, ry = -200;  // ring lags behind

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) setVisible(true);
    };

    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Detect hoverable interactive elements
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive = el.closest('a, button, [role="button"], input, textarea, select, label');
      setHovering(!!isInteractive);
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      // Dot follows cursor instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }

      // Ring lags behind (lerp)
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
    };

    window.addEventListener('mousemove', onMove,  { passive: true });
    window.addEventListener('mousedown', onDown,  { passive: true });
    window.addEventListener('mouseup',   onUp,    { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseover',  onOver,  { passive: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseover',  onOver);
    };
  }, [visible]);

  return (
    <>
      {/* Core dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease, transform 0.05s linear, width 0.2s ease, height 0.2s ease, background 0.2s ease',
          background: hovering ? 'rgba(6, 182, 212, 0.9)' : 'rgba(155, 92, 246, 0.95)',
          boxShadow: hovering
            ? '0 0 12px rgba(6, 182, 212, 0.8)'
            : '0 0 12px rgba(124, 58, 237, 0.8)',
          mixBlendMode: 'normal',
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: clicking ? 32 : hovering ? 48 : 40,
          height: clicking ? 32 : hovering ? 48 : 40,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: visible ? (hovering ? 0.7 : 0.45) : 0,
          transition:
            'opacity 0.3s ease, width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease',
          border: `1.5px solid ${hovering ? 'rgba(6, 182, 212, 0.7)' : 'rgba(124, 58, 237, 0.6)'}`,
          backdropFilter: 'blur(1px)',
        }}
      />
    </>
  );
}
