import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

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
        <p className="text-xl sm:text-2xl text-primary font-heading font-semibold mb-3">
          Cloud DevOps Engineer
        </p>

        {/* Experience line */}
        <p className="text-sm text-muted-foreground mb-4">
          14+ years overall IT experience &nbsp;|&nbsp; 6+ years in Cloud & DevOps
        </p>

        {/* Tech stack line */}
        <p className="text-sm text-primary/80 font-medium tracking-wide mb-6">
          Terraform • Azure • AWS • Kubernetes • CI/CD
        </p>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          14+ years of overall IT experience with 6+ years focused on cloud infrastructure, 
          DevOps automation, container platforms, and deployment engineering.
        </p>

        {/* Top CTA row — Resume, GitHub, LinkedIn, Contact */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <a
            href={`${import.meta.env.BASE_URL}README.md`}
            download="Subinoy_Debnath_Resume.md"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
          >
            <Download size={15} />
            Resume
          </a>
          <a
            href="https://github.com/Subinoy2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors text-sm"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/subinoy-debnath-3ab534272"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors text-sm"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors text-sm"
          >
            <Mail size={15} />
            Contact
          </a>
        </div>

        {/* Why hire me strip */}
        <div className="bg-card/60 border border-border rounded-xl px-6 py-4 max-w-2xl mx-auto mb-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Why hire me?</span>{' '}
            Cloud DevOps Engineer with 14+ years in IT and 6+ years focused on infrastructure automation, 
            CI/CD, cloud operations, and container platforms.
          </p>
        </div>

        <a href="#projects" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
