import { SectionHeading } from "@/components/ui/SectionHeading";

const researchInterests = [
  {
    title: "Machine Learning",
    description:
      "Developing advanced machine learning algorithms for real-world applications, with a focus on time-series forecasting and energy systems.",
    icon: "brain",
  },
  {
    title: "Time-Series Forecasting",
    description:
      "Building accurate and robust forecasting models for multivariate energy data, EV charging demand, and peak load prediction.",
    icon: "chart",
  },
  {
    title: "Probabilistic Forecasting",
    description:
      "Developing uncertainty-aware forecasting frameworks that provide reliable prediction intervals for decision-making in energy systems.",
    icon: "magnifier",
  },
  {
    title: "Meta-learning",
    description:
      "Exploring learning-to-learn approaches that enable models to adapt quickly to new forecasting tasks with limited data.",
    icon: "shield",
  },
  {
    title: "Energy Informatics",
    description:
      "Applying AI and data science to electric vehicle charging systems, grid management, and sustainable energy solutions.",
    icon: "bolt",
  },
  {
    title: "Large Language Models (LLMs)",
    description:
      "Leveraging pretrained language models and LLM-prompted features to enhance forecasting accuracy in energy applications.",
    icon: "chat",
  },
];

export function Research() {
  return (
    <section id="research" className="py-16 lg:py-24 bg-surface/30">
      <div className="container">
        <SectionHeading title="Research Interests" subtitle="Areas I am passionate about" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {researchInterests.map((interest) => (
            <article
              key={interest.title}
              className="group p-6 bg-surface border border-border rounded-2xl hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {getIcon(interest.icon)}
              </div>
              <h3 className="font-serif text-lg font-medium text-text-primary mb-3 group-hover:text-accent transition-colors">
                {interest.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getIcon(name: string) {
  const className = "w-6 h-6";
  switch (name) {
    case "brain":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36l-2.12 2.12M7.78 16.34l-2.12 2.12m0-12.24l2.12 2.12m8.44 8.44l2.12 2.12M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      );
    case "chat":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "magnifier":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "heart":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    default:
      return null;
  }
}