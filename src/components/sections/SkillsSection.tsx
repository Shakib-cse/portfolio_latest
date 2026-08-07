'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '@/data/resume';

const CATEGORY_THEMES: Record<number, { accent: string; glow: string; label: string }> = {
  0: { accent: '#7C3AED', glow: 'rgba(124,58,237,0.25)', label: 'Core Stack' },
  1: { accent: '#06B6D4', glow: 'rgba(6,182,212,0.25)',  label: 'Frontend' },
  2: { accent: '#10B981', glow: 'rgba(16,185,129,0.25)', label: 'Backend & DevOps' },
};

function SkillBar({
  name,
  proficiency,
  accent,
  delay,
}: {
  name: string;
  proficiency: number;
  accent: string;
  delay: number;
}) {
  const ref  = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono font-medium" style={{ color: 'var(--text-secondary)' }}>
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.6 }}
          className="text-xs font-mono font-bold"
          style={{ color: accent }}
        >
          {proficiency}%
        </motion.span>
      </div>

      {/* Bar Track */}
      <div
        className="h-2 w-full rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative overflow-hidden shimmer"
          style={{
            background: `linear-gradient(90deg, ${accent}99, ${accent})`,
            boxShadow: `0 0 8px ${accent}66`,
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">Technical Proficiency</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Skills &{' '}
          <span className="gradient-text">Expertise</span>
        </h2>
        <p className="mt-3 text-sm max-w-lg" style={{ color: 'var(--text-muted)' }}>
          A curated snapshot of the tools, languages, and frameworks I use to build production-grade software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resumeData.skillCategories.map((cat, catIdx) => {
          const theme = CATEGORY_THEMES[catIdx] || CATEGORY_THEMES[0];
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
              style={{
                border: '1px solid var(--border-subtle)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = `${theme.accent}50`;
                el.style.boxShadow   = `0 20px 60px -12px rgba(0,0,0,0.4), 0 0 40px -10px ${theme.glow}`;
                el.style.transform   = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--border-subtle)';
                el.style.boxShadow   = '';
                el.style.transform   = 'translateY(0)';
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${theme.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Card Header */}
              <div
                className="flex items-center justify-between mb-6 pb-4 relative"
                style={{ borderBottom: `1px solid ${theme.accent}25` }}
              >
                <div>
                  <div
                    className="text-[10px] font-mono uppercase tracking-widest mb-1"
                    style={{ color: theme.accent }}
                  >
                    {theme.label}
                  </div>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                    {cat.category}
                  </h3>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-mono font-extrabold"
                  style={{
                    background: `${theme.accent}15`,
                    border: `1px solid ${theme.accent}30`,
                    color: theme.accent,
                    fontSize: '0.875rem',
                  }}
                >
                  0{catIdx + 1}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-5 relative">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    accent={theme.accent}
                    delay={catIdx * 0.15 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Languages Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 glass-panel rounded-2xl p-6 flex flex-wrap items-center gap-4"
        style={{ border: '1px solid var(--border-subtle)' }}
      >
        <div>
          <div className="section-label mb-1">Languages Spoken</div>
        </div>
        <div className="flex flex-wrap gap-3">
          {resumeData.languages.map(lang => (
            <span
              key={lang}
              className="text-sm font-mono px-4 py-2 rounded-xl font-medium"
              style={{
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-secondary)',
              }}
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="ml-auto text-right">
            <div className="text-xs font-mono font-semibold" style={{ color: 'var(--accent-violet2)' }}>
              {resumeData.education[0].degree}
            </div>
            <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              {resumeData.education[0].institution} · {resumeData.education[0].year}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
