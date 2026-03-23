import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import PhilosophySection from '@/components/portfolio/PhilosophySection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import InsightHubSection from '@/components/portfolio/InsightHubSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grid bg-orbs relative">
      <div className="bg-radial-glow fixed inset-0 pointer-events-none" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PhilosophySection />
      <CertificationsSection />
      <ProjectsSection />
      <InsightHubSection />
      <Footer />
    </div>
  );
};

export default Index;
