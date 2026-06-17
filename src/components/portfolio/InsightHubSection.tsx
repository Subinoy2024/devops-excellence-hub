import { Lightbulb } from 'lucide-react';

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
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
            Engineering Insights & Notes
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default InsightHubSection;
