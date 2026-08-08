'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, ChevronDown, MapPin, Zap } from 'lucide-react';
import { resumeData } from '@/data/resume';

const stagger = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
};

const WORDS = ['Full Stack', 'React.js', 'Next.js', 'Node.js'];

export function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const word = WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section
      id="hero"
      className="relative pt-24 pb-6 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen max-h-screen flex flex-col justify-center"
    >
      {/* ── Background ambient orbs ── */}
      <div
        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        {/* ═══ LEFT COLUMN — Text ═══ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Status Badge */}
          <motion.div variants={fadeUp} className="mb-4">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#10B981',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: '#10B981' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: '#10B981' }}
                />
              </span>
              {resumeData.status}
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono font-medium mb-1.5"
            style={{ color: 'var(--text-muted)' }}
          >
            Hi there, I'm
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {resumeData.name.split('(')[0].trim()}
          </motion.h1>

          {/* Dynamic Subtitle */}
          <motion.div
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4"
          >
            <span className="gradient-text">{displayed}</span>
            <span
              className="inline-block w-0.5 h-[0.85em] ml-1 rounded-sm translate-y-1 align-middle"
              style={{
                background: 'var(--accent-cyan)',
                animation: 'blinkCursor 1s step-end infinite',
              }}
            />
            <span
              className="block text-2xl sm:text-3xl font-bold mt-0.5"
              style={{ color: 'var(--text-secondary)' }}
            >
              Developer
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {resumeData.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-1.5 text-xs font-mono mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--accent-cyan)' }} />
            <span>{resumeData.location}</span>
          </motion.div>

          {/* Tech Pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
            {resumeData.topSkillsPills?.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.06, type: 'spring', stiffness: 200 }}
                className="tech-pill"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons + Socials */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white btn-gradient"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-ghost"
            >
              <span>Let's Talk</span>
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2 sm:ml-auto">
              {[
                { href: resumeData.socials.github,   Icon: Github,   label: 'GitHub' },
                { href: resumeData.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${resumeData.socials.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(124,58,237,0.08)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border-glow)';
                    el.style.color = 'var(--text-primary)';
                    el.style.boxShadow = '0 0 16px rgba(124,58,237,0.3)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border-subtle)';
                    el.style.color = 'var(--text-muted)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ═══ RIGHT COLUMN — Floating Card ═══ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div
            className="float-anim relative w-72 glass-panel rounded-3xl p-6"
            style={{
              border: '1px solid var(--border-medium)',
              boxShadow: '0 0 60px -10px rgba(124,58,237,0.35), 0 20px 60px -20px rgba(0,0,0,0.6)',
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                  boxShadow: '0 0 20px rgba(124,58,237,0.5)',
                }}
              >
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                  Shakib
                </div>
                <div className="text-xs font-mono" style={{ color: 'var(--accent-cyan)' }}>
                  Full Stack Dev
                </div>
              </div>
              <div className="ml-auto flex gap-1">
                {['#FF5F57','#FFBD2E','#28C840'].map(c => (
                  <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { label: 'Projects Built', value: '10+', color: 'var(--accent-violet2)' },
                { label: 'Years Active',   value: '2+',  color: 'var(--accent-cyan)' },
                { label: 'Users Served',   value: '50K+',color: 'var(--accent-gold)' },
                { label: 'Tech Stacks',    value: '15+', color: 'var(--accent-emerald)' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="text-xl font-extrabold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mini Tech Stack */}
            <div className="space-y-2">
              {[
                { name: 'Next.js / React', pct: 96 },
                { name: 'Node.js / Express', pct: 94 },
                { name: 'PostgreSQL & Prisma', pct: 96 },
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-[11px] font-mono mb-1" style={{ color: 'var(--text-muted)' }}>
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--accent-violet2)' }}>{skill.pct}%</span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: 'rgba(124,58,237,0.15)' }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.pct}%` }}
                      transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
                      className="h-full rounded-full skill-bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Available Badge */}
            <div
              className="mt-5 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-semibold"
              style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
                color: '#10B981',
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
              Available for hire
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 bounce-down" style={{ color: 'var(--accent-violet2)' }} />
      </motion.div>
    </section>
  );
}
