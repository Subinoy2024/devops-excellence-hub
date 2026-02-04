import profileImage from "/assets/profile.png";
import { Github, Linkedin, Mail } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="relative">
      {/* Glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-30 animate-pulse" />
      
      <div className="relative bg-card border border-primary/50 rounded-lg p-6 neon-glow-cyan">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50" />
            <img
              src={profileImage}
              alt="Subinoy Debnath"
              className="relative w-32 h-32 rounded-full border-2 border-primary object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-primary-foreground font-bold">✓</span>
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground neon-text-cyan glitch">
            SUBINOY DEBNATH
          </h1>
          <p className="text-accent mt-1 font-mono text-sm">
            Cloud & DevOps Engineer
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
            <span className="pulse-glow w-2 h-2 bg-primary rounded-full" />
            <span>12+ Years IT | 6+ Cloud & DevOps</span>
          </div>
        </div>

        {/* About Me */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-2 font-mono">// ABOUT ME</p>
          <div className="text-xs text-muted-foreground leading-relaxed space-y-2 max-h-48 overflow-y-auto pr-2">
            <p>
              Results-driven Cloud & DevOps Engineer with a strong foundation in infrastructure engineering and a passion for building scalable, resilient, and secure cloud platforms.
            </p>
            <p>
              My career journey spans from managing bare-metal environments to designing fully automated, cloud-native delivery systems—driven by a commitment to solving real operational challenges.
            </p>
            <p>
              I specialize in Infrastructure as Code, CI/CD automation, and cloud security best practices, ensuring environments are consistent, auditable, and production-grade.
            </p>
            <p className="text-primary italic">
              Currently exploring AI-driven cloud operations (AIOps / GenAI) to enhance automation and enable smarter infrastructure management.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Subinoy2024/subinoy.debnath_dc_cloud.io.git"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted/30 rounded border border-primary/30 hover:border-primary hover:neon-glow-cyan transition-all"
          >
            <Github size={18} className="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/subinoy-debnath-3ab534272"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted/30 rounded border border-primary/30 hover:border-primary hover:neon-glow-cyan transition-all"
          >
            <Linkedin size={18} className="text-primary" />
          </a>
          <a
            href="mailto:sdebnath8887@gmail.com"
            className="p-2 bg-muted/30 rounded border border-primary/30 hover:border-primary hover:neon-glow-cyan transition-all"
          >
            <Mail size={18} className="text-primary" />
          </a>
        </div>

        {/* Tech Stack Ticker */}
        <div className="mt-6 overflow-hidden">
          <div className="flex animate-[slide-in_20s_linear_infinite] gap-4 text-xs text-muted-foreground font-mono">
            {['Azure', 'AWS', 'Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'Ansible', 'Prometheus', 'Grafana', 'ArgoCD'].map((tech) => (
              <span key={tech} className="whitespace-nowrap text-primary/60">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
