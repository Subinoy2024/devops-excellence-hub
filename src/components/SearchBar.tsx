import { Search, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const searchableContent = [
  { section: 'About', id: 'about', keywords: ['devops', 'cloud', 'engineer', 'infrastructure', 'kyndryl', 'hcl', 'kpmg', 'atos', 'microland', 'cgi', 'tcs', 'capgemini', 'experience'] },
  { section: 'Skills', id: 'skills', keywords: ['azure', 'aws', 'kubernetes', 'docker', 'terraform', 'jenkins', 'github actions', 'helm', 'prometheus', 'grafana', 'openstack', 'elk', 'python', 'bash', 'powershell'] },
  { section: 'Experience', id: 'experience', keywords: ['responsibilities', 'ci/cd', 'pipeline', 'automation', 'deployment', 'container', 'monitoring', 'scripting'] },
  { section: 'Projects', id: 'projects', keywords: ['terraform', 'kubernetes', 'monitoring', 'ci/cd', 'multi-cloud', 'infrastructure', 'helm', 'prometheus', 'grafana'] },
  { section: 'Certifications', id: 'certifications', keywords: ['aws certified', 'az-104', 'az-400', 'terraform associate', 'microsoft', 'azure', 'upgrad'] },
  { section: 'Contact', id: 'contact', keywords: ['email', 'linkedin', 'github', 'resume', 'hire'] },
];

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const results = query.trim().length > 1
    ? searchableContent.filter(s =>
        s.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())) ||
        s.section.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setQuery('');
    setOpen(false);
  };

  return (
    <div className="relative">
      {!open ? (
        <button onClick={() => setOpen(true)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
          <Search size={18} />
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search skills, projects..."
              className="w-48 pl-8 pr-3 py-1.5 text-sm bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button onClick={() => { setOpen(false); setQuery(''); }} className="text-muted-foreground hover:text-foreground">
            <X size={16} />
          </button>
        </div>
      )}

      {open && results.length > 0 && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {results.map(r => (
            <button
              key={r.id}
              onClick={() => handleSelect(r.id)}
              className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              Go to <span className="text-primary font-medium">{r.section}</span>
            </button>
          ))}
        </div>
      )}

      {open && query.trim().length > 1 && results.length === 0 && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-lg shadow-lg p-3 z-50">
          <p className="text-xs text-muted-foreground">No results found</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
