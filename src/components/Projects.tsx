import { motion, useScroll } from "framer-motion";
import projectsList from "../Data/ProjectsList";
import SingleProject from "./SingleProject";
import { useRef } from "react";

const Projects = () => {
  const sectionref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionref,
    offset: ["start end", "start start"],
  });

  console.log(scrollYProgress.get());

  return (
    <section className='relative overflow-hidden mb-40 mt-10' id='projects'>
      <div>
        <h2 className=' mb-40 text-center text-4xl'>Projects</h2>
        <div
          ref={sectionref}
          className='flex flex-col gap-20 sm:gap-60 md:gap-20 mb-48'
        >
          {projectsList.map((project, i) => (
            <SingleProject
              scrollYProgress={scrollYProgress}
              project={project}
              index={i}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
