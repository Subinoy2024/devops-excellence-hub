import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-heading text-lg font-bold tracking-tight text-primary">
            SD<span className="text-muted-foreground">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <SearchBar />
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}README.md`}
              download="Subinoy_Debnath_Resume.md"
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
