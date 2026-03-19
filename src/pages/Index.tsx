import { Github, Linkedin, Mail, Download, ChevronDown, Cloud, Container, GitBranch, Shield, Activity, Settings, Users, Brain, Award, GraduationCap, BookOpen, ExternalLink } from 'lucide-react';
import { getToolIcon } from '@/lib/toolIcons';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications & Trainings' },
  { id: 'contact', label: 'Contact' },
];

const skills = [
  { category: 'Cloud & Infrastructure', icon: Cloud, items: ['Azure', 'AWS', 'OpenStack', 'Azure App Services', 'Azure Functions', 'AWS Lambda', 'Serverless', 'Event-Driven Architecture'] },
  { category: 'Containers & Platform Engineering', icon: Container, items: ['Kubernetes', 'Docker', 'Helm', 'OpenShift Admin', 'Deployment & Routing', 'Secrets & ConfigMaps', 'RBAC', 'Troubleshooting'] },
  { category: 'CI/CD & Automation', icon: GitBranch, items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'Git', 'GitHub', 'Azure Repos', 'Azure Boards', 'Jira', 'MLOps', 'Microservice Deployment', 'Monolithic Deployment', 'Python', 'PowerShell', 'Shell'] },
  { category: 'Infrastructure as Code', icon: Settings, items: ['Terraform', 'ARM Templates', 'AWS CloudFormation'] },
  { category: 'Security & Secrets', icon: Shield, items: ['Azure Policy', 'IAM', 'RBAC', 'Azure Key Vault', 'AWS Secrets Manager'] },
  { category: 'Observability', icon: Activity, items: ['Prometheus', 'Grafana', 'Azure Monitor', 'ELK Stack'] },
  { category: 'AI & Modern Engineering Enthusiast', icon: Brain, items: ['AI/ML Foundations', 'AI Infrastructure', 'Agentic AI', 'Prompt Engineering', 'Vibe Coding', 'n8n', 'Make', 'ChatGPT', 'Custom GPTs'] },
  { category: 'Team & Execution', icon: Users, items: ['Collaboration', 'Support', 'Delivery', 'Operational Ownership'] },
];

const projects = [
  {
    title: 'Automated CI/CD Pipeline with Docker, Jenkins, Terraform & Ansible',
    overview: 'End-to-end automated CI/CD pipeline simulating real production environment integrating version control, CI/CD, containerization, IaC, configuration management, testing, and notification.',
    tools: ['Jenkins', 'Docker', 'Terraform', 'Ansible', 'GitHub', 'Linux'],
  },
  {
    title: 'CI/CD Pipeline for Kubernetes using Jenkins, Docker & Terraform',
    overview: 'Fully automated CI/CD pipeline that provisions infrastructure, deploys containerised application to Kubernetes, with end-to-end automation triggered by GitHub webhook.',
    tools: ['Jenkins', 'Docker', 'Terraform', 'Kubernetes', 'GitHub Webhooks', 'ECR/ACR'],
  },
  {
    title: 'Automated WordPress Infrastructure on AWS using CloudFormation',
    overview: 'Production-ready WordPress setup with separate Production and Dev/Test environments. Dev/Test runs only during business hours for cost optimization.',
    tools: ['AWS CloudFormation', 'Amazon EC2', 'AMI', 'Auto Scaling Groups', 'Route 53'],
  },
  {
    title: 'Real-Time NoSQL Data Warehousing using AWS Kinesis, Lambda & DynamoDB',
    overview: 'Real-time data ingestion and NoSQL data warehousing architecture for continuous collection and analysis of streaming network telemetry data.',
    tools: ['AWS Kinesis', 'AWS Lambda', 'Amazon DynamoDB', 'Python/Node.js'],
  },
  {
    title: 'End-to-End Java App Deployment on AWS EC2 using Azure DevOps CI/CD',
    overview: 'Cross-cloud CI/CD pipeline deploying Java application on AWS EC2, enabling secure online access via Azure DevOps pipelines.',
    tools: ['Azure DevOps', 'Git', 'Azure VM', 'AWS EC2', 'Docker', 'Java'],
  },
  {
    title: 'Custom Windows Server 2022 Image for OpenStack',
    overview: 'Built a custom, production-ready Windows Server 2022 image for OpenStack with VirtIO drivers, QEMU agent, and security hardening.',
    tools: ['Windows Server 2022', 'OpenStack Glance', 'VirtIO', 'QEMU', 'Sysprep'],
  },
  {
    title: 'On-Prem OpenStack Private Cloud with Full Monitoring',
    overview: 'Designed and validated a production-like OpenStack Private Cloud on bare-metal infrastructure with Prometheus + Grafana monitoring.',
    tools: ['OpenStack', 'Bare-Metal', 'Prometheus', 'Node Exporter', 'Grafana', 'Linux'],
  },
  {
    title: 'Enterprise Multi-Cloud Infrastructure Automation using Terraform',
    overview: 'Modular, multi-environment, multi-cloud infrastructure platform spanning Azure, AWS, and OpenStack following enterprise IaC best practices.',
    tools: ['Terraform', 'Azure', 'AWS', 'OpenStack', 'Infrastructure as Code'],
  },
  {
    title: 'Automated Application Deployment on Nginx using Ansible',
    overview: 'Ansible-based automation to deploy a blogging platform on remote Nginx web server, ensuring consistent and repeatable deployment.',
    tools: ['Ansible', 'Nginx', 'Linux', 'YAML', 'SSH'],
  },
];

