import React, { useEffect, useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

const headerVariants = {
  initial: {
    y: 75,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.8,
    },
  },
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const backgroundShiftY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const backgroundShiftX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textShift = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const layoverShiftY = useTransform(scrollYProgress, [0, 1], [0, -170]);
  const layoverShiftX = useTransform(scrollYProgress, [0, 1], [0, 50]);

  console.log(textShift);

  const headingControls = useAnimation();

  const isInView = useInView(headingRef, { once: true });

  useEffect(() => {
    if (isInView) {
      headingControls.start("animate");
    }
    console.log(isInView);
  }, [isInView]);

  return (
    <section
      ref={ref}
      id='about'
      className='h-[100vh] flex justify-center overflow-hidden'
    >
      <div className='w-full h-full flex flex-col items-center justify-center relative'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-1/2 md:w-3/4 h-1/2'>
          <motion.div
            className='h-full w-full bg-[#f5f5f5] shadow-xl'
            style={{ y: backgroundShiftY, x: backgroundShiftX }}
          ></motion.div>
        </div>

        <motion.div
          className='rounded-lg max-w-2xl w-1/2 p-4 relative mt-[150px]'
          style={{ y: textShift }}
        >
          <motion.div
            style={{ y: layoverShiftY, x: layoverShiftX }}
            className='bg-[#333] p-6 rounded-lg text-white absolute top-24 -right-10'
          >
            About me:
          </motion.div>
          <div
            ref={headingRef}
            className='overflow-hidden h-[60px] text-left mb-8 text-[#222]'
          >
            <motion.h2
              variants={headerVariants}
              initial='initial'
              animate={headingControls}
              // style={{ y: headerShift, opacity: headerOpacity }}
              className='text-6xl mb-20'
            >
              Hi.
            </motion.h2>
          </div>
          <motion.div
            className='max-w-2xl text-left flex flex-col gap-4'
            variants={textVariants}
            initial='initial'
            animate={headingControls}
          >
            <p>I'm Chris.</p>
            <p>
              I started learning programming and web development in my spare
              time and never stopped expanding my knowledge within the field. I
              am interested in clean and responsive front end design, web
              accessibility, data management, and learning more about backends.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
