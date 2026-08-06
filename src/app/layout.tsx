import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Waqar | PhD Scholar in Electronics Engineering",
    template: "%s | Muhammad Waqar",
  },
  description:
    "PhD scholar in Electronics Engineering at Jeju National University specializing in machine learning, time-series forecasting, probabilistic forecasting, meta-learning, energy informatics, and large language models.",
  keywords: [
    "PhD",
    "Scholar",
    "Machine Learning",
    "Deep Learning",
    "Time Series Forecasting",
    "Probabilistic Forecasting",
    "Meta-learning",
    "Energy Informatics",
    "Large Language Models",
    "EV Charging",
    "AI",
  ],
  authors: [{ name: "Muhammad Waqar" }],
  creator: "Muhammad Waqar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Waqar | PhD Scholar in Electronics Engineering",
    description:
      "PhD scholar in Electronics Engineering at Jeju National University specializing in machine learning, time-series forecasting, probabilistic forecasting, meta-learning, energy informatics, and large language models.",
    siteName: "Muhammad Waqar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Waqar | PhD Scholar in Electronics Engineering",
    description:
      "PhD scholar in Electronics Engineering at Jeju National University specializing in machine learning, time-series forecasting, probabilistic forecasting, meta-learning, energy informatics, and large language models.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${lora.variable} h-full antialiased bg-background`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎓</text></svg>"
        />
      </head>
      <body className="min-h-full flex flex-col bg-transparent text-text-primary font-sans">
        {/* Beautiful Background Decoration */}
        <div className="background-decoration" aria-hidden="true">
          <div className="background-gradient" />
          <div className="background-grid" />
          <div className="background-blob background-blob-1" />
          <div className="background-blob background-blob-2" />
          <div className="background-blob background-blob-3" />

          {/* Neural Network Particle Field */}
          <div className="background-particles" />

          {/* Neural Network Connection Lines */}
          <div className="background-connections">
            <div className="background-connection" style={{ top: "15%", left: "20%", width: "200px", height: "2px", transform: "rotate(25deg)" }} />
            <div className="background-connection" style={{ top: "40%", left: "30%", width: "180px", height: "2px", transform: "rotate(-15deg)" }} />
            <div className="background-connection" style={{ top: "60%", left: "25%", width: "220px", height: "2px", transform: "rotate(35deg)" }} />
            <div className="background-connection" style={{ top: "35%", left: "60%", width: "160px", height: "2px", transform: "rotate(-25deg)" }} />
            <div className="background-connection" style={{ top: "70%", left: "55%", width: "190px", height: "2px", transform: "rotate(10deg)" }} />
          </div>

          {/* Time-Series Waveform */}
          <div className="background-wave" />

          {/* Floating Energy Particles */}
          <div className="background-particle" style={{ top: "20%", left: "15%", width: "6px", height: "6px", animationDelay: "0s", "--tx": "120px", "--ty": "-180px" } as React.CSSProperties} />
          <div className="background-particle" style={{ top: "35%", left: "70%", width: "4px", height: "4px", animationDelay: "2s", "--tx": "-150px", "--ty": "-220px" } as React.CSSProperties} />
          <div className="background-particle" style={{ top: "55%", left: "25%", width: "5px", height: "5px", animationDelay: "4s", "--tx": "180px", "--ty": "-150px" } as React.CSSProperties} />
          <div className="background-particle" style={{ top: "75%", left: "80%", width: "3px", height: "3px", animationDelay: "6s", "--tx": "-100px", "--ty": "-250px" } as React.CSSProperties} />
          <div className="background-particle" style={{ top: "45%", left: "40%", width: "4px", height: "4px", animationDelay: "8s", "--tx": "140px", "--ty": "-200px" } as React.CSSProperties} />
          <div className="background-particle" style={{ top: "15%", left: "65%", width: "5px", height: "5px", animationDelay: "1s", "--tx": "-130px", "--ty": "-170px" } as React.CSSProperties} />

          {/* Energy-Themed Animated Icons */}
          <div className="background-energy-icon background-wind-turbine" style={{ top: "12%", left: "8%", width: "50px", height: "50px" }}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="25" y1="32" x2="25" y2="48" stroke="currentColor" strokeWidth="2" />
              <g className="turbine-blades" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="25" y1="25" x2="25" y2="10" />
                <line x1="25" y1="25" x2="36" y2="25" transform="rotate(120 25 25)" />
                <line x1="25" y1="25" x2="14" y2="25" transform="rotate(240 25 25)" />
              </g>
            </svg>
          </div>

          <div className="background-energy-icon background-solar-panel" style={{ top: "15%", right: "8%", width: "55px", height: "35px" }}>
            <svg width="55" height="35" viewBox="0 0 55 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="45" height="25" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <line x1="5" y1="17" x2="50" y2="17" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              <line x1="27" y1="5" x2="27" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </div>

          <div className="background-energy-icon background-ev-charging" style={{ top: "45%", left: "5%", width: "45px", height: "45px" }}>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="10" width="29" height="25" rx="4" stroke="currentColor" strokeWidth="1.5" />
              <line x1="22.5" y1="15" x2="22.5" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <path className="charging-bolt" d="M18 20 L27 20 L24 27 L27 27 L18 27 Z" fill="currentColor" opacity="0.6" />
              <circle cx="32" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <div className="background-energy-icon background-grid-station" style={{ top: "60%", right: "5%", width: "50px", height: "50px" }}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="25" y1="10" x2="25" y2="40" stroke="currentColor" strokeWidth="2" />
              <g className="grid-lines" stroke="currentColor" strokeWidth="1" opacity="0.4">
                <line x1="15" y1="15" x2="35" y2="15" />
                <line x1="15" y1="25" x2="35" y2="25" />
                <line x1="15" y1="35" x2="35" y2="35" />
                <line x1="10" y1="10" x2="10" y2="40" />
                <line x1="40" y1="10" x2="40" y2="40" />
              </g>
            </svg>
          </div>

          <div className="background-energy-icon background-ev-car" style={{ bottom: "15%", left: "10%", width: "60px", height: "30px" }}>
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20 L8 14 C8 12 9 11 10 11 L38 11 C39 11 40 12 40 14 L40 20" stroke="currentColor" strokeWidth="1.5" />
              <path d="M15 11 L15 8 C15 7 16 6 17 6 L31 6 C32 6 33 7 33 8 L33 11" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="18" cy="22" r="3" fill="currentColor" opacity="0.5" />
              <circle cx="42" cy="22" r="3" fill="currentColor" opacity="0.5" />
              <rect x="38" y="14" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow relative z-10" id="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}