import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading title="Technical Skills" subtitle="Tools and expertise" />

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {skills.map((category) => (
            <article
              key={category.name}
              className="p-5 lg:p-6 bg-surface-elevated border border-border/60 rounded-2xl shadow-sm"
            >
              <h3 className="font-serif text-lg font-semibold tracking-tight text-text-primary mb-5">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-text-secondary font-medium">{skill.name}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          className={cn(
                            "h-2 w-2 rounded-full transition-colors",
                            i <= skill.level ? "bg-accent" : "bg-border"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}