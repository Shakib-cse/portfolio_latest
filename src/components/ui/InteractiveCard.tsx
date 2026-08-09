'use client';

import React, { useRef, useEffect } from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function InteractiveCard({ children, className = '', style }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4; // Max 4 deg tilt
      const rotateY = ((x - centerX) / centerX) * 4;  // Max 4 deg tilt

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
      
      if (spotlightRef.current) {
        const posX = Math.round((x / rect.width) * 100);
        const posY = Math.round((y / rect.height) * 100);
        spotlightRef.current.style.background = `radial-gradient(500px circle at ${posX}% ${posY}%, rgba(124, 58, 237, 0.18), transparent 45%)`;
      }
    });
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.1s ease-out';
    }
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
      className={`relative group ${className}`}
    >
      {/* Interactive Cursor Spotlight Gradient Follower */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: 'radial-gradient(500px circle at 50% 50%, rgba(124, 58, 237, 0.18), transparent 45%)',
        }}
      />

      {children}
    </div>
  );
}

