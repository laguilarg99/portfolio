"use client"
import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FloatingSidebar from "@/components/floating-sidebar";
import Projects from "@/components/projects";
import { useEffect, useState } from "react";
import Image from "next/image";

function Home() {
 
  function getSpainTime() {
    const now = new Date();
    const spainTime = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Madrid",
    });
    return spainTime;
  }

  // Define your time range
  const TIME_RANGE = "Central European Time (CET)";

  const [spainTime, setSpainTime] = useState(getSpainTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setSpainTime(getSpainTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-center px-0 py-3">
        <div className="w-full max-w-3xl flex items-center justify-between px-10">
          <div className="text-sm font-semibold">{TIME_RANGE}</div>
          <div className="text-sm font-mono">{spainTime}</div>
        </div>
      </nav>

      <div className="flex pt-20 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <FloatingSidebar />
        </div>

        <aside className="flex flex-col items-center gap-4 px-4 py-8 sticky top-24 h-fit">
          <Image
            src="/profile.jpg" 
            alt="Luis miguel Aguilar"
            width={200}
            height={200}
            className="rounded-full border"
          />
          <div className="font-semibold text-md">Luis Miguel Aguilar</div>
          <a
            href="https://cal.com/luis-miguel-aguilar-gonzalez-xbokby/quick-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs text-gray-700 mt-2 transition-transform duration-200 hover:scale-105"
            style={{ textDecoration: "none" }}
          >
            <Image
              src="/call.png"
              alt="Schedule Call"
              width={16}
              height={16}
              className="rounded-full border"
            />
            Schedule a Call
          </a>
        </aside>

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
