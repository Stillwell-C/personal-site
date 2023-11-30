import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import { useScroll } from "framer-motion";

function App() {
  const [collapseNav, setCollapseNav] = useState<boolean>(false);
  const [navColorShift, setNavColorShift] = useState<boolean>(false);
  const [heroIntersection, setHeroIntersection] = useState<boolean>(false);
  const [projectsIntersection, setProjectsIntersection] =
    useState<boolean>(false);
  const [contactIntersection, setContactIntersection] =
    useState<boolean>(false);

  const collapseNavOptions = {
    rootMargin: "-150px 0px 0px 0px",
  };
  const navColorShiftHeroOptions = {
    rootMargin: "-100px 0px 0px 0px",
  };
  const navColorShiftProjectsOptions = {
    rootMargin: "50px 0px 0px 0px",
  };
  const navColorShiftContactOptions = {
    rootMargin: "-40px 0px 0px 0px",
  };

  const heroScrollObserver = useRef<HTMLDivElement>(null);
  const projectsScrollObserver = useRef<HTMLElement>(null);
  const contactScrollObserver = useRef<HTMLElement>(null);
  const aboutParallaxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: aboutParallaxScrollYProg } = useScroll({
    target: aboutParallaxRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // const lenis = new Lenis();

    function raf(time: number) {
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
        setHeroIntersection(true);
      }
      if (entry.isIntersecting) {
        setHeroIntersection(false);
      }
    }, navColorShiftHeroOptions);

    if (heroScrollObserver.current) {
      collapseNavCheck.observe(heroScrollObserver.current);
      navColorShiftCheck.observe(heroScrollObserver.current);
    }
  }, [heroScrollObserver?.current]);

  useEffect(() => {
    const navColorShiftCheck = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setContactIntersection(false);
      }
      if (entry.isIntersecting) {
        setContactIntersection(true);
      }
    }, navColorShiftProjectsOptions);

    if (contactScrollObserver.current) {
      navColorShiftCheck.observe(contactScrollObserver.current);
    }
  }, [contactScrollObserver?.current]);

  useEffect(() => {
    const navColorShiftCheck = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setProjectsIntersection(false);
      }
      if (entry.isIntersecting) {
        setProjectsIntersection(true);
      }
    }, navColorShiftContactOptions);

    if (projectsScrollObserver.current) {
      navColorShiftCheck.observe(projectsScrollObserver.current);
    }
  }, [projectsScrollObserver?.current]);

  useEffect(() => {
    const navColorShiftCheck = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setContactIntersection(false);
      }
      if (entry.isIntersecting) {
        setContactIntersection(true);
      }
    });

    if (contactScrollObserver.current) {
      navColorShiftCheck.observe(contactScrollObserver.current);
    }
  }, [contactScrollObserver?.current]);

  useEffect(() => {
    if (!heroIntersection || (contactIntersection && !projectsIntersection)) {
      setNavColorShift(false);
    } else {
      setNavColorShift(true);
    }
  }, [heroIntersection, contactIntersection, projectsIntersection]);

  return (
    <div>
      <Header
        collapseNav={collapseNav}
        navColorShift={navColorShift}
        bottomIntersection={!projectsIntersection && contactIntersection}
      />
      <main>
        <Hero ref={heroScrollObserver} />
        <div ref={aboutParallaxRef}>
          <About aboutParallaxScrollYProg={aboutParallaxScrollYProg} />
          <Skills />
        </div>
        <Projects ref={projectsScrollObserver} />
        <Contact ref={contactScrollObserver} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
