'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';

export default function ProjectCaseStudyError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="max-w-md w-full glass-panel rounded-3xl p-8 sm:p-10 text-center border border-indigo-500/20 shadow-2xl relative overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-7 h-7" />
        </div>

        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Case Study Load Error
        </h1>

        <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          Could not load the requested project case study specifications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/30"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload Case Study</span>
          </button>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full glass-panel text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all border border-slate-200 dark:border-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
