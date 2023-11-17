import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const updateScroll = () => {
    const htmlEl = document.documentElement;
    // console.log(htmlEl);
    // console.log("top", htmlEl.scrollTop);
    // console.log("height", htmlEl.clientHeight);

    const screenHeightScrollPercentage =
      (htmlEl.scrollTop / htmlEl.clientHeight) * 100;
    htmlEl.style.setProperty(
      "--scroll",
      screenHeightScrollPercentage.toString()
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);
    console.log(updateScroll());
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
