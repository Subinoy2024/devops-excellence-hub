const KnowledgePanel = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-mono neon-text-cyan mb-2">
          // KNOWLEDGE BASE
        </h2>
      </div>

      {/* Coming Soon */}
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <p className="text-xl text-muted-foreground font-mono animate-pulse">
            yet to come .......
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePanel;
