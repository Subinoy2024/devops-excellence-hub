import { ExternalLink, FileText, FlaskConical } from 'lucide-react';
import { getToolIcon } from '@/lib/toolIcons';

const GITHUB_DOCS_BASE = 'https://github.com/Subinoy2024/insighthub-docs/blob/main';

const featuredProjects = [
  {
    title: 'Azure Landing Zone with Terraform',
    summary: 'Designed and provisioned a standardized Azure Landing Zone using modular Terraform architecture, enabling secure, scalable, and governed multi-environment deployments across development, staging, and production environments.',
    problem: 'Manual cloud provisioning resulted in inconsistent configurations, governance challenges, configuration drift, and slower onboarding of enterprise workloads.',
    role: 'Designed reusable Terraform modules, implemented remote state management, established landing zone standards, and integrated infrastructure provisioning with Azure DevOps CI/CD pipelines.',
    highlights: [
      'Modular Terraform architecture',
      'Azure Storage remote state management',
      'Multi-environment deployment strategy',
      'Azure DevOps pipeline automation',
    ],
    value: 'Improved cloud governance, reduced provisioning effort, accelerated environment deployment, and enabled repeatable infrastructure delivery across teams.',
    tools: ['Terraform', 'Azure', 'Azure DevOps', 'GitHub'],
  },
  {
    title: 'Enterprise Multi-Cloud Application Platform',
    summary: 'Designed and deployed a Terraform-based multi-cloud platform leveraging AWS services for frontend hosting and Azure services for backend workloads, database services, and deployment automation.',
    problem: 'Organizations required a standardized deployment model capable of operating across multiple cloud providers while maintaining consistency, governance, and operational efficiency.',
    role: 'Designed the cloud architecture, implemented modular Terraform frameworks, configured deployment automation, and established CI/CD workflows supporting multi-environment deployments.',
    highlights: [
      'Terraform module-based architecture',
      'AWS frontend and Azure backend deployment',
      'Azure SQL integration',
      'Automated CI/CD delivery pipeline',
    ],
    value: 'Enabled secure and repeatable multi-cloud deployments, reduced provisioning effort, improved deployment consistency, and accelerated application onboarding.',
    tools: ['Terraform', 'Azure', 'AWS', 'Azure DevOps', 'Docker'],
  },
  {
    title: 'End-to-End DevSecOps Pipeline for Infrastructure Deployment',
    summary: 'Designed and implemented secure Infrastructure as Code (IaC) delivery pipelines integrating Terraform automation, security validation, compliance enforcement, policy governance, and cost optimization throughout the deployment lifecycle.',
    problem: 'Infrastructure deployments lacked standardized security controls, compliance validation, and governance mechanisms, resulting in increased operational and security risks.',
    role: 'Designed and implemented Azure DevOps CI/CD pipelines for Terraform-based infrastructure provisioning. Integrated Terraform Validate, TFLint, tfsec, Terratest, OPA Policy-as-Code, and Infracost to automate infrastructure quality, security, compliance, and cost checks. Established approval-based deployment governance and automated validation workflows to ensure secure and consistent infrastructure delivery.',
    highlights: [
      'Terraform Plan & Apply Automation',
      'Security & Compliance Validation',
      'Policy-as-Code Enforcement (OPA)',
      'Automated Infrastructure Testing',
      'Cost Governance & Optimization',
      'Approval-Based Deployment Controls',
    ],
    value: 'Improved infrastructure security posture, standardized compliance validation, reduced deployment risks, optimized cloud costs, and enabled secure, scalable, and automated cloud provisioning.',
    tools: ['Terraform', 'Azure DevOps', 'tfsec', 'TFLint', 'Terratest', 'OPA', 'Infracost', 'Azure Policy'],
  },
  {
    title: 'Cloud-Native Platform Engineering & Kubernetes Operations',
    summary: 'Designed and implemented a scalable Kubernetes platform enabling automated infrastructure provisioning, application deployments, cluster governance, and platform operations across cloud environments.',
    problem: 'Infrastructure and application teams lacked a standardized platform for provisioning, deployment automation, governance, and operational management.',
    role: 'Built and managed Kubernetes platforms, automated infrastructure provisioning using Terraform, implemented CI/CD and GitOps workflows, integrated monitoring and security controls, and standardized deployment processes across multiple environments.',
    highlights: [
      'Kubernetes Platform Administration',
      'Terraform Infrastructure Automation',
      'CI/CD & GitOps Enablement',
      'Helm-Based Deployment Management',
      'Monitoring & Observability Integration',
      'Security & Governance Controls',
    ],
    value: 'Improved platform reliability, accelerated infrastructure and application delivery, reduced operational overhead, and enabled secure, scalable cloud-native operations.',
    tools: ['Terraform', 'Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'Azure DevOps', 'Harness', 'GitHub', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Cloud Monitoring & Observability Platform',
    summary: 'Designed and implemented a centralized monitoring and observability platform providing operational visibility across cloud infrastructure, Kubernetes workloads, and enterprise applications.',
    problem: 'Lack of centralized monitoring and alerting made it difficult to proactively identify issues, troubleshoot incidents, and maintain visibility across distributed environments.',
    role: 'Implemented monitoring integrations, configured metrics collection, designed operational dashboards, and established alerting mechanisms using Prometheus, Grafana, and cloud-native monitoring tools.',
    highlights: [
      'Centralized Metrics Collection',
      'Grafana Operational Dashboards',
      'Alerting & Notification Framework',
      'Kubernetes & Cloud Monitoring Integration',
    ],
    value: 'Improved operational visibility, accelerated incident detection, enabled proactive monitoring, and strengthened troubleshooting capabilities across cloud and platform environments.',
    tools: ['Prometheus', 'Grafana', 'Azure Monitor', 'Log Analytics', 'Kubernetes'],
  },
];

const researchProjects = [
  {
    title: 'CloudOps360 – AI-Enabled Cloud Operations Platform (M.Sc. Capstone Project)',
    summary: 'Designed and implemented a cloud-native operations platform leveraging Kubernetes, workflow automation, observability, and intelligent incident management to improve operational efficiency and platform reliability.',
    problem: 'Cloud and DevOps teams often rely on multiple disconnected tools for monitoring, troubleshooting, remediation, governance, and operational management, resulting in increased manual effort and slower incident resolution.',
    role: 'Designed the platform architecture, Kubernetes deployment model, automation workflows, observability integrations, operational dashboards, and cloud-native deployment strategy. Leveraged modern development approaches and workflow automation techniques to rapidly prototype and validate platform capabilities.',
    highlights: [
      'Kubernetes-based platform architecture',
      'Workflow orchestration and automation',
      'AI-powered RCA and operational insights',
      'Automated remediation workflows',
    ],
    value: 'Demonstrated how workflow automation, platform engineering, and cloud-native engineering practices can accelerate cloud platform delivery, improve operational efficiency, and reduce manual engineering effort.',
    objective: 'To evaluate how modern development approaches, intelligent workflow automation, and cloud-native engineering practices can accelerate cloud platform delivery, infrastructure automation, and operational efficiency while reducing manual engineering effort across Cloud & DevOps environments.',
    tools: ['Kubernetes', 'Terraform', 'n8n', 'Prometheus', 'Grafana', 'PostgreSQL'],
  },
  {
    title: 'AIPP – AI-Driven Pipeline Platform',
    summary: 'Built an AI-powered self-service platform that assists Development, DevOps, Cloud, and Platform Engineering teams by automatically generating CI/CD pipelines, Infrastructure as Code templates, Kubernetes manifests, security assessments, RCA reports, cost optimization recommendations, and operational documentation.',
    problem: 'Development and platform teams spent significant time creating deployment artifacts, infrastructure templates, troubleshooting issues, and maintaining technical documentation, leading to slower delivery and inconsistent engineering practices.',
    role: 'Designed and implemented an AI Agent and MCP-based workflow platform that performs repository discovery, technology stack analysis, and automated generation of DevOps, Cloud, and Platform Engineering artifacts based on user requests.',
    highlights: [
      'AI Agent & MCP Architecture',
      'Repository Discovery & Stack Analysis',
      'Automated CI/CD & IaC Generation',
      'Kubernetes & GitOps Artifact Generation',
      'Security, RCA & Cost Analysis',
      'Self-Service Engineering Workflows',
    ],
    value: 'Accelerated engineering productivity, reduced manual effort, standardized DevOps and cloud practices, improved onboarding, and enabled self-service engineering across development, DevOps, cloud, and platform teams.',
    tools: ['HTML', 'AI Agents', 'MCP', 'OpenAI', 'GitHub', 'GitLab', 'Terraform', 'Kubernetes', 'Argo CD', 'Workflow Orchestration'],
  },
];

const renderProject = (project: typeof featuredProjects[number] | typeof researchProjects[number], idx: number) => (
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

        {'objective' in project && (project as typeof researchProjects[number]).objective && (
          <div className="mb-4">
            <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-1">Research Objective</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{(project as typeof researchProjects[number]).objective}</p>
          </div>
        )}

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

        {(() => {
          const p = project as typeof featuredProjects[number];
          if (!p.docs || p.docs.length === 0) return null;
          return (
            <>
              <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-2 mt-4">Documentation</p>
              <div className="flex flex-col gap-1.5">
                {p.docs.map((doc, di) => (
                  <a
                    key={di}
                    href={`${GITHUB_DOCS_BASE}${doc.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-primary hover:underline"
                  >
                    <FileText size={10} />
                    {doc.label}
                    <span className="text-muted-foreground">({doc.type.toUpperCase()})</span>
                    <ExternalLink size={8} className="opacity-60" />
                  </a>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Featured Industry Projects</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Selected projects that demonstrate my approach to cloud infrastructure, automation, and platform engineering.
        </p>

        <div className="space-y-6">
          {featuredProjects.map((project, idx) => renderProject(project, idx))}
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-2 mb-2">
            <FlaskConical size={24} className="text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">M.Sc. Research & Innovation Projects</h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded mb-3" />
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
            Research and capstone projects from my M.Sc. in Cloud Architecture & Security, exploring AI-driven platform engineering and cloud operations automation.
          </p>

          <div className="space-y-6">
            {researchProjects.map((project, idx) => renderProject(project, idx + featuredProjects.length))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
