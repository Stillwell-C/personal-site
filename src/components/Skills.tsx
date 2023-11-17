import { motion } from "framer-motion";
import React from "react";
import { skillsList } from "../Data/SkillsData";

// type SkillType = {
//   name: string;
//   iconUrl?: string;
// };

// const skillsList = [
//   "Javascript",
//   "Typescript",
//   "HTML",
//   "CSS",
//   "SASS",
//   "Tailwind CSS",
//   "React",
//   "Redux",
//   "Tanstack Query",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "PostgreSQL",
//   "Git",
//   "Github",
//   "Jest",
//   "Webpack",
//   "Linux",
// ];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id='skills'
      className='min-h-screen flex justify-center items-center '
    >
      <div className='max-w-3xl py-24 border-2 border-l-0 border-r-0 '>
        <h3 className='text-center text-4xl mb-8'>Skills</h3>
        <ul className='flex justify-center flex-wrap gap-4'>
          {skillsList.map((skill, index) => {
            return (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                custom={index}
                className='p-4 text-center group'
              >
                <div className='w-full flex items-center justify-center [&>svg]:max-w-48 [&>svg]:max-h-48 transition ease-in-out duration-200 group-hover:-translate-y-4'>
                  {skill.icon}
                </div>
                <div className='transition ease-in-out duration-200 group-hover:-translate-y-4'>
                  <span>{skill.name}</span>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
