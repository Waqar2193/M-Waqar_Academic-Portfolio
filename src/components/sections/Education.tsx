import { education, experience } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Timeline, TimelineItem } from "@/components/ui/TimelineItem";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title="Education & Experience" subtitle="Academic and professional journey" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-serif text-xl font-medium text-text-primary mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m-6-4.5V12" />
              </svg>
              Education
            </h3>
            <Timeline>
              {education.map((edu) => (
                <TimelineItem
                  key={edu.id}
                  type="education"
                  date={`${edu.startDate} - ${edu.endDate}`}
                  title={`${edu.degree} in ${edu.field}`}
                  organization={edu.institution}
                  location={edu.location}
                  description={
                    <>
                      <p>{edu.description}</p>
                      {edu.advisor && (
                        <p className="mt-2">
                          <span className="font-medium">Advisor:</span> {edu.advisor}
                        </p>
                      )}
                      {edu.thesis && (
                        <p className="mt-1">
                          <span className="font-medium">Thesis:</span> {edu.thesis}
                        </p>
                      )}
                      {edu.honors && edu.honors.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {edu.honors.map((honor) => (
                            <li key={honor} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                              </svg>
                              <span className="text-sm">{honor}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  }
                />
              ))}
            </Timeline>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-text-primary mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experience
            </h3>
            <Timeline>
              {experience.map((exp) => (
                <TimelineItem
                  key={exp.id}
                  date={`${exp.startDate} - ${exp.endDate}`}
                  title={exp.role}
                  organization={exp.organization}
                  location={exp.location}
                  description={
                    <>
                      <Badge variant={getTypeVariant(exp.type)} className="mb-3">{exp.type}</Badge>
                      <ul className="space-y-2">
                        {exp.description.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-text-muted flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  }
                />
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}

function getTypeVariant(type: string) {
  switch (type) {
    case "academic":
      return "primary";
    case "industry":
      return "accent";
    case "teaching":
      return "warning";
    case "service":
      return "gray";
    default:
      return "primary";
  }
}