import { Cloud, Shield, GitBranch, Activity, Server, Terminal, Database, Lock } from 'lucide-react';

const knowledgeAreas = [
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    items: [
      'Azure (AKS, VMs, Storage, Networking, Key Vault)',
      'AWS (EKS, EC2, S3, IAM, Lambda, CloudFormation)',
      'Multi-cloud architecture & migration strategies',
      'Cost optimization & FinOps practices'
    ],
    color: 'primary'
  },
  {
    category: 'Infrastructure as Code',
    icon: Terminal,
    items: [
      'Terraform (modules, state management, workspaces)',
      'ARM Templates & Azure Bicep',
      'AWS CloudFormation',
      'Pulumi & CDK fundamentals'
    ],
    color: 'secondary'
  },
  {
    category: 'Container Orchestration',
    icon: Server,
    items: [
      'Kubernetes (AKS, EKS, cluster management)',
      'Docker (multi-stage builds, optimization)',
      'Helm charts & Kustomize overlays',
      'Container security & image scanning'
    ],
    color: 'accent'
  },
  {
    category: 'CI/CD & Automation',
    icon: GitBranch,
    items: [
      'Azure DevOps Pipelines (YAML, Classic)',
      'Jenkins (pipeline as code, shared libraries)',
      'GitHub Actions workflows',
      'ArgoCD & GitOps practices'
    ],
    color: 'primary'
  },
  {
    category: 'Configuration Management',
    icon: Database,
    items: [
      'Ansible (playbooks, roles, inventory)',
      'PowerShell DSC & scripting',
      'Bash/Shell automation',
      'Python for DevOps automation'
    ],
    color: 'secondary'
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    items: [
      'Azure Policy & Sentinel',
      'IAM, RBAC, least-privilege access',
      'Secrets management (Key Vault, HashiCorp Vault)',
      'Compliance frameworks (SOC2, ISO27001)'
    ],
    color: 'accent'
  },
  {
    category: 'Monitoring & Observability',
    icon: Activity,
    items: [
      'Prometheus & Grafana dashboards',
      'Azure Monitor & Log Analytics',
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
      'Alerting & incident response'
    ],
    color: 'primary'
  },
  {
    category: 'Emerging Technologies',
    icon: Lock,
    items: [
      'AIOps & GenAI for cloud operations',
      'Platform Engineering principles',
      'Site Reliability Engineering (SRE)',
      'FinOps & cloud cost management'
    ],
    color: 'secondary'
  }
];

const KnowledgePanel = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-mono neon-text-cyan mb-2">
          // KNOWLEDGE BASE
        </h2>
        <p className="text-sm text-muted-foreground font-mono">
          Deep expertise across cloud-native technologies and DevOps practices
        </p>
      </div>

      {/* Knowledge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {knowledgeAreas.map((area, idx) => {
          const Icon = area.icon;
          const borderColor = area.color === 'primary' 
            ? 'border-primary/50 hover:border-primary' 
            : area.color === 'secondary'
            ? 'border-secondary/50 hover:border-secondary'
            : 'border-accent/50 hover:border-accent';
          
          const glowClass = area.color === 'primary'
            ? 'hover:neon-glow-cyan'
            : area.color === 'secondary'
            ? 'hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]'
            : 'hover:neon-glow-pink';

          const iconColor = area.color === 'primary' 
            ? 'text-primary' 
            : area.color === 'secondary' 
            ? 'text-secondary' 
            : 'text-accent';

          return (
            <div
              key={area.category}
              className={`bg-card/50 backdrop-blur-sm border ${borderColor} ${glowClass} rounded-lg p-4 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon size={18} className={iconColor} />
                <h3 className="text-sm font-semibold text-foreground font-mono">
                  {area.category}
                </h3>
              </div>
              <div className="space-y-2">
                {area.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-2 text-xs">
                    <span className={`${iconColor} mt-0.5`}>▸</span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Certifications Section */}
      <div className="mt-8 bg-card/30 backdrop-blur-sm border border-primary/30 rounded-lg p-6">
        <h3 className="text-lg font-bold font-mono neon-text-cyan mb-4 text-center">
          // CERTIFICATIONS & CONTINUOUS LEARNING
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'AWS Certified',
            'Microsoft Azure AZ-104',
            'Microsoft Azure AZ-900',
            'Cloud Architecture Bootcamp',
            'DevOps Foundation',
            'Kubernetes Fundamentals'
          ].map((cert) => (
            <span
              key={cert}
              className="text-sm px-4 py-2 bg-primary/10 border border-primary/50 rounded-lg text-primary font-mono"
            >
              {cert}
            </span>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
          Currently exploring: AIOps / GenAI for Cloud Operations • Platform Engineering • SRE Practices
        </p>
      </div>
    </div>
  );
};

export default KnowledgePanel;
