import FullScreenNav from "./FullScreenNav";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

type PropsType = {
  collapseNav: boolean;
  navColorShift: boolean;
  bottomIntersection: boolean;
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

const Header = ({
  collapseNav,
  navColorShift,
  bottomIntersection,
}: PropsType) => {
  return (
    <header
      className={`fixed top-0 py-2 px-2 sm:py-8 md:py-10 sm:px-4 md:px-6 lg:px-8 w-full flex justify-between z-10 pointer-events-none ${
        navColorShift
          ? "text-black max-sm:bg-[#f5f5f5] bg-opacity-90"
          : `text-white ${
              bottomIntersection
                ? "max-sm:bg-[#f5f5f5] max-sm:text-black max-sm:bg-opacity-90"
                : ""
            }`
      }`}
    >
      <div>
        <h1>
          <Link
            activeClass='active'
            to='hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='text-3xl md:text-4xl cursor-pointer pointer-events-auto'
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
              <MobileNav
                navColorShift={navColorShift}
                bottomIntersection={bottomIntersection}
              />
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
        <MobileNav
          navColorShift={navColorShift}
          bottomIntersection={bottomIntersection}
        />
      </div>
    </header>
  );
};

export default Header;
