import { useState } from 'react';
import Terminal from '@/components/Terminal';
import ProfileCard from '@/components/ProfileCard';
import SkillsPanel from '@/components/SkillsPanel';
import ProjectsPanel from '@/components/ProjectsPanel';
import KnowledgePanel from '@/components/KnowledgePanel';
import CertificationsPanel from '@/components/CertificationsPanel';

import MatrixRain from '@/components/MatrixRain';
import { Download, MessageSquare, User, Cpu, FolderGit2, BookOpen, Award } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'profile' | 'skills' | 'projects' | 'knowledge' | 'certifications'>('terminal');

  const tabs = [
    { id: 'terminal', label: 'Profile AI Assistance', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'skills', label: 'Skills Matrix', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground matrix-bg">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Animated gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded blur opacity-50 animate-pulse" />
                  <div className="relative w-12 h-12 bg-card border border-primary rounded flex items-center justify-center neon-glow-cyan">
                    <Cpu className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold font-mono neon-text-cyan">
                    CLOUD-DEVOPS AI INTERFACE
                  </h1>
                  <p className="text-xs text-muted-foreground font-mono">
                    v2.0.0 // Neural Network Active // AIOps Enabled
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/README.md"
                  download="README.md"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/50 rounded text-primary text-sm font-mono hover:bg-primary/20 hover:border-primary transition-all neon-glow-cyan"
                >
                  <Download size={16} />
                  <span>README.md</span>
                </a>
              </div>
            </div>
          </header>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded font-mono text-xs md:text-sm transition-all ${
                  activeTab === id
                    ? 'bg-primary text-primary-foreground neon-glow-cyan'
                    : 'bg-muted/30 text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <main className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content Panel */}
            <div className="lg:col-span-3">
              {activeTab === 'terminal' && (
                <div className="h-[600px] md:h-[700px]">
                  <Terminal />
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <ProfileCard />
                  <div className="space-y-4">
                    {/* Enterprise Experience */}
                    <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
                      <h3 className="text-sm font-mono text-primary mb-3 neon-text-cyan">
                        // ENTERPRISE EXPERIENCE
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['KYNDRYL', 'HCL', 'KPMG', 'ATOS', 'MICROLAND', 'CGI', 'TCS', 'CAPGEMINI'].map((company) => (
                          <span
                            key={company}
                            className="text-xs px-3 py-1.5 bg-primary/10 rounded border border-primary/30 text-foreground font-mono hover:bg-primary/20 hover:border-primary transition-all"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg p-4">
                      <h3 className="text-sm font-mono text-accent mb-3 neon-text-pink">
                        // PHILOSOPHY
                      </h3>
                      <p className="text-sm text-muted-foreground italic font-mono leading-relaxed">
                        "Simplicity, observability, and resilience guide every architectural decision I make. Infrastructure should be cattle, not pets."
                      </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-lg p-4">
                      <h3 className="text-sm font-mono text-secondary mb-3">
                        // CONNECT
                      </h3>
                      <div className="space-y-2">
                        <a
                          href="https://www.linkedin.com/in/subinoy-debnath-3ab534272"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          → linkedin.com/in/subinoy-debnath-3ab534272
                        </a>
                        <a
                          href="https://github.com/Subinoy2024/subinoy.debnath_dc_cloud.io.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          → github.com/Subinoy2024
                        </a>
                        <a
                          href="mailto:sdebnath8887@gmail.com"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          → sdebnath8887@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && <SkillsPanel />}
              {activeTab === 'projects' && <ProjectsPanel />}
              {activeTab === 'knowledge' && <KnowledgePanel />}
              {activeTab === 'certifications' && <CertificationsPanel />}
            </div>

            {/* Sidebar - Stats */}
            <div className="space-y-4">
              {/* System Status */}
              <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
                <h3 className="text-xs font-mono text-primary mb-3">SYSTEM_STATUS</h3>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Neural Net</span>
                    <span className="text-primary">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="text-secondary">12+ YRS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cloud Exp</span>
                    <span className="text-accent">6+ YRS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deployments</span>
                    <span className="text-primary">1000+</span>
                  </div>
                </div>
              </div>

              {/* Active Technologies */}
              <div className="bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-lg p-4">
                <h3 className="text-xs font-mono text-secondary mb-3">ACTIVE_STACK</h3>
                <div className="space-y-1 text-xs font-mono text-muted-foreground">
                  {[
                    'Azure Cloud Platform',
                    'Terraform Enterprise',
                    'Kubernetes Clusters',
                    'Azure DevOps Pipelines',
                    'Prometheus + Grafana',
                    'ArgoCD GitOps',
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-glow" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg p-4">
                <h3 className="text-xs font-mono text-accent mb-3">QUICK_GUIDE</h3>
                <div className="text-xs font-mono text-muted-foreground space-y-1">
                  <p>→ Type 'hello' to start</p>
                  <p>→ Ask about 'skills'</p>
                  <p>→ Explore 'projects'</p>
                  <p>→ Type 'help' for all</p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-8 text-center text-xs text-muted-foreground font-mono">
            <p className="neon-text-cyan">
              © 2025 SUBINOY DEBNATH // CLOUD-DEVOPS AI INTERFACE // ALL SYSTEMS OPERATIONAL
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
