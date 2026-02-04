import { Building2 } from 'lucide-react';

interface Experience {
  company: string;
  period: string;
  role: string;
  duration: string;
}

const experiences: Experience[] = [
  { company: 'KYNDRYL', period: 'Sep 2022 - Sep 2025', role: 'Cloud Infrastructure', duration: '3 yrs' },
  { company: 'HCL', period: 'May 2022 - Sep 2022', role: 'Platform Engineering', duration: '5 mos' },
  { company: 'KPMG', period: 'May 2021 - May 2022', role: 'DevOps Transformation', duration: '1 yr' },
  { company: 'ATOS', period: 'Feb 2019 - Apr 2021', role: 'Infrastructure Automation', duration: '2 yrs' },
  { company: 'MICROLAND', period: 'Jan 2017 - Jun 2018', role: 'Managed Services', duration: '1.5 yrs' },
  { company: 'CGI', period: 'Aug 2015 - Jan 2017', role: 'Cloud Operations', duration: '1.5 yrs' },
  { company: 'TCS', period: 'Aug 2015 - Jan 2017', role: 'Enterprise Solutions', duration: '1.5 yrs' },
  { company: 'CAPGEMINI', period: 'Feb 2013 - Aug 2015', role: 'Digital Transformation', duration: '2.5 yrs' },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-30 animate-pulse" />
      
      <div className="relative bg-card border border-primary/50 rounded-lg p-6 neon-glow-cyan">
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="text-primary" size={20} />
          <h2 className="text-lg font-bold text-foreground neon-text-cyan">
            CAREER TIMELINE
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-card border-2 border-primary group-hover:bg-primary transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-0 group-hover:opacity-100" />
                </div>

                {/* Content card */}
                <div className="bg-muted/20 border border-primary/20 rounded-lg p-3 hover:border-primary/50 hover:bg-muted/30 transition-all duration-300 group-hover:neon-glow-cyan">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-primary">
                      {exp.company}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 bg-primary/20 text-primary rounded-full font-mono">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">
                    {exp.period}
                  </p>
                  <p className="text-xs text-accent">
                    {exp.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary footer */}
        <div className="mt-6 pt-4 border-t border-primary/20">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-mono">
              Total Experience
            </span>
            <span className="text-primary font-bold">
              12+ Years
            </span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span className="text-muted-foreground font-mono">
              Enterprise Clients
            </span>
            <span className="text-accent font-bold">
              8 Organizations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
