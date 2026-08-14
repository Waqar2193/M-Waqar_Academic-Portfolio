import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnergyBackgroundIcons } from "@/components/background/EnergyBackgroundIcons";
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
          <div className="background-blob background-blob-1" />
          <div className="background-blob background-blob-2" />
          <div className="background-blob background-blob-3" />

          {/* Energy-Themed Animated Icons (randomized per refresh) */}
          <EnergyBackgroundIcons />

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