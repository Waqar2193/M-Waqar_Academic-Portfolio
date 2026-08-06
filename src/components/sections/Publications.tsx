import { publications } from "@/data/publications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <SectionHeading title="Publications" subtitle="Selected research papers" />

        <div className="max-w-4xl mx-auto space-y-4">
          {publications.map((pub, index) => (
            <article
              key={pub.id}
              className="group p-6 lg:p-8 bg-surface border border-border rounded-2xl hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant={getBadgeVariant(pub.type)}>{pub.type}</Badge>
                <span className="text-sm text-text-muted font-medium">{pub.venue}</span>
                <span className="text-sm text-text-muted">{pub.year}</span>
                {pub.featured && (
                  <Badge variant="accent">Featured</Badge>
                )}
              </div>

              <h3 className="font-serif text-xl lg:text-2xl font-medium text-text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                {pub.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {pub.authors.join(", ")}
              </p>

              {pub.abstract && (
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-6 line-clamp-2">
                  {pub.abstract}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm">
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Paper
                  </a>
                )}
                {pub.pdf && (
                  <a
                    href={pub.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    PDF
                  </a>
                )}
                {pub.code && (
                  <a
                    href={pub.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3m8-6l3 3-3 3m-2-8l-4 12" />
                    </svg>
                    Code
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

function getBadgeVariant(type: string) {
  switch (type) {
    case "journal":
      return "primary";
    case "conference":
      return "accent";
    case "workshop":
      return "warning";
    case "preprint":
      return "gray";
    default:
      return "primary";
  }
}
