const responsibilities = [
  'Provision and manage cloud resources across Azure and AWS using Terraform and ARM templates',
  'Engineer and maintain CI/CD pipelines in Azure DevOps, Jenkins, and GitHub Actions for automated build, release, and deployment',
  'Deploy and manage containerized applications on Kubernetes and OpenShift environments',
  'Develop automation scripts in Python, Bash, and PowerShell for provisioning, configuration, and operational workflows',
  'Implement Infrastructure as Code practices for standardized, repeatable multi-environment deployments',
  'Manage Git-based workflows for source control, branching, code integration, and release management',
  'Enable observability through monitoring, logging, and alerting with Prometheus, Grafana, and Azure Monitor',
  'Implement secret management, access controls, and security-aligned practices using Azure Key Vault and IAM/RBAC',
  'Execute release activities including environment preparation, deployment validation, and controlled rollout',
  'Troubleshoot and resolve infrastructure, deployment, and platform issues across cloud and container environments',
  'Improve cloud cost efficiency through right-sizing, automation, and resource optimization',
  'Strengthen deployment velocity, release consistency, and platform reliability through engineering-driven delivery',
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Core Engineering Responsibilities</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Day-to-day engineering execution across cloud provisioning, CI/CD automation, container operations, and platform delivery.
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
