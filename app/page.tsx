import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Stack } from "@/sections/Stack";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Certifications } from "@/sections/Certifications";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Certifications />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}