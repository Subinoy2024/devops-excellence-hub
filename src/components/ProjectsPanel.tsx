import { Cloud, Server, GitBranch, Database, Container, Settings, Activity } from 'lucide-react';

interface Project {
  title: string;
  overview: string;
  flow: string;
  steps: string[];
  tools: string[];
  icon: typeof Cloud;
  color: 'primary' | 'secondary' | 'accent';
}

const projects: Project[] = [
  {
    title: 'Automated CI/CD Pipeline with Docker, Jenkins, Terraform & Ansible',
    overview: 'End-to-end automated CI/CD pipeline simulating real production environment integrating version control, CI/CD, containerization, IaC, configuration management, testing, and notification.',
    flow: 'Developer Push → Jenkins → Docker Build → Registry Push → Terraform Provision → Ansible Config → Deploy → Test → Notify',
    steps: [
      'Create GitHub Repository with sample application',
      'Create Dockerfile and test locally (docker build, docker run)',
      'Install Jenkins and required plugins',
      'Create Jenkinsfile (Checkout → Build → Docker Push)',
      'Create Terraform main.tf (Provision VM/server)',
      'Create Ansible inventory & playbook (Install Docker, pull image, run container)',
      'Add Terraform & Ansible stages to Jenkinsfile',
      'Add Test Stage (curl health endpoint)',
      'Add Email Notification in Jenkins Post Actions'
    ],
    tools: ['Jenkins', 'Docker', 'Terraform', 'Ansible', 'GitHub', 'Linux'],
    icon: GitBranch,
    color: 'primary'
  },
  {
    title: 'CI/CD Pipeline for Kubernetes using Jenkins, Docker & Terraform',
    overview: 'Fully automated CI/CD pipeline that provisions infrastructure, deploys containerised application to Kubernetes, with end-to-end automation triggered by GitHub webhook.',
    flow: 'Developer Push → GitHub Webhook → Jenkins → Docker Build → Registry Push → Terraform Plan/Apply → K8s Deploy → App Live',
    steps: [
      'Create GitHub Repository with sample application code',
      'Create Dockerfile and test locally',
      'Configure GitHub Webhook → Jenkins',
      'Install Jenkins and required plugins (Docker, Kubernetes, Terraform)',
      'Create Jenkinsfile with multi-stage pipeline',
      'Build and Push Docker Image to Registry',
      'Terraform Plan (stored as artifact)',
      'Terraform Apply with controlled approvals',
      'Deploy to Kubernetes cluster'
    ],
    tools: ['Jenkins', 'Docker', 'Terraform', 'Kubernetes', 'GitHub Webhooks', 'ECR/ACR'],
    icon: Container,
    color: 'secondary'
  },
  {
    title: 'Automated WordPress Infrastructure on AWS using CloudFormation',
    overview: 'Production-ready WordPress setup with separate Production and Dev/Test environments. Dev/Test runs only during business hours (9 AM–6 PM) for cost optimization.',
    flow: 'Live Users → Route 53 → WordPress (Production EC2) | Developers → Isolated Dev/Test (Scheduled)',
    steps: [
      'Provision AWS infrastructure using CloudFormation',
      'Deploy production WordPress on EC2',
      'Create custom AMI from WordPress instance',
      'Configure Auto Scaling Group for self-healing',
      'Set up isolated Dev/Test WordPress environment',
      'Automate start/stop schedule for Dev/Test (business hours only)',
      'Enable Route 53 availability monitoring'
    ],
    tools: ['AWS CloudFormation', 'Amazon EC2', 'AMI', 'Auto Scaling Groups', 'Route 53', 'Linux'],
    icon: Cloud,
    color: 'accent'
  },
  {
    title: 'Real-Time NoSQL Data Warehousing using AWS Kinesis, Lambda & DynamoDB',
    overview: 'Real-time data ingestion and NoSQL data warehousing architecture for TELEMAX, enabling continuous collection and analysis of streaming network telemetry data.',
    flow: 'Real-Time Data → Kinesis Data Streams → AWS Lambda → DynamoDB (NoSQL Store)',
    steps: [
      'Create Amazon Kinesis Data Stream for real-time ingestion',
      'Develop AWS Lambda function to process streaming records',
      'Store processed data in Amazon DynamoDB',
      'Perform Scan operations for data validation and analysis'
    ],
    tools: ['AWS Kinesis', 'AWS Lambda', 'Amazon DynamoDB', 'AWS Console', 'Python/Node.js'],
    icon: Database,
    color: 'primary'
  },
  {
    title: 'End-to-End Java App Deployment on AWS EC2 using Azure DevOps CI/CD',
    overview: 'Cross-cloud CI/CD pipeline deploying Java application on AWS EC2, enabling secure online access. Uses Azure DevOps pipelines hosted on Azure VM for build, containerization, and deployment.',
    flow: 'Developer Commit → Git Repo → Azure DevOps Pipeline → Build & Containerize → Deploy to AWS EC2 → App Live',
    steps: [
      'Create Git repository for Java application source code',
      'Provision Azure VM and install Azure DevOps build agents',
      'Configure Azure DevOps CI/CD pipeline',
      'Build and package Java application',
      'Containerize application using Docker',
      'Deploy containerized application to AWS EC2',
      'Validate public access to the application'
    ],
    tools: ['Azure DevOps', 'Git', 'Azure VM', 'AWS EC2', 'Docker', 'Java'],
    icon: Server,
    color: 'secondary'
  },
  {
    title: 'Automated Application Deployment on Nginx using Ansible',
    overview: 'Ansible-based automation solution to deploy a blogging platform on remote Nginx web server, ensuring consistent, repeatable, and error-free application deployment.',
    flow: 'Source Code → Ansible Playbook → Remote Nginx Server → Application Live',
    steps: [
      'Create Ansible inventory for remote Nginx server',
      'Write Ansible playbook for application deployment',
      'Install and configure Nginx using Ansible',
      'Deploy application files to the web server',
      'Configure Nginx to serve the blogging platform',
      'Validate application accessibility'
    ],
    tools: ['Ansible', 'Nginx', 'Linux', 'YAML', 'SSH'],
    icon: Settings,
    color: 'accent'
  },
  {
    title: 'Custom Windows Server 2022 Image Creation for OpenStack',
    overview: 'Built a custom, production-ready Windows Server 2022 image for OpenStack, enabling reliable networking, efficient lifecycle management, and rapid provisioning of reusable Windows VMs optimized for performance, security, and cloud compatibility.',
    flow: 'Windows Install → VirtIO Drivers → QEMU Agent → Sysprep → Hardened Image → OpenStack Glance',
    steps: [
      'Install Windows Server 2022 using VirtIO SCSI drivers',
      'Load required storage drivers during installation',
      'Install NetKVM (VirtIO network driver) for stable networking',
      'Configure QEMU Guest Agent for VM lifecycle management',
      'Generalize OS using Sysprep for image reusability',
      'Apply security hardening best practices',
      'Upload and validate image in OpenStack Glance'
    ],
    tools: ['Windows Server 2022', 'OpenStack Glance', 'VirtIO Drivers', 'QEMU Guest Agent', 'Sysprep'],
    icon: Server,
    color: 'primary'
  },
  {
    title: 'On-Prem OpenStack Private Cloud Deployment with Full Monitoring',
    overview: 'Designed and validated a production-like OpenStack Private Cloud on bare-metal infrastructure in a physical data center, enabling hands-on practice and operational readiness aligned with enterprise data center standards.',
    flow: 'Bare-Metal Servers → OpenStack Services → Horizon Dashboard → Monitoring & Observability',
    steps: [
      'Deploy OpenStack Private Cloud on bare-metal servers',
      'Configure and validate Compute, Network, Block Storage, and Identity services',
      'Enable Horizon Dashboard for cloud administration',
      'Integrate Prometheus + Node Exporter + Grafana for monitoring',
      'Monitor real-time CPU, RAM, Disk, Network, and Swap metrics',
      'Validate platform stability via OS-level and dashboard metrics'
    ],
    tools: ['OpenStack', 'Bare-Metal Servers', 'Horizon Dashboard', 'Prometheus', 'Node Exporter', 'Grafana', 'Linux'],
    icon: Activity,
    color: 'secondary'
  },
  {
    title: 'Enterprise-Grade Multi-Cloud Infrastructure Automation using Terraform',
    overview: 'Modular, multi-environment, multi-cloud infrastructure platform spanning Azure, AWS, and OpenStack private cloud, following enterprise IaC best practices with unified strategy across hybrid and multi-cloud environments.',
    flow: 'Terraform Modules → Azure/AWS/OpenStack → Multi-Env (Pre-Prod, Prod, UAT) → Secure Infrastructure',
    steps: [
      'Design multi-environment architecture (pre-prod, prod, UAT, release, upgrade)',
      'Build reusable Terraform modules across Azure, AWS, and OpenStack',
      'Provision Azure: VNets, NSGs, Bastion, Key Vault, Linux VMs, Azure SQL',
      'Provision AWS: VPCs, Security Groups, EC2 instances, public access controls',
      'Provision OpenStack: Projects, Networks, Security Groups, VM provisioning',
      'Implement secrets management using Azure Key Vault',
      'Apply consistent naming, tagging, and governance standards'
    ],
    tools: ['Terraform', 'Microsoft Azure', 'AWS', 'OpenStack', 'Infrastructure as Code', 'Linux'],
    icon: Cloud,
    color: 'accent'
  }
];

