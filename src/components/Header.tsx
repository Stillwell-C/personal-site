import React from "react";
import FullScreenNav from "./FullScreenNav";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

type PropsType = {
  collapseNav: boolean;
};

const fullScreenVariants = {
  initial: {
    x: 150,
  },
  animate: {
    x: 0,
  },
  exitFS: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const mobileVariants = {
  initialMob: {
    opacity: 0,
    x: 150,
  },
  animateMob: {
    opacity: 1,
    x: 0,
  },
  exitMob: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const Header = ({ collapseNav }: PropsType) => {
  return (
    <header className='fixed top-0 py-12 px-8 w-full flex justify-between z-10 pointer-events-none'>
      <div>
        <h1>
          <Link
            activeClass='active'
            to='hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='text-3xl cursor-pointer pointer-events-auto'
          >
            CS
          </Link>
        </h1>
      </div>
      {/* Full screen */}
      <div className='hidden md:block'>
        <AnimatePresence>
          {collapseNav && (
            <motion.div
              variants={mobileVariants}
              initial='initialMob'
              animate='animateMob'
              exit='exitMob'
            >
              <MobileNav />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!collapseNav && (
            <motion.div
              variants={fullScreenVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <FullScreenNav />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Mobile */}
      <div className='md:hidden'>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
