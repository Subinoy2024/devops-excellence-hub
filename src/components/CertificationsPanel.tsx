import { Award, GraduationCap, BookOpen, Cloud } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    title: 'AWS Certified CloudOps Engineer - Associate',
    issuer: 'Amazon Web Services',
    icon: Cloud,
    color: 'primary'
  },
  {
    title: 'AZ-104: Microsoft Azure Administrator Associate',
    issuer: 'Microsoft',
    icon: Award,
    color: 'secondary'
  },
  {
    title: 'Microsoft 365 Certifications',
    issuer: 'Microsoft',
    icon: Award,
    color: 'accent'
  },
  {
    title: 'Cloud Engineer Bootcamp (AWS, Azure and GCP)',
    issuer: 'UPGRAD',
    description: 'Successfully participated in the 7 months bootcamp program. Issued on 17-02-2025',
    icon: BookOpen,
    color: 'primary',
    certificateImage: '/assets/upgrad-certificate.png'
  },
  {
    title: 'AI Powered Cloud & DevOps',
    issuer: 'Indian Institute of Technology, Guwahati',
    description: 'Professional Certificate Program in Cloud Computing & DevOps covering cloud development and deployment',
    timeline: '2025 - 2026 (Expected)',
    icon: GraduationCap,
    color: 'secondary'
  }
];

const CertificationsPanel = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-mono neon-text-cyan mb-2">
          // CERTIFICATIONS
        </h2>
        <p className="text-sm text-muted-foreground font-mono">
          Professional certifications and continuous learning achievements
        </p>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl w-full animate-fade-in">
            <img 
              src={selectedCert} 
              alt="Certificate" 
              className="w-full h-auto rounded-lg border border-primary/50 neon-glow-cyan"
            />
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 px-3 py-1 bg-card/90 border border-primary/50 rounded text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => {
          const Icon = cert.icon;
          const borderColor = cert.color === 'primary' 
            ? 'border-primary/50 hover:border-primary' 
            : cert.color === 'secondary'
            ? 'border-secondary/50 hover:border-secondary'
            : 'border-accent/50 hover:border-accent';
          
          const glowClass = cert.color === 'primary'
            ? 'hover:neon-glow-cyan'
            : cert.color === 'secondary'
            ? 'hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]'
            : 'hover:neon-glow-pink';

          const iconColor = cert.color === 'primary' 
            ? 'text-primary' 
            : cert.color === 'secondary' 
            ? 'text-secondary' 
            : 'text-accent';

          return (
            <div
              key={cert.title}
              className={`bg-card/50 backdrop-blur-sm border ${borderColor} ${glowClass} rounded-lg p-5 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-card/80 border ${borderColor}`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground font-mono mb-1">
                    {cert.title}
                  </h3>
                  <p className={`text-xs ${iconColor} font-mono mb-2`}>
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      {cert.description}
                    </p>
                  )}
                  {cert.timeline && (
                    <span className="inline-block text-xs px-2 py-1 bg-primary/10 border border-primary/30 rounded text-primary font-mono">
                      {cert.timeline}
                    </span>
                  )}
                  {cert.certificateImage && (
                    <button
                      onClick={() => setSelectedCert(cert.certificateImage)}
                      className="mt-3 flex items-center gap-2 text-xs px-3 py-1.5 bg-primary/10 border border-primary/30 rounded text-primary font-mono hover:bg-primary/20 hover:border-primary transition-all"
                    >
                      <Award size={14} />
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
  );
};

export default CertificationsPanel;
