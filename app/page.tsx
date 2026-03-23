import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <Navbar />
      <Hero />
      <div style={{ height: 1, background: "var(--border)" }} />
      <Trust />
      <div style={{ height: 1, background: "var(--border)" }} />
      <Projects />
      <div style={{ height: 1, background: "var(--border)" }} />
      <Services />
      <div style={{ height: 1, background: "var(--border)" }} />
      <Process />
      <div style={{ height: 1, background: "var(--border)" }} />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
