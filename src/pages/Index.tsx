import profileImage from "/assets/profile.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <img 
            src={profileImage} 
            alt="Subinoy Debnath" 
            className="w-44 h-44 rounded-full mx-auto mb-6 border-4 border-blue-500/30 shadow-xl shadow-blue-500/20"
          />
          <h1 className="text-4xl font-bold mb-2">Subinoy Debnath</h1>
          <h3 className="text-xl text-blue-400 mb-4">Senior DevOps & Cloud Infrastructure Engineer</h3>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <a href="https://linkedin.com/in/subinoydebnath" className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition">
              LinkedIn
            </a>
            <a href="mailto:subinoy.debnath@email.com" className="inline-flex items-center gap-2 bg-[#EA4335] text-white px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition">
              Email
            </a>
            <a href="https://github.com/subinoydebnath" className="inline-flex items-center gap-2 bg-[#181717] text-white px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition border border-slate-600">
              GitHub
            </a>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Azure', 'AWS', 'Terraform', 'Kubernetes', 'Docker'].map((tech) => (
              <span key={tech} className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>👨‍💻</span> About Me
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            <strong className="text-white">12+ years in IT | 6+ years in Cloud & DevOps | Enterprise Platform Engineering</strong>
            <br /><br />
            I design, build, and operate production-grade cloud infrastructure and CI/CD platforms at scale. My work spans multi-cloud environments (Azure, AWS), Terraform-first IaC strategies, and Kubernetes orchestration for enterprises including <strong className="text-blue-400">Kyndryl</strong>, <strong className="text-blue-400">HCL</strong>, <strong className="text-blue-400">KPMG</strong>, <strong className="text-blue-400">ATOS</strong>, and <strong className="text-blue-400">Microland</strong>.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🛠️</span> Core Competencies
          </h2>
          <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-slate-700">
                {[
                  { category: 'Cloud Platforms', tech: 'Azure (AKS, VMs, Storage), AWS (EKS, EC2, S3, IAM)' },
                  { category: 'Infrastructure as Code', tech: 'Terraform, ARM Templates, CloudFormation, Bicep' },
                  { category: 'Configuration Management', tech: 'Ansible, Azure Automation, PowerShell DSC' },
                  { category: 'Container Orchestration', tech: 'Kubernetes (AKS/EKS), Docker, Helm, Kustomize' },
                  { category: 'CI/CD Pipelines', tech: 'Azure DevOps, GitHub Actions, Jenkins, ArgoCD' },
                  { category: 'Monitoring', tech: 'Prometheus, Grafana, Azure Monitor, ELK Stack' },
                  { category: 'Security', tech: 'Azure Policy, Sentinel, IAM, RBAC, Key Vault' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-700/30 transition">
                    <td className="px-4 py-3 font-semibold text-blue-400 w-1/3">{row.category}</td>
                    <td className="px-4 py-3 text-slate-300">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🏆</span> Certifications
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#232F3E] text-white px-4 py-2 rounded-md font-medium">AWS Certified</span>
            <span className="bg-[#0078D4] text-white px-4 py-2 rounded-md font-medium">Azure AZ-104</span>
            <span className="bg-[#0078D4] text-white px-4 py-2 rounded-md font-medium">Azure AZ-900</span>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>🚀</span> Featured Projects
          </h2>
          
          {/* Project 1 */}
          <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-400 mb-2">1. End-to-End Enterprise CI/CD Automation</h3>
            <p className="text-slate-400 mb-4">Azure DevOps + Terraform + Ansible + Docker</p>
            
            <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-xs text-slate-300 mb-4 font-mono">
{`Developer Push → Azure DevOps Trigger → Docker Build
       ↓
Container Registry (Azure ACR)
       ↓
Terraform (Init → Plan → Apply) [State Lock]
       ↓
Ansible (Inventory → Dependencies → Deploy)
       ↓
Smoke Tests → Integration Tests → Notify`}
            </pre>
            
            <div className="flex flex-wrap gap-2">
              {['Azure DevOps', 'Terraform', 'Ansible', 'Docker', 'Azure ACR'].map((tech) => (
                <span key={tech} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-2">2. GitHub Webhook-Driven Kubernetes CI/CD</h3>
            <p className="text-slate-400 mb-4">Jenkins + Terraform + Kubernetes (AKS/EKS)</p>
            
            <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-xs text-slate-300 mb-4 font-mono">
{`GitHub Push → Webhook → Jenkins Controller
       ↓
┌──────────────────┬───────────────────────┐
│ APPLICATION REPO │  INFRASTRUCTURE REPO  │
│  Docker Build    │   Terraform Plan      │
│  Security Scan   │   Manual Approval ✋  │
│  Push Registry   │   Terraform Apply     │
└──────────────────┴───────────────────────┘
       ↓
Kubernetes Cluster → Ingress → Live App`}
            </pre>
            
            <div className="flex flex-wrap gap-2">
              {['Jenkins', 'GitHub Webhooks', 'Terraform', 'Kubernetes', 'Helm'].map((tech) => (
                <span key={tech} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* What This Demonstrates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📊</span> What This Profile Demonstrates
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: 'End-to-End Ownership', desc: 'Design → Build → Deploy → Monitor → Optimize' },
              { title: 'Infrastructure as Code', desc: 'Terraform with remote state and multi-env support' },
              { title: 'CI/CD Expertise', desc: 'Multi-stage pipelines with security gates' },
              { title: 'Container Orchestration', desc: 'Production Kubernetes with observability' },
              { title: 'Automation Mindset', desc: 'Zero manual intervention to production' },
              { title: 'Security First', desc: 'Container scanning, secrets management, RBAC' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                <h4 className="font-semibold text-blue-400">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🌐</span> Enterprise Experience
          </h2>
          <div className="flex flex-wrap gap-3">
            {['Kyndryl', 'HCL Technologies', 'KPMG', 'ATOS', 'Microland'].map((company) => (
              <span key={company} className="bg-slate-700/50 text-slate-200 px-4 py-2 rounded-lg font-medium">{company}</span>
            ))}
          </div>
        </section>

        {/* Quote */}
        <div className="text-center mt-16 pb-8">
          <p className="text-slate-400 italic text-lg">
            "Infrastructure should be cattle, not pets. Automate everything, trust nothing, verify always."
          </p>
        </div>

        {/* Download README */}
        <div className="text-center">
          <a 
            href="/README.md" 
            download="README.md"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            📥 Download README.md
          </a>
          <p className="text-slate-500 text-sm mt-2">Ready to use for your GitHub profile</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
