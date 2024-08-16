import { useRef } from "react";
import { Project } from "../Data/ProjectsList";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

type PropsType = {
  project: Project;
  scrollYProgress?: MotionValue<number>;
  index: number;
};

const articleVariants = {
  initial: {
    x: "var(--x-from)",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SingleProject = ({ project, index }: PropsType) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress: opacityShift } = useScroll({
    target: ref,
    offset: ["0 1", ".9 1"],
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const even = index % 2 === 0;

  const projectInformation = (
    <>
      <h3 className='max-sm:hidden text-xl mb-4'>{project.name}</h3>
      <p className='mb-2 text-md'>{project.description}</p>
      <p className='mb-2'>Built using:</p>
      <ul className='flex flex-wrap mb-4 cursor-default'>
        {project.technologies.map((technology) => (
          <li>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className='flex justify-start items-center gap-1 mb-2 mr-4'
              key={technology.name}
            >
              {technology?.icon && (
                <div className='w-6 h-6 flex items-center justify-start'>
                  {technology.icon}
                </div>
              )}
              <span className='rounded-md'>{technology?.name}</span>
            </motion.div>
          </li>
        ))}
      </ul>
      <div className='flex justify-end gap-2 '>
        {project.siteLink !== null && (
          <a
            className='border p-2 rounded-md hover:bg-black hover:text-white'
            href={project.siteLink}
            target='_blank'
          >
            View Site
          </a>
        )}
        <a
          className='border p-2 rounded-md hover:bg-black hover:text-white'
          href={project.githubLink}
          target='_blank'
        >
          View Code
        </a>
      </div>
    </>
  );

  return (
    <motion.article
      style={{
        opacity: opacityShift,
      }}
      variants={articleVariants}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      ref={ref}
      className='flex items-center justify-center w-full sm:[--x-from:500px] text-[#333]'
    >
      <div className='w-full max-w-7xl flex flex-col sm:flex-row items-center gap-8 px-16 relative justify-center'>
        <div className='sm:hidden text-2xl -mb-6'>
          <h3>{project.name}</h3>
        </div>
        <motion.div
          className={`flex-1 flex max-w-3xl relative justify-center ${
            even ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <img
            src={project.image}
            alt={project.name}
            className='h-full object-cover rounded-md w-[90%]'
          />
          <motion.div
            style={{ y: yImg }}
            className={`max-sm:hidden sm:absolute max-w-[85%] md:max-w-md border border-[#cccccc] z-[2] bg-white p-4 rounded-lg shadow-lg  sm:max-md:-bottom-[60%] md:top-1/3 ${
              even ? "md:-right-0 lg:-right-[10%]" : "md:-left-0 lg:-left-[10%]"
            }`}
          >
            {projectInformation}
          </motion.div>
        </motion.div>
        <div className='sm:hidden px-4 flex justify-center items-center'>
          <div className='w-[90%]'>{projectInformation}</div>
        </div>
      </div>
    </motion.article>
  );
};

export default SingleProject;
