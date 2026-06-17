import { Quote } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Quote size={20} className="text-primary" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold font-heading mb-4">Engineering Philosophy</h2>
        <p className="text-muted-foreground leading-relaxed text-[15px] italic">
          "Automation, standardization, and scalability drive my approach to Cloud & DevOps engineering.
          Infrastructure should be reproducible, secure, and delivered through code."
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
