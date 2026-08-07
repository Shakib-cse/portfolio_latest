'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total    = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position:  'fixed',
        top:       0,
        left:      0,
        right:     0,
        height:    '3px',
        zIndex:    99997,
        background: 'rgba(124, 58, 237, 0.12)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height:   '100%',
          width:    `${progress}%`,
          background: 'linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)',
          transition: 'width 0.08s linear',
          boxShadow: '0 0 8px rgba(124, 58, 237, 0.6), 0 0 2px rgba(6, 182, 212, 0.8)',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  );
}
