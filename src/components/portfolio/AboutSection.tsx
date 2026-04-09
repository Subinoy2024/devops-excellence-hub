import kpmgLogo from '@/assets/logos/kpmg.png';
import hclLogo from '@/assets/logos/hcl.png';
import atosLogo from '@/assets/logos/atos.png';

const companies = [
  { name: 'Kyndryl', logo: '', domain: 'kyndryl.com' },
  { name: 'HCL', logo: hclLogo, domain: '' },
  { name: 'KPMG', logo: kpmgLogo, domain: '' },
  { name: 'Atos', logo: atosLogo, domain: '' },
  { name: 'Microland', logo: '', domain: 'microland.com' },
  { name: 'Micropoint', logo: '', domain: '' },
  { name: 'CGI', logo: '', domain: 'cgi.com' },
  { name: 'TCS', logo: '', domain: 'tcs.com' },
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
              delivering scalable infrastructure, CI/CD automation, and container platform deployments
              across enterprise environments.
            </p>
            <p>
              I have experience in provisioning and managing cloud resources on Azure, AWS, GCP, and OpenStack,
              designing and implementing CI/CD pipelines, and deploying microservices-based applications on
              Kubernetes and OpenShift container platforms.
            </p>
            <p>
              I also build and maintain Infrastructure as Code with Terraform to enable consistent, repeatable,
              and reliable deployments. I have contributed to large-scale infrastructure and application delivery
              initiatives for various organizations such as Kyndryl, HCL, KPMG, Atos, and others, to deliver
              operational efficiency, platform reliability, standardization, and developer enablement through
              streamlined deployment workflows, reusable infrastructure, and automation-driven release processes.
            </p>
            <p className="text-foreground/80">
              Currently expanding into MLOps and AI-driven automation, with hands-on experience in
              ML model deployment and integrating AI-enabled capabilities into DevOps workflows to
              enhance platform intelligence and delivery efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Enterprise Delivery</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {companies.map(company => (
                <span key={company.name} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 bg-card rounded-lg border border-border text-muted-foreground">
                  {company.domain && (
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=32`}
                      alt={company.name}
                      className="h-4 w-4 object-contain"
                    />
                  )}
                  {company.name}
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
