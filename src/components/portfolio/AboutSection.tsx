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
              DevOps Engineer with 13+ years of IT experience and 6+ years in cloud and DevOps,
              delivering scalable infrastructure, CI/CD automation, container platform deployments,
              and AI-driven workflow automation across enterprise environments.
            </p>
            <p>
              I have experience in provisioning and managing cloud resources across Azure, AWS, GCP, and OpenStack,
              designing and implementing CI/CD pipelines, deploying microservices-based applications on Kubernetes
              platforms (AKS, EKS, GKE) and OpenShift (ARO), and building AI-enabled workflow automation solutions
              using n8n to streamline operational processes, automate incident response workflows, and enhance
              platform efficiency.
            </p>
            <p>
              I build and maintain Infrastructure as Code using Terraform to enable consistent, repeatable, and
              reliable deployments across multi-cloud environments. I have contributed to large-scale infrastructure
              and application delivery initiatives for organizations including Kyndryl, HCL, KPMG, Atos, and others,
              driving operational efficiency, platform reliability, standardization, and developer enablement through
              reusable infrastructure, streamlined deployment workflows, and automation-driven release processes.
            </p>
            <p className="text-foreground/80">
              Currently expanding into AI/MLOps and Agentic AI within Cloud & DevOps, with hands-on experience in
              ML model deployment, AI-workflow orchestration using n8n, intelligent monitoring, automated RCA
              workflows, AI-powered operational insights, and integrating AI-enabled capabilities into DevOps
              processes to improve platform intelligence, automation, and delivery efficiency.
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
