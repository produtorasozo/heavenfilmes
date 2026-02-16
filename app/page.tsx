import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
