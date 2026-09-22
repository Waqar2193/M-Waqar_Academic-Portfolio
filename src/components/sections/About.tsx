import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="rounded-2xl border border-border/60 bg-surface-elevated p-6 lg:p-7 shadow-sm">
            <p className="text-text-secondary leading-relaxed">
              My journey began with a B.S. (Honors) at the University of Sargodha and an M.S. at COMSATS University Islamabad, followed by seven years teaching programming and data science at Bahria Foundation College, Attock. Today, I bring that teaching perspective to my PhD at the Machine Learning Laboratory, focusing on forecasting that makes EV charging more efficient, cost-aware and reliable — work oriented toward sustainable energy systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border/60 bg-surface-elevated p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold tracking-tight text-text-primary mb-2">Focus</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Probabilistic and cross-zone meta-learning for EV energy forecasting, cost- and uncertainty-aware planning, and LLM-augmented tabular models.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface-elevated p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold tracking-tight text-text-primary mb-2">Approach</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Combining time-series methods, evolutionary optimization and language-model embeddings — with an emphasis on reproducibility and real-world grid constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}