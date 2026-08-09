'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { resumeData } from '@/data/resume';

const CATEGORY_COLORS: Record<string, string> = {
  'React':       '#61DAFB',
  'Node.js':     '#84BA64',
  'Express.js':  '#9B5CF6',
  'PostgreSQL':  '#336791',
  'Prisma':      '#5A67D8',
  'Next.js':     '#FFFFFF',
  'Tailwind CSS':'#38BDF8',
  'JWT':         '#F59E0B',
  'REST APIs':   '#06B6D4',
  'shadcn/ui':   '#9B5CF6',
  'Vercel':      '#FFFFFF',
  'Git':         '#F05032',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -30 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

function ExperienceCard({ exp, index }: { exp: typeof resumeData.experiences[0]; index: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="relative group"
    >
      {/* Glowing Timeline Node */}
      <div
        className="absolute -left-[35px] sm:-left-[51px] top-6 z-10"
      >
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-400 group-hover:scale-125"
          style={{
            background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            boxShadow: inView ? '0 0 20px rgba(124,58,237,0.6), 0 0 8px rgba(6,182,212,0.4)' : 'none',
            transition: 'box-shadow 0.5s ease, transform 0.3s ease',
          }}
        >
          <div className="w-2 h-2 rounded-full bg-white opacity-80" />
        </div>
      </div>

      {/* Card */}
      <div
        className="glass-panel rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:translate-y-[-2px]"
        style={{
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 4px 24px -4px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'var(--border-medium)';
          el.style.boxShadow = '0 20px 60px -12px rgba(0,0,0,0.5), 0 0 40px -8px rgba(124,58,237,0.25)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'var(--border-subtle)';
          el.style.boxShadow = '0 4px 24px -4px rgba(0,0,0,0.3)';
        }}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            {/* Index number */}
            <span
              className="text-[10px] font-mono font-bold tracking-widest uppercase mb-2 block"
              style={{ color: 'var(--accent-violet2)' }}
            >
              0{index + 1} / Experience
            </span>
            <h3
              className="text-xl sm:text-2xl font-bold transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 mt-1.5 text-sm font-semibold" style={{ color: 'var(--accent-cyan)' }}>
              <Briefcase className="w-3.5 h-3.5" />
              <span>{exp.company}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1.5 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {exp.summary}
        </p>

        {/* Metric Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {exp.metrics.map(metric => (
            <span
              key={metric}
              className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
              style={{
                background: 'rgba(124,58,237,0.10)',
                border: '1px solid rgba(124,58,237,0.25)',
                color: 'var(--accent-violet2)',
              }}
            >
              ⚡ {metric}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-6">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-violet2)' }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Skill Tags */}
        <div
          className="flex flex-wrap gap-2 pt-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          {exp.skills.map(skill => (
            <span
              key={skill}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md font-medium"
              style={{
                background: 'rgba(10,13,26,0.8)',
                border: '1px solid var(--border-subtle)',
                color: CATEGORY_COLORS[skill] || 'var(--text-secondary)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function TimelineSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 container mx-auto px-4">
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">Career Path & Metrics</span>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Work{' '}
          <span className="gradient-text">Experience</span>
        </h2>
        <p
          className="mt-3 text-sm max-w-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          Professional journey — building high-availability systems and shipping production-ready applications.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10"
      >
        {/* Glowing Timeline Line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px timeline-line"
          style={{ opacity: 0.6 }}
        />

        {resumeData.experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