const certifications = [
  
  { title: 'AWS Certified CloudOps Engineer - Associate', issuer: 'Amazon Web Services', icon: Cloud },
  { title: 'Terraform Associate (004)', issuer: 'HashiCorp', icon: Settings },
  { title: 'AZ-104: Microsoft Azure Administrator Associate', issuer: 'Microsoft', icon: Award },
  { title: 'AZ-400: Designing and Implementing Microsoft DevOps Solutions', issuer: 'Microsoft', icon: GitBranch },
  { title: 'Azure Developer Associate (AZ-204)', issuer: 'Microsoft', icon: Award },
  { title: 'Azure AI Fundamentals', issuer: 'Microsoft', icon: Brain },
  { title: 'Microsoft 365 Certifications', issuer: 'Microsoft', icon: Award },
  { title: 'AI Infrastructure Management', issuer: 'Professional Training', icon: Brain },
  { title: 'Microsoft Foundry', issuer: 'Microsoft', icon: Settings },
  { title: 'Cloud Engineer Bootcamp (AWS, Azure and GCP)', issuer: 'UPGRAD', icon: BookOpen, description: 'Successfully completed the 7-month bootcamp program', certificateImage: '/assets/upgrad-certificate.png' },
];

const companies = ['KYNDRYL', 'HCL', 'KPMG', 'ATOS', 'MICROLAND', 'CGI', 'TCS', 'CAPGEMINI', 'MICROPOINT'];

