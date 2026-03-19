import { Mail, Linkedin, Github, Download } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">Let's Connect</h2>
        <div className="w-16 h-1 bg-primary rounded mb-6 mx-auto" />
        <p className="text-muted-foreground mb-10">
          Open to Cloud DevOps Engineer, Cloud Platform Engineer, and infrastructure delivery roles.
          Let's discuss how I can contribute to your engineering team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:sdebnath8887@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
          >
            <Mail size={16} />
            sdebnath8887@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/subinoy-debnath-3ab534272"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Subinoy2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        <div className="mt-8">
          <a
            href={`${import.meta.env.BASE_URL}README.md`}
            download="Subinoy_Debnath_Resume.md"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
