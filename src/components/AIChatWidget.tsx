import { MessageCircle, X, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

const knowledge: Record<string, string> = {
  'who|name|about|introduction': "I'm Subinoy Debnath — a Cloud & DevOps Engineering with 12+ years of IT experience and 6+ years specializing in Cloud & DevOps. I build scalable, resilient, and secure cloud platforms for enterprise clients.",
  'experience|years|companies|work': "I have 12+ years of IT experience across leading organizations: Kyndryl, HCL, KPMG, Atos, Microland, CGI, TCS, and Capgemini — delivering production-grade infrastructure at scale.",
  'skills|technologies|tools|tech stack': "My core skills include: Azure (AKS, VMs), AWS (EKS, EC2, S3), Kubernetes, Docker, Helm, Terraform, Jenkins, GitHub Actions, ArgoCD, Prometheus, Grafana, and Infrastructure as Code with ARM/CloudFormation.",
  'cloud|azure|aws': "I work across Azure and AWS. On Azure: AKS, VMs, Storage, Policy, Sentinel. On AWS: EKS, EC2, S3, IAM, CloudFormation, Kinesis, Lambda, DynamoDB.",
  'kubernetes|docker|container': "I specialize in container orchestration with Kubernetes (AKS/EKS), Docker, Helm charts, and Kustomize for managing complex deployments.",
  'ci.?cd|pipeline|jenkins|devops': "I build CI/CD pipelines using Azure DevOps, Jenkins, GitHub Actions, and ArgoCD for GitOps-based deployments.",
  'terraform|iac|infrastructure as code': "I use Terraform, ARM Templates, and CloudFormation for Infrastructure as Code — ensuring consistent, auditable, and production-grade environments.",
  'project': "I've built 9 real-world DevOps projects including: automated CI/CD pipelines with Docker/Jenkins/Terraform, Kubernetes deployments, WordPress on AWS CloudFormation, real-time data warehousing with Kinesis/Lambda/DynamoDB, OpenStack private cloud, and multi-cloud Terraform automation.",
  'certification|certified|cert': "My certifications include: AWS Certified CloudOps Engineer Associate, AZ-104 Azure Administrator, Microsoft 365 certs, Cloud Engineer Bootcamp from UPGRAD, and AI-Powered Cloud & DevOps from IIT Guwahati (expected 2025-2026).",
  'contact|email|reach|hire': "You can reach me at sdebnath8887@gmail.com, on LinkedIn (linkedin.com/in/subinoy-debnath-3ab534272), or GitHub (github.com/Subinoy2024).",
  'ai|aiops|genai|machine learning': "I'm currently exploring AI-driven cloud operations (AIOps / GenAI) to enhance automation and enable smarter infrastructure management. I'm also pursuing an AI-Powered Cloud & DevOps certificate from IIT Guwahati.",
  'openstack|private cloud': "I've designed and built an on-prem OpenStack Private Cloud on bare-metal with Prometheus + Grafana monitoring, and created custom Windows Server 2022 images for OpenStack.",
  'monitoring|observability|grafana|prometheus': "For monitoring, I use Prometheus, Grafana, Azure Monitor, and ELK Stack to ensure full observability across infrastructure.",
  'security|compliance|rbac|iam': "I implement security through Azure Policy, Sentinel, IAM, RBAC, and Key Vault — ensuring compliance and secure access management.",
};

function getResponse(input: string): string {
  const q = input.toLowerCase();
  for (const [pattern, answer] of Object.entries(knowledge)) {
    if (new RegExp(pattern, 'i').test(q)) return answer;
  }
  return "I can answer questions about Subinoy's skills, experience, projects, certifications, and contact info. Try asking about a specific topic!";
}

const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Subinoy's AI assistant. Ask me anything about his skills, experience, projects, or certifications!" }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    const reply: Message = { role: 'assistant', content: getResponse(input) };
    setMessages(prev => [...prev, userMsg, reply]);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform"
          aria-label="Open AI assistant"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 max-h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">AI Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[250px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-muted text-foreground rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-border">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about skills, projects..."
              className="flex-1 px-3 py-2 text-sm bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button onClick={send} className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors" aria-label="Send">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
