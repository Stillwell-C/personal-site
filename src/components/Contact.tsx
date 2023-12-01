import { ForwardedRef, forwardRef } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

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

const Contact = forwardRef((props: object, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section
      id='contact'
      className='min-h-screen w-full flex justify-center items-center bg-[#444] overflow-hidden py-10'
      ref={ref}
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
          className='flex flex-1 flex-col w-full min-w-[300px] max-w-[450px] justify-end md:items-top gap-6 text-white pb-8 md:pb-0 pr-4'
        >
          <h2 className='text-5xl md:text-5xl mb-10'>Get in touch:</h2>
          <motion.div variants={variants} className='flex flex-col gap-8'>
            <p>
              I'm open for new opportunities and interested in collaborating on
              projects. Send me a message here or shoot me an email.
            </p>
            <div className='w-full flex flex-col sm:flex-row gap-8'>
              <div className='flex flex-col gap-3'>
                <span>Email me at:</span>

                <div className='flex gap-1 items-center'>
                  <span className=''>stillwell.c.m@gmail.com</span>
                  <a href='mailto:stillwell.c.m@gmail.com' target='_blank'>
                    <svg
                      className='h-6 w-6'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      stroke='#000000'
                    >
                      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        {" "}
                        <g id='Interface / External_Link'>
                          {" "}
                          <path
                            id='Vector'
                            d='M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11'
                            stroke='#ffffff'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <span>Find me at:</span>
                <div>
                  <a href='https://github.com/Stillwell-C' target='_blank'>
                    <svg
                      width='28'
                      height='28'
                      viewBox='0 0 256 249'
                      xmlns='http://www.w3.org/2000/svg'
                      preserveAspectRatio='xMinYMin meet'
                    >
                      <g fill='#fff'>
                        <path d='M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0' />
                        <path d='M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398' />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button className='bg-white text-black p-4 rounded-md'>
                View Resume
              </button>
            </div>
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
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </motion.svg>

            {/* <img className='w-full' src={mailIcon} alt='contact form icon' /> */}
          </motion.div>
          <motion.div
            variants={formVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='h-full w-full'
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

export default Contact;
