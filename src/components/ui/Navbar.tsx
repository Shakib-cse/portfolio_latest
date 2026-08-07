'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Sun, Moon, Zap, Menu, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About',      href: '/#hero' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects',   href: '/#projects', isProjects: true },
  { label: 'Skills',     href: '/#skills' },
  { label: 'Contact',    href: '/#contact' },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted]         = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isProjectPage = pathname?.startsWith('/projects/');

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <nav
        className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl relative"
        style={{
          borderColor: scrolled ? 'var(--border-medium)' : 'var(--border-subtle)',
          boxShadow: scrolled
            ? '0 8px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.2)'
            : '0 4px 24px -4px rgba(0,0,0,0.4)',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight group"
          style={{ color: 'var(--text-primary)' }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              boxShadow: '0 0 12px rgba(124, 58, 237, 0.5)',
            }}
          >
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="group-hover:text-accent-violet2 transition-colors" style={{ color: 'var(--text-primary)' }}>
            shakib.dev
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = isProjectPage && link.isProjects;
            return (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 group"
                style={{
                  color: isActive ? 'var(--accent-violet2)' : 'var(--text-secondary)',
                }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">{link.label}</span>
                {/* Hover bg */}
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'rgba(124,58,237,0.08)' }}
                />
                {isActive && (
                  <motion.span
                    layoutId="navActiveBar"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {isProjectPage && (
            <Link
              href="/#projects"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono font-medium transition-colors mr-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>
          )}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun  className="w-4 h-4" style={{ color: '#F59E0B' }} />
                : <Moon className="w-4 h-4" style={{ color: '#7C3AED' }} />
              }
            </button>
          )}

          {/* Hire Me */}
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl text-white btn-gradient"
          >
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
            style={{
              background: 'rgba(124,58,237,0.08)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden mt-2 p-3 glass-panel rounded-2xl flex flex-col gap-1 shadow-2xl"
            style={{ borderColor: 'var(--border-medium)' }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = isProjectPage && link.isProjects;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    color: isActive ? 'var(--accent-violet2)' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(124,58,237,0.12)' : 'transparent',
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="mt-1 pt-2" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-xs font-bold px-4 py-2.5 rounded-xl text-white btn-gradient"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
