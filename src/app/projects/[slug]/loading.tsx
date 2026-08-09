import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function ProjectCaseStudyLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 container mx-auto px-4 space-y-8 flex-1">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-48 bg-slate-300/40 dark:bg-slate-800/60 rounded-md animate-pulse" />
          <div className="h-8 w-32 bg-slate-300/40 dark:bg-slate-800/60 rounded-full animate-pulse" />
        </div>

        {/* Header Skeleton */}
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="h-6 w-28 bg-indigo-500/20 rounded-full animate-pulse" />
            <div className="h-6 w-36 bg-emerald-500/20 rounded-full animate-pulse" />
          </div>
          <div className="h-12 w-3/4 bg-slate-300/60 dark:bg-slate-800/80 rounded-2xl animate-pulse" />
          <div className="h-16 w-full max-w-3xl bg-slate-300/40 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
          <div className="flex gap-3 pt-2">
            <div className="h-10 w-36 bg-indigo-500/30 rounded-xl animate-pulse" />
            <div className="h-10 w-36 bg-slate-300/40 dark:bg-slate-800/60 rounded-xl animate-pulse" />
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="w-full aspect-[16/9] max-h-[520px] bg-slate-300/40 dark:bg-slate-800/60 rounded-3xl animate-pulse border border-slate-200/50 dark:border-slate-800/50" />

        {/* Specs Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="h-20 bg-slate-300/40 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
          <div className="h-20 bg-slate-300/40 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
          <div className="h-20 bg-slate-300/40 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
          <div className="h-20 bg-slate-300/40 dark:bg-slate-800/60 rounded-2xl animate-pulse" />
        </div>

        {/* Overview & Cards Skeleton */}
        <div className="h-36 w-full bg-slate-300/40 dark:bg-slate-800/60 rounded-3xl animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-36 bg-slate-300/40 dark:bg-slate-800/60 rounded-3xl animate-pulse" />
          <div className="h-36 bg-slate-300/40 dark:bg-slate-800/60 rounded-3xl animate-pulse" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

