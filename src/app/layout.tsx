import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/providers';
import { CodeRainBackground } from '@/components/ui/CodeRainBackground';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rayhanshakib.dev'),
  title: 'Md. Abu Rayhan (Shakib) | Full Stack Developer',
  description: 'Portfolio of Md. Abu Rayhan (Shakib), Full Stack Developer specializing in Next.js, React.js, Node.js, Express, PostgreSQL, Prisma, and Tailwind CSS.',
  keywords: [
    'Md. Abu Rayhan', 'Shakib', 'Full Stack Developer',
    'Next.js', 'React.js', 'Node.js', 'PostgreSQL',
    'Prisma', 'Tailwind CSS', 'TypeScript', 'Dhaka Bangladesh',
    'rayhanshakib.dev',
  ],
  alternates: {
    canonical: 'https://rayhanshakib.dev',
  },
  openGraph: {
    title: 'Md. Abu Rayhan (Shakib) | Full Stack Developer',
    description: 'Portfolio of Md. Abu Rayhan (Shakib), Full Stack Developer specializing in Next.js, React.js, Node.js, Express, PostgreSQL, Prisma, and Tailwind CSS.',
    url: 'https://rayhanshakib.dev',
    siteName: 'rayhanshakib.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Abu Rayhan (Shakib) | Full Stack Developer',
    description: 'Portfolio of Md. Abu Rayhan (Shakib), Full Stack Developer specializing in Next.js, React.js, Node.js, Express, PostgreSQL, Prisma, and Tailwind CSS.',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="min-h-screen antialiased"
        style={{
          backgroundColor: 'var(--bg-base)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
      >
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <CodeRainBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
