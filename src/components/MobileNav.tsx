import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavHamburgerBtn from "./MobileNavHamburgerBtn";
import { Link } from "react-scroll";
import navList from "../Data/NavList";

const menuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.15,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const listVariants = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const listItemVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
};

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  return (
    <div className=''>
      <MobileNavHamburgerBtn open={open} setOpen={setOpen} />
      <AnimatePresence>
        {open && (
          <motion.div
            className='fixed top-0 right-0 h-screen origin-top bg-white w-screen sm:w-80'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={menuVariants}
          >
            <motion.nav>
              <motion.ul
                className='mt-24 px-10'
                variants={listVariants}
                initial='initial'
                animate='open'
                exit='initial'
              >
                {navList.map((item) => (
                  <motion.li variants={listItemVariants} key={item}>
                    <Link
                      activeClass='active'
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='text-3xl cursor-pointer'
                      onClick={handleClose}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
