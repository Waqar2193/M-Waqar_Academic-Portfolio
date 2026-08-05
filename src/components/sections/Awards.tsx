"use client";

import { useState } from "react";
import { awards } from "@/data/awards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Lightbox } from "@/components/ui/Lightbox";

export function Awards() {
  const [lightbox, setLightbox] = useState<{ images: string[]; title: string } | null>(null);

  return (
    <section id="awards" className="py-16 lg:py-24 bg-surface/30">
      <div className="container">
        <SectionHeading title="Awards & Achievements" subtitle="Recognitions and honors" />

        <div className="max-w-4xl mx-auto space-y-4">
          {awards.map((award) => (
            <article
              key={award.id}
              className={`group p-5 lg:p-6 bg-surface border border-border rounded-2xl transition-colors flex items-start gap-5 ${
                award.certificate
                  ? "hover:border-accent/40 cursor-pointer"
                  : "hover:border-accent/40"
              }`}
              onClick={() => {
                if (award.certificate) {
                  setLightbox({ images: award.certificate, title: award.title });
                }
              }}
              role={award.certificate ? "button" : undefined}
              tabIndex={award.certificate ? 0 : undefined}
              onKeyDown={(e) => {
                if (award.certificate && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setLightbox({ images: award.certificate, title: award.title });
                }
              }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent flex flex-col items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                <span className="text-lg font-bold font-serif leading-none">{award.year}</span>
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h3 className="font-serif text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                    {award.title}
                  </h3>
                  <Badge variant={getCategoryVariant(award.category)}>{award.category}</Badge>
                </div>
                <p className="text-text-muted text-sm font-medium mb-1">{award.organization}</p>
                {award.description && (
                  <p className="text-text-secondary text-sm leading-relaxed">{award.description}</p>
                )}
                {award.certificate && (
                  <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-accent group-hover:text-accent-light transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Certificate
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          title={lightbox.title}
          isOpen={!!lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

function getCategoryVariant(category: string) {
  switch (category) {
    case "fellowship":
      return "primary";
    case "paper":
      return "accent";
    case "academic":
      return "success";
    case "service":
      return "warning";
    default:
      return "gray";
  }
}