import React, { useEffect, useRef } from "react";
import {
  useScroll,
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
  const headingRef = useRef<HTMLHeadingElement>(null);

  const backgroundShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, 70]
  );
  const backgroundShiftX = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, -100]
  );
  const sideLineShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, 140]
  );
  const sideLineShiftX = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, 100]
  );
  const bottomLineShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, 100]
  );
  const bottomLineShiftX = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, 200]
  );
  const textShift = useTransform(aboutParallaxScrollYProg, [0, 0.6], [0, -100]);
  const layoverShiftY = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, -200]
  );
  const layoverShiftX = useTransform(
    aboutParallaxScrollYProg,
    [0, 0.6],
    [0, 50]
  );
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
      className='h-[150vh] md:h-[120vh] relative flex justify-center items-center overflow-hidden'
    >
      <div className='w-full max-w-5xl h-fit lg:h-[450px] absolute'>
        <div className='w-full h-full flex justify-center'>
          <div className='absolute h-full max-w-4xl w-[90%] sm:w-3/4'>
            <motion.div
              className='h-[110%] sm:h-[115%] w-full bg-[#fafafa] shadow-xl relative'
              style={{ y: backgroundShiftY, x: backgroundShiftX }}
            >
              <div className='absolute right-0 h-full'>
                <motion.div
                  className='h-full bg-[#222] w-[2px] '
                  style={{ y: sideLineShiftY, x: sideLineShiftX }}
                ></motion.div>
              </div>
              <div className='absolute bottom-0 w-full'>
                <motion.div
                  className='w-full bg-[#222] h-[2px] '
                  style={{ y: bottomLineShiftY, x: bottomLineShiftX }}
                ></motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className='rounded-lg lg:max-w-2xl max-w-[80%] sm:p-12 relative mt-[100px] mb-4'
            style={{ y: textShift }}
          >
            <motion.div
              style={{ y: layoverShiftY, x: layoverShiftX }}
              className='bg-[#333] p-6 rounded-lg text-white absolute -top-28 max-sm:-left-5 sm:-top-16 sm:right-10'
            >
              <h2>About me.</h2>
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
                className='text-3xl sm:text-4xl md:text-5xl mb-20'
              >
                Hi.
              </motion.h2>
            </div>
            <motion.div
              className='max-w-2xl text-left flex flex-col gap-4 text-base sm:text-lg md:text-xl'
              variants={textVariants}
              initial='initial'
              animate={headingControls}
            >
              {/* <p>I'm Chris.</p> */}
              <p>
                Welcome to my digital space! I am a self-taught developer who
                started learning programming and web development in my spare
                time. Programming has given me a creative outlet while feeding
                the more meticulous inclinations of my nature. I have grown
                interested in clean and responsive front-end design, web
                accessibility, data management, and delving further into back
                ends and am always eager to learn a new skill or framework.
                Check out my portfolio below to see what I'm capable of!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
