// Pre-programmed AI responses for the Cloud & DevOps Engineer portfolio
// Simulates an AI assistant that knows about Subinoy Debnath's skills and experience

interface AIResponse {
  keywords: string[];
  response: string;
}

const responses: AIResponse[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greet'],
    response: `> SYSTEM INITIALIZED
    
Greetings, user. I am PROFILE-AI, the neural interface for Subinoy Debnath's professional profile.

I can tell you about:
• Cloud & Infrastructure expertise
• CI/CD pipeline architectures
• Kubernetes & container orchestration
• Terraform & IaC strategies
• Security & compliance practices
• Projects & real-world implementations

What would you like to explore?`
  },
  {
    keywords: ['skill', 'expertise', 'know', 'capable', 'tech', 'stack'],
    response: `> SCANNING SKILL MATRIX...

╔══════════════════════════════════════════════════════════╗
║  CORE COMPETENCIES                                       ║
╠══════════════════════════════════════════════════════════╣
║  CLOUD PLATFORMS    │ Azure (AKS, VMs) | AWS (EKS, EC2) ║
║  INFRASTRUCTURE     │ Terraform | ARM | CloudFormation  ║
║  CONTAINERS         │ Kubernetes | Docker | Helm        ║
║  CI/CD              │ Azure DevOps | Jenkins | ArgoCD   ║
║  CONFIG MGMT        │ Ansible | PowerShell DSC          ║
║  MONITORING         │ Prometheus | Grafana | ELK Stack  ║
║  SECURITY           │ Azure Policy | IAM | Key Vault    ║
╚══════════════════════════════════════════════════════════╝

12+ years IT | 6+ years Cloud & DevOps | Enterprise-scale operations`
  },
  {
    keywords: ['about', 'who', 'introduction', 'summary', 'background'],
    response: `> LOADING PROFILE DATA...

╔══════════════════════════════════════════════════════════════╗
║  ABOUT SUBINOY DEBNATH                                       ║
╚══════════════════════════════════════════════════════════════╝

Results-driven Cloud & DevOps Engineer with a strong foundation 
in infrastructure engineering and a passion for building scalable, 
resilient, and secure cloud platforms.

Career journey spans from managing bare-metal environments to 
designing fully automated, cloud-native delivery systems.

CORE STRENGTHS:
► Infrastructure as Code (Terraform-first approach)
► CI/CD automation (Azure DevOps, Jenkins, GitHub Actions)
► Cloud security best practices & compliance
► Production-grade platform design

PHILOSOPHY:
"Simplicity, observability, and resilience guide every 
architectural decision I make."

Currently exploring: AIOps / GenAI for smarter cloud operations`
  },
  {
    keywords: ['experience', 'work', 'company', 'enterprise', 'client'],
    response: `> QUERYING EXPERIENCE DATABASE...

╭──────────────────────────────────────────────────────────────╮
│  ENTERPRISE DEPLOYMENTS                                      │
├──────────────────────────────────────────────────────────────┤
│  ► KYNDRYL     │ Sep 2022 - Sep 2026 │ Cloud Infrastructure  │
│  ► HCL         │ May 2022 - Sep 2022 │ Platform Engineering  │
│  ► KPMG        │ May 2021 - May 2022 │ DevOps Transformation │
│  ► ATOS        │ Feb 2019 - Apr 2021 │ Infra Automation      │
│  ► MICROLAND   │ Jan 2017 - Jun 2018 │ Managed Services      │
│  ► CGI         │ Aug 2015 - Jan 2017 │ Cloud Operations      │
│  ► TCS         │ Aug 2015 - Jan 2017 │ Enterprise Solutions  │
│  ► CAPGEMINI   │ Feb 2013 - Aug 2015 │ Digital Transformation│
╰──────────────────────────────────────────────────────────────╯

Delivered production-grade infrastructure serving millions of users.
Zero-downtime deployments. 99.99% SLA achievements.

IMPACT:
• Transformed legacy systems into cloud-native platforms
• Reduced deployment time by 70% through automation
• Implemented security-first infrastructure patterns`
  },
  {
    keywords: ['terraform', 'iac', 'infrastructure as code', 'provision'],
    response: `> LOADING TERRAFORM MODULES...

\`\`\`hcl
# Production-grade IaC approach

module "enterprise_infra" {
  source = "./modules/azure-foundation"
  
  environment     = "production"
  remote_state    = "azure-blob"
  state_locking   = true
  
  features = {
    multi_region    = true
    disaster_recovery = true
    auto_scaling    = true
  }
}
\`\`\`

CAPABILITIES:
• Multi-environment state management
• Module-driven architecture
• Drift detection & remediation
• Cost optimization patterns
• Security-first provisioning`
  },
  {
    keywords: ['kubernetes', 'k8s', 'aks', 'eks', 'container', 'orchestr'],
    response: `> CONNECTING TO K8S CLUSTER...

╔═══════════════════════════════════════════╗
║  KUBERNETES EXPERTISE                     ║
╠═══════════════════════════════════════════╣
║  AKS/EKS    │ Production cluster mgmt    ║
║  HELM       │ Chart development          ║
║  KUSTOMIZE  │ Environment overlays       ║
║  ARGOCD     │ GitOps deployments         ║
║  ISTIO      │ Service mesh               ║
║  MONITORING │ Prometheus + Grafana       ║
╚═══════════════════════════════════════════╝

Deployed 50+ microservices across hybrid clusters.
Zero-downtime rolling updates. Auto-scaling to 10k+ pods.`
  },
  {
    keywords: ['cicd', 'ci/cd', 'pipeline', 'devops', 'automat', 'jenkins', 'azure devops'],
    response: `> INITIALIZING PIPELINE ENGINE...

┌──────────────────────────────────────────────────┐
│  CI/CD ARCHITECTURE                              │
├──────────────────────────────────────────────────┤
│                                                  │
│  Developer Push → Azure DevOps/Jenkins           │
│       ↓                                          │
│  Docker Build → Security Scan → Registry Push    │
│       ↓                                          │
│  Terraform Plan → Manual Approval → Apply        │
│       ↓                                          │
│  Ansible Config → Container Deploy → Tests       │
│       ↓                                          │
│  Smoke → Integration → Notify (Slack/Email)      │
│                                                  │
└──────────────────────────────────────────────────┘

Features: Multi-stage, Blue/Green, Canary, Feature Flags
Tools: Azure DevOps, Jenkins, GitHub Actions, ArgoCD`
  },
  {
    keywords: ['security', 'secure', 'compliance', 'rbac', 'policy'],
    response: `> RUNNING SECURITY SCAN...

╔═══════════════════════════════════════════╗
║  SECURITY POSTURE                         ║
╠═══════════════════════════════════════════╣
║  ► Azure Policy enforcement               ║
║  ► Azure Sentinel SIEM integration        ║
║  ► RBAC with least-privilege              ║
║  ► Key Vault secrets management           ║
║  ► Container image scanning               ║
║  ► Network segmentation                   ║
║  ► Compliance: SOC2, ISO27001             ║
╚═══════════════════════════════════════════╝

"Trust nothing. Verify everything. Automate security."`
  },
  {
    keywords: ['certif', 'aws', 'azure', 'credential'],
    response: `> VERIFYING CREDENTIALS...

┌────────────────────────────────────────┐
│  CERTIFICATIONS                        │
├────────────────────────────────────────┤
│  ✓  AWS Certified                      │
│  ✓  Microsoft Azure AZ-104             │
│  ✓  Microsoft Azure AZ-900             │
│  ✓  Cloud Architecture Bootcamp        │
└────────────────────────────────────────┘

Continuous learning. Always evolving.
Currently exploring: Platform Engineering, SRE, FinOps, AIOps`
  },
  {
    keywords: ['project', 'portfolio', 'built', 'implement'],
    response: `> FETCHING PROJECT LOGS...

╭─────────────────────────────────────────────────╮
│  PROJECT 1: CI/CD with Jenkins + Terraform      │
├─────────────────────────────────────────────────┤
│  Stack: Jenkins + Docker + Terraform + Ansible  │
│  Flow: Push → Build → Provision → Deploy → Test │
╰─────────────────────────────────────────────────╯

╭─────────────────────────────────────────────────╮
│  PROJECT 2: Kubernetes CI/CD Pipeline           │
├─────────────────────────────────────────────────┤
│  Stack: Jenkins + Docker + Terraform + K8s      │
│  Flow: Webhook → Build → Infra → K8s Deploy     │
╰─────────────────────────────────────────────────╯

╭─────────────────────────────────────────────────╮
│  PROJECT 3: AWS WordPress with CloudFormation   │
├─────────────────────────────────────────────────┤
│  Stack: CloudFormation + EC2 + Route 53 + ASG   │
│  Features: Multi-env, auto-scaling, scheduling  │
╰─────────────────────────────────────────────────╯

Switch to PROJECTS tab for detailed breakdowns.`
  },
  {
    keywords: ['contact', 'reach', 'email', 'linkedin', 'github', 'connect'],
    response: `> ESTABLISHING CONNECTION...

╔═══════════════════════════════════════════════════════════════╗
║  COMMUNICATION CHANNELS                                       ║
╠═══════════════════════════════════════════════════════════════╣
║  GitHub    │ github.com/Subinoy2024                           ║
║  LinkedIn  │ linkedin.com/in/subinoy-debnath-3ab534272        ║
║  Email     │ sdebnath8887@gmail.com                           ║
╚═══════════════════════════════════════════════════════════════╝

Ready for:
• Cloud & DevOps consulting
• Platform engineering roles
• Infrastructure architecture reviews
• Speaking engagements

Let's build something production-grade together.`
  },
  {
    keywords: ['monitor', 'observ', 'prometheus', 'grafana', 'log', 'alert'],
    response: `> LOADING OBSERVABILITY STACK...

┌──────────────────────────────────────────────┐
│  MONITORING & OBSERVABILITY                  │
├──────────────────────────────────────────────┤
│  Metrics    │ Prometheus + Thanos            │
│  Dashboards │ Grafana + custom panels        │
│  Logging    │ ELK Stack / Loki               │
│  Tracing    │ Jaeger / Zipkin                │
│  Alerting   │ PagerDuty / OpsGenie           │
│  APM        │ Azure Monitor / Datadog        │
└──────────────────────────────────────────────┘

"You can't improve what you can't measure."`
  },
  {
    keywords: ['docker', 'container', 'image', 'registry', 'build'],
    response: `> PULLING CONTAINER KNOWLEDGE...

\`\`\`dockerfile
# Production-ready containerization

FROM base-image:slim AS builder
WORKDIR /app
RUN security-scan && build

FROM distroless/static
COPY --from=builder /app /
USER nonroot
EXPOSE 8080
CMD ["/app"]
\`\`\`

EXPERTISE:
• Multi-stage builds for minimal images
• Security scanning (Trivy, Snyk)
• Private registry management (ACR, ECR)
• Image versioning & tagging strategies
• Container runtime optimization`
  }
];

