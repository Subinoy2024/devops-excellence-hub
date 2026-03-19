const responsibilities = [
  'Provision and manage cloud infrastructure on Azure and AWS using Terraform and ARM templates',
  'Design, build, and maintain CI/CD pipelines using Azure DevOps, Jenkins, and GitHub Actions',
  'Deploy and manage containerized applications on Kubernetes and OpenShift clusters',
  'Write automation scripts in Python, Bash, and PowerShell for infrastructure and operational tasks',
  'Implement Infrastructure as Code practices with Terraform for multi-environment deployments',
  'Configure and manage Git-based workflows for version control and collaborative development',
  'Set up monitoring and alerting using Prometheus, Grafana, and Azure Monitor',
  'Manage secrets, access controls, and security policies using Azure Key Vault and IAM/RBAC',
  'Support application release cycles including environment configuration, deployment, and validation',
  'Troubleshoot infrastructure and deployment issues across cloud and container environments',
  'Optimize cloud resource utilization and manage cost through right-sizing and automation',
  'Collaborate with development and operations teams to improve deployment velocity and platform reliability',
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">What I Do</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Day-to-day responsibilities and engineering contributions as a Cloud DevOps Engineer.
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
