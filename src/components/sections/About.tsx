import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-text-secondary leading-relaxed space-y-4">
            <p>
              My journey in computer science began with a B.S. (Honors) from the University of Sargodha and an M.S. from COMSATS University Islamabad, where I ranked among the top students in both programs. Before starting my doctoral studies, I spent seven years as a Lecturer at Bahria Foundation College, Attock, where I taught programming fundamentals and data science courses while designing hands-on laboratory curricula. Today, I combine that teaching experience with my current research at the Machine Learning Laboratory, where I build forecasting models that help make electric vehicle charging infrastructure more efficient, cost-aware, and reliable. My work has been recognized through the BK21 FOUR Research Scholarship and the Best Paper Award at ADINTECH 2025, and I remain committed to advancing sustainable energy solutions through applied machine learning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-accent/20 hover:border-accent/40 transition-colors">
              <h3 className="font-serif text-lg font-medium text-text-primary mb-2">Current Research</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Working on probabilistic time-series forecasting, energy informatics, electric vehicle charging systems, and meta-learning at the Machine Learning Laboratory, Jeju National University.
              </p>
            </Card>
            <Card className="p-6 border-accent/20 hover:border-accent/40 transition-colors">
              <h3 className="font-serif text-lg font-medium text-text-primary mb-2">Research Impact</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Published in leading journals including Applied Energy, Information Sciences, Journal of Energy Storage, IEEE Access, and Energy Reports. Recipient of the BK21 FOUR Research Scholarship and Best Paper Award at ADINTECH 2025.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}