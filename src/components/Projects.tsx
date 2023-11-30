import { useScroll } from "framer-motion";
import projectsList from "../Data/ProjectsList";
import SingleProject from "./SingleProject";
import { ForwardedRef, forwardRef, useRef } from "react";

const Projects = forwardRef((ref: ForwardedRef<HTMLElement>) => {
  const sectionref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionref,
    offset: ["start end", "start start"],
  });

  return (
    <section ref={ref} className='mt-20' id='projects'>
      <h2 className='mb-40 text-center text-4xl'>Projects</h2>
      <div className='overflow-x-hidden h-full pb-40'>
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
});

export default Projects;
