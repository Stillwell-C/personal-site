import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { languages, frameworks, devTools, SkillType } from "../Data/SkillsData";

type ListTypeArr = { title: string; skillList: SkillType[] }[];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.4,
    },
  }),
};

const Skills = () => {
  const renderSkills = (skillList: SkillType[]): ReactElement[] => {
    return skillList.map((skill) => (
      <li
        className='p-4 text-center hover:-translate-y-4 ease-in-out duration-200 '
        key={skill.name}
      >
        <div className='w-full flex items-center justify-center [&>svg]:max-w-[36px] [&>svg]:max-h-[36px] md:[&>svg]:max-w-[32px] md:[&>svg]:max-h-[32px] lg:[&>svg]:max-w-48 lg:[&>svg]:max-h-48'>
          {skill.icon}
        </div>
        <div className='text-base -mx-[10%]'>
          <span>{skill.name}</span>
        </div>
      </li>
    ));
  };

  const lists: ListTypeArr = [
    { title: "Languages", skillList: languages },
    { title: "Frameworks", skillList: frameworks },
    { title: "Dev Tools", skillList: devTools },
  ];

  const renderLists = (lists: ListTypeArr): ReactElement[] => {
    return lists.map((list, index) => (
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        custom={index}
        className='bg-white py-4 px-2 xl:px-4 rounded-lg'
      >
        <h3 className='text-center text-2xl mb-4'>{list.title}</h3>

        <ul
          className='grid lg:gap-4 grid-cols-2 xl:grid-cols-3 w-72 md:w-52 lg:w-60 xl:w-80 '
          key={list.title + index}
        >
          {renderSkills(list.skillList)}
        </ul>
      </motion.div>
    ));
  };

  return (
    <section
      id='skills'
      className='min-h-[110vh] py-24 md:px-[4.5rem] flex justify-center items-center bg-[#f4f4f4] '
    >
      <div className='w-80 md:w-[90%] max-w-[90%] md:max-w-4xl xl:max-w-6xl md:py-24 md:border-2 md:border-l-0 md:border-r-0 '>
        <h3 className='text-center text-4xl mb-8'>Skills</h3>
        <div className='h-full w-full flex gap-4 md:gap-2 lg:gap-4 justify-center flex-wrap md:flex-nowrap'>
          {renderLists(lists)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
