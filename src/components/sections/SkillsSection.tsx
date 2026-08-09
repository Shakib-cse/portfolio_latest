'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Languages,
  Globe,
  Sparkles,
  MapPin,
  Calendar,
  BookOpen,
} from 'lucide-react';
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
    <section id="skills" className="py-16 sm:py-20 container mx-auto px-4">
      {/* Section Header */}
      <div className="mb-10">
        <span className="section-label block mb-2">Technical Proficiency</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Skills &{' '}
          <span className="gradient-text">Expertise</span>
        </h2>
        <p className="mt-2 text-sm max-w-lg" style={{ color: 'var(--text-muted)' }}>
          A curated snapshot of the tools, languages, and frameworks I use to build production-grade software.
        </p>
      </div>

      {/* Skill Categories Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {resumeData.skillCategories.map((cat, catIdx) => {
          const theme = CATEGORY_THEMES[catIdx] || CATEGORY_THEMES[0];
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden group transition-all duration-300 border border-slate-200/80 dark:border-slate-800"
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
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
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
                    className="text-[10px] font-mono uppercase tracking-widest mb-1 font-bold"
                    style={{ color: theme.accent }}
                  >
                    {theme.label}
                  </div>
                  <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                    {cat.category}
                  </h3>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-mono font-extrabold"
                  style={{
                    background: `${theme.accent}15`,
                    border: `1px solid ${theme.accent}30`,
                    color: theme.accent,
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

      {/* Professional Highlights: Education & Languages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formal Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden group transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-0.5">
                    Academic Qualification
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                    Formal Education
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Sparkles className="w-3 h-3" />
                <span>Class of 2024</span>
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                {resumeData.education[0]?.degree || 'Bachelor of Science in Computer Science & Engineering'}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{resumeData.education[0]?.institution || 'Daffodil International University'}</span>
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{resumeData.education[0]?.location || 'Dhaka, Bangladesh'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Graduated 2024</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Languages & Communication Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden group transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-0.5">
                    Global Communication
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                    Languages Spoken
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Globe className="w-3 h-3" />
                <span>Multilingual</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: 'English', level: 'Professional Working', tag: 'Professional', accent: '#7C3AED' },
                { name: 'Bengali', level: 'Native / Bilingual', tag: 'Native', accent: '#10B981' },
                { name: 'Hindi', level: 'Conversational', tag: 'Conversational', accent: '#F59E0B' },
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/40 transition-all group/lang"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {lang.name}
                      </span>
                      <span
                        className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                        style={{
                          background: `${lang.accent}15`,
                          color: lang.accent,
                          border: `1px solid ${lang.accent}30`,
                        }}
                      >
                        {lang.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {lang.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
