import { useScroll, useTransform, motion } from "framer-motion";
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Canvas from "./Canvas";

type MouseCoordType = {
  x: number;
  y: number;
};

const Hero = forwardRef((props: object, ref: ForwardedRef<HTMLDivElement>) => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<MouseCoordType>({
    x: 0,
    y: 0,
  });

  const handleMousePosition = (e: React.MouseEvent<HTMLElement>) => {
    if (e.clientX === 0 && e.clientY === 0) return;
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleSetSize = () => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
      setHeight(targetRef.current.offsetHeight);
    }
  };

  useLayoutEffect(() => {
    handleSetSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSetSize);

    return () => window.removeEventListener("resize", handleSetSize);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <section
      id='hero'
      className='min-h-screen h-screen overflow-hidden bg-[#444] relative text-white'
      ref={targetRef}
      onMouseMove={handleMousePosition}
    >
      <div ref={ref} className='absolute h-full w-full left-0 top-0'>
        <motion.div
          style={{ opacity }}
          className='pt-[70vh] sm:pt-[80vh] px-4 sm:px-10 md:px-20 w-full flex flex-col items-end text-right'
        >
          <h2 className='mb-2'>
            <span className='text-5xl sm:text-6xl'>Christopher Stillwell</span>
          </h2>
          <div className='flex gap-2'>
            <a
              href='https://github.com/Stillwell-C'
              target='_blank'
              aria-label='Move to github profile'
            >
              <svg
                width='30'
                height='30'
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
            <a
              href='https://www.linkedin.com/in/christopher-stillwell-8335432a3/'
              target='_blank'
              aria-label='Move to linkedin profile'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='32'
                width='32'
                viewBox='0 0 448 512'
              >
                <path
                  fill='#ffffff'
                  d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
                />
              </svg>
            </a>
            <a
              href='mailto:stillwell.c.m@gmail.com'
              target='_blank'
              aria-label='Email address'
            >
              <svg
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z'
                  fill='#fff'
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
      <Canvas width={width} height={height} mousePosition={mousePosition} />
    </section>
  );
});

export default Hero;
