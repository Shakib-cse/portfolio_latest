import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle,
  Zap,
  Lock,
  ShieldCheck,
  Code2,
  Layers,
  Sparkles,
  ChevronRight,
  FolderGit2
} from 'lucide-react';
import { resumeData } from '@/data/resume';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Force full static generation at build time for instant responses
export const dynamic = 'force-static';
export const dynamicParams = false;

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
      title: 'Project Not Found | Portfolio',
    };
  }

  return {
    title: `${project.title} — Case Study | ${resumeData.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = resumeData.projects;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 container mx-auto px-4 flex-1">
        {/* Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
            <Link href="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
            <span className="text-slate-900 dark:text-slate-200 font-semibold truncate max-w-xs">
              {project.title.split('—')[0].trim()}
            </span>
          </nav>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all px-4 py-2 rounded-full glass-panel hover:border-indigo-500/40 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>All Projects</span>
          </Link>
        </div>

        {/* Case Study Header Banner */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-300/60 dark:border-indigo-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold px-3.5 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-500/10 border border-emerald-300/60 dark:border-emerald-500/20 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.metrics}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Action Links & Status */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:border-indigo-500/50 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-amber-100/90 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-xs font-mono font-medium text-amber-900 dark:text-amber-300">
                <Lock className="w-4 h-4 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                <span>Private Codebase: Source code access is restricted under client NDA.</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Image Banner with Optimized Next Image */}
        {project.imageUrl && (
          <div className="relative rounded-3xl overflow-hidden glass-panel mb-14 border border-slate-200/80 dark:border-slate-800 shadow-2xl">
            <div className="relative w-full aspect-[16/9] max-h-[520px]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority={true}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        )}

        {/* Quick Tech Architecture Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
              <Layers className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Category</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
              {project.category}
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Key Metric</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
              {project.metrics}
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-2">
              <Code2 className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Primary Tech</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
              {project.techStack[0]} + {project.techStack[1] || 'Node.js'}
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold">Access</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
              {project.githubUrl ? 'Open Source' : 'Client NDA'}
            </p>
          </div>
        </div>

        {/* Technical Deep Dive Breakdown */}
        <div className="space-y-8 mb-16">
          {/* Overview */}
          <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Zap className="w-4 h-4" />
              </div>
              <span>Project Overview & Scope</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </section>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="glass-panel p-8 rounded-3xl border border-rose-500/20 bg-rose-500/[0.02] shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>The Engineering Challenge</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </section>

            <section className="glass-panel p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.02] shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>The Architecture Solution</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </section>
          </div>

          {/* Key Takeaways & Technical Insights */}
          <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Key Architectural Insights & Results</span>
            </h3>
            <ul className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              {project.caseStudy.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Full Tech Stack Badges */}
          <section className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Technologies & Libraries Deployed</span>
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-medium text-slate-800 dark:text-indigo-200 px-3.5 py-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 hover:border-indigo-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Previous & Next Case Study Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
          <Link
            href={`/projects/${prevProject.slug}`}
            prefetch={true}
            className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 group hover:border-indigo-500/50 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <p className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
              {prevProject.title}
            </p>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            prefetch={true}
            className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 group hover:border-indigo-500/50 transition-all flex flex-col justify-between sm:items-end sm:text-right"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
              {nextProject.title}
            </p>
          </Link>
        </div>

        {/* More Case Studies Explore Grid */}
        {otherProjects.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Explore More <span className="gradient-text">Case Studies</span>
              </h3>
              <Link
                href="/#projects"
                className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherProjects.map((other) => (
                <Link
                  key={other.id}
                  href={`/projects/${other.slug}`}
                  prefetch={true}
                  className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 group hover:border-indigo-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                      {other.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
                      {other.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-indigo-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

