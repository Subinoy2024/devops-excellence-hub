import { useState } from 'react';
import Terminal from '@/components/Terminal';
import ProfileCard from '@/components/ProfileCard';
import SkillsPanel from '@/components/SkillsPanel';
import MatrixRain from '@/components/MatrixRain';
import { Download, MessageSquare, User, Cpu } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'profile' | 'skills'>('terminal');

  return (
    <div className="min-h-screen bg-background text-foreground matrix-bg">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 border border-primary rounded flex items-center justify-center neon-glow-cyan">
                  <Cpu className="text-primary" size={20} />
                </div>
                <div>
                  <h1 className="text-xl font-bold font-mono neon-text-cyan">
                    DEVOPS-AI INTERFACE
                  </h1>
                  <p className="text-xs text-muted-foreground font-mono">
                    v2.0.0 // Neural Network Active
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
          <div className="flex gap-2 mb-6">
            {[
              { id: 'terminal', label: 'AI Terminal', icon: MessageSquare },
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'skills', label: 'Skills Matrix', icon: Cpu },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-sm transition-all ${
                  activeTab === id
                    ? 'bg-primary text-primary-foreground neon-glow-cyan'
                    : 'bg-muted/30 text-muted-foreground border border-border hover:border-primary/50'
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
                    {/* Experience */}
                    <div className="bg-card/50 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-sm font-mono text-primary mb-3 neon-text-cyan">
                        // ENTERPRISE EXPERIENCE
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['Kyndryl', 'HCL Technologies', 'KPMG', 'ATOS', 'Microland'].map((company) => (
                          <span
                            key={company}
                            className="text-xs px-3 py-1.5 bg-muted/50 rounded border border-border text-foreground"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-card/50 border border-accent/30 rounded-lg p-4">
                      <h3 className="text-sm font-mono text-accent mb-3 neon-text-pink">
                        // PHILOSOPHY
                      </h3>
                      <p className="text-sm text-muted-foreground italic font-mono leading-relaxed">
                        "Infrastructure should be cattle, not pets. Automate everything, trust nothing, verify always."
                      </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-card/50 border border-secondary/30 rounded-lg p-4">
                      <h3 className="text-sm font-mono text-secondary mb-3">
                        // CONNECT
                      </h3>
                      <div className="space-y-2">
                        <a
                          href="https://linkedin.com/in/subinoydebnath"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          → linkedin.com/in/subinoydebnath
                        </a>
                        <a
                          href="https://github.com/subinoydebnath"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          → github.com/subinoydebnath
                        </a>
                        <a
                          href="mailto:subinoy.debnath@email.com"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          → subinoy.debnath@email.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && <SkillsPanel />}
            </div>

            {/* Sidebar - Stats */}
            <div className="space-y-4">
              {/* System Status */}
              <div className="bg-card/50 border border-primary/30 rounded-lg p-4">
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
              <div className="bg-card/50 border border-secondary/30 rounded-lg p-4">
                <h3 className="text-xs font-mono text-secondary mb-3">ACTIVE_STACK</h3>
                <div className="space-y-1 text-xs font-mono text-muted-foreground">
                  {[
                    'Azure Cloud Platform',
                    'Terraform Enterprise',
                    'Kubernetes Clusters',
                    'Azure DevOps Pipelines',
                    'Prometheus + Grafana',
                    'ArgoCD GitOps',
                  ].map((tech, idx) => (
                    <div key={tech} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-glow" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-card/50 border border-accent/30 rounded-lg p-4">
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
              © 2024 SUBINOY DEBNATH // DEVOPS-AI INTERFACE // ALL SYSTEMS OPERATIONAL
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
