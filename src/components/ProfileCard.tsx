import profileImage from "/assets/profile.png";
import { Github, Linkedin, Mail, Terminal, Cloud, Shield, Server } from 'lucide-react';

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
            Senior DevOps & Cloud Engineer
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
            <span className="pulse-glow w-2 h-2 bg-primary rounded-full" />
            <span>12+ Years IT | 6+ Cloud & DevOps</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: Cloud, label: 'Multi-Cloud', value: 'Azure / AWS' },
            { icon: Server, label: 'Containers', value: 'K8s / Docker' },
            { icon: Terminal, label: 'IaC', value: 'Terraform' },
            { icon: Shield, label: 'Security', value: 'IAM / RBAC' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-muted/30 rounded p-2 border border-primary/20">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Icon size={14} />
                <span className="text-xs">{label}</span>
              </div>
              <span className="text-xs text-muted-foreground">{value}</span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-2 font-mono">// CERTIFICATIONS</p>
          <div className="flex flex-wrap gap-2">
            {['AWS Certified', 'AZ-104', 'AZ-900'].map((cert) => (
              <span
                key={cert}
                className="text-xs px-2 py-1 bg-secondary/20 border border-secondary/50 rounded text-secondary-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/subinoydebnath"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted/30 rounded border border-primary/30 hover:border-primary hover:neon-glow-cyan transition-all"
          >
            <Github size={18} className="text-primary" />
          </a>
          <a
            href="https://linkedin.com/in/subinoydebnath"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted/30 rounded border border-primary/30 hover:border-primary hover:neon-glow-cyan transition-all"
          >
            <Linkedin size={18} className="text-primary" />
          </a>
          <a
            href="mailto:subinoy.debnath@email.com"
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
