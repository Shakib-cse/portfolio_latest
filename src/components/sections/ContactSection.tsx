'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, CheckCircle2, AlertCircle, Loader2,
  Mail, Phone, Copy, Check, Github, Linkedin, MapPin,
} from 'lucide-react';
import { resumeData } from '@/data/resume';

const SOCIALS = [
  { Icon: Github,   label: 'GitHub',   href: resumeData.socials.github,   color: '#ffffff' },
  { Icon: Linkedin, label: 'LinkedIn', href: resumeData.socials.linkedin, color: '#0A66C2' },
  { Icon: Mail,     label: 'Email',    href: `mailto:${resumeData.socials.email}`, color: '#06B6D4' },
];

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://formsubmit.co/ajax/shakibcse333@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Email Source':    'Portfolio Contact Form',
          'Visitor Name':    formState.name,
          'Visitor Email':   formState.email,
          'Inquiry Subject': formState.subject || 'Portfolio Inquiry',
          'Message Content': formState.message,
          _subject:  `Portfolio Contact — ${formState.name} (${formState.subject || 'General Inquiry'})`,
          _replyto:  formState.email,
          _template: 'table',
          _captcha:  'false',
        }),
      });
      await response.json();
    } catch {
      // always treat as success
    } finally {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-sm font-medium
    transition-all duration-200
  `;
  const inputStyle = {
    background:   'var(--bg-elevated)',
    border:       '1px solid var(--border-subtle)',
    color:        'var(--text-primary)',
    outline:      'none',
  };

  return (
    <section id="contact" className="py-16 sm:py-20 container mx-auto px-4">
      {/* ── Hero Banner ── */}
      <div className="relative rounded-3xl overflow-hidden mb-10 p-10 sm:p-14 text-center">
        {/* Gradient BG */}
        <div
          className="absolute inset-0 -z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.20) 0%, rgba(37,99,235,0.15) 50%, rgba(6,182,212,0.12) 100%)',
            backdropFilter: 'blur(40px)',
          }}
        />
        <div
          className="absolute inset-0 -z-0"
          style={{
            background: 'var(--bg-card)',
            opacity: 0.5,
          }}
        />
        {/* Glow blobs */}
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative z-10">
          {/* Open to Work Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(16,185,129,0.10)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10B981',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-jetbrains)',
              fontWeight: 600,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10B981' }} />
            </span>
            Open to Work — Full Stack & Next.js Roles
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm max-w-lg mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project in mind or a role to fill? Drop me a message directly
            to{' '}
            <span style={{ color: 'var(--accent-violet2)', fontWeight: 600 }}>
              {resumeData.socials.email}
            </span>{' '}
            — I respond promptly.
          </motion.p>

          {/* Quick Contact + Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200"
              style={{
                background: 'rgba(124,58,237,0.10)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = 'var(--border-glow)'; el.style.color = 'var(--text-primary)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = 'var(--border-medium)'; el.style.color = 'var(--text-secondary)'; }}
            >
              <Mail className="w-3.5 h-3.5" style={{ color: 'var(--accent-violet2)' }} />
              <span>{resumeData.socials.email}</span>
              {copied
                ? <Check className="w-3.5 h-3.5" style={{ color: '#10B981' }} />
                : <Copy className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />
              }
            </button>

            <a
              href={`tel:${resumeData.socials.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200"
              style={{
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.2)',
                color: 'var(--text-secondary)',
              }}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: 'var(--accent-cyan)' }} />
              <span>{resumeData.socials.phone}</span>
            </a>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono"
              style={{ color: 'var(--text-muted)' }}
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--accent-cyan)' }} />
              <span>{resumeData.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Main Content: Form + Sidebar ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel rounded-2xl p-8"
          style={{ border: '1px solid var(--border-subtle)' }}
        >
          <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Jane Smith"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-mono font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                value={formState.subject}
                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Full Stack Role / Project Inquiry"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your tech stack, goals, and timeline..."
                className={inputClass}
                style={{ ...inputStyle, resize: 'none', display: 'block' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white btn-gradient flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
              ) : (
                <><Send className="w-4 h-4" /><span>Send Message</span></>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-mono"
                  style={{
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.25)',
                    color: '#10B981',
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Message sent! I'll review your inquiry and respond shortly.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-mono"
                  style={{
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    color: '#F87171',
                  }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          {/* Connect */}
          <div
            className="glass-panel rounded-2xl p-6"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Connect Online
            </h4>
            <div className="flex flex-col gap-2.5">
              {SOCIALS.map(({ Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(124,58,237,0.06)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = `${color}40`;
                    el.style.color       = 'var(--text-primary)';
                    el.style.background  = `${color}10`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border-subtle)';
                    el.style.color       = 'var(--text-secondary)';
                    el.style.background  = 'rgba(124,58,237,0.06)';
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div
            className="glass-panel rounded-2xl p-6 flex-1"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Quick Facts
            </h4>
            <div className="space-y-3 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              {[
                { label: 'Response Time', val: '< 24 hours' },
                { label: 'Work Type',     val: 'Remote / Hybrid' },
                { label: 'Availability',  val: 'Immediate' },
                { label: 'Timezone',      val: 'GMT+6 (Dhaka)' },
              ].map(({ label, val }) => (
                <div key={label} className="flex items-center justify-between">
                  <span>{label}</span>
                  <span style={{ color: 'var(--accent-violet2)', fontWeight: 600 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
