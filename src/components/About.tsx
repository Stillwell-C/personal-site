import { useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useInView,
  useAnimation,
  MotionValue,
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
      delay: 0.35,
      duration: 0.35,
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
      delay: 1,
      duration: 0.8,
    },
  },
};

type PropsType = {
  aboutParallaxScrollYProg: MotionValue<number>;
};

const About = ({ aboutParallaxScrollYProg }: PropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const mobileHeadingRef = useRef<HTMLDivElement>(null);

  const backgroundShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.8],
    [0, 70]
  );
  const backgroundShiftX = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.8],
    [0, -100]
  );
  const textShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.8],
    [0, -100]
  );
  const textShiftX = useTransform(aboutParallaxScrollYProg, [0, 0.6], [0, 100]);
  const layoverShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, -200]
  );
  const mobileLayoverShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, -250]
  );
  const layoverShiftX = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, 150]
  );
  const headingControls = useAnimation();

  const isInView = useInView(headingRef, { once: true });
  const mobileIsInView = useInView(mobileHeadingRef, { once: true });

  useEffect(() => {
    if (isInView || mobileIsInView) {
      headingControls.start("animate");
    }
  }, [isInView, mobileIsInView]);

  const aboutText =
    "Welcome to my digital space! I am a self-taught developer who started learning programming and web development in my spare time. I am always eager to learn a new skill or framework and have grown interested in clean and responsive front-end design, web accessibility, data management, and delving further into back ends. Check out my portfolio below to see what I'm capable of!";

  const animatedText = (
    <>
      <div className='overflow-hidden h-[60px] text-left sm:mb-8 text-[#333]'>
        <motion.h2
          variants={headerVariants}
          initial='initial'
          animate={headingControls}
          className='text-3xl sm:text-4xl md:text-5xl sm:mb-20'
        >
          Hi.
        </motion.h2>
      </div>
      <motion.div
        className='text-left flex flex-col gap-4 text-base sm:text-lg md:text-xl'
        variants={textVariants}
        initial='initial'
        animate={headingControls}
      >
        <p>{aboutText}</p>
      </motion.div>
    </>
  );

  return (
    <section
      ref={ref}
      id='about'
      className='min-h-[80vh] sm:min-h-screen relative flex justify-center items-center overflow-hidden'
    >
      <div className='hidden sm:flex w-full justify-center py-20 sm:py-40'>
        <motion.div
          className='max-w-[70%] lg:max-w-5xl w-3/4 px-6 pt-32 sm:pt-44 pb-8 relative bg-[#fafafa] shadow-xl'
          style={{ y: backgroundShiftY, x: backgroundShiftX }}
        >
          <motion.div
            style={{ y: layoverShiftY, x: layoverShiftX }}
            className='bg-[#333] p-6 rounded-lg text-white absolute -top-2 max-sm:-left-2 sm:top-10 sm:right-10'
          >
            <h2>About me.</h2>
          </motion.div>
          <motion.div
            style={{ y: textShiftY, x: textShiftX }}
            className='w-full px-4 pb-10'
            ref={headingRef}
          >
            {animatedText}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className='sm:hidden flex flex-col w-full px-6 py-28'
        style={{ y: mobileLayoverShiftY }}
      >
        <div className='bg-[#333] p-6 rounded-lg text-white w-fit mb-8'>
          <h2>About me.</h2>
        </div>
        <div className='flex flex-col' ref={mobileHeadingRef}>
          {animatedText}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
