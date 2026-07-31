import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Breno Rodrigues // Dev",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={cn("dark font-sans", geist.variable, mono.variable)}
    >
      <body className="relative min-h-screen antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden">
        
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transform-gpu">
          <div className="absolute inset-0 bg-cyber-glow" />
          <div className="absolute inset-0 bg-cyber-grid opacity-80" />
          <div className="absolute inset-0 bg-scanlines opacity-30" />
        </div>

        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}