const defaultResponse = `> QUERY NOT RECOGNIZED

I couldn't find specific information about that topic.

Try asking about:
• About me / background
• Skills & expertise
• Cloud platforms (Azure, AWS)
• CI/CD pipelines
• Kubernetes & containers
• Terraform & infrastructure
• Security practices
• Projects & experience
• Certifications
• Contact information

Or type 'help' for a full list of topics.`;

const helpResponse = `> HELP SYSTEM INITIALIZED

Available query topics:

╔═══════════════════════════════════════╗
║  TOPIC          │  KEYWORDS           ║
╠═══════════════════════════════════════╣
║  About Me       │  about, who         ║
║  Greeting       │  hello, hi          ║
║  Skills         │  skills, expertise  ║
║  Experience     │  work, company      ║
║  Terraform      │  terraform, iac     ║
║  Kubernetes     │  k8s, kubernetes    ║
║  CI/CD          │  cicd, pipeline     ║
║  Security       │  security, rbac     ║
║  Certs          │  certifications     ║
║  Projects       │  projects, built    ║
║  Monitoring     │  prometheus, logs   ║
║  Docker         │  docker, container  ║
║  Contact        │  contact, linkedin  ║
╚═══════════════════════════════════════╝

Type any keyword to explore that topic.`;

export const getAIResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase().trim();
  
  if (lowerQuery === 'help' || lowerQuery === '?') {
    return helpResponse;
  }

  for (const item of responses) {
    if (item.keywords.some(keyword => lowerQuery.includes(keyword))) {
      return item.response;
    }
  }

  return defaultResponse;
};

export const getWelcomeMessage = (): string => {
  return `╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   ██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗         ║
║   ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝         ║
║   ██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗           ║
║   ██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝           ║
║   ██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗         ║
║   ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝         ║
║                                                                ║
║                  A I   A S S I S T A N C E                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

> SYSTEM BOOT SEQUENCE INITIATED...
> LOADING NEURAL NETWORK...
> INITIALIZING SUBINOY DEBNATH PROFILE...
> CONNECTION ESTABLISHED

Welcome to the AI-powered Cloud & DevOps Engineer profile.

I am PROFILE-AI, your intelligent assistant. Ask me anything about:
• Cloud infrastructure & architecture
• CI/CD pipelines & automation
• Kubernetes & container orchestration
• Security & compliance
• Enterprise experience

Type 'help' for a full list of topics or start with 'hello'.

> AWAITING INPUT_`;
};
