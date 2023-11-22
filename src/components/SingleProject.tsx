import React, { useEffect, useRef } from "react";
import { Project } from "../Data/ProjectsList";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

type PropsType = {
  project: Project;
  scrollYProgress?: MotionValue<number>;
};

const articleVariants = {
  initial: {
    x: 500,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SingleProject = ({ project }: PropsType) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress: opacityShift } = useScroll({
    target: ref,
    offset: ["0 1", ".9 1"],
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [0, -170]);
  const yInfo = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const xInfo = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <motion.article
      style={{
        // scale: scrollYProgress,
        opacity: opacityShift,
      }}
      variants={articleVariants}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      ref={ref}
      className='flex items-center justify-center w-full'
    >
      <div className='max-w-7xl flex flex-col items-center justify-center gap-8 px-16 relative'>
        <motion.div style={{ y: yImg }} className='flex-1 max-w-3xl '>
          <img
            src={project.image}
            alt={project.name}
            className='h-full w-full object-cover rounded-md'
          />
        </motion.div>
        <motion.div
          //   style={{ y: yInfo, x: xInfo }}
          className='absolute max-w-md border z-[2] bg-white p-8 bottom-15 -right-10 rounded-lg'
        >
          <h3 className='text-2xl mb-6'>{project.name}</h3>
          <p className='mb-4'>{project.description}</p>
          <p className='mb-2'>Made using:</p>
          <ul className='flex flex-wrap mb-8'>
            {project.technologies.map((technology) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='flex justify-start items-center gap-1 mb-2 mr-4'
              >
                {technology.icon && (
                  <div className='w-6 h-6 flex items-center justify-start'>
                    {technology.icon}
                  </div>
                )}
                <span className='rounded-md' key={technology?.name}>
                  {technology?.name}
                </span>
              </motion.div>
            ))}
          </ul>
          <div className='flex justify-end gap-2 '>
            <a
              className='border p-2 rounded-md hover:bg-black hover:text-white'
              href={project.siteLink}
              target='_blank'
            >
              View Site
            </a>
            <a
              className='border p-2 rounded-md hover:bg-black hover:text-white'
              href={project.githubLink}
              target='_blank'
            >
              View Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default SingleProject;
