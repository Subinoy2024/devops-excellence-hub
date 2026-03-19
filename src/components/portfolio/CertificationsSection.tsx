import { Cloud, Settings, Award, GitBranch, Brain, BookOpen, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  { title: 'AWS Certified CloudOps Engineer – Associate', issuer: 'Amazon Web Services', icon: Cloud },
  { title: 'Terraform Associate (004)', issuer: 'HashiCorp', icon: Settings },
  { title: 'AZ-104: Azure Administrator Associate', issuer: 'Microsoft', icon: Award },
  { title: 'AZ-400: Microsoft DevOps Solutions', issuer: 'Microsoft', icon: GitBranch },
  { title: 'AZ-204: Azure Developer Associate', issuer: 'Microsoft', icon: Award },
  { title: 'Azure AI Fundamentals', issuer: 'Microsoft', icon: Brain },
  { title: 'Microsoft 365 Certifications', issuer: 'Microsoft', icon: Award },
  { title: 'AI Infrastructure Management', issuer: 'Professional Training', icon: Brain },
  { title: 'Microsoft Foundry', issuer: 'Microsoft', icon: Settings },
  {
    title: 'Cloud Engineer Bootcamp (AWS, Azure, GCP)',
    issuer: 'UPGRAD',
    icon: BookOpen,
    description: '7-month intensive bootcamp program',
    certificateImage: '/assets/upgrad-certificate.png',
  },
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Certifications</h2>
        <div className="w-16 h-1 bg-primary rounded mb-3" />
        <p className="text-sm text-muted-foreground mb-10">
          Industry certifications that validate my cloud and DevOps expertise.
        </p>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="bg-card border border-border rounded-xl p-4 card-hover animate-fade-in flex items-start gap-3"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">{cert.title}</h3>
                  <p className="text-xs text-primary mt-0.5">{cert.issuer}</p>
                  {cert.description && (
                    <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
                  )}
                  {cert.certificateImage && (
                    <button
                      onClick={() => setSelectedCert(cert.certificateImage!)}
                      className="mt-2 flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      <ExternalLink size={11} />
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
