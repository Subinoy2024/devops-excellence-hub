<p align="center">
  <img src="./assets/profile.png" width="180" style="border-radius: 50%;" alt="Subinoy Debnath"/>
</p>

<h1 align="center">Subinoy Debnath</h1>
<h3 align="center">Senior DevOps & Cloud Infrastructure Engineer</h3>

<p align="center">
  <a href="https://linkedin.com/in/subinoydebnath"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="mailto:subinoy.debnath@email.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
  <a href="https://github.com/subinoydebnath"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white" alt="Azure"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" alt="AWS"/>
  <img src="https://img.shields.io/badge/Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white" alt="Terraform"/>
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker"/>
</p>

---

## 👨‍💻 About Me

**12+ years in IT | 6+ years in Cloud & DevOps | Enterprise Platform Engineering**

I design, build, and operate production-grade cloud infrastructure and CI/CD platforms at scale. My work spans multi-cloud environments (Azure, AWS), Terraform-first IaC strategies, and Kubernetes orchestration for enterprises including **Kyndryl**, **HCL**, **KPMG**, **ATOS**, and **Microland**. I focus on automation, security, cost optimization, and operational excellence.

---

## 🛠️ Core Competencies

| Category | Technologies |
|----------|-------------|
| **Cloud Platforms** | Azure (AKS, VMs, Storage, Networking), AWS (EKS, EC2, S3, IAM) |
| **Infrastructure as Code** | Terraform, ARM Templates, CloudFormation, Bicep |
| **Configuration Management** | Ansible, Azure Automation, PowerShell DSC |
| **Container Orchestration** | Kubernetes (AKS/EKS), Docker, Helm, Kustomize |
| **CI/CD Pipelines** | Azure DevOps, GitHub Actions, Jenkins, ArgoCD |
| **Monitoring & Observability** | Prometheus, Grafana, Azure Monitor, ELK Stack, Datadog |
| **Security & Compliance** | Azure Policy, Sentinel, Defender, IAM, RBAC, Key Vault |
| **Scripting & Automation** | Bash, PowerShell, Python, YAML |
| **Version Control** | Git, GitHub, Azure Repos, GitLab |

---

## 🏆 Certifications

<p>
  <img src="https://img.shields.io/badge/AWS_Certified-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS Certified"/>
  <img src="https://img.shields.io/badge/Azure_AZ--104-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="AZ-104"/>
  <img src="https://img.shields.io/badge/Azure_AZ--900-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="AZ-900"/>
</p>

---

## 🚀 Featured Projects

### 1. End-to-End Enterprise CI/CD Automation
**Azure DevOps + Terraform + Ansible + Docker**

A production-grade CI/CD pipeline simulating enterprise deployment workflows with multi-environment infrastructure provisioning, configuration management, and automated testing.

#### Architecture Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ENTERPRISE CI/CD PIPELINE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌───────────────┐    ┌──────────────────┐                │
│   │Developer │───▶│ Azure DevOps  │───▶│  Build Stage     │                │
│   │  Push    │    │   Trigger     │    │  (Docker Build)  │                │
│   └──────────┘    └───────────────┘    └────────┬─────────┘                │
│                                                  │                          │
│                                                  ▼                          │
│   ┌──────────────────────────────────────────────────────────┐             │
│   │                  Container Registry                       │             │
│   │              (Azure ACR / Docker Hub)                     │             │
│   └────────────────────────┬─────────────────────────────────┘             │
│                            │                                                │
│                            ▼                                                │
│   ┌────────────────────────────────────────────────────────────────────┐   │
│   │                    INFRASTRUCTURE STAGE                             │   │
│   │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐             │   │
│   │  │  Terraform  │───▶│  Terraform  │───▶│  Terraform  │             │   │
│   │  │    Init     │    │    Plan     │    │    Apply    │             │   │
│   │  └─────────────┘    └─────────────┘    └─────────────┘             │   │
│   │         │                                      │                    │   │
│   │         └──────────── State Lock ──────────────┘                    │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                            │                                                │
│                            ▼                                                │
│   ┌────────────────────────────────────────────────────────────────────┐   │
│   │                   CONFIGURATION STAGE                               │   │
│   │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐             │   │
│   │  │   Ansible   │───▶│   Install   │───▶│   Deploy    │             │   │
│   │  │  Inventory  │    │Dependencies │    │ Containers  │             │   │
│   │  └─────────────┘    └─────────────┘    └─────────────┘             │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                            │                                                │
│                            ▼                                                │
│   ┌────────────────────────────────────────────────────────────────────┐   │
│   │                    VALIDATION STAGE                                 │   │
│   │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐             │   │
│   │  │   Smoke     │───▶│ Integration │───▶│   Notify    │             │   │
│   │  │   Tests     │    │   Tests     │    │(Slack/Email)│             │   │
│   │  └─────────────┘    └─────────────┘    └─────────────┘             │   │
│   └────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Key Implementation Details

- **Multi-Environment Support**: DEV → QA → STAGING → PROD with approval gates
- **Terraform Remote State**: Azure Storage backend with state locking
- **Dynamic Inventory**: Ansible discovers infrastructure provisioned by Terraform
- **Secrets Management**: Azure Key Vault integration with pipeline variables
- **Rollback Strategy**: Blue-green deployment with automated rollback triggers
- **Compliance Gates**: Security scanning (Trivy, Checkov) before deployment

