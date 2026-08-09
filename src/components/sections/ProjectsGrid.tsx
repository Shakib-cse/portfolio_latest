'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, Github, ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '@/types';

const CATEGORY_COLORS: Record<string, string> = {
  'Marketplace':     'rgba(124,58,237,0.12)',
  'Healthcare':      'rgba(6,182,212,0.12)',
  'Culture & Media': 'rgba(245,158,11,0.12)',
};

const CATEGORY_TEXT: Record<string, string> = {
  'Marketplace':     '#7C3AED',
  'Healthcare':      '#06B6D4',
  'Culture & Media': '#F59E0B',
};

interface Props {
  projects: ProjectItem[];
  categories: string[];
  totalCount: number;
  domainCount: number;
}

export function ProjectsGrid({ projects, categories, totalCount, domainCount }: Props) {
  const [activeTab, setActiveTab] = useState('All');
  const sortedProjects = [...projects].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  const filtered = activeTab === 'All'
    ? sortedProjects
    : sortedProjects.filter(p => p.category === activeTab);

  const tabs = ['All', ...categories];

  return (
    <>
      {/* Header Row: "All Projects" on left, filter tabs on right — same flex row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
        {/* Left: heading */}
        <div>
          <span
            className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1"
            style={{ color: 'var(--accent-violet2)' }}
          >
            Complete Portfolio
          </span>
          <h1
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            All{' '}
            <span className="gradient-text">Projects</span>
          </h1>
        </div>

        {/* Right: Filter Tabs */}
        <div
          className="inline-flex items-center gap-1 p-1.5 rounded-2xl shrink-0"
          style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {tabs.map(tab => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-4 py-2 text-xs font-semibold rounded-xl transition-colors"
                style={{ color: isActive ? '#fff' : 'var(--text-muted)' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectsFilterTab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }}
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtitle below header row */}
      <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
        {totalCount} projects across {domainCount} domains — each with a full case study, tech breakdown, and live demo.
      </p>

      {/* Count */}
      <p className="text-xs font-mono mb-6" style={{ color: 'var(--text-muted)' }}>
        Showing{' '}
        <span style={{ color: 'var(--accent-violet2)' }} className="font-bold">
          {filtered.length}
        </span>{' '}
        {filtered.length === 1 ? 'project' : 'projects'}
        {activeTab !== 'All' && <> in <span style={{ color: 'var(--accent-violet2)' }}>"{activeTab}"</span></>}
      </p>


      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filtered.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="projects-card rounded-2xl overflow-hidden flex flex-col group"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                backdropFilter: 'blur(24px)',
              }}
            >
              {/* Image */}
              {project.imageUrl && (
                <Link
                  href={`/projects/${project.slug}/`}
                  className="block relative overflow-hidden"
                  style={{ height: 196 }}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 55%)',
                    }}
                  />
                </Link>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: CATEGORY_COLORS[project.category] || 'rgba(124,58,237,0.1)',
                      color: CATEGORY_TEXT[project.category] || '#7C3AED',
                      border: `1px solid ${CATEGORY_TEXT[project.category] || '#7C3AED'}30`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono font-medium" style={{ color: 'var(--accent-emerald)' }}>
                    ⚡ {project.metrics}
                  </span>
                </div>

                <h2 className="text-base font-bold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  <Link href={`/projects/${project.slug}/`} className="hover:underline underline-offset-2">
                    {project.title}
                  </Link>
                </h2>

                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 5).map(tech => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                      style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                      style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
                    style={{ color: CATEGORY_TEXT[project.category] || '#7C3AED' }}
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full transition-all hover:scale-105"
                        style={{
                          background: 'rgba(16,185,129,0.08)',
                          border: '1px solid rgba(16,185,129,0.2)',
                          color: 'var(--accent-emerald)',
                        }}
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 flex items-center justify-center rounded-lg transition-all"
                        style={{
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(245,158,11,0.08)',
                          border: '1px solid rgba(245,158,11,0.2)',
                          color: '#F59E0B',
                        }}
                      >
                        <Lock className="w-3 h-3" />
                        <span>Private</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
