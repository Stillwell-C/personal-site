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
    <section className='relative overflow-x-hidden mb-40 mt-10' id='projects'>
      <div>
        <h2 className=' mb-40 text-center text-4xl'>Projects</h2>
        <div ref={sectionref} className='flex flex-col gap-20'>
          {projectsList.map((project) => (
            <SingleProject
              scrollYProgress={scrollYProgress}
              project={project}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