#### Technologies Used
`Azure DevOps` `Terraform` `Ansible` `Docker` `Azure ACR` `Azure VMs` `Key Vault` `Azure Monitor`

---

### 2. GitHub Webhook-Driven Kubernetes CI/CD
**Jenkins + Terraform + Kubernetes (AKS/EKS)**

A GitOps-style CI/CD pipeline with webhook-triggered builds, infrastructure provisioning with approval workflows, and Kubernetes deployments with live application exposure.

#### Architecture Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    KUBERNETES CI/CD PIPELINE (GitOps)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌───────────────┐    ┌──────────────────┐                │
│   │  GitHub  │───▶│    Webhook    │───▶│     Jenkins      │                │
│   │   Push   │    │   Trigger     │    │   Controller     │                │
│   └──────────┘    └───────────────┘    └────────┬─────────┘                │
│                                                  │                          │
│        ┌─────────────────────────────────────────┴────────────────┐        │
│        │                                                          │        │
│        ▼                                                          ▼        │
│   ┌─────────────────────────┐                 ┌─────────────────────────┐  │
│   │     APPLICATION REPO    │                 │   INFRASTRUCTURE REPO   │  │
│   │  ┌───────────────────┐  │                 │  ┌───────────────────┐  │  │
│   │  │   Dockerfile      │  │                 │  │   Terraform       │  │  │
│   │  │   app/            │  │                 │  │   modules/        │  │  │
│   │  │   k8s/manifests/  │  │                 │  │   environments/   │  │  │
│   │  └───────────────────┘  │                 │  └───────────────────┘  │  │
│   └────────────┬────────────┘                 └────────────┬────────────┘  │
│                │                                           │               │
│                ▼                                           ▼               │
│   ┌─────────────────────────┐                 ┌─────────────────────────┐  │
│   │      BUILD STAGE        │                 │    INFRA STAGE          │  │
│   │  • Docker Build         │                 │  • terraform init       │  │
│   │  • Security Scan        │                 │  • terraform plan       │  │
│   │  • Push to Registry     │                 │  • Manual Approval ✋   │  │
│   └────────────┬────────────┘                 │  • terraform apply      │  │
│                │                              └────────────┬────────────┘  │
│                │                                           │               │
│                └─────────────────┬─────────────────────────┘               │
│                                  │                                          │
│                                  ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                      KUBERNETES CLUSTER (AKS/EKS)                    │  │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │  │
│   │  │  Namespace  │  │ Deployment  │  │   Service   │                  │  │
│   │  │   (env)     │  │  (app pods) │  │(LoadBalancer│                  │  │
│   │  └─────────────┘  └─────────────┘  └─────────────┘                  │  │
│   │                                           │                          │  │
│   │                                           ▼                          │  │
│   │                              ┌─────────────────────┐                 │  │
│   │                              │   Ingress/Gateway   │                 │  │
│   │                              │   (Public Access)   │                 │  │
│   │                              └─────────────────────┘                 │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Key Implementation Details

- **Separation of Concerns**: App code and infra code in separate repositories
- **Approval Gates**: Terraform plan review before apply (simulating change management)
- **Kubernetes Manifests**: Helm charts with environment-specific values
- **Service Exposure**: LoadBalancer/Ingress with SSL termination
- **Observability**: Prometheus + Grafana stack deployed via Helm
- **GitOps Ready**: ArgoCD-compatible structure for future migration

#### Technologies Used
`Jenkins` `GitHub Webhooks` `Terraform` `Docker` `Kubernetes` `Helm` `AKS/EKS` `Prometheus` `Grafana`

---

## 📊 What This Profile Demonstrates

| Competency | Evidence |
|------------|----------|
| **End-to-End Ownership** | Design → Build → Deploy → Monitor → Optimize |
| **Infrastructure as Code** | Terraform modules with remote state, locking, and multi-env support |
| **CI/CD Expertise** | Multi-stage pipelines with security gates, approvals, and notifications |
| **Container Orchestration** | Production Kubernetes with Helm, ingress, and observability |
| **Automation Mindset** | Zero manual intervention from commit to production |
| **Enterprise Patterns** | Change management, approval workflows, compliance gates |
| **Security First** | Container scanning, secrets management, RBAC policies |
| **Production Thinking** | Rollback strategies, health checks, monitoring integration |

---

## 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=subinoydebnath&show_icons=true&theme=github_dark&hide_border=true" alt="GitHub Stats"/>
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=subinoydebnath&theme=github-dark&hide_border=true" alt="GitHub Streak"/>
</p>

---

## 🌐 Enterprise Experience

| Company | Role | Focus Areas |
|---------|------|-------------|
| **Kyndryl** | DevOps Engineer | Cloud migration, CI/CD, Terraform |
| **HCL Technologies** | Senior DevOps | Azure infrastructure, automation |
| **KPMG** | Cloud Engineer | Security, compliance, IaC |
| **ATOS** | Infrastructure Engineer | Hybrid cloud, monitoring |
| **Microland** | Systems Engineer | Virtualization, automation |

---

## 📫 Let's Connect

<p align="center">
  <a href="https://linkedin.com/in/subinoydebnath">
    <img src="https://img.shields.io/badge/Let's_Connect_on_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
</p>

<p align="center">
  <i>"Infrastructure should be cattle, not pets. Automate everything, trust nothing, verify always."</i>
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=subinoydebnath&color=0A66C2&style=flat-square&label=Profile+Views" alt="Profile Views"/>
</p>
