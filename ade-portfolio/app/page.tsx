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
    <main>
      <Navbar />
      <Hero />
      <div className="divider" style={{ height: 1, background: "var(--border)", maxWidth: "100%" }} />
      <Trust />
      <div className="divider" style={{ height: 1, background: "var(--border)", maxWidth: "100%" }} />
      <Projects />
      <div className="divider" style={{ height: 1, background: "var(--border)", maxWidth: "100%" }} />
      <Services />
      <div className="divider" style={{ height: 1, background: "var(--border)", maxWidth: "100%" }} />
      <Process />
      <div className="divider" style={{ height: 1, background: "var(--border)", maxWidth: "100%" }} />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
