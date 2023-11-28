import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className='bg-[#444] py-4 w-full flex items-center justify-center text-white'>
      <span>
        <a href='https://github.com/Stillwell-C'>Christopher Stillwell</a>{" "}
        &#169; {currentYear}
      </span>
    </footer>
  );
};

export default Footer;
