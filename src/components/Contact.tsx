import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const iconDivVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 3,
    },
  },
};

const iconVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    transition: {
      duration: 0.7,
      delay: 2.5,
    },
  },
};

const formVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3.3,
      duration: 1,
    },
  },
};

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <section
      id='contact'
      className='min-h-screen w-full flex justify-center items-center bg-[#444] overflow-hidden py-10'
    >
      <motion.div
        className='h-full w-full flex flex-col md:flex-row items-center justify-between max-w-6xl px-20 md:px-12'
        variants={variants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <motion.div
          variants={variants}
          className='flex flex-1 flex-col w-full min-w-[300px] max-w-[450px] justify-end md:items-top gap-6 text-white pb-8 md:pb-36'
        >
          <h2 className='text-5xl md:text-7xl mb-10'>Contact me:</h2>
          <motion.div variants={variants}>
            <h3 className='text-2xl md:text-4xl mb-2'>Mail:</h3>
            <span className='text-xl md:text-2xl'>Fake email</span>
            {/* <span>{process.env.EMAIL}</span> */}
          </motion.div>
          {/* <motion.div>
            <h3 className='text-4xl mb-2'>Phone:</h3>
            <span className='text-2xl'>fake phone</span>
            <span>{process.env.EMAIL}</span>
          </motion.div> */}
        </motion.div>
        <div className='relative pt-4 w-full min-w-[300px] max-w-[450px] flex-1'>
          <motion.div
            variants={iconDivVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] lg:w-[400px] z-0'
          >
            <motion.svg
              variants={iconVariants}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
              fill='none'
              className='-z-[10]'
            >
              <path
                d='M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z'
                stroke='#fff'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </motion.svg>

            {/* <img className='w-full' src={mailIcon} alt='contact form icon' /> */}
          </motion.div>
          <motion.form
            variants={formVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='flex flex-col gap-8 w-full md:pt-10'
          >
            <div className='relative w-full h-14 overflow-hidden text-lg rounded-lg'>
              <input
                className='peer w-full h-full pt-5 px-4 focus:outline-none text-base'
                type='text'
                name='name'
                id='name'
                onChange={(e) => setName(e.target.value)}
                autoComplete='off'
                required
              />
              <label
                className={`absolute bottom-3 left-4 transition-all duration-300 ease-in-out peer-focus:-translate-y-[20px] peer-focus:text-sm peer-focus:-translate-x-2 ${
                  name.length
                    ? "-translate-y-[20px] -translate-x-2 text-sm"
                    : ""
                }`}
                htmlFor='name'
              >
                Name
              </label>
            </div>
            <div className='relative w-full h-14 overflow-hidden text-lg rounded-lg '>
              <input
                className='peer w-full h-full pt-5 px-4 focus:outline-none text-base'
                type='email'
                name='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='off'
                required
              />
              <label
                className={`absolute bottom-3 left-4 transition-all duration-300 ease-in-out peer-focus:-translate-y-[20px] peer-focus:text-sm peer-focus:-translate-x-2  ${
                  email.length
                    ? "-translate-y-[20px] -translate-x-2 text-sm"
                    : ""
                }`}
                htmlFor='email'
              >
                Email
              </label>
            </div>
            <div className='relative w-full h-32 overflow-hidden text-lg rounded-lg'>
              <textarea
                className={`peer px-4 pt-6 pb-2 w-full h-full focus:outline-none text-base resize-none`}
                name='message'
                id='message'
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div
                className={`hidden top-0 left-0 right-4 h-6 bg-white peer-focus:absolute ${
                  message.length ? "absolute" : ""
                }`}
              ></div>
              <label
                htmlFor='message'
                className={`absolute top-4 left-4 transition-all duration-300 ease-in-out peer-focus:-translate-y-[10px] peer-focus:text-sm peer-focus:-translate-x-2 ${
                  message.length
                    ? "-translate-y-[10px] text-sm -translate-x-2"
                    : ""
                }`}
              >
                Message
              </label>
            </div>
            <button
              className='cursor-pointer text-white text-xl py-4 bg-[#ED474A] rounded-lg z-[1]'
              type='submit'
            >
              Send
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
