import Hero from "@/components/Hero";
import CoverTicker from "@/components/CoverTicker";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-fg">
      <Hero />
      <CoverTicker />
      <Projects />
      <Contact />
    </main>
  );
}
