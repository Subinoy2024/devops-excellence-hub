import {
  Cloud, Container, GitBranch, Shield, Activity, Settings, Server,
  Database, Code, Terminal, FileCode, Network, Lock, Eye, Cpu,
  Boxes, Workflow, Globe, Monitor, HardDrive, Layers, Zap, Bot,
  MessageSquare, Wrench, Cog, Rocket, type LucideIcon
} from 'lucide-react';

const toolIconMap: Record<string, LucideIcon> = {
  // Cloud
  'Azure': Cloud, 'AWS': Cloud, 'OpenStack': Cloud, 'Azure App Services': Cloud,
  'Azure Functions': Zap, 'AWS Lambda': Zap, 'Serverless': Zap,
  'Event-Driven Architecture': Zap, 'Amazon EC2': Server, 'AWS EC2': Server,
  'Azure VM': Server, 'AMI': HardDrive, 'Auto Scaling Groups': Layers,
  'Route 53': Globe, 'AWS Kinesis': Activity, 'Amazon DynamoDB': Database,
  'AWS CloudFormation': FileCode, 'ECR/ACR': Boxes, 'Azure Monitor': Eye,
  'Azure Key Vault': Lock, 'AWS Secrets Manager': Lock, 'Azure Policy': Shield,
  'Bare-Metal': Server, 'Infrastructure as Code': FileCode,

  // Containers & Orchestration
  'Kubernetes': Container, 'Docker': Container, 'Helm': Layers,
  'OpenShift Admin': Container, 'Deployment & Routing': Network,
  'Secrets & ConfigMaps': Lock, 'RBAC': Shield,
  'Troubleshooting': Wrench,

  // CI/CD
  'Azure DevOps': GitBranch, 'Jenkins': Workflow, 'GitHub Actions': GitBranch,
  'GitHub': GitBranch, 'GitHub Webhooks': GitBranch, 'Git': GitBranch,
  'MLOps': Bot, 'ArgoCD': GitBranch,

  // IaC
  'Terraform': Settings, 'ARM Templates': FileCode,

  // Security
  'IAM': Shield,

  // Observability
  'Prometheus': Activity, 'Grafana': Monitor, 'ELK Stack': Eye,
  'Node Exporter': Activity,

  // AI
  'AI/ML Foundations': Bot, 'AI Infrastructure': Cpu, 'Agentic AI': Bot,
  'Prompt Engineering': MessageSquare, 'Vibe Coding': Code,
  'n8n': Workflow, 'Make': Workflow, 'ChatGPT': MessageSquare, 'Custom GPTs': Bot,

  // Team
  'Collaboration': Globe, 'Support': Wrench, 'Delivery': Rocket,
  'Operational Ownership': Cog,

  // Tools
  'Ansible': Settings, 'Nginx': Server, 'Linux': Terminal,
  'YAML': FileCode, 'SSH': Terminal, 'Java': Code, 'Python/Node.js': Code,
  'Windows Server 2022': Monitor, 'OpenStack Glance': Cloud,
  'VirtIO': HardDrive, 'VirtIO Drivers': HardDrive,
  'QEMU': Cpu, 'QEMU Guest Agent': Cpu, 'Sysprep': Settings,
  'Horizon Dashboard': Monitor, 'Microsoft Azure': Cloud,
};

export const getToolIcon = (name: string): LucideIcon | null => {
  return toolIconMap[name] || null;
};
