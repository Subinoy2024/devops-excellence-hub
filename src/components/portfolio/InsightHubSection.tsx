import { Calendar, ArrowRight, Lightbulb, ExternalLink, FileText } from 'lucide-react';

const GITHUB_DOCS_BASE = 'https://github.com/Subinoy2024/insighthub-docs/blob/main';

const articles = [
  {
    title: 'Terraform Multi-Environment Strategy for Enterprise Azure Deployments',
    summary: 'A practical approach to structuring Terraform workspaces and modules for consistent, repeatable multi-environment cloud provisioning.',
    category: 'Infrastructure as Code',
    date: '2025-03-10',
    docPath: '/iac/terraform-multi-env-strategy.md',
    docType: 'md' as const,
  },
  {
    title: 'Building Production-Grade CI/CD with Azure DevOps and OpenShift',
    summary: 'End-to-end pipeline design covering Git workflows, automated testing, container builds, and controlled rollouts to OpenShift clusters.',
    category: 'CI/CD & Automation',
    date: '2025-02-22',
    docPath: '/cicd/azure-devops-openshift-pipeline.pdf',
    docType: 'pdf' as const,
  },
  {
    title: 'Cost Optimization Practices Across Azure and AWS Workloads',
    summary: 'Practical strategies for right-sizing, automation-driven savings, and resource tagging to reduce cloud spend without sacrificing reliability.',
    category: 'Cloud Operations',
    date: '2025-01-15',
    docPath: '/cloud-ops/cost-optimization-practices.md',
    docType: 'md' as const,
  },
  {
    title: 'Observability Stack: Prometheus, Grafana & Azure Monitor in Practice',
    summary: 'Setting up a unified monitoring and alerting framework across hybrid cloud and containerized environments.',
    category: 'Monitoring',
    date: '2024-12-08',
    docPath: '/monitoring/observability-stack-setup.pdf',
    docType: 'pdf' as const,
  },
];

const categoryColors: Record<string, string> = {
  'Infrastructure as Code': 'bg-primary/15 text-primary',
  'CI/CD & Automation': 'bg-secondary/15 text-secondary',
  'Cloud Operations': 'bg-accent/15 text-accent-foreground',
  'Monitoring': 'bg-muted text-muted-foreground',
};

const docTypeLabel: Record<string, string> = {
  md: 'Markdown',
  pdf: 'PDF',
  img: 'Diagram',
};

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
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
            Engineering Insights & Notes
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Practical information on cloud infrastructure, DevOps delivery, and platform engineering.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {articles.map((article, i) => (
            <a
              key={i}
              href={`${GITHUB_DOCS_BASE}${article.docPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors block"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                    categoryColors[article.category] || 'bg-muted text-muted-foreground'
                  }`}
                >
                  {article.category}
                </span>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <Calendar size={10} />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1 ml-auto">
                  <FileText size={10} />
                  {docTypeLabel[article.docType] || article.docType.toUpperCase()}
                </span>
              </div>

              <h3 className="text-sm font-semibold font-heading text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {article.summary}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[11px] text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View on GitHub <ExternalLink size={10} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightHubSection;
