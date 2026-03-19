import {
  Cloud, Container, GitBranch, Shield, Activity, Settings, Server,
  Database, Code, Terminal, FileCode, Network, Lock, Eye, Cpu,
  Boxes, Workflow, Globe, Monitor, HardDrive, Layers, Zap, Bot,
  MessageSquare, Wrench, Cog, Rocket, type LucideIcon
} from 'lucide-react';

interface ToolIconInfo {
  icon: LucideIcon;
  color: string;
}

const toolIconMap: Record<string, ToolIconInfo> = {
  // Cloud
  'Azure': { icon: Cloud, color: 'text-[#0078D4]' },
  'AWS': { icon: Cloud, color: 'text-[#FF9900]' },
  'OpenStack': { icon: Cloud, color: 'text-[#ED1944]' },
  'Azure App Services': { icon: Cloud, color: 'text-[#0078D4]' },
  'Azure Functions': { icon: Zap, color: 'text-[#F5C518]' },
  'AWS Lambda': { icon: Zap, color: 'text-[#FF9900]' },
  'Serverless': { icon: Zap, color: 'text-[#FD5750]' },
  'Event-Driven Architecture': { icon: Zap, color: 'text-[#F5C518]' },
  'Amazon EC2': { icon: Server, color: 'text-[#FF9900]' },
  'AWS EC2': { icon: Server, color: 'text-[#FF9900]' },
  'Azure VM': { icon: Server, color: 'text-[#0078D4]' },
  'AMI': { icon: HardDrive, color: 'text-[#FF9900]' },
  'Auto Scaling Groups': { icon: Layers, color: 'text-[#FF9900]' },
  'Route 53': { icon: Globe, color: 'text-[#8C4FFF]' },
  'AWS Kinesis': { icon: Activity, color: 'text-[#FF9900]' },
  'Amazon DynamoDB': { icon: Database, color: 'text-[#4053D6]' },
  'AWS CloudFormation': { icon: FileCode, color: 'text-[#FF9900]' },
  'ECR/ACR': { icon: Boxes, color: 'text-[#FF9900]' },
  'Azure Monitor': { icon: Eye, color: 'text-[#0078D4]' },
  'Azure Key Vault': { icon: Lock, color: 'text-[#0078D4]' },
  'AWS Secrets Manager': { icon: Lock, color: 'text-[#DD344C]' },
  'Azure Policy': { icon: Shield, color: 'text-[#0078D4]' },
  'Bare-Metal': { icon: Server, color: 'text-[#A0AEC0]' },
  'Infrastructure as Code': { icon: FileCode, color: 'text-[#7B42BC]' },
  'Microsoft Azure': { icon: Cloud, color: 'text-[#0078D4]' },

  // Containers
  'Kubernetes': { icon: Container, color: 'text-[#326CE5]' },
  'Docker': { icon: Container, color: 'text-[#2496ED]' },
  'Helm': { icon: Layers, color: 'text-[#0F1689]' },
  'OpenShift': { icon: Container, color: 'text-[#EE0000]' },
  'OpenShift Admin': { icon: Container, color: 'text-[#EE0000]' },
  'Deployment & Routing': { icon: Network, color: 'text-[#326CE5]' },
  'Secrets & ConfigMaps': { icon: Lock, color: 'text-[#326CE5]' },
  'RBAC': { icon: Shield, color: 'text-[#E5A00D]' },
  'Troubleshooting': { icon: Wrench, color: 'text-[#A0AEC0]' },

  // CI/CD
  'Azure DevOps': { icon: GitBranch, color: 'text-[#0078D4]' },
  'Jenkins': { icon: Workflow, color: 'text-[#D33833]' },
  'GitHub Actions': { icon: GitBranch, color: 'text-[#2088FF]' },
  'GitHub': { icon: GitBranch, color: 'text-[#E6EDF3]' },
  'GitHub Webhooks': { icon: GitBranch, color: 'text-[#E6EDF3]' },
  'Git': { icon: GitBranch, color: 'text-[#F05032]' },
  'ArgoCD': { icon: GitBranch, color: 'text-[#EF7B4D]' },

  // IaC
  'Terraform': { icon: Settings, color: 'text-[#7B42BC]' },
  'ARM Templates': { icon: FileCode, color: 'text-[#0078D4]' },

  // Security & DevSecOps
  'IAM': { icon: Shield, color: 'text-[#DD344C]' },
  'IAM Policies': { icon: Shield, color: 'text-[#DD344C]' },
  'Trivy': { icon: Shield, color: 'text-[#1904DA]' },
  'DevSecOps Practices': { icon: Shield, color: 'text-[#A0AEC0]' },

  // Scripting
  'Python': { icon: Code, color: 'text-[#3776AB]' },
  'Bash': { icon: Terminal, color: 'text-[#4EAA25]' },
  'Shell Scripting': { icon: Terminal, color: 'text-[#73C991]' },

  // Observability
  'Prometheus': { icon: Activity, color: 'text-[#E6522C]' },
  'Grafana': { icon: Monitor, color: 'text-[#F46800]' },
  'ELK Stack': { icon: Eye, color: 'text-[#00BFB3]' },
  'Node Exporter': { icon: Activity, color: 'text-[#E6522C]' },

  // AI
  'AI/ML Foundations': { icon: Bot, color: 'text-[#10A37F]' },
  'AI Infrastructure': { icon: Cpu, color: 'text-[#76B900]' },
  'Agentic AI': { icon: Bot, color: 'text-[#A855F7]' },
  'Azure AI': { icon: Bot, color: 'text-[#0078D4]' },
  'Azure Foundry': { icon: Cog, color: 'text-[#0078D4]' },
  'Prompt Engineering': { icon: MessageSquare, color: 'text-[#10A37F]' },
  'Vibe Coding': { icon: Code, color: 'text-[#EC4899]' },
  'MLOps': { icon: Bot, color: 'text-[#0DB7ED]' },
  'n8n': { icon: Workflow, color: 'text-[#EA4B71]' },
  'Make': { icon: Workflow, color: 'text-[#6D00CC]' },
  'ChatGPT': { icon: MessageSquare, color: 'text-[#10A37F]' },
  'Custom GPTs': { icon: Bot, color: 'text-[#10A37F]' },
  'OpenShift AI': { icon: Cpu, color: 'text-[#EE0000]' },
  'AI/ML Model Deployment': { icon: Rocket, color: 'text-[#10A37F]' },
  'Containerized Model Serving': { icon: Container, color: 'text-[#326CE5]' },
  'EKS': { icon: Container, color: 'text-[#FF9900]' },
  'AKS': { icon: Container, color: 'text-[#0078D4]' },

  // Team
  'Collaboration': { icon: Globe, color: 'text-[#38BDF8]' },
  'Support': { icon: Wrench, color: 'text-[#A0AEC0]' },
  'Delivery': { icon: Rocket, color: 'text-[#F97316]' },
  'Operational Ownership': { icon: Cog, color: 'text-[#38BDF8]' },

  // Misc
  'Ansible': { icon: Settings, color: 'text-[#EE0000]' },
  'Nginx': { icon: Server, color: 'text-[#009639]' },
  'Linux': { icon: Terminal, color: 'text-[#FCC624]' },
  'YAML': { icon: FileCode, color: 'text-[#CB171E]' },
  'SSH': { icon: Terminal, color: 'text-[#73C991]' },
  'Java': { icon: Code, color: 'text-[#ED8B00]' },
  'Python/Node.js': { icon: Code, color: 'text-[#3776AB]' },
  'Windows Server 2022': { icon: Monitor, color: 'text-[#00ADEF]' },
  'OpenStack Glance': { icon: Cloud, color: 'text-[#ED1944]' },
  'VirtIO': { icon: HardDrive, color: 'text-[#FF6600]' },
  'VirtIO Drivers': { icon: HardDrive, color: 'text-[#FF6600]' },
  'QEMU': { icon: Cpu, color: 'text-[#FF6600]' },
  'QEMU Guest Agent': { icon: Cpu, color: 'text-[#FF6600]' },
  'Sysprep': { icon: Settings, color: 'text-[#00ADEF]' },
  'Horizon Dashboard': { icon: Monitor, color: 'text-[#ED1944]' },
};

export const getToolIcon = (name: string): ToolIconInfo | null => {
  return toolIconMap[name] || null;
};