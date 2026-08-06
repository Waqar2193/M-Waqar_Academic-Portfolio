import { contact } from "@/data/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactLinks = [
  {
    name: "Email",
    href: `mailto:${contact.email}`,
    icon: "email",
    text: contact.email,
  },
  {
    name: "LinkedIn",
    href: contact.linkedin,
    icon: "linkedin",
    text: "linkedin.com/in/waqar2193",
  },
  {
    name: "GitHub",
    href: contact.github,
    icon: "github",
    text: "github.com/muhammad-waqar",
  },
  {
    name: "Google Scholar",
    href: contact.googleScholar,
    icon: "scholar",
    text: "Google Scholar Profile",
  },
  {
    name: "ORCID",
    href: contact.orcid,
    icon: "orcid",
    text: "ORCID iD",
  },
  {
    name: "ResearchGate",
    href: contact.researchgate ?? "#",
    icon: "researchgate",
    text: "ResearchGate Profile",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading title="Contact" subtitle="Let's get in touch" />

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-text-secondary leading-relaxed text-lg">
              I am always open to collaborations, research discussions, and
              mentorship opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group p-5 bg-surface border border-border rounded-2xl hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  {getIcon(link.icon)}
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors text-sm">
                    {link.name}
                  </h3>
                  <p className="text-text-muted text-xs mt-0.5 break-all">
                    {link.text}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-base bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function getIcon(name: string) {
  const className = "w-5 h-5";
  switch (name) {
    case "email":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "scholar":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 2c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.5 9h-3v3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V12h-2V8h2V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V8h3v4z" />
        </svg>
      );
    case "orcid":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#A6CE39" />
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">ID</text>
        </svg>
      );
    case "researchgate":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.5 14.382c0-2.11-1.5-3.5-3.5-3.5-1.5 0-2.5.5-3.5 1.5v-4.5h-2v10h2v-5c1-1 2-1.5 3-1.5 1.5 0 2.5 1 2.5 2.5v4h2v-4.5zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      );
    default:
      return null;
  }
}
