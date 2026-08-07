'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Lock, Loader2, Github } from 'lucide-react';
import Link from 'next/link';
import { resumeData } from '@/data/resume';
import { InteractiveCard } from '@/components/ui/InteractiveCard';

const categories = ['All', ...Array.from(new Set(resumeData.projects.map(p => p.category)))];

const CATEGORY_COLORS: Record<string, string> = {
  'Marketplace':     'rgba(124,58,237,0.12)',
  'Healthcare':      'rgba(6,182,212,0.12)',
  'Culture & Media': 'rgba(245,158,11,0.12)',
};

const CATEGORY_TEXT: Record<string, string> = {
  'Marketplace':     'var(--accent-violet2)',
  'Healthcare':      'var(--accent-cyan)',
  'Culture & Media': 'var(--accent-gold)',
};

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [navigatingSlug, setNavigatingSlug] = useState<string | null>(null);

  const filteredProjects = activeTab === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === activeTab);

  const featuredProject = filteredProjects[0];
  const restProjects    = filteredProjects.slice(1);

  return (
    <section id="projects" className="py-24 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Loading Overlay */}
      <AnimatePresence>
        {navigatingSlug && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6"
            style={{ background: 'rgba(5,7,15,0.85)', backdropFilter: 'blur(16px)' }}
          >
            <div
              className="w-16 h-16 rounded-full border-4 mb-6"
              style={{
                borderColor: 'rgba(124,58,237,0.2)',
                borderTopColor: '#7C3AED',
                animation: 'spin 0.8s linear infinite',
              }}
            />
            <span className="section-label block mb-2">Loading Case Study</span>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Preparing project details...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="section-label block mb-3">Featured Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Selected{' '}
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
        >
          {categories.map(tab => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-4 py-1.5 text-xs font-semibold rounded-xl transition-colors"
                style={{ color: isActive ? '#fff' : 'var(--text-muted)' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout>
        <AnimatePresence mode="popLayout">
          {/* Featured Project — full width */}
          {featuredProject && (
            <motion.div
              key={`featured-${featuredProject.id}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              className="mb-6"
            >
              <InteractiveCard
                className="rounded-3xl overflow-hidden group"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  backdropFilter: 'blur(24px)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">
                  {/* Image Side */}
                  <div className="relative overflow-hidden min-h-[240px] lg:min-h-0">
                    {featuredProject.imageUrl ? (
                      <Link
                        href={`/projects/${featuredProject.slug}`}
                        prefetch
                        onClick={() => setNavigatingSlug(featuredProject.slug)}
                        className="block h-full"
                      >
                        <img
                          src={featuredProject.imageUrl}
                          alt={featuredProject.title}
                          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                          style={{ minHeight: '240px' }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(to right, transparent 60%, var(--bg-card) 100%)',
                          }}
                        />
                      </Link>
                    ) : (
                      <div
                        className="h-full min-h-[240px] flex items-center justify-center"
                        style={{ background: 'var(--bg-elevated)' }}
                      >
                        <span style={{ color: 'var(--text-muted)', fontSize: '3rem' }}>🚀</span>
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full"
                          style={{
                            background: CATEGORY_COLORS[featuredProject.category] || 'rgba(124,58,237,0.1)',
                            color: CATEGORY_TEXT[featuredProject.category] || 'var(--accent-violet2)',
                            border: `1px solid ${CATEGORY_TEXT[featuredProject.category] || 'var(--accent-violet2)'}30`,
                          }}
                        >
                          {featuredProject.category}
                        </span>
                        <span
                          className="text-xs font-mono font-semibold"
                          style={{ color: 'var(--accent-emerald)' }}
                        >
                          ⚡ {featuredProject.metrics}
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight transition-colors group-hover:text-accent-violet2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <Link
                          href={`/projects/${featuredProject.slug}`}
                          prefetch
                          onClick={() => setNavigatingSlug(featuredProject.slug)}
                        >
                          {featuredProject.title}
                        </Link>
                      </h3>

                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                        {featuredProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.techStack.map(tech => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg font-medium"
                            style={{
                              background: 'var(--bg-elevated)',
                              border: '1px solid var(--border-subtle)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                      <Link
                        href={`/projects/${featuredProject.slug}`}
                        prefetch
                        onClick={() => setNavigatingSlug(featuredProject.slug)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl text-white btn-gradient"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-2 rounded-xl transition-all"
                          style={{
                            background: 'rgba(16,185,129,0.08)',
                            border: '1px solid rgba(16,185,129,0.25)',
                            color: 'var(--accent-emerald)',
                          }}
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {featuredProject.githubUrl ? (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-xl transition-all"
                          style={{
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full"
                          style={{
                            background: 'rgba(245,158,11,0.08)',
                            border: '1px solid rgba(245,158,11,0.2)',
                            color: 'var(--accent-gold)',
                          }}
                        >
                          <Lock className="w-3 h-3" />
                          <span>Private Repo</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          )}

          {/* Rest of Projects — 2-col grid */}
          {restProjects.length > 0 && (
            <motion.div
              key="rest-grid"
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {restProjects.map(project => {
                const isNavigating = navigatingSlug === project.slug;
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                  >
                    <InteractiveCard
                      className="rounded-2xl overflow-hidden flex flex-col h-full group"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        backdropFilter: 'blur(24px)',
                      }}
                    >
                      {/* Image */}
                      {project.imageUrl && (
                        <Link
                          href={`/projects/${project.slug}`}
                          prefetch
                          onClick={() => setNavigatingSlug(project.slug)}
                          className="block relative overflow-hidden"
                          style={{ height: 180 }}
                        >
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-600"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 50%)',
                            }}
                          />
                        </Link>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: CATEGORY_COLORS[project.category] || 'rgba(124,58,237,0.1)',
                              color: CATEGORY_TEXT[project.category] || 'var(--accent-violet2)',
                              border: `1px solid ${CATEGORY_TEXT[project.category] || 'var(--accent-violet2)'}30`,
                            }}
                          >
                            {project.category}
                          </span>
                          <span className="text-xs font-mono" style={{ color: 'var(--accent-emerald)' }}>
                            ⚡ {project.metrics}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold mb-2 leading-snug transition-colors group-hover:text-accent-violet2" style={{ color: 'var(--text-primary)' }}>
                          <Link href={`/projects/${project.slug}`} prefetch onClick={() => setNavigatingSlug(project.slug)}>
                            {project.title}
                          </Link>
                        </h3>

                        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.techStack.map(tech => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                              style={{
                                background: 'var(--bg-elevated)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div
                          className="flex items-center justify-between pt-3"
                          style={{ borderTop: '1px solid var(--border-subtle)' }}
                        >
                          <Link
                            href={`/projects/${project.slug}`}
                            prefetch
                            onClick={() => setNavigatingSlug(project.slug)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
                            style={{ color: 'var(--accent-violet2)' }}
                          >
                            {isNavigating ? (
                              <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>Loading...</span></>
                            ) : (
                              <><span>Case Study</span><ArrowUpRight className="w-3.5 h-3.5" /></>
                            )}
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
                                  color: 'var(--accent-gold)',
                                }}
                              >
                                <Lock className="w-3 h-3" />
                                <span>Private</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </InteractiveCard>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
