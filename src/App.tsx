import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [collapseNav, setCollapseNav] = useState<boolean>(false);

  const scrollRefOptions = {
    rootMargin: "-150px 0px 0px 0px",
  };

  const scrollObserver = useRef<HTMLElement>(null);

  useEffect(() => {
    const ScrollRefCheck = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        console.log("not intersecting");
        setCollapseNav(true);
      }
      if (entry.isIntersecting) {
        console.log("intersecting");
        setCollapseNav(false);
      }
    }, scrollRefOptions);
    if (scrollObserver.current) ScrollRefCheck.observe(scrollObserver.current);
  }, [scrollObserver?.current]);

  useEffect(() => console.log("state", collapseNav), [collapseNav]);

  return (
    <div className='bg-white-smoke'>
      <Header collapseNav={collapseNav} />
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
