import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading title="Technical Skills" subtitle="Tools and expertise" />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((category) => (
            <article
              key={category.name}
              className="p-6 lg:p-8 bg-surface border border-border rounded-2xl"
            >
              <h3 className="font-serif text-lg font-medium text-text-primary mb-6">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-text-secondary font-medium">{skill.name}</span>
                      <span className="text-xs text-text-muted">{skill.level}/5</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          "bg-accent"
                        )}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
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