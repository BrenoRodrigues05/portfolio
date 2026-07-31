import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { TabTitleChanger } from "@/components/TabTitleChanger";
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
      <body className="antialiased bg-background text-foreground selection:bg-cyan-500/20 selection:text-cyan-400">
        <TabTitleChanger />
        {children}
      </body>
    </html>
  );
}