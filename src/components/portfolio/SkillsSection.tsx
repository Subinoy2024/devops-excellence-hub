import { Cloud, Container, GitBranch, Settings, Activity, Code } from 'lucide-react';
import { getToolIcon } from '@/lib/toolIcons';

const skillGroups = [
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    items: ['Azure', 'AWS', 'OpenStack'],
  },
  {
    category: 'Infrastructure as Code',
    icon: Settings,
    items: ['Terraform', 'ARM Templates', 'AWS CloudFormation'],
  },
  {
    category: 'Containers & Orchestration',
    icon: Container,
    items: ['Docker', 'Kubernetes', 'Helm', 'OpenShift Admin'],
  },
  {
    category: 'CI/CD & Automation',
    icon: GitBranch,
    items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'Git', 'GitHub'],
  },
  {
    category: 'Scripting & Development',
    icon: Code,
    items: ['Python', 'Bash', 'PowerShell', 'YAML'],
  },
  {
    category: 'Monitoring & Observability',
    icon: Activity,
    items: ['Prometheus', 'Grafana', 'Azure Monitor', 'ELK Stack'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Technical Skills</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Core technologies I use regularly for cloud infrastructure, deployment automation, and platform operations.
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
