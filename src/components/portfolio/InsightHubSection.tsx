import { Lightbulb, Shield, Github, ExternalLink } from 'lucide-react';

const InsightHubSection = () => {
  return (
    <section id="insighthub" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Lightbulb size={20} className="text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Insight Hub
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Practical write-ups and deep dives from the field.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-primary/50 hover:border-primary hover:neon-glow-cyan rounded-lg p-6 transition-all duration-300 animate-fade-in">
          {/* Card Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="p-2.5 rounded-lg bg-muted/50 border border-border/50">
              <Shield size={26} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-foreground font-mono leading-tight mb-1">
                Terraform + OPA Policy-as-Code
              </h3>
              <p className="text-xs text-muted-foreground font-mono">
                DevSecOps / Infrastructure Governance
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Explored how Open Policy Agent (OPA) can be integrated with Terraform to introduce
            security and governance checks before AWS infrastructure is provisioned. This project
            demonstrates how infrastructure plans can be evaluated against custom Rego policies,
            helping prevent common cloud misconfigurations such as public access, missing governance
            tags, and non-compliant resources. It serves as a practical foundation for implementing
            Policy-as-Code in modern DevSecOps workflows and can be extended to CI/CD pipelines for
            automated compliance enforcement.
          </p>

          {/* Highlights */}
          <div className="mb-5">
            <p className="text-xs text-muted-foreground font-mono mb-2">// HIGHLIGHTS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Automated infrastructure policy validation',
                'Rego-based security rules',
                'AWS infrastructure governance',
                'Terraform plan evaluation',
                'CI/CD ready workflow'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">▸</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-xs text-muted-foreground font-mono mb-2">// TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {['Terraform', 'OPA', 'Rego', 'Python', 'AWS'].map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2.5 py-1 bg-muted/50 rounded text-muted-Post too large, but context is preserved. Continue from exactly where you would have stopped reading — do not restart the response.
