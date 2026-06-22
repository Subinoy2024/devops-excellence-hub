import { BookOpen, Cloud, Container, FileText, Gauge, Lock, Lightbulb, Server, Workflow } from 'lucide-react';

const insights = [
  {
    icon: Cloud,
    title: 'Cloud Architecture Patterns',
    description: 'Design notes on resilient, scalable, and cost-optimized cloud foundations across Azure and AWS.',
    tags: ['Well-Architected', 'Cost Optimization', 'Resilience'],
  },
  {
    icon: Container,
    title: 'Kubernetes Platform Engineering',
    description: 'Production-grade cluster design, GitOps workflows, and landing-zone automation for AKS/EKS.',
    tags: ['AKS', 'GitOps', 'Landing Zone'],
  },
  {
    icon: Workflow,
    title: 'DevOps & CI/CD Automation',
    description: 'Pipeline engineering, trunk-based development, and automated quality gates for fast feedback.',
    tags: ['CI/CD', 'Automation', 'Testing'],
  },
  {
    icon: Gauge,
    title: 'SRE & Observability',
    description: 'SLI/SLO design, incident response runbooks, and telemetry strategies for reliable systems.',
    tags: ['Observability', 'SLOs', 'Incident Response'],
  },
  {
    icon: Lock,
    title: 'Cloud Security & Compliance',
    description: 'Zero-trust controls, policy-as-code, and compliance automation for regulated environments.',
    tags: ['Zero Trust', 'Policy as Code', 'Compliance'],
  },
  {
    icon: Server,
    title: 'FinOps & Cost Governance',
    description: 'Rightsizing tactics, tagging discipline, and chargeback models to keep cloud spend predictable.',
    tags: ['FinOps', 'Tagging', 'Governance'],
  },
];

const InsightHubSection = () => {
  return (
    <section id="insighthub" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Lightbulb size={20} className="text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Insight Hub
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={index}
                className="group p-5 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold font-heading leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      <BookOpen size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 p-4 rounded-xl border border-dashed border-border/80 bg-card/30 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <FileText size={16} />
            <span className="text-xs font-medium">
              Detailed articles and deep-dive notes are being added. Check back for updates.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightHubSection;
