'use client';


import { Github, Linkedin, Mail, Zap } from 'lucide-react';
import { resumeData } from '@/data/resume';

const LINKS = [
  { Icon: Github, href: resumeData.socials.github, label: 'GitHub', color: '#9B5CF6' },
  { Icon: Linkedin, href: resumeData.socials.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { Icon: Mail, href: `mailto:${resumeData.socials.email}`, label: 'Email', color: '#06B6D4' },
];

const NAV_LINKS = [
  { label: 'About', href: '/#hero' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export function Footer() {
  return (
    <footer
      className="pt-12 pb-8 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                  boxShadow: '0 0 16px rgba(124,58,237,0.4)',
                }}
              >
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="font-mono text-base font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                shakib.dev
              </span>
            </div>
            <p
              className="text-xs max-w-xs leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              Full Stack Developer crafting high-performance, scalable web applications.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-violet2)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {LINKS.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = `${color}60`;
                  el.style.color = color;
                  el.style.background = `${color}12`;
                  el.style.boxShadow = `0 0 16px ${color}30`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'var(--border-subtle)';
                  el.style.color = 'var(--text-muted)';
                  el.style.background = 'rgba(124,58,237,0.08)';
                  el.style.boxShadow = 'none';
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-mono"
          style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
        >
          <div className="flex items-center gap-3">
            <span>
              © {new Date().getFullYear()}{' '}
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                {resumeData.name}
              </span>
              . All rights reserved.
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md font-mono text-[10px]"
              style={{
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.25)',
                color: 'var(--accent-violet2)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              v1.1.0
            </span>
          </div>

          <span className="flex items-center gap-1.5">
            Built with{' '}
            <span style={{ color: 'var(--accent-violet2)' }}>Next.js</span>,{' '}
            <span style={{ color: 'var(--accent-cyan)' }}>Tailwind</span> &{' '}
            <span style={{ color: '#EC4899' }}>Framer Motion</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
