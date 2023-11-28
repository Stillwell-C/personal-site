import { motion } from "framer-motion";
import React from "react";
import { skillsList } from "../Data/SkillsData";

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
      className='min-h-[110vh] py-24 md:px-[4.5rem] flex justify-center items-center bg-[#f4f4f4] '
    >
      <div className='max-w-[90%] md:max-w-3xl md:py-24 md:border-2 md:border-l-0 md:border-r-0 '>
        <h3 className='text-center text-4xl mb-8'>Skills</h3>
        <ul className='flex justify-center items-end flex-wrap gap-4'>
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
                <div className='w-full flex items-center justify-center [&>svg]:max-w-[30px] [&>svg]:max-h-[30px] md:[&>svg]:max-w-48 md:[&>svg]:max-h-48 transition ease-in-out duration-200 group-hover:-translate-y-4'>
                  {skill.icon}
                </div>
                <div className='text-sm md:text-lg transition ease-in-out duration-200 group-hover:-translate-y-4'>
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
