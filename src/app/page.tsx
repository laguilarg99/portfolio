"use client"
import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FloatingSidebar from "@/components/floating-sidebar";
import Projects from "@/components/projects";
import TimeBar from "@/components/time-bar";
import Presentation from "@/components/presentation";

function Home() {
 

  return (
    <>
   
      <TimeBar />
      <div className="flex flex-col md:flex-row pt-20 max-w-6xl mx-auto">
        <div className="md:flex-shrink-0">
          <FloatingSidebar />
        </div>
        <div className="order-first md:order-none w-full md:w-auto md:ml-8">
          <Presentation />
        </div>

        <section className="flex-1 px-4 py-8 md:px-16 scroll-smooth">
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
        </section>
      </div>
    </>
  );
}

export default Home;