const Index = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground bg-grid bg-orbs relative">
      <div className="bg-radial-glow fixed inset-0 pointer-events-none" />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-heading text-lg font-bold tracking-tight text-primary">
              SD<span className="text-muted-foreground">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <SearchBar />
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}README.md`}
                download="README.md"
                className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border pt-4 space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.png`}
                alt="Subinoy Debnath"
                className="w-28 h-28 rounded-full border-2 border-primary/30 object-cover mx-auto"
              />
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                <span className="text-xs text-primary-foreground font-bold">✓</span>
              </div>
            </div>
          </div>

          <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase mono-font">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mb-4">
            Subinoy Debnath
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">
            Cloud Platform & DevOps Engineer
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            14 Years IT Experience · 6+ Years Cloud & DevOps · Enterprise Infrastructure at Scale
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a href="https://github.com/Subinoy2024" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-sm transition-all">
              <Github size={20} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/subinoy-debnath-3ab534272" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-sm transition-all">
              <Linkedin size={20} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a href="mailto:sdebnath8887@gmail.com" className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-sm transition-all">
              <Mail size={20} className="text-muted-foreground hover:text-foreground" />
            </a>
          </div>

          <a href="#about" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Results-driven Cloud Platform & DevOps Engineer with a strong foundation in infrastructure engineering and a passion for building scalable, resilient, and secure cloud and application deployment platforms.
              </p>
              <p>
                Experienced in delivering enterprise-grade infrastructure solutions across global organizations including Kyndryl, HCL, KPMG, Atos, Microland, CGI, TCS, and Capgemini, with a focus on reliability, consistency, and operational excellence at scale.
              </p>
              <p className="text-primary/80 italic">
                Also expanding into MLOps, AIOps, and GenAI-driven automation to enhance operational intelligence, improve platform efficiency, and support modern infrastructure management.
              </p>
              <h3 className="text-sm font-medium text-foreground mt-4 mb-2 uppercase tracking-wider">Key Responsibilities</h3>
              <p className="text-sm leading-relaxed">
                Drove cloud provisioning, infrastructure automation, and application deployment using modern DevOps and IaC practices. Engineered Git-based workflows for version control, collaboration, and controlled change management across infrastructure and application codebases. Built and optimized Azure DevOps CI/CD pipelines for continuous integration, automated validation, release orchestration, and deployment automation. Delivered OpenShift containerization and application deployments through scalable, repeatable, and production-ready release practices. Enabled multi-cloud delivery through standardized automation and reusable deployment models. Embedded DevSecOps controls through secure configuration, policy-driven automation, and governance-aligned delivery practices. Optimized cloud cost through right-sizing, efficient resource utilization, and automation-led operational control. Strengthened resilience, observability, deployment velocity, and platform efficiency across enterprise environments.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Enterprise Experience</h3>
              <div className="flex flex-wrap gap-2">
                {companies.map(company => (
                  <span key={company} className="text-xs px-3 py-1.5 bg-card rounded-lg border border-border text-muted-foreground">
                    {company}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-medium text-foreground mt-6 mb-3 uppercase tracking-wider">Philosophy</h3>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Simplicity, observability, and resilience guide my approach to cloud and DevOps delivery. Infrastructure should be cattle, not pets."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Skills</h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.category}
                  className="bg-card border border-border rounded-xl p-5 card-hover animate-fade-in"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon size={18} className="text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map(item => {
                      const toolInfo = getToolIcon(item);
                      const ToolIcon = toolInfo?.icon;
                      return (
                        <span key={item} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground inline-flex items-center gap-1">
                          {ToolIcon && <ToolIcon size={16} className={toolInfo.color} />}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded mb-3" />
          <p className="text-sm text-muted-foreground mb-10">Cloud Infrastructure, DevOps & Application Delivery</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-5 card-hover animate-fade-in flex flex-col"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <h3 className="text-sm font-semibold text-foreground mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.overview}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map(tool => {
                    const toolInfo = getToolIcon(tool);
                    const ToolIcon = toolInfo?.icon;
                    return (
                      <span key={tool} className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20 inline-flex items-center gap-1">
                        {ToolIcon && <ToolIcon size={14} className={toolInfo.color} />}
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Certifications & Trainings</h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          {/* Certificate Modal */}
          {selectedCert && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div className="relative max-w-4xl w-full animate-fade-in">
                <img src={selectedCert} alt="Certificate" className="w-full h-auto rounded-xl border border-border" />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 px-4 py-2 bg-card border border-border rounded-lg text-sm hover:bg-muted transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="bg-card border border-border rounded-xl p-5 card-hover animate-fade-in"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground mb-1">{cert.title}</h3>
                      <p className="text-xs text-primary mb-1">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                      )}
                      {cert.certificateImage && (
                        <button
                          onClick={() => setSelectedCert(cert.certificateImage!)}
                          className="mt-3 flex items-center gap-1.5 text-xs text-primary hover:underline"
                        >
                          <ExternalLink size={12} />
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Get in Touch</h2>
          <div className="w-16 h-1 bg-primary rounded mb-6 mx-auto" />
          <p className="text-muted-foreground mb-10">
            Open to Cloud & DevOps consulting, platform engineering roles, and infrastructure architecture discussions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:sdebnath8887@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} />
              sdebnath8887@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/subinoy-debnath-3ab534272"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Subinoy2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 dccloud.in.net · Cloud Platform & DevOps Engineer · All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Index;
