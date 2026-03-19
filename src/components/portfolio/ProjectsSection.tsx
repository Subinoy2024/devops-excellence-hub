import { getToolIcon } from '@/lib/toolIcons';

const featuredProjects = [
  {
    title: 'Azure Landing Zone with Terraform',
    summary: 'Designed and provisioned a standardized Azure landing zone using modular Terraform configurations, enabling consistent multi-environment deployments across dev, staging, and production.',
    problem: 'Teams were provisioning Azure resources manually, leading to configuration drift, inconsistent environments, and slow onboarding of new workloads.',
    role: 'Led the Terraform module design, implemented provider and backend configurations, built environment-specific variable structures, and integrated the workflow into CI/CD for automated plan and apply cycles.',
    highlights: [
      'Modular Terraform codebase with reusable resource modules',
      'Remote state management with Azure Storage backend',
      'Environment separation using workspaces and tfvars',
      'Automated plan/apply via Azure DevOps pipelines',
    ],
    value: 'Reduced environment provisioning time from days to under an hour and eliminated manual configuration drift across environments.',
    tools: ['Terraform', 'Azure', 'Azure DevOps', 'Git'],
  },
  {
    title: 'CI/CD Platform for Kubernetes Deployments',
    summary: 'Built an end-to-end CI/CD pipeline that builds, tests, containerizes, and deploys applications to Kubernetes clusters with automated rollback support.',
    problem: 'Development teams lacked a reliable, repeatable pipeline to ship containerized applications to Kubernetes without manual intervention or environment-specific workarounds.',
    role: 'Designed the pipeline architecture, configured multi-stage Jenkins pipelines, built Docker images, set up Helm-based Kubernetes deployments, and integrated webhook triggers from GitHub.',
    highlights: [
      'Multi-stage Jenkins pipeline: build → test → scan → deploy',
      'Docker image builds pushed to container registry',
      'Helm charts for Kubernetes deployments with environment separation',
      'Webhook-triggered automation from GitHub repositories',
    ],
    value: 'Enabled consistent, hands-off deployments across environments and reduced release cycle time significantly.',
    tools: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'GitHub'],
  },
  {
    title: 'Cloud Monitoring & Observability Stack',
    summary: 'Implemented centralized monitoring infrastructure using Prometheus and Grafana across cloud and on-prem environments, providing real-time visibility into system health and performance.',
    problem: 'Lack of unified monitoring made it difficult to detect issues proactively, leading to delayed incident response and blind spots across infrastructure.',
    role: 'Deployed Prometheus with custom exporters, built Grafana dashboards for key infrastructure metrics, and configured alert rules for CPU, memory, disk, and service health.',
    highlights: [
      'Prometheus metrics collection with Node Exporter and custom targets',
      'Grafana dashboards for compute, network, and application metrics',
      'Alert rules with notification routing for on-call teams',
      'Integrated with Azure-hosted and OpenStack environments',
    ],
    value: 'Provided full-stack observability, reduced mean time to detection, and improved incident response across infrastructure.',
    tools: ['Prometheus', 'Grafana', 'Linux', 'Azure'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Featured Projects</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Selected projects that demonstrate my approach to cloud infrastructure, automation, and platform engineering.
        </p>

        <div className="space-y-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground font-heading mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-1">My Role</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.role}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-1">Value Delivered</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.value}</p>
                  </div>
                </div>

                <div className="lg:w-72 shrink-0 mt-4 lg:mt-0">
                  <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">Key Implementation</p>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">Tools Used</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map(tool => {
                      const toolInfo = getToolIcon(tool);
                      const ToolIcon = toolInfo?.icon;
                      return (
                        <span key={tool} className="text-[11px] px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20 inline-flex items-center gap-1">
                          {ToolIcon && <ToolIcon size={12} className={toolInfo.color} />}
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
