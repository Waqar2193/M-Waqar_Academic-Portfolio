"use client";

import { useState } from "react";
import { news } from "@/data/news";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Lightbox } from "@/components/ui/Lightbox";

export function News() {
  const [lightbox, setLightbox] = useState<{ images: string[]; title: string } | null>(null);

  const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="news" className="section">
      <div className="container">
        <SectionHeading title="News & Updates" subtitle="Recent activities and announcements" />

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-3">
          {sortedNews.map((item) => (
            <article
              key={item.id}
              className={`group p-5 lg:p-6 bg-surface-elevated border border-border/60 rounded-2xl shadow-sm hover:shadow-md hover:border-accent/20 hover:-translate-y-0.5 transition-all duration-300 ${
                item.images ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (item.images) {
                  setLightbox({ images: item.images, title: item.title });
                }
              }}
              role={item.images ? "button" : undefined}
              tabIndex={item.images ? 0 : undefined}
              onKeyDown={(e) => {
                if (item.images && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setLightbox({ images: item.images, title: item.title });
                }
              }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <time
                  dateTime={item.date}
                  className="text-text-muted text-sm font-medium"
                >
                  {formatDate(item.date)}
                </time>
                <Badge variant={getTypeVariant(item.type)}>{item.type}</Badge>
                {item.featured && <Badge variant="accent">Featured</Badge>}
              </div>

              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg font-medium text-text-primary group-hover:text-accent transition-colors inline-flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.title}
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <h3 className="font-serif text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              )}

              <p className="text-text-secondary text-sm leading-relaxed mt-2">
                {item.description}
              </p>

              {item.images && (
                <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-accent group-hover:text-accent-light transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Photos ({item.images.length})
                </span>
              )}
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

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getTypeVariant(type: string) {
  switch (type) {
    case "publication":
      return "primary";
    case "award":
      return "success";
    case "talk":
      return "accent";
    case "media":
      return "warning";
    default:
      return "gray";
  }
}