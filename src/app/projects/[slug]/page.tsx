import type { Metadata } from 'next';
import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Zap, Lock, ShieldCheck } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return resumeData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = resumeData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Case Study - ${resumeData.name}`,
    description: project.description,
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = resumeData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col justify-between">
      {/* Global Navbar Header */}
      <Navbar />

      <main className="pt-28 pb-16 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        {/* Back navigation button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 px-4 py-2.5 rounded-full glass-panel border border-slate-300/80 dark:border-slate-800 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>Back to All Projects</span>
        </Link>

        {/* Case Study Header Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-300/60 dark:border-indigo-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-500/10 border border-emerald-300/60 dark:border-emerald-500/20">
              ⚡ {project.metrics}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono font-medium text-slate-800 dark:text-indigo-200 px-3 py-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-900 border border-slate-300 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links & Restricted Codebase Banner */}
          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/30"
              >
                <span>Visit Live Product</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel hover:border-indigo-500/50 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-all border border-slate-300 dark:border-slate-800"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-amber-100/90 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-xs font-mono font-medium text-amber-900 dark:text-amber-300">
                <Lock className="w-4 h-4 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                <span>Private Codebase: Source code access is restricted by project owner per non-disclosure client agreement.</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Mockup Banner */}
        {project.imageUrl && (
          <div className="relative rounded-2xl overflow-hidden glass-panel mb-12 border border-slate-300/80 dark:border-slate-800 shadow-xl" style={{ maxHeight: '450px' }}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        {/* Case Study Technical Breakdown */}
        <div className="space-y-8 mb-16">
          <section className="glass-panel p-8 rounded-2xl border border-slate-300/80 dark:border-slate-800/80 shadow-md">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Project Overview</span>
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="glass-panel p-6 rounded-2xl border border-slate-300/80 dark:border-slate-800/80 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Challenge</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </section>

            <section className="glass-panel p-6 rounded-2xl border border-slate-300/80 dark:border-slate-800/80 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Solution</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </section>
          </div>

          <section className="glass-panel p-8 rounded-2xl border border-slate-300/80 dark:border-slate-800/80 shadow-md">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Key Takeaways & Technical Insights</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {project.caseStudy.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      {/* Global High-Contrast Footer */}
      <Footer />
    </div>
  );
}
