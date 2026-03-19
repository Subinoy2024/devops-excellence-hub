import { Github, Linkedin, Mail, ChevronDown, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6">
          <div className="relative inline-block">
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.png`}
              alt="Subinoy Debnath"
              className="w-28 h-28 rounded-full border-2 border-primary/30 object-cover mx-auto"
            />
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-background">
              <span className="text-xs text-primary-foreground font-bold">✓</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mb-3">
          Subinoy Debnath
        </h1>
        <p className="text-xl sm:text-2xl text-primary font-heading font-semibold mb-4">
          Cloud DevOps Engineer
        </p>

        {/* Key differentiators - what recruiters scan for */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-muted border border-border">14+ Years in IT</span>
          <span className="px-3 py-1 rounded-full bg-muted border border-border">6+ Years Cloud & DevOps</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">Terraform · Azure DevOps · Azure · OpenShift</span>
        </div>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          I build and manage cloud infrastructure, automate deployments, and support container platforms
          across enterprise environments. Focused on reliability, automation, and operational efficiency.
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
            Get in Touch
          </a>
          <a href="#projects" className="px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors text-sm">
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <a href="https://github.com/Subinoy2024" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
            <Github size={18} className="text-muted-foreground" />
          </a>
          <a href="https://www.linkedin.com/in/subinoy-debnath-3ab534272" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
            <Linkedin size={18} className="text-muted-foreground" />
          </a>
          <a href="mailto:sdebnath8887@gmail.com" className="p-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
            <Mail size={18} className="text-muted-foreground" />
          </a>
        </div>

        <a href="#about" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
