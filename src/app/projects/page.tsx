import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'All Projects | Md. Abu Rayhan (Shakib)',
  description: 'Browse all projects by Md. Abu Rayhan (Shakib) — Full Stack Developer. Case studies, live demos, and technical breakdowns.',
};

export default function ProjectsPage() {
  const allProjects = resumeData.projects;
  const categories  = Array.from(new Set(allProjects.map(p => p.category)));

  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 container mx-auto px-4 flex-1">
        {/* Back to Home */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2 rounded-full transition-all"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Header + Filter + Grid — all handled by ProjectsGrid */}
        <ProjectsGrid
          projects={allProjects}
          categories={categories}
          totalCount={allProjects.length}
          domainCount={categories.length}
        />
      </main>

      <Footer />
    </div>
  );
}
