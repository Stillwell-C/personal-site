import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  //   const yPosShift = useTransform(scrollYProgress, [0, 0.5, 1], [0, -250, -100]);
  const xShift = useTransform(scrollYProgress, [0, 5], ["0%", "150%"]);
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <section
      id='hero'
      className='min-h-screen overflow-hidden bg-slate-600'
      ref={targetRef}
    >
      <motion.div style={{ opacity }} className='pt-hero px-8'>
        <motion.h2 className='mb-4' style={{ translateX: xShift }}>
          <span className='text-6xl'>Christopher Stillwell</span>
        </motion.h2>
        <motion.p style={{ translateY: yShift }} className='text-2xl'>
          FULL STACK DEVELOPER
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
