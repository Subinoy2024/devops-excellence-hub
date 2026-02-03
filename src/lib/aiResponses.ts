// Pre-programmed AI responses for the DevOps portfolio
// Simulates an AI assistant that knows about Subinoy Debnath's skills and experience

interface AIResponse {
  keywords: string[];
  response: string;
}

const responses: AIResponse[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greet'],
    response: `> SYSTEM INITIALIZED
    
Greetings, user. I am DEVOPS-AI, the neural interface for Subinoy Debnath's professional profile.

I can tell you about:
• Cloud & Infrastructure expertise
• CI/CD pipeline architectures
• Kubernetes & container orchestration
• Terraform & IaC strategies
• Security & compliance practices

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
    keywords: ['experience', 'work', 'company', 'enterprise', 'client'],
    response: `> QUERYING EXPERIENCE DATABASE...

╭─────────────────────────────────────────╮
│  ENTERPRISE DEPLOYMENTS                 │
├─────────────────────────────────────────┤
│  ► KYNDRYL    │ Cloud Infrastructure   │
│  ► HCL TECH   │ Platform Engineering   │
│  ► KPMG       │ Security & Compliance  │
│  ► ATOS       │ Multi-cloud Migration  │
│  ► MICROLAND  │ DevOps Transformation  │
╰─────────────────────────────────────────╯

Delivered production-grade infrastructure serving millions of users.
Zero-downtime deployments. 99.99% SLA achievements.`
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
Currently exploring: Platform Engineering, SRE, FinOps`
  },
  {
    keywords: ['project', 'portfolio', 'built', 'implement'],
    response: `> FETCHING PROJECT LOGS...

╭─────────────────────────────────────────────────╮
│  PROJECT 1: Enterprise CI/CD Platform           │
├─────────────────────────────────────────────────┤
│  Stack: Azure DevOps + Terraform + Ansible      │
│  Scale: 200+ microservices                      │
│  Impact: 70% faster deployments                 │
╰─────────────────────────────────────────────────╯

╭─────────────────────────────────────────────────╮
│  PROJECT 2: Multi-Cloud K8s Platform            │
├─────────────────────────────────────────────────┤
│  Stack: Jenkins + Terraform + AKS/EKS           │
│  Scale: 50+ clusters across regions             │
│  Impact: 99.99% availability                    │
╰─────────────────────────────────────────────────╯

More projects available. Ask about specific domains.`
  },
  {
    keywords: ['contact', 'reach', 'email', 'linkedin', 'github', 'connect'],
    response: `> ESTABLISHING CONNECTION...

╔═══════════════════════════════════════════╗
║  COMMUNICATION CHANNELS                   ║
╠═══════════════════════════════════════════╣
║  GitHub    │ github.com/subinoydebnath   ║
║  LinkedIn  │ linkedin.com/in/subinoydebnath ║
║  Email     │ subinoy.debnath@email.com   ║
╚═══════════════════════════════════════════╝

Ready for:
• DevOps consulting
• Cloud architecture reviews
• Platform engineering roles
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
║     ██████╗ ███████╗██╗   ██╗ ██████╗ ██████╗ ███████╗         ║
║     ██╔══██╗██╔════╝██║   ██║██╔═══██╗██╔══██╗██╔════╝         ║
║     ██║  ██║█████╗  ██║   ██║██║   ██║██████╔╝███████╗         ║
║     ██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║██╔═══╝ ╚════██║         ║
║     ██████╔╝███████╗ ╚████╔╝ ╚██████╔╝██║     ███████║         ║
║     ╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝ ╚═╝     ╚══════╝         ║
║                                                                ║
║                    A I   A S S I S T A N T                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

> SYSTEM BOOT SEQUENCE INITIATED...
> LOADING NEURAL NETWORK...
> INITIALIZING SUBINOY DEBNATH PROFILE...
> CONNECTION ESTABLISHED

Welcome to the AI-powered DevOps Engineer profile.

I am DEVOPS-AI, your intelligent assistant. Ask me anything about:
• Cloud infrastructure & architecture
• CI/CD pipelines & automation
• Kubernetes & container orchestration
• Security & compliance
• Enterprise experience

Type 'help' for a full list of topics or start with 'hello'.

> AWAITING INPUT_`;
};
