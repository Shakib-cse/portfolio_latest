import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function ProjectCaseStudyLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-16 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        {/* Back Button Skeleton */}
        <div className="h-9 w-44 bg-slate-300/60 dark:bg-slate-800/60 rounded-full animate-pulse" />

        {/* Header Skeleton */}
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="h-6 w-28 bg-indigo-500/20 rounded-full animate-pulse" />
            <div className="h-6 w-36 bg-emerald-500/20 rounded-full animate-pulse" />
          </div>
          <div className="h-12 w-3/4 bg-slate-300/80 dark:bg-slate-800/80 rounded-2xl animate-pulse" />
          <div className="h-16 w-full bg-slate-300/60 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
          <div className="flex gap-2 pt-2">
            <div className="h-7 w-20 bg-slate-300/70 dark:bg-slate-800/70 rounded-lg animate-pulse" />
            <div className="h-7 w-20 bg-slate-300/70 dark:bg-slate-800/70 rounded-lg animate-pulse" />
            <div className="h-7 w-20 bg-slate-300/70 dark:bg-slate-800/70 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="h-96 w-full bg-slate-300/60 dark:bg-slate-800/60 rounded-2xl animate-pulse border border-slate-200/50 dark:border-slate-800/50" />

        {/* Overview & Cards Skeleton */}
        <div className="h-44 w-full bg-slate-300/60 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-40 bg-slate-300/60 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
          <div className="h-40 bg-slate-300/60 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
