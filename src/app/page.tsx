import { Navbar }          from '@/components/ui/Navbar';
import { HeroSection }     from '@/components/sections/HeroSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection }   from '@/components/sections/SkillsSection';
import { ContactSection }  from '@/components/sections/ContactSection';
import { Footer }          from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{ color: 'var(--text-primary)' }}>
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
