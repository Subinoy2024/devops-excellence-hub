const companies = ['Kyndryl', 'HCL', 'KPMG', 'Atos', 'Microland', 'CGI', 'TCS', 'Capgemini'];

const highlights = [
  { label: 'IT Experience', value: '14 years' },
  { label: 'Cloud & DevOps', value: '6+ years' },
  { label: 'Certifications', value: '10+' },
  { label: 'Enterprise Clients', value: '8+' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Professional Summary</h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {highlights.map(h => (
            <div key={h.label} className="bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary font-heading">{h.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{h.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cloud DevOps Engineer with 14 years of IT experience and 6+ years delivering
              cloud infrastructure, CI/CD automation, and container platform operations across
              enterprise environments. I provision and manage cloud resources on Azure and AWS,
              engineer CI/CD pipelines, deploy containerized workloads on OpenShift and Kubernetes,
              and implement Infrastructure as Code using Terraform.
            </p>
            <p>
              My delivery spans end-to-end cloud lifecycle management — from environment provisioning
              and Git-based release workflows to observability, secret management, DevSecOps-aligned
              practices, and cost optimization. I have delivered infrastructure and platform solutions
              across organizations including Kyndryl, HCL, KPMG, Atos, and others — consistently
              focused on deployment velocity, platform reliability, and operational efficiency.
            </p>
            <p className="text-foreground/80">
              Currently expanding into MLOps and AI-driven automation to strengthen platform
              intelligence and delivery efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Enterprise Delivery</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {companies.map(company => (
                <span key={company} className="text-xs px-3 py-1.5 bg-card rounded-lg border border-border text-muted-foreground">
                  {company}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Core Delivery Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                'Cloud provisioning & lifecycle management',
                'CI/CD pipeline engineering',
                'Container platform operations',
                'Infrastructure as Code delivery',
                'DevSecOps & observability',
                'Cost optimization & right-sizing',
              ].map(area => (
                <li key={area} className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
