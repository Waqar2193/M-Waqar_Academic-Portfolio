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