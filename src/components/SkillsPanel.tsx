import { Cloud, Container, GitBranch, Shield, Settings, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    items: ['Azure (AKS, VMs, Storage)', 'AWS (EKS, EC2, S3, IAM)', 'OpenStack'],
    color: 'primary'
  },
  {
    category: 'Infrastructure as Code',
    icon: Settings,
    items: ['Terraform', 'ARM Templates', 'CloudFormation'],
    color: 'secondary'
  },
  {
    category: 'Container & Orchestration',
    icon: Container,
    items: ['Kubernetes (AKS/EKS)', 'Docker', 'Helm', 'OpenShift'],
    color: 'accent'
  },
  {
    category: 'CI/CD & Automation',
    icon: GitBranch,
    items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'ArgoCD', 'Git', 'GitHub', 'Python', 'Shell Scripting'],
    color: 'primary'
  },
  {
    category: 'Security & DevSecOps',
    icon: Shield,
    items: ['Azure Key Vault', 'AWS Secrets Manager', 'IAM Policies', 'Azure Policy', 'Trivy', 'DevSecOps Practices'],
    color: 'secondary'
  },
  {
    category: 'AI / ML Platforms',
    icon: Cpu,
    items: ['OpenShift AI', 'MLOps', 'AI/ML Model Deployment', 'Containerized Model Serving'],
    color: 'primary'
  },
];

const SkillsPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, idx) => {
        const Icon = skill.icon;
        const colorClass = skill.color === 'primary' 
          ? 'border-primary/50 hover:border-primary' 
          : skill.color === 'secondary'
          ? 'border-secondary/50 hover:border-secondary'
          : 'border-accent/50 hover:border-accent';
        
        const glowClass = skill.color === 'primary'
          ? 'hover:neon-glow-cyan'
          : skill.color === 'secondary'
          ? 'hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]'
          : 'hover:neon-glow-pink';

        return (
          <div
            key={skill.category}
            className={`bg-card/50 border ${colorClass} ${glowClass} rounded-lg p-4 transition-all duration-300 animate-fade-in`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon 
                size={18} 
                className={
                  skill.color === 'primary' 
                    ? 'text-primary' 
                    : skill.color === 'secondary' 
                    ? 'text-secondary' 
                    : 'text-accent'
                } 
              />
              <h3 className="text-sm font-semibold text-foreground font-mono">
                {skill.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-1 bg-muted/50 rounded text-muted-foreground border border-border/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsPanel;