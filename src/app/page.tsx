import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FloatingSidebar from "@/components/floating-sidebar";
import Projects from "@/components/projects";
import Image from "next/image";

function Home() {
  return (
    <section>
      <FloatingSidebar></FloatingSidebar>
      <div className="px-4 py-8 md:px-16 scroll-smooth">
        <section id="About" className="mb-16 scroll-mt-24">
          <AboutMe />
        </section>
        <section id="Experience" className="mb-16 scroll-mt-24">
          <Experience />
        </section>
        <section id="Projects" className="mb-16 scroll-mt-24">
          <Projects />
        </section>
        <section id="Contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>
    </section>
  );
}

export default Home;
