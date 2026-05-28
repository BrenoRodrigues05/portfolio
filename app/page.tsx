import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Stack } from "@/sections/Stack";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}