import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      {/* Animated Brand Pulse Spinner */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-600 animate-spin" />
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-indigo-500/10 blur-xl animate-pulse" />
      </div>

      <div className="text-center space-y-2 max-w-sm">
        <h2 className="text-sm font-mono font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
          Loading Portfolio
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Preparing digital experiences & architectural projects...
        </p>
      </div>

      {/* Skeleton Wireframe Preview */}
      <div className="mt-12 w-full max-w-3xl space-y-6 opacity-30 pointer-events-none">
        <div className="h-12 bg-slate-300 dark:bg-slate-800 rounded-2xl w-3/4 animate-pulse mx-auto" />
        <div className="h-6 bg-slate-300 dark:bg-slate-800 rounded-xl w-1/2 animate-pulse mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          <div className="h-48 bg-slate-300 dark:bg-slate-800 rounded-2xl animate-pulse" />
          <div className="h-48 bg-slate-300 dark:bg-slate-800 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
