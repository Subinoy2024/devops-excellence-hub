import { getToolIcon } from '@/lib/toolIcons';

const featuredProjects = [
  {
    title: 'Multi-Cloud Infrastructure Automation with Terraform',
    summary: 'Built modular Terraform configurations to provision and manage infrastructure across Azure, AWS, and OpenStack with consistent, repeatable deployments.',
    problem: 'Manual infrastructure provisioning across multiple cloud providers led to configuration drift and slow environment setup.',
    role: 'Designed the Terraform module structure, implemented provider configurations, and automated environment provisioning for dev, staging, and production.',
    highlights: [
      'Modular Terraform codebase supporting Azure, AWS, and OpenStack',
      'Environment-specific variable management with tfvars',
      'State management with remote backends',
      'Integrated with CI/CD for automated plan and apply workflows',
    ],
    tools: ['Terraform', 'Azure', 'AWS', 'OpenStack', 'Git'],
  },
  {
    title: 'CI/CD Pipeline for Kubernetes Deployment',
    summary: 'End-to-end CI/CD pipeline that builds, tests, containerizes, and deploys applications to Kubernetes clusters with automated rollback support.',
    problem: 'Development teams needed a reliable pipeline to deploy containerized applications to Kubernetes without manual intervention.',
    role: 'Designed the pipeline architecture, configured Jenkins stages, built Docker images, and set up Kubernetes deployment manifests with Helm.',
    highlights: [
      'Jenkins pipeline with build, test, scan, and deploy stages',
      'Docker image builds pushed to container registry',
      'Helm-based Kubernetes deployments with environment separation',
      'Webhook-triggered automation from GitHub',
    ],
    tools: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'GitHub'],
  },
  {
    title: 'Cloud Monitoring & Observability Stack',
    summary: 'Implemented monitoring infrastructure using Prometheus and Grafana for cloud and on-prem environments, providing visibility into system health and performance.',
    problem: 'Lack of centralized monitoring across infrastructure made it difficult to detect and respond to issues proactively.',
    role: 'Deployed Prometheus with custom exporters, built Grafana dashboards, and configured alerting rules for key infrastructure metrics.',
    highlights: [
      'Prometheus metrics collection with Node Exporter and custom targets',
      'Grafana dashboards for compute, network, and application metrics',
      'Alert rules for CPU, memory, disk, and service health',
      'Integrated with existing OpenStack and cloud-hosted environments',
    ],
    tools: ['Prometheus', 'Grafana', 'Linux', 'OpenStack'],
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
