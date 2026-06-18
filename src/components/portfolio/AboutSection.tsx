import kpmgLogo from '@/assets/logos/kpmg.png';
import hclLogo from '@/assets/logos/hcl.png';
import atosLogo from '@/assets/logos/atos.png';
import tcsLogo from '@/assets/logos/tcs.png';

const companies = [
  { name: 'Kyndryl', logo: '', domain: 'kyndryl.com' },
  { name: 'HCL', logo: hclLogo, domain: '' },
  { name: 'KPMG', logo: kpmgLogo, domain: '' },
  { name: 'Atos', logo: atosLogo, domain: '' },
  { name: 'Microland', logo: '', domain: 'microland.com' },
  { name: 'Micropoint', logo: '', domain: '' },
  { name: 'CGI', logo: '', domain: 'cgi.com' },
  { name: 'TCS', logo: tcsLogo, domain: '' },
  { name: 'Capgemini', logo: '', domain: 'capgemini.com' },
];

const highlights = [
  { label: 'IT Experience', value: '13+ years' },
  { label: 'Cloud & DevOps', value: '6+ years' },
  { label: 'Certifications', value: '10+' },
  { label: 'Global Clients', value: '30+' },
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
              DevOps & Cloud Engineer with 13+ years of IT experience and 6+ years specializing in cloud-native platforms, Infrastructure as Code, CI/CD automation, and container platform engineering across enterprise environments.
            </p>
            <p>
              Experienced in provisioning and managing cloud resources across Azure, AWS, GCP, and OpenStack, designing and implementing enterprise CI/CD pipelines, and deploying microservices-based applications on Kubernetes platforms (AKS, EKS, GKE) and OpenShift (ARO). Proven expertise in delivering scalable, secure, and highly available cloud solutions through automation, standardization, and engineering best practices.
            </p>
            <p>
              Strong background in Terraform-based Infrastructure as Code, including modular architecture design, multi-region and multi-subscription deployments, remote state management, landing zones, governance controls, and reusable infrastructure patterns across multi-cloud environments. Contributed to large-scale cloud transformation and platform engineering initiatives for organizations including Kyndryl, HCL, KPMG, Atos, and others, driving operational efficiency, platform reliability, and deployment consistency.
            </p>
            <p>
              Experienced in Kubernetes platform operations, GitOps practices, DevSecOps integration, observability, and release automation using Azure DevOps, GitHub Actions, Harness, ArgoCD, Prometheus, Grafana, and cloud-native services.
            </p>
            <p className="text-foreground/80">
              Actively exploring AI-driven Cloud & DevOps automation through n8n workflow orchestration, AI-assisted operational workflows, intelligent monitoring, automated RCA processes, and cloud automation frameworks to improve operational efficiency, platform visibility, and delivery outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Enterprise Delivery</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {companies.map(company => {
                const imgSrc = company.logo
                  ? company.logo
                  : company.domain
                    ? `https://www.google.com/s2/favicons?domain=${company.domain}&sz=32`
                    : '';
                return (
                  <span key={company.name} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 bg-card rounded-lg border border-border text-muted-foreground">
                    {imgSrc && (
                      <img src={imgSrc} alt={company.name} className="h-4 w-4 object-contain" loading="lazy" />
                    )}
                    {company.name}
                  </span>
                );
              })}
            </div>

            <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Core Delivery Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-8">
              {[
                'Terraform & Infrastructure Automation',
                'Multi-Cloud Platform Engineering',
                'CI/CD & GitOps Delivery',
                'Kubernetes & Container Operations',
                'DevSecOps & Observability',
                'Cloud Cost Optimization',
                'AI-Driven Workflow Automation',
              ].map(area => (
                <li key={area} className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  {area}
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground">M.Sc. Cloud Architecture & Security</p>
                <p className="text-xs text-primary">REVA University | 2024–2026 (Pursuing)</p>
                <p className="text-xs text-muted-foreground mt-1">Focused on Cloud Architecture, Cloud Migration, Kubernetes, Cloud Security, and AI.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Bachelor of Computer Applications (BCA)</p>
                <p className="text-xs text-primary">Sikkim Manipal University | 2007–2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
