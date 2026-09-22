import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Research Projects" subtitle="Ongoing and completed work" />

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group p-5 lg:p-6 bg-surface-elevated border border-border/60 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-black/5 hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant={getStatusVariant(project.status)}>{project.status}</Badge>
                {project.featured && <Badge variant="accent">Featured</Badge>}
              </div>

              <h3 className="font-serif text-xl font-medium text-text-primary mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {project.longDescription && (
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.longDescription}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-surface border border-border/60 text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm mt-auto pt-4 border-t border-border">
                <span className="text-text-muted text-xs">
                  {project.startDate} {project.endDate ? `- ${project.endDate}` : ""}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Paper
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getStatusVariant(status: string) {
  switch (status) {
    case "active":
      return "success";
    case "completed":
      return "primary";
    case "on-hold":
      return "warning";
    default:
      return "primary";
  }
}