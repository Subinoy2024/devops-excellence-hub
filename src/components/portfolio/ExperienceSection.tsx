const responsibilities = [
  'Design, provision, and manage cloud resources across Azure, AWS, GCP, and OpenStack using Terraform-based Infrastructure as Code and cloud-native services',
  'Design and implement modular Terraform architectures supporting multi-region, multi-subscription, and multi-environment deployments with secure remote state management',
  'Implement Infrastructure as Code standards and deployment frameworks to enable automated, repeatable, and compliant infrastructure provisioning across cloud environments',
  'Engineer and maintain enterprise CI/CD pipelines using Azure DevOps, GitHub Actions, and Harness for automated infrastructure and application delivery',
  'Deploy and manage microservices-based applications on Kubernetes platforms (AKS, EKS, GKE) and OpenShift (ARO), ensuring scalability, reliability, and operational excellence',
  'Manage Git-based workflows including branching strategies, pull requests, version control, code integration, release management, and GitOps practices',
  'Configure and manage observability solutions using OpenTelemetry, Prometheus, Grafana, Azure Monitor, Application Insights, and CloudWatch for metrics, logs, distributed tracing, and proactive alerting',
  'Implement DevSecOps practices through security scanning, policy enforcement, secret management, RBAC/IAM controls, compliance validation, and secure release processes',
  'Execute release management activities including deployment validation, environment readiness, rollback planning, production approvals, and controlled rollouts',
  'Troubleshoot and resolve infrastructure, Kubernetes, platform, and CI/CD pipeline issues through RCA-driven analysis and automation-first remediation approaches',
  'Optimize cloud costs through infrastructure right-sizing, Infracost integration, governance controls, automation, and resource utilization analysis',
  
  'Drive platform reliability, deployment consistency, developer enablement, and accelerated delivery through reusable infrastructure, automation, and engineering best practices',
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Core Engineering Responsibilities</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Day-to-day engineering execution across multi-cloud infrastructure provisioning, Terraform-based Infrastructure as Code,
          CI/CD delivery, container platform operations, observability, security, and enterprise platform engineering.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {responsibilities.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span className="text-primary mt-0.5 shrink-0 text-sm">▸</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
