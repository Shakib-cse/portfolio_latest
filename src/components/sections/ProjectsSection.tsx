'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Lock, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { resumeData } from '@/data/resume';

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
  // Sort projects strictly by sequence order (1, 2, 3...) and display the first 3 on the landing page
  const sortedProjects = [...resumeData.projects].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  const featuredProjects = sortedProjects.slice(0, 3);
  const featuredProject  = featuredProjects[0];
  const restProjects     = featuredProjects.slice(1);

  return (
    <section id="projects" className="py-16 sm:py-20 container mx-auto px-4 relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="section-label block mb-2">Featured Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Selected{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            A handful of highlights from my work — full case studies included.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shrink-0 group/btn"
          style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(124,58,237,0.5)';
            el.style.color = 'var(--accent-violet2)';
            el.style.boxShadow = '0 0 20px rgba(124,58,237,0.15)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.borderColor = 'var(--border-medium)';
            el.style.color = 'var(--text-secondary)';
            el.style.boxShadow = 'none';
          }}
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>      {/* Featured Project — full width */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div
            className="rounded-3xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative z-10"
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
                    className="block relative h-full min-h-[240px] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={featuredProject.imageUrl}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={true}
                      className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0 z-10"
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
                    <Link href={`/projects/${featuredProject.slug}`} className="hover:underline underline-offset-4 cursor-pointer">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl text-white btn-gradient cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-2 rounded-xl transition-all hover:scale-105"
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
          </div>
        </motion.div>
      )}

      {/* Rest of Featured Projects — 2-col grid */}
      {restProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {restProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-2xl overflow-hidden flex flex-col h-full group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative z-10"
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
                    className="block relative overflow-hidden cursor-pointer"
                    style={{ height: 180 }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0 z-10"
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
                    <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-2 cursor-pointer">
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer hover:underline"
                      style={{ color: 'var(--accent-violet2)' }}
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
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex justify-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl text-sm font-bold transition-all group/cta"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.12))',
            border: '1px solid rgba(124,58,237,0.3)',
            color: 'var(--accent-violet2)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.background = 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.2))';
            el.style.borderColor = 'rgba(124,58,237,0.6)';
            el.style.boxShadow = '0 0 32px rgba(124,58,237,0.2)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.background = 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.12))';
            el.style.borderColor = 'rgba(124,58,237,0.3)';
            el.style.boxShadow = 'none';
          }}
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
