import { Cloud, Container, GitBranch, Code, Activity, Shield, DollarSign, Cpu, Terminal } from 'lucide-react';
import { getToolIcon } from '@/lib/toolIcons';

const skillGroups = [
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    items: ['Azure', 'AWS', 'GCP', 'OpenStack'],
  },
  {
    category: 'Infrastructure as Code',
    icon: Code,
    items: ['Terraform', 'ARM Templates', 'CloudFormation'],
  },
  {
    category: 'CI/CD, GitOps & Automation',
    icon: GitBranch,
    items: ['Azure DevOps', 'GitHub Actions', 'Harness', 'ArgoCD', 'Helm', 'Ansible', 'Azure CLI', 'AWS CLI'],
  },
  {
    category: 'Containers & Platform Engineering',
    icon: Container,
    items: ['Docker', 'Kubernetes', 'AKS', 'EKS', 'GKE', 'OpenShift (ARO)'],
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'Azure Repos'],
  },
  {
    category: 'Monitoring & Observability',
    icon: Activity,
    items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Azure Monitor', 'Application Insights', 'Log Analytics', 'CloudWatch', 'ELK Stack'],
  },
  {
    category: 'Security & DevSecOps',
    icon: Shield,
    items: ['Azure Key Vault', 'AWS Secrets Manager', 'IAM / RBAC', 'Azure Policy', 'SonarQube', 'Trivy', 'OWASP ZAP', 'OPA Gatekeeper', 'Kyverno', 'Snyk'],
  },
  {
    category: 'Cloud Cost Optimization',
    icon: DollarSign,
    items: ['Infracost', 'Azure Cost Management', 'Resource Right-Sizing', 'Reserved Instances', 'Governance & Cost Controls'],
  },
  {
    category: 'Cloud Automation & Intelligent Workflows',
    icon: Cpu,
    items: ['Workflow Automation', 'Intelligent Operational Workflows', 'Automated RCA Workflows', 'Incident Response Automation', 'AI-Assisted Cloud Operations'],
  },
  {
    category: 'Development & AI Productivity Tools',
    icon: Terminal,
    items: ['VS Code', 'Cursor', 'GitHub Copilot', 'Jupyter Notebook', 'Antigravity'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Technology Stack</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Core technologies and platforms aligned to cloud infrastructure provisioning, platform engineering, CI/CD automation, container operations, security, observability, and cloud optimization.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="bg-card border border-border rounded-xl p-5 card-hover animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => {
                    const toolInfo = getToolIcon(item);
                    const ToolIcon = toolInfo?.icon;
                    return (
                      <span key={item} className="text-xs px-2.5 py-1 bg-muted rounded-md text-muted-foreground inline-flex items-center gap-1.5">
                        {ToolIcon && <ToolIcon size={14} className={toolInfo.color} />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