const ProjectsPanel = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-mono neon-text-cyan mb-2">
          // PRODUCTION-GRADE PROJECTS
        </h2>
        <p className="text-sm text-muted-foreground font-mono">
          Real-world DevOps automation simulating enterprise environments
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          const borderColor = project.color === 'primary' 
            ? 'border-primary/50 hover:border-primary' 
            : project.color === 'secondary'
            ? 'border-secondary/50 hover:border-secondary'
            : 'border-accent/50 hover:border-accent';
          
          const glowClass = project.color === 'primary'
            ? 'hover:neon-glow-cyan'
            : project.color === 'secondary'
            ? 'hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]'
            : 'hover:neon-glow-pink';

          const iconColor = project.color === 'primary' 
            ? 'text-primary' 
            : project.color === 'secondary' 
            ? 'text-secondary' 
            : 'text-accent';

          return (
            <div
              key={idx}
              className={`bg-card/50 backdrop-blur-sm border ${borderColor} ${glowClass} rounded-lg p-5 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-muted/50 border border-border/50`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground font-mono leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Overview */}
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {project.overview}
              </p>

              {/* Flow Diagram */}
              <div className="bg-muted/30 rounded-lg p-3 mb-4 border border-border/30">
                <p className="text-xs font-mono text-primary break-words leading-relaxed">
                  {project.flow}
                </p>
              </div>

              {/* Steps */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground font-mono mb-2">// DELIVERABLES</p>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {project.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex items-start gap-2 text-xs">
                      <span className={`${iconColor} mt-0.5`}>▸</span>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 bg-muted/50 rounded text-muted-foreground border border-border/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPanel;
