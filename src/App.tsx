import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Lenis from "@studio-freight/lenis";

function App() {
  const [collapseNav, setCollapseNav] = useState<boolean>(false);
  const [navColorShift, setNavColorShift] = useState<boolean>(false);

  const collapseNavOptions = {
    rootMargin: "-150px 0px 0px 0px",
  };
  const navColorShiftOptions = {
    rootMargin: "0px 0px 0px 0px",
  };

  const scrollObserver = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const collapseNavCheck = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setCollapseNav(true);
      }
      if (entry.isIntersecting) {
        setCollapseNav(false);
      }
    }, collapseNavOptions);

    const navColorShiftCheck = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setNavColorShift(true);
      }
      if (entry.isIntersecting) {
        setNavColorShift(false);
      }
    }, navColorShiftOptions);

    if (scrollObserver.current) {
      collapseNavCheck.observe(scrollObserver.current);
      navColorShiftCheck.observe(scrollObserver.current);
    }
  }, [scrollObserver?.current]);

  useEffect(() => console.log("state", collapseNav), [collapseNav]);

  return (
    <div className='bg-white-smoke'>
      <Header collapseNav={collapseNav} navColorShift={navColorShift} />
      <main>
        <Hero ref={scrollObserver} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